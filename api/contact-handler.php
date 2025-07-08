<?php
// Secure Contact Form Handler
// This file is outside the public directory for enhanced security

// Define access constant for config file
define('CONTACT_HANDLER_ACCESS', true);

// Include configuration
require_once __DIR__ . '/config/email-config.php';

// Security Headers
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');
header('Referrer-Policy: strict-origin-when-cross-origin');

// CORS Headers with origin validation
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (isValidOrigin($origin)) {
    header('Access-Control-Allow-Origin: ' . $origin);
} else {
    header('Access-Control-Allow-Origin: null');
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With, X-CSRF-Token');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json; charset=utf-8');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false, 
        'message' => 'Method not allowed',
        'error_code' => 'METHOD_NOT_ALLOWED'
    ]);
    exit();
}

// Validate Content-Type
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
if (strpos($contentType, 'application/json') === false) {
    http_response_code(400);
    echo json_encode([
        'success' => false, 
        'message' => 'Invalid content type',
        'error_code' => 'INVALID_CONTENT_TYPE'
    ]);
    exit();
}

// Enhanced Rate Limiting with IP tracking
session_start();
$client_ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$current_time = time();

// Initialize rate limiting arrays
if (!isset($_SESSION['submissions'])) {
    $_SESSION['submissions'] = [];
}
if (!isset($_SESSION['ip_submissions'])) {
    $_SESSION['ip_submissions'] = [];
}

// Clean old submissions
$_SESSION['submissions'] = array_filter($_SESSION['submissions'], function($timestamp) use ($current_time) {
    return ($current_time - $timestamp) < RATE_LIMIT_WINDOW;
});

$_SESSION['ip_submissions'][$client_ip] = array_filter(
    $_SESSION['ip_submissions'][$client_ip] ?? [], 
    function($timestamp) use ($current_time) {
        return ($current_time - $timestamp) < RATE_LIMIT_WINDOW;
    }
);

// Check rate limits
$session_submissions = count($_SESSION['submissions']);
$ip_submissions = count($_SESSION['ip_submissions'][$client_ip] ?? []);

if ($session_submissions >= MAX_SUBMISSIONS || $ip_submissions >= MAX_SUBMISSIONS) {
    http_response_code(429);
    echo json_encode([
        'success' => false, 
        'message' => 'Too many submissions. Please try again later.',
        'error_code' => 'RATE_LIMIT_EXCEEDED',
        'retry_after' => RATE_LIMIT_WINDOW
    ]);
    exit();
}

// Get and validate JSON input
$input = file_get_contents('php://input');
if (empty($input)) {
    http_response_code(400);
    echo json_encode([
        'success' => false, 
        'message' => 'No data received',
        'error_code' => 'NO_DATA'
    ]);
    exit();
}

$data = json_decode($input, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode([
        'success' => false, 
        'message' => 'Invalid JSON data',
        'error_code' => 'INVALID_JSON'
    ]);
    exit();
}

// Validate required fields
$missing_fields = [];
foreach (REQUIRED_FIELDS as $field) {
    if (empty($data[$field])) {
        $missing_fields[] = $field;
    }
}

if (!empty($missing_fields)) {
    http_response_code(400);
    echo json_encode([
        'success' => false, 
        'message' => 'Missing required fields: ' . implode(', ', $missing_fields),
        'error_code' => 'MISSING_FIELDS',
        'missing_fields' => $missing_fields
    ]);
    exit();
}

// Enhanced input sanitization
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

// Sanitize all inputs
$name = sanitizeInput($data['name']);
$email = sanitizeInput($data['email']);
$phone = sanitizeInput($data['phone']);
$company = sanitizeInput($data['company']);
$service = sanitizeInput($data['service']);
$message = sanitizeInput($data['message']);
$newsletter = isset($data['newsletter']) ? (bool)$data['newsletter'] : false;
$form_source = isset($data['source']) ? sanitizeInput($data['source']) : 'Contact Form';

// Enhanced email validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false, 
        'message' => 'Invalid email format',
        'error_code' => 'INVALID_EMAIL'
    ]);
    exit();
}

// Enhanced spam detection
$message_lower = strtolower($message . ' ' . $name . ' ' . $company);
$spam_score = 0;
$detected_keywords = [];

foreach (SPAM_KEYWORDS as $keyword) {
    if (strpos($message_lower, $keyword) !== false) {
        $spam_score++;
        $detected_keywords[] = $keyword;
    }
}

// Check for suspicious patterns
if (preg_match('/https?:\/\//', $message)) {
    $spam_score += 2; // URLs are suspicious
}

if (strlen($message) < 10) {
    $spam_score += 1; // Very short messages are suspicious
}

if ($spam_score >= 3) {
    http_response_code(400);
    echo json_encode([
        'success' => false, 
        'message' => 'Message contains prohibited content',
        'error_code' => 'SPAM_DETECTED'
    ]);
    
    // Log spam attempt
    if (ENABLE_LOGGING) {
        $spam_log = date('Y-m-d H:i:s') . " - SPAM DETECTED from IP: $client_ip, Email: $email, Score: $spam_score, Keywords: " . implode(', ', $detected_keywords) . "\n";
        file_put_contents(LOG_FILE, $spam_log, FILE_APPEND | LOCK_EX);
    }
    exit();
}

// Create enhanced admin notification email
$admin_subject = "New $form_source Submission from $name";
$admin_message = createAdminEmailTemplate($name, $email, $phone, $company, $service, $message, $newsletter, $form_source, $client_ip);

// Create enhanced auto-reply email
$reply_subject = "Thank you for contacting ID Code - We'll be in touch soon!";
$reply_message = createAutoReplyTemplate($name);

// Email headers for admin notification
$admin_headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: ' . FROM_NAME . ' <' . FROM_EMAIL . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion(),
    'X-Priority: 1',
    'X-MSMail-Priority: High'
];

// Email headers for auto-reply
$reply_headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: ID Code <' . FROM_EMAIL . '>',
    'Reply-To: ID Code <' . ADMIN_EMAIL . '>',
    'X-Mailer: PHP/' . phpversion()
];

// Send emails
$admin_sent = mail(ADMIN_EMAIL, $admin_subject, $admin_message, implode("\r\n", $admin_headers));
$reply_sent = mail($email, $reply_subject, $reply_message, implode("\r\n", $reply_headers));

// Enhanced logging
if (ENABLE_LOGGING) {
    $log_entry = date('Y-m-d H:i:s') . " - Form: $form_source, IP: $client_ip, Name: $name, Email: $email, Company: $company, Admin: " . ($admin_sent ? 'sent' : 'failed') . ", Reply: " . ($reply_sent ? 'sent' : 'failed') . "\n";
    file_put_contents(LOG_FILE, $log_entry, FILE_APPEND | LOCK_EX);
}

// Update rate limiting
$_SESSION['submissions'][] = $current_time;
if (!isset($_SESSION['ip_submissions'][$client_ip])) {
    $_SESSION['ip_submissions'][$client_ip] = [];
}
$_SESSION['ip_submissions'][$client_ip][] = $current_time;

// Return enhanced response
if ($admin_sent) {
    http_response_code(200);
    echo json_encode([
        'success' => true, 
        'message' => 'Your message has been sent successfully! We\'ll get back to you soon.',
        'auto_reply_sent' => $reply_sent,
        'form_source' => $form_source,
        'timestamp' => date('c')
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'There was an error sending your message. Please try again or contact us directly at ' . ADMIN_EMAIL,
        'error_code' => 'EMAIL_SEND_FAILED',
        'auto_reply_sent' => $reply_sent
    ]);
}

// Email template functions
function createAdminEmailTemplate($name, $email, $phone, $company, $service, $message, $newsletter, $form_source, $client_ip) {
    return "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <title>New Contact Form Submission</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #10b981 0%, #34d399 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #01051B; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
        .value { background: white; padding: 15px; border-radius: 8px; margin-top: 5px; border-left: 4px solid #10b981; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        .priority { background: #fee2e2; border-left-color: #ef4444; }
        .meta-info { background: #e0f2fe; border-left-color: #0284c7; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>🚀 New Contact Form Submission</h1>
            <p>ID Code - Software Development Excellence</p>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>👤 Full Name:</div>
                <div class='value'>$name</div>
            </div>
            <div class='field'>
                <div class='label'>📧 Email Address:</div>
                <div class='value'>$email</div>
            </div>
            <div class='field'>
                <div class='label'>📱 Phone Number:</div>
                <div class='value'>$phone</div>
            </div>
            <div class='field'>
                <div class='label'>🏢 Company:</div>
                <div class='value'>$company</div>
            </div>
            <div class='field'>
                <div class='label'>🎯 Service Interest:</div>
                <div class='value'>$service</div>
            </div>
            <div class='field'>
                <div class='label'>💬 Message:</div>
                <div class='value'>$message</div>
            </div>
            <div class='field'>
                <div class='label'>📬 Newsletter Subscription:</div>
                <div class='value'>" . ($newsletter ? '✅ Yes' : '❌ No') . "</div>
            </div>
            <div class='field'>
                <div class='label'>📍 Form Source:</div>
                <div class='value'>$form_source</div>
            </div>
            <div class='field'>
                <div class='label'>🕒 Submission Details:</div>
                <div class='value meta-info'>
                    <strong>Time:</strong> " . date('Y-m-d H:i:s T') . "<br>
                    <strong>IP Address:</strong> $client_ip<br>
                    <strong>User Agent:</strong> " . ($_SERVER['HTTP_USER_AGENT'] ?? 'Unknown') . "
                </div>
            </div>
        </div>
        <div class='footer'>
            <p>🔒 This email was sent from the secure ID Code contact form system.</p>
            <p>⚡ Powered by ID Code - Transforming Ideas into Digital Solutions</p>
        </div>
    </div>
</body>
</html>";
}

function createAutoReplyTemplate($name) {
    return "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <title>Thank you for contacting ID Code</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #10b981 0%, #34d399 100%); color: white; padding: 40px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 40px; border-radius: 0 0 10px 10px; }
        .highlight { background: white; padding: 25px; border-radius: 10px; margin: 25px 0; border-left: 4px solid #10b981; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .footer { text-align: center; padding: 30px; color: #666; }
        .logo { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
        .contact-info { background: white; padding: 25px; border-radius: 10px; margin: 25px 0; border: 2px solid #10b981; }
        .steps { background: white; padding: 25px; border-radius: 10px; margin: 25px 0; }
        .step { margin-bottom: 15px; padding-left: 30px; position: relative; }
        .step::before { content: '✓'; position: absolute; left: 0; color: #10b981; font-weight: bold; font-size: 18px; }
        .cta-button { display: inline-block; background: #10b981; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <div class='logo'>🚀 ID Code</div>
            <h1>Thank You for Reaching Out!</h1>
            <p>Your message has been received successfully</p>
        </div>
        <div class='content'>
            <p>Dear <strong>$name</strong>,</p>
            
            <div class='highlight'>
                <h3>🎉 We've received your inquiry!</h3>
                <p>Thank you for your interest in our software development services. Our team of experts will review your message and get back to you within <strong>24 hours</strong>.</p>
            </div>
            
            <div class='steps'>
                <h3>🔄 What happens next?</h3>
                <div class='step'>Our team will review your project requirements</div>
                <div class='step'>We'll prepare a customized response based on your needs</div>
                <div class='step'>You'll receive a detailed follow-up within 24 hours</div>
                <div class='step'>We'll schedule a consultation call if needed</div>
            </div>
            
            <div class='contact-info'>
                <h3>📞 Need immediate assistance?</h3>
                <p><strong>Phone:</strong> +1 (732) 797-8127</p>
                <p><strong>Email:</strong> " . ADMIN_EMAIL . "</p>
                <p><strong>Business Hours:</strong> Mon - Fri: 9:00 AM - 6:00 PM EST</p>
                <p><strong>Emergency Support:</strong> Available 24/7 for existing clients</p>
            </div>
            
            <p>We're excited about the possibility of working together and helping you achieve your technology goals.</p>
            
            <p>Best regards,<br>
            <strong>The ID Code Team</strong><br>
            🏆 Software Development Experts</p>
        </div>
        <div class='footer'>
            <p><strong>ID Code - Transforming Ideas into Digital Solutions</strong></p>
            <p>📍 Edison, New Jersey | 📧 <a href='mailto:" . ADMIN_EMAIL . "'>" . ADMIN_EMAIL . "</a></p>
            <p>🌐 Leading the future of software development since 2019</p>
        </div>
    </div>
</body>
</html>";
}
?>

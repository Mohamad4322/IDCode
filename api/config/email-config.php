<?php
// Email Configuration - Secure settings
// This file should be outside the public directory for security

// Prevent direct access
if (!defined('CONTACT_HANDLER_ACCESS')) {
    http_response_code(403);
    exit('Direct access forbidden');
}

// Email Configuration
define('ADMIN_EMAIL', 'mohamadrj@idcode-soft.com');
define('FROM_EMAIL', 'noreply@idcode-soft.com');
define('FROM_NAME', 'ID Code Contact Form');

// Security Configuration
define('RATE_LIMIT_WINDOW', 300); // 5 minutes
define('MAX_SUBMISSIONS', 3);
define('ENABLE_LOGGING', true);
define('LOG_FILE', 'contact_log.txt');

// CORS Configuration
define('ALLOWED_ORIGINS', [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://idcode-soft.com',
    'https://www.idcode-soft.com'
]);

// Spam Detection Keywords
define('SPAM_KEYWORDS', [
    'viagra', 'casino', 'lottery', 'winner', 'congratulations', 
    'click here', 'free money', 'urgent', 'act now', 'limited time'
]);

// Required Fields
define('REQUIRED_FIELDS', ['name', 'email', 'phone', 'company', 'service', 'message']);

// Email Templates Configuration
define('ADMIN_EMAIL_TEMPLATE', 'admin-notification');
define('AUTO_REPLY_TEMPLATE', 'auto-reply');

// Development Mode Detection
function isDevelopmentMode() {
    $hostname = $_SERVER['HTTP_HOST'] ?? '';
    return (
        strpos($hostname, 'localhost') !== false ||
        strpos($hostname, '127.0.0.1') !== false ||
        strpos($hostname, 'webcontainer') !== false ||
        strpos($hostname, 'local-credentialless') !== false
    );
}

// Get allowed origins for CORS
function getAllowedOrigins() {
    return ALLOWED_ORIGINS;
}

// Validate origin
function isValidOrigin($origin) {
    if (isDevelopmentMode()) {
        return true; // Allow all origins in development
    }
    
    $allowedOrigins = getAllowedOrigins();
    return in_array($origin, $allowedOrigins);
}
?>

# ID Code Contact Form API

This directory contains the secure contact form handler for the ID Code website.

## 🔒 Security Features

### Directory Structure
```
api/
├── contact-handler.php     # Main contact form processor
├── config/
│   └── email-config.php   # Secure configuration file
├── .htaccess              # Security rules and access control
└── README.md              # This documentation
```

### Security Implementations

1. **Outside Public Directory**: All PHP files are outside the web-accessible public folder
2. **Access Control**: .htaccess rules prevent direct access to configuration files
3. **CORS Protection**: Origin validation for cross-origin requests
4. **Rate Limiting**: IP-based and session-based submission limits
5. **Input Validation**: Comprehensive sanitization and validation
6. **Spam Detection**: Keyword-based spam filtering with scoring
7. **Security Headers**: XSS protection, content type validation, frame options

## 📧 Email Configuration

### Admin Email
- **Recipient**: `mohamadrj@idcode-soft.com`
- **From**: `noreply@idcode-soft.com`
- **Auto-reply**: Enabled with professional templates

### Email Templates
- **Admin Notification**: Professional HTML template with all form details
- **Auto-reply**: Branded confirmation email with next steps

## 🛡️ Rate Limiting

- **Window**: 5 minutes (300 seconds)
- **Max Submissions**: 3 per session/IP
- **Tracking**: Both session-based and IP-based limits

## 🚫 Spam Protection

### Detection Methods
- Keyword filtering (configurable list)
- URL detection in messages
- Message length validation
- Scoring system for multiple factors

### Spam Keywords
- viagra, casino, lottery, winner, congratulations
- click here, free money, urgent, act now, limited time

## 📝 Logging

- **Location**: `contact_log.txt` (protected by .htaccess)
- **Information**: Timestamp, IP, form data, email status
- **Spam Attempts**: Separate logging for security monitoring

## 🌐 CORS Configuration

### Allowed Origins
- `http://localhost:3000` (React dev server)
- `http://localhost:5173` (Vite dev server)
- `https://idcode-soft.com` (Production)
- `https://www.idcode-soft.com` (Production with www)

### Development Mode
- Auto-detected based on hostname
- Allows all origins in development
- Stricter validation in production

## 📋 Required Fields

All form submissions must include:
- `name` - Full name
- `email` - Valid email address
- `phone` - Phone number
- `company` - Company name
- `service` - Service interest
- `message` - Project description

## 🔧 Configuration

### Email Settings
Edit `config/email-config.php` to modify:
- Email addresses
- Rate limiting settings
- Spam detection keywords
- CORS origins

### Security Settings
Edit `.htaccess` to modify:
- Access restrictions
- Security headers
- Rate limiting (if mod_evasive available)

## 🚀 Frontend Integration

### Endpoint
```javascript
fetch('/api/contact-handler.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    company: 'Example Corp',
    service: 'custom-development',
    message: 'Project description',
    newsletter: false,
    source: 'Contact Page'
  })
})
```

### Response Format
```javascript
// Success
{
  "success": true,
  "message": "Your message has been sent successfully!",
  "auto_reply_sent": true,
  "form_source": "Contact Page",
  "timestamp": "2024-01-01T12:00:00+00:00"
}

// Error
{
  "success": false,
  "message": "Error description",
  "error_code": "ERROR_TYPE",
  "missing_fields": ["field1", "field2"] // if applicable
}
```

## 🔍 Error Codes

- `METHOD_NOT_ALLOWED` - Only POST requests allowed
- `INVALID_CONTENT_TYPE` - Must be application/json
- `RATE_LIMIT_EXCEEDED` - Too many submissions
- `NO_DATA` - Empty request body
- `INVALID_JSON` - Malformed JSON data
- `MISSING_FIELDS` - Required fields missing
- `INVALID_EMAIL` - Invalid email format
- `SPAM_DETECTED` - Message flagged as spam
- `EMAIL_SEND_FAILED` - Server email error

## 🛠️ Maintenance

### Log Monitoring
- Check `contact_log.txt` regularly for issues
- Monitor spam attempts and adjust keywords if needed
- Review rate limiting effectiveness

### Security Updates
- Keep PHP version updated
- Review and update spam keywords
- Monitor for new security threats
- Update CORS origins as needed

### Performance
- Log file rotation (implement if needed)
- Database logging (upgrade option)
- Email queue system (for high volume)

## 📞 Support

For technical issues or configuration changes, contact:
- **Email**: info@idcode-soft.com
- **Phone**: +1 (732) 797-8127

---

**Last Updated**: January 2024  
**Version**: 1.0.0  
**Security Level**: Production Ready

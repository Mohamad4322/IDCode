# 🚀 Bluehost Deployment Guide for idcode-soft.com

## 📋 Pre-Deployment Checklist
- ✅ Production build completed
- ✅ API configuration updated for idcode-soft.com
- ✅ Security files (.htaccess) prepared
- ✅ Email configuration verified

## 📁 Files to Upload to Bluehost

### 1. React Application Files (from `dist/` folder)
Upload ALL files from the `dist/` folder to your Bluehost `public_html/` directory:

```
public_html/
├── index.html                                    (Main entry point)
├── assets/
│   ├── index-CjeEtZp6.js                        (Main JavaScript bundle)
│   └── index-Dw7QKyPB.css                       (Main CSS bundle)
├── favicon/                                      (Favicon files)
└── [All image and media files]                   (All .jpg, .png, .webp, .gif files)
```

### 2. Secure API Files (from `api/` folder)
Upload the entire `api/` folder to `public_html/api/`:

```
public_html/api/
├── contact-handler.php                           (Main contact form processor)
├── config/
│   └── email-config.php                         (Email configuration)
├── .htaccess                                     (Security rules)
└── README.md                                     (Documentation)
```

## 🔧 Bluehost Upload Instructions

### Method 1: Using cPanel File Manager (Recommended)

1. **Login to Bluehost cPanel**
   - Go to your Bluehost account
   - Click on "cPanel" 
   - Find and click "File Manager"

2. **Navigate to public_html**
   - Click on "public_html" folder
   - This is where your website files go

3. **Upload React Files**
   - Click "Upload" button
   - Select ALL files from your local `dist/` folder
   - Upload them to `public_html/`
   - Extract if they're in a zip file

4. **Upload API Folder**
   - Create a new folder called "api" in public_html
   - Upload all files from your local `api/` folder to `public_html/api/`

5. **Set File Permissions**
   - Select all PHP files
   - Right-click → "Change Permissions"
   - Set to 644 for files, 755 for folders

### Method 2: Using FTP Client (Alternative)

1. **FTP Credentials**
   - Host: ftp.idcode-soft.com (or your server IP)
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Port: 21

2. **Upload Process**
   - Connect to FTP
   - Navigate to public_html/
   - Upload all dist/ files to public_html/
   - Upload api/ folder to public_html/api/

## 🔒 Security Configuration

### Verify .htaccess Files
Ensure these .htaccess files are uploaded:
- `public_html/api/.htaccess` (API security)

### Check File Permissions
- PHP files: 644
- Directories: 755
- .htaccess files: 644

## 🌐 Domain Configuration

### SSL Certificate
1. In cPanel, go to "SSL/TLS"
2. Enable "Force HTTPS Redirect"
3. Install free Let's Encrypt certificate

### Domain Settings
- Primary domain: idcode-soft.com
- Redirect www.idcode-soft.com to idcode-soft.com (or vice versa)

## 📧 Email Configuration

### Current Setup (Keep as is)
- Admin email: mohamadrj@idcode-soft.com
- From email: noreply@idcode-soft.com
- Auto-reply: Enabled

### Bluehost Email Settings (Optional Enhancement)
If you want better email deliverability:
1. Create email accounts in cPanel
2. Configure SMTP settings in PHP
3. Set up SPF/DKIM records

## 🧪 Testing Checklist

After deployment, test these items:

### Website Loading
- [ ] https://idcode-soft.com loads correctly
- [ ] All pages navigate properly
- [ ] Images and assets load
- [ ] CSS and JavaScript work

### Contact Forms
- [ ] Contact page form submits successfully
- [ ] Industries section form submits successfully
- [ ] Email received at mohamadrj@idcode-soft.com
- [ ] Auto-reply email sent to user
- [ ] Form validation works
- [ ] Rate limiting functions

### Security
- [ ] HTTPS redirect works
- [ ] API endpoints are secure
- [ ] Direct access to config files blocked
- [ ] .htaccess rules active

## 🚨 Troubleshooting

### Common Issues

**Contact Form Not Working:**
- Check PHP version (should be 7.4+)
- Verify mail() function is enabled
- Check file permissions
- Review error logs in cPanel

**Images Not Loading:**
- Verify all files uploaded correctly
- Check file paths in HTML
- Ensure proper file permissions

**SSL Issues:**
- Force HTTPS in cPanel
- Clear browser cache
- Wait for SSL propagation (up to 24 hours)

### Error Logs
Check these logs in cPanel:
- Error Logs (for PHP errors)
- Access Logs (for 404 errors)
- Email logs (for email delivery issues)

## 📞 Support

If you encounter issues:
1. Check Bluehost knowledge base
2. Contact Bluehost support
3. Review the API documentation in `api/README.md`

## 🎉 Post-Deployment

Once everything is working:
1. Update DNS if needed
2. Set up Google Analytics
3. Configure backup schedules
4. Monitor contact form submissions
5. Set up email monitoring

---

**Deployment Date:** January 2025  
**Domain:** idcode-soft.com  
**Hosting:** Bluehost  
**Status:** Ready for Production

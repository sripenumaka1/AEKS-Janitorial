# EmailJS Setup Guide

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 2: Create an Email Service

1. Log in to your EmailJS dashboard: [https://dashboard.emailjs.com/admin](https://dashboard.emailjs.com/admin)
2. Go to **Email Services** → **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email account
5. **Copy your Service ID** (e.g., `service_abc123`)

## Step 3: Create an Email Template

1. Go to **Email Templates** → **Create New Template**
2. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Type: {{service_type}}

Message:
{{message}}
```

3. **Copy your Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abcdefghijklmnop`)

## Step 5: Update Contact.jsx

Open `src/pages/Contact.jsx` and replace these values at the top of the file:

```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'      // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'    // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'      // Replace with your Public Key
```

## Step 6: Test the Form

1. Run your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your email inbox for the test message

## Troubleshooting

- **"Invalid public key"**: Make sure you copied the Public Key correctly from your EmailJS dashboard
- **"Service not found"**: Verify your Service ID matches exactly
- **"Template not found"**: Check that your Template ID is correct
- **Email not received**: Check your spam folder and verify your email service is properly connected

## Template Variables Used

The form sends these variables to EmailJS:
- `from_name` - User's full name
- `from_email` - User's email address
- `phone` - User's phone number
- `service_type` - Selected service (or "Not specified")
- `message` - User's message

Make sure your EmailJS template includes these variable names exactly as shown above.

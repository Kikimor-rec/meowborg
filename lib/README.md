# Email Configuration

This project uses **Nodemailer** with SMTP for sending email notifications.

## Setup

### Option 1: Use Your Own Email Server

Add your SMTP credentials to `.env.local`:

```bash
SMTP_HOST=smtp.yourserver.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@yourserver.com
SMTP_PASS=your-password
SMTP_FROM=MEOW BORG <noreply@meowborg.com>
CONTACT_EMAIL=meow@meowborg.com
```

### Option 2: Use Gmail

1. Enable 2-factor authentication in your Google account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Add to `.env.local`:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=MEOW BORG <your-email@gmail.com>
CONTACT_EMAIL=meow@meowborg.com
```

### Option 3: Use Mail.ru or Yandex

**Mail.ru:**
```bash
SMTP_HOST=smtp.mail.ru
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@mail.ru
SMTP_PASS=your-password
```

**Yandex:**
```bash
SMTP_HOST=smtp.yandex.ru
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@yandex.ru
SMTP_PASS=your-app-password
```

## Email Template

Contact form submissions include:
- **Inquiry Type**: Playtest Request, Question, or Join Team Request
- **Sender email** (as Reply-To)
- **Message**
- **Timestamp**

## Testing

To test email functionality locally:
1. Add your SMTP credentials to `.env.local`
2. Submit the contact form
3. Check your inbox at `CONTACT_EMAIL`

## Production

For Vercel deployment, add all SMTP_* environment variables in the project settings.

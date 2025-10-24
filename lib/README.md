# Email Configuration

This project uses [Resend](https://resend.com) for sending email notifications.

## Setup

1. Create a Resend account at https://resend.com
2. Get your API key from the dashboard
3. Add the API key to your `.env.local` file:

```bash
RESEND_API_KEY=re_your_api_key_here
PLAYTEST_EMAIL=meow@meowborg.com
```

## Email Template

Playtest submissions are sent to the email specified in `PLAYTEST_EMAIL` environment variable with:
- Sender email address
- User's message
- Timestamp

## Domain Configuration

For production, you'll need to:
1. Verify your domain in Resend
2. Update the `from` field in `lib/email.ts` to use your verified domain
3. Add DNS records as instructed by Resend

## Testing

To test email functionality locally:
1. Add your Resend API key to `.env.local`
2. Submit the playtest form
3. Check your inbox at the `PLAYTEST_EMAIL` address

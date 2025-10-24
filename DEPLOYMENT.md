# MEOW BORG - Deployment Guide

## Vercel Deployment

### Prerequisites
- GitHub repository: https://github.com/Kikimor-rec/meowborg.git
- Vercel account
- Resend API key

### Steps

1. **Import Project to Vercel**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import from GitHub: `Kikimor-rec/meowborg`
   - Select the repository

2. **Configure Environment Variables**
   
   Add the following environment variables in Vercel project settings:
   
   ```
   RESEND_API_KEY=your_resend_api_key_here
   PLAYTEST_EMAIL=meow@meowborg.com
   NEXT_PUBLIC_SITE_URL=https://meowborg.com
   ```

3. **Build Settings**
   
   Vercel will automatically detect Next.js configuration:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Deploy**
   
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `your-project.vercel.app`

5. **Custom Domain (Optional)**
   
   - Go to Project Settings → Domains
   - Add your custom domain: `meowborg.com`
   - Follow DNS configuration instructions

### Auto-Deploy

Vercel automatically deploys:
- **Production**: pushes to `master` branch
- **Preview**: pull requests and other branches

### Email Configuration

Before going live, configure Resend:
1. Verify your domain in Resend dashboard
2. Add DNS records (SPF, DKIM, DMARC)
3. Update `lib/email.ts` sender email to your verified domain
4. Test email functionality in production

### Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test playtest form submission
- [ ] Check email delivery
- [ ] Test social media links
- [ ] Verify mobile responsiveness
- [ ] Check SEO meta tags
- [ ] Test on different browsers

### Monitoring

- Check Vercel Analytics for traffic
- Monitor Resend dashboard for email delivery
- Review Vercel logs for any errors

## Local Development

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Support

For issues or questions:
- GitHub: https://github.com/Kikimor-rec/meowborg
- X: https://x.com/meowborg
- Telegram: https://t.me/meowborg

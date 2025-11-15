# University Admissions Portal - Deployment Guide

## Project Overview

A modern, responsive university admissions platform with two landing pages (Amity & Manipal), lead capture forms, dynamic fee information, and integration-ready backend.

## Features Implemented

- **Dual University Landing Pages**: Separate branded experiences for Amity and Manipal
- **Lead Capture System**: Form validation, error handling, and success feedback
- **Dynamic Fee Information**: JSON-based fee retrieval modal with course breakdowns
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI Components**: Built with shadcn/ui patterns and design tokens
- **API Routes**: Backend endpoints for form submission and fee data

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager
- Modern web browser

### Local Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Visit http://localhost:3000
\`\`\`

## Project Structure

\`\`\`
/app
  /api
    /fees/route.ts          # Fee data endpoint
    /submit-lead/route.ts   # Lead submission endpoint
  /amity/page.tsx           # Amity university page
  /manipal/page.tsx         # Manipal university page
  layout.tsx                # Root layout with metadata
  page.tsx                  # Home page with university selector
  globals.css               # Design tokens and Tailwind setup

/components
  amity-landing.tsx         # Amity landing page component
  manipal-landing.tsx       # Manipal landing page component
  lead-capture-form.tsx     # Reusable form component
  fee-modal.tsx             # Fee information modal
\`\`\`

## Key Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with university selector |
| `/amity` | Amity University landing page |
| `/manipal` | Manipal University landing page |
| `/api/fees` | GET endpoint for course fee data |
| `/api/submit-lead` | POST endpoint for form submissions |

## Deployment Options

### Option 1: Vercel (Recommended for Next.js)

1. Push code to GitHub repository
2. Sign up at [vercel.com](https://vercel.com)
3. Connect GitHub repository
4. Click "Deploy"
5. Set any required environment variables in project settings

**Benefits**: Zero-config deployment, automatic SSL, global CDN

### Option 2: Free Hosting Services

#### Netlify
\`\`\`bash
npm install -g netlify-cli
netlify deploy
\`\`\`

#### Railway.app
1. Sign up at [railway.app](https://railway.app)
2. Connect GitHub repository
3. Deploy with one click

#### Render
1. Sign up at [render.com](https://render.com)
2. Connect GitHub
3. Create new web service

### Option 3: Self-Hosted

\`\`\`bash
# Build for production
npm run build

# Start server
npm start
\`\`\`

Deploy to any Node.js hosting:
- DigitalOcean
- Linode
- AWS EC2
- Heroku (free tier deprecated, use alternatives)

## Environment Variables (Optional)

Create `.env.local` for local development:

\`\`\`
# Pipedream Integration (Optional)
PIPEDREAM_WEBHOOK_URL=https://eom.webhook.cool/your-workflow-id

# API Keys (if needed for email/SMS services)
SENDGRID_API_KEY=your_key_here
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
\`\`\`

## Integrations Ready

### Pipedream Integration
Replace the `/api/submit-lead` endpoint to send data to Pipedream:

\`\`\`typescript
// In app/api/submit-lead/route.ts
const response = await fetch(process.env.PIPEDREAM_WEBHOOK_URL!, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
\`\`\`

### Email/SMS Services
Add email notifications via SendGrid or SMS via Twilio to lead submissions.

### Analytics
- Google Analytics 4 (add to layout.tsx)
- Vercel Analytics (already imported)
- Hotjar or LogRocket for session recording

## Performance Optimization

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Lazy loading with dynamic imports
- **Caching**: API response caching with `cache: 'force-cache'`
- **SEO**: Metadata and structured data already configured

## Security Considerations

- ✅ Form validation on client and server
- ✅ HTTPS required (automatic with Vercel)
- ✅ Environment variables for sensitive data
- ✅ CORS headers configured
- ✅ No hardcoded credentials in source code

### Before Production:
- [ ] Add rate limiting to API routes
- [ ] Implement CAPTCHA for forms (hCaptcha or Google reCAPTCHA)
- [ ] Add database for lead storage (Supabase, MongoDB, etc.)
- [ ] Set up email notifications
- [ ] Configure error logging (Sentry)
- [ ] Add privacy policy & terms of service

## Domain Setup

1. Register domain on Namecheap, GoDaddy, or Google Domains
2. Point DNS to hosting provider
3. Enable SSL certificate (automatic with most providers)
4. Update metadata in `app/layout.tsx` with correct domain

## Testing Before Deployment

\`\`\`bash
# Check build
npm run build

# Test production build locally
npm start

# Validate on different devices/browsers
\`\`\`

## Monitoring & Maintenance

- Set up error tracking (Sentry, LogRocket)
- Monitor API response times
- Track form submission rates
- Regular security updates

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Docs](https://vercel.com/docs)

## Next Steps

1. **Add Database**: Store leads in Supabase or MongoDB
2. **Email Automation**: Send confirmation emails via SendGrid
3. **SMS Notifications**: Alert admins via Twilio
4. **Analytics Dashboard**: Track conversion metrics
5. **Admin Panel**: Manage leads and university data

---

**Last Updated**: November 2025
**Status**: Ready for Deployment

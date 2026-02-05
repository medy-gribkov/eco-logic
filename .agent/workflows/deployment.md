---
description: Deploy your React + Vite application to Vercel
---

# Deployment to Vercel

This skill covers deploying your application to Vercel for production hosting.

## Prerequisites

- Project builds successfully locally (`npm run build`)
- Vercel account created (free tier available)
- Vercel CLI installed (optional but recommended)

## Option 1: CLI Deployment (Recommended)

### Install Vercel CLI

```bash
npm install -g vercel
```

### Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate via browser or email.

### Deploy to Preview

```bash
vercel
```

This creates a preview deployment for testing.

### Deploy to Production

// turbo
```bash
vercel --prod
```

This deploys to your production URL.

## Option 2: Git Integration

### Connect Repository

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to vercel.com and click "Add New Project"
3. Import your repository
4. Vercel auto-detects Vite and configures build settings
5. Click "Deploy"

### Automatic Deployments

With Git integration:
- Every push to `main` triggers a production deployment
- Every push to other branches creates a preview deployment
- Pull requests get unique preview URLs

## Build Configuration

Vercel auto-detects Vite projects, but you can customize in `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

## Environment Variables

### Via CLI

```bash
vercel env add MY_API_KEY production
```

### Via Dashboard

1. Go to your project on vercel.com
2. Navigate to Settings > Environment Variables
3. Add key-value pairs
4. Choose which environments (Production, Preview, Development)

## Custom Domain

### Add Domain

```bash
vercel domains add yourdomain.com
```

Or via dashboard:
1. Go to project Settings > Domains
2. Add your domain
3. Configure DNS as instructed

### DNS Configuration

Point your domain to Vercel:
- A Record: `76.76.21.21`
- Or CNAME: `cname.vercel-dns.com`

## Troubleshooting

### Build Fails

Check the build logs on Vercel dashboard. Common issues:

**Issue:** Missing dependencies
**Solution:** Ensure all dependencies are in `package.json`, not installed globally

**Issue:** Node version mismatch
**Solution:** Add `.nvmrc` file with desired Node version, or set in project settings

**Issue:** Environment variables not available
**Solution:** Add them in Vercel dashboard, redeploy

### 404 on Page Refresh

For SPAs with client-side routing, add `vercel.json`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Large Assets Warning

If you have assets over 4MB:
1. Compress images (use WebP format)
2. Use external CDN for very large files
3. Lazy load non-critical assets

## Deployment Checklist

Before deploying to production:

- [ ] `npm run build` succeeds locally
- [ ] No console errors in browser
- [ ] All assets load correctly
- [ ] Environment variables configured
- [ ] Meta tags and SEO configured
- [ ] Favicon and app icons set
- [ ] Analytics configured (if applicable)

## Monitoring

After deployment:

### Vercel Analytics

Enable in project settings for:
- Core Web Vitals
- Page views
- Geographic distribution

### Speed Insights

```bash
npm install @vercel/speed-insights
```

Add to your app:
```jsx
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <>
      <YourApp />
      <SpeedInsights />
    </>
  );
}
```

## Rollback

If a deployment has issues:

1. Go to Vercel dashboard > Deployments
2. Find the last working deployment
3. Click the three dots menu
4. Select "Promote to Production"

Or via CLI:
```bash
vercel rollback
```

## Useful Commands

| Command | Description |
|---------|-------------|
| `vercel` | Deploy to preview |
| `vercel --prod` | Deploy to production |
| `vercel logs` | View deployment logs |
| `vercel env ls` | List environment variables |
| `vercel domains ls` | List configured domains |
| `vercel rollback` | Rollback to previous deployment |
| `vercel dev` | Run Vercel development server locally |

## Production URL

After successful deployment, your site will be available at:
- `https://your-project.vercel.app` (default)
- `https://your-custom-domain.com` (if configured)

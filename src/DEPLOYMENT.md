# Deployment Guide - Ocean Hope

## 🚀 Quick Deploy to Vercel

### Option 1: One-Click Deploy (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Ocean Hope landing page"
   git branch -M main
   git remote add origin https://github.com/yourusername/ocean-hope.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your repository
   - Click "Deploy" (no configuration needed!)

3. **Done!** 🎉
   Your site will be live at: `https://your-project-name.vercel.app`

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 📦 Package.json Configuration

Make sure your `package.json` includes:

```json
{
  "name": "ocean-hope",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "motion": "^11.11.17",
    "framer-motion": "^11.11.17",
    "three": "^0.170.0",
    "lucide-react": "^0.468.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@types/three": "^0.170.0",
    "@vitejs/plugin-react": "^4.3.4",
    "typescript": "^5.6.3",
    "vite": "^6.0.3",
    "tailwindcss": "^4.0.0"
  }
}
```

## ⚙️ Vercel Configuration

Create `vercel.json` in the root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    },
    {
      "source": "/fonts/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## 🌐 Custom Domain Setup

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Wait for SSL certificate (automatic)

Example DNS configuration:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 🔧 Environment Variables (if needed)

While this project doesn't require environment variables, here's how to add them:

1. Go to Vercel Dashboard → Settings → Environment Variables
2. Add variables:
   ```
   VITE_API_URL=https://api.example.com
   VITE_ANALYTICS_ID=UA-XXXXXXXXX-X
   ```
3. Redeploy to apply changes

## 📊 Performance Optimization

### Pre-deployment Checklist

- [ ] Run Lighthouse audit locally
- [ ] Check image sizes (should be optimized)
- [ ] Verify animations run at 60fps
- [ ] Test on mobile devices
- [ ] Check accessibility with screen reader
- [ ] Validate all links work
- [ ] Test dark/light mode switching

### Vercel Analytics Setup

1. Enable Vercel Analytics in project settings
2. View real-time performance metrics
3. Monitor Core Web Vitals
4. Track user interactions

### Speed Index Targets

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Total Blocking Time**: < 200ms
- **Cumulative Layout Shift**: < 0.1
- **Speed Index**: < 3.0s

## 🧪 Testing on Vercel

### Preview Deployments

Every pull request gets a unique preview URL:
- Automatic builds on PR creation
- Unique URL for each commit
- Perfect for testing before merge

### Production Testing

```bash
# Test production build locally
npm run build
npm run preview

# Open http://localhost:4173
```

## 🔄 Continuous Deployment

Vercel automatically:
- Builds on every push to `main`
- Creates preview for every PR
- Invalidates CDN cache
- Updates SSL certificates
- Handles redirects and rewrites

## 📈 Monitoring & Analytics

### Vercel Analytics
- Real-time visitor data
- Core Web Vitals
- Geographic distribution
- Device breakdown

### Recommended Tools
- **Performance**: Lighthouse CI
- **Errors**: Sentry
- **Analytics**: Plausible or Fathom
- **Uptime**: UptimeRobot

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
vercel --force

# Check build logs
vercel logs
```

### 404 Errors
- Ensure `rewrites` are in `vercel.json`
- Check that all routes go to `index.html`

### Slow Load Times
- Enable Vercel Edge Network
- Optimize images further
- Check bundle size: `npm run build -- --stats`

### Custom Domain Not Working
- Wait 24-48 hours for DNS propagation
- Clear browser cache
- Check DNS settings with `dig yourdomain.com`

## 🎯 Post-Deployment Steps

1. **Test Everything**
   - Visit all sections
   - Test all interactions
   - Check mobile responsiveness
   - Verify forms work

2. **Set Up Monitoring**
   - Enable Vercel Analytics
   - Set up uptime monitoring
   - Configure error tracking

3. **Share Your Site**
   - Update README with live URL
   - Share on social media
   - Submit to Awwwards/CSS Design Awards

4. **Optimize Further**
   - Monitor Lighthouse scores
   - A/B test different CTAs
   - Gather user feedback

## 🏆 Awwwards Submission

Ready to submit? Here's what judges look for:

1. **Design**: ✅ Premium typography, cohesive colors
2. **Creativity**: ✅ Unique 3D elements, custom cursor
3. **Innovation**: ✅ Three.js, scroll effects
4. **User Experience**: ✅ Smooth navigation, clear CTAs
5. **Mobile**: ✅ Fully responsive
6. **Accessibility**: ✅ WCAG 2.1 compliant

### Submission Checklist
- [ ] Live URL
- [ ] Screenshots/video
- [ ] Project description
- [ ] Credits
- [ ] Technologies used
- [ ] Mobile screenshots

## 📞 Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Community**: [vercel.com/community](https://vercel.com/community)
- **Status**: [vercel-status.com](https://vercel-status.com)

---

**Ready to deploy?** Run `vercel` and watch the magic happen! 🚀

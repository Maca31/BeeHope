# Ocean Hope - Award-Worthy Landing Page

A cinematic, interactive landing page for ocean conservation built with modern web technologies. This project showcases technical excellence through stunning animations, 3D graphics, and emotional storytelling.

## 🌊 Features

### Design & Experience
- **Typography**: Premium font pairing - Playfair Display (serif) + Inter (sans-serif)
- **Theme System**: Seamless dark/light mode switching with localStorage persistence
- **Responsive Design**: Fully responsive from mobile to 4K screens with fluid typography

### Animations & Interactivity
- **Framer Motion**: Spring-based animations, parallax effects, and scroll-linked reveals
- **Three.js**: Interactive 3D ocean sphere with wave morphing and mouse tracking
- **Custom Cursor**: Magnetic cursor with smooth following and hover states
- **Scroll Progress**: Visual indicator showing page scroll progress
- **Loading Screen**: Cinematic entrance with animated progress

### Sections
1. **Hero**: Full-screen with 3D Three.js scene and animated CTAs
2. **Story**: Parallax scrolling with emotional storytelling and floating statistics
3. **Impact**: Animated counters and progress bars showing real-world impact
4. **Action**: Interactive cards with gradient hovers and newsletter signup
5. **Footer**: Animated quotes, social links, and comprehensive navigation

### Accessibility & SEO
- Semantic HTML5 markup
- ARIA labels and alt text throughout
- Focus states and keyboard navigation
- Skip to content link
- Reduced motion support for accessibility
- Open Graph meta tags ready

### Performance
- Optimized images with fallback system
- Lazy loading ready
- Smooth 60fps animations
- Minimal bundle size with code splitting

## 🛠️ Tech Stack

- **React 18**: Modern hooks and functional components
- **TypeScript Ready**: Type-safe component architecture
- **Tailwind CSS v4**: Utility-first styling with custom design tokens
- **Shadcn/ui**: Accessible component library (Radix UI)
- **Framer Motion**: Advanced animation library
- **Three.js**: 3D graphics and WebGL
- **Lucide React**: Beautiful icon system

## 📁 Project Structure

```
├── App.tsx                          # Main application entry
├── components/
│   ├── ThemeProvider.tsx            # Dark/light mode context
│   ├── MagneticCursor.tsx           # Custom cursor effect
│   ├── ScrollProgress.tsx           # Scroll indicator
│   ├── LoadingScreen.tsx            # Initial loading animation
│   ├── Header.tsx                   # Navigation header
│   ├── HeroSection.tsx              # Hero with Three.js
│   ├── StorySection.tsx             # Parallax storytelling
│   ├── ImpactSection.tsx            # Animated statistics
│   ├── ActionSection.tsx            # CTAs and newsletter
│   ├── Footer.tsx                   # Footer with links
│   ├── figma/
│   │   └── ImageWithFallback.tsx    # Image component
│   └── ui/                          # Shadcn components
└── styles/
    └── globals.css                  # Global styles & tokens
```

## 🎨 Design Tokens

### Colors
- **Light Mode**: Muted pastels with strong ocean blues
- **Dark Mode**: Deep blacks with vibrant cyan accents
- **Primary**: `#1a5f7a` (Ocean Deep)
- **Accent**: `#57a7c3` (Wave Blue)

### Typography Scale
Fluid typography using `clamp()` for responsive sizing:
- Hero: 2.5rem → 6rem
- Section Headings: 2rem → 3.5rem
- Body: 1rem → 1.25rem

## 🚀 Deployment to Vercel

### Prerequisites
- Vercel account
- Git repository

### Steps

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository

2. **Configure Build Settings**
   ```
   Framework Preset: Create React App (or Vite)
   Build Command: npm run build
   Output Directory: dist (or build)
   ```

3. **Environment Variables**
   No environment variables needed for this frontend-only app

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy
   - Get your live URL: `https://your-project.vercel.app`

### Automatic Deployments
- Every push to `main` triggers a production deployment
- Pull requests get preview deployments
- Zero configuration needed

## 🎯 Performance Targets

- Lighthouse Performance: ≥ 90
- Lighthouse Accessibility: ≥ 95
- Lighthouse Best Practices: ≥ 90
- Lighthouse SEO: ≥ 90
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s

## 🧪 Testing Recommendations

### Manual Testing
- [ ] Theme toggle persists across page reloads
- [ ] All animations run smoothly at 60fps
- [ ] Responsive breakpoints work correctly
- [ ] Keyboard navigation functions properly
- [ ] Focus indicators are visible
- [ ] Custom cursor follows mouse smoothly

### Automated Testing (Future)
- Playwright for E2E testing
- Lighthouse CI for performance monitoring
- Axe for accessibility audits

## 🎨 Customization

### Changing the Cause
The landing page is themed for ocean conservation, but can be adapted:

1. **Update Content**: Modify text in section components
2. **Change Colors**: Update CSS variables in `globals.css`
3. **Replace Images**: Update Unsplash image URLs or use your own
4. **Rebrand**: Change logo and name in `Header.tsx` and `Footer.tsx`

### Adding New Sections
1. Create component in `/components/`
2. Import and add to `App.tsx`
3. Add navigation link in `Header.tsx`

## 📱 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## 🏆 Awwwards Criteria Met

- ✅ **Design**: Premium typography, stunning visuals, cohesive color palette
- ✅ **Creativity**: Unique 3D elements, custom cursor, cinematic animations
- ✅ **Innovation**: Three.js integration, scroll-linked effects, magnetic interactions
- ✅ **User Experience**: Smooth navigation, clear CTAs, responsive design
- ✅ **Mobile**: Fully responsive with touch-optimized interactions
- ✅ **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## 📄 License

This project is created for demonstration purposes. Feel free to use and modify for your own projects.

## 🙏 Credits

- **Design Inspiration**: Awwwards winning ocean conservation sites
- **Images**: Unsplash (ocean and marine life photography)
- **Fonts**: Google Fonts (Playfair Display & Inter)
- **Icons**: Lucide React
- **3D**: Three.js community

---

Built with ❤️ for our oceans

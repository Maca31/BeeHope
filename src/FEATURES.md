# Features Documentation - Ocean Hope

## 🎨 Visual Design

### Typography System
- **Primary Font**: Playfair Display (Serif)
  - Used for: Headings, hero titles, quotes
  - Weights: 400, 500, 600, 700
  - Character: Elegant, editorial, emotional
  
- **Secondary Font**: Inter (Sans-serif)
  - Used for: Body text, UI elements, buttons
  - Weights: 300, 400, 500, 600, 700
  - Character: Clean, modern, highly readable

- **Fluid Typography**
  ```css
  /* Hero: 2.5rem → 6rem based on viewport */
  font-size: clamp(2.5rem, 8vw, 6rem);
  
  /* Sections: 2rem → 3.5rem based on viewport */
  font-size: clamp(2rem, 5vw, 3.5rem);
  
  /* Body: 1rem → 1.25rem based on viewport */
  font-size: clamp(1rem, 2vw, 1.25rem);
  ```

### Color System

#### Light Mode
- **Background**: `#f8f9fa` - Soft white with hint of blue
- **Foreground**: `#0a0a0a` - Deep black
- **Primary**: `#1a5f7a` - Ocean Deep Blue
- **Accent**: `#57a7c3` - Wave Blue
- **Card**: `#ffffff` - Pure white
- **Border**: `rgba(0, 0, 0, 0.08)` - Subtle separation

#### Dark Mode
- **Background**: `#0a0a0a` - Deep black
- **Foreground**: `#f8f9fa` - Soft white
- **Primary**: `#57a7c3` - Bright cyan
- **Accent**: `#1a5f7a` - Deep teal
- **Card**: `#141414` - Dark gray
- **Border**: `rgba(255, 255, 255, 0.1)` - Subtle glow

### Theme Switching
- **Toggle**: Sun/Moon icon in header
- **Persistence**: localStorage saves preference
- **Animation**: 180° rotation transition
- **Default**: Light mode
- **System**: Respects `prefers-color-scheme`

## 🎭 Animation System

### Framer Motion Effects

#### Hero Section
```typescript
// Staggered entrance animations
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1, delay: 0.5 }}

// Scroll-linked parallax
const { scrollYProgress } = useScroll()
const y = useTransform(scrollYProgress, [0, 1], [0, 200])
```

#### Story Section
- **Parallax Images**: Different scroll speeds for depth
- **Fade In**: Opacity changes based on viewport
- **Floating Cards**: Absolute positioned stats with reveal

#### Impact Section
- **Counter Animation**: Numbers count up from 0 to target
- **Progress Bars**: Width animates from 0% to target%
- **Icon Rotation**: 360° spin on hover
- **Card Hover**: Lift effect with shadow increase

#### Action Section
- **Gradient Morphing**: Background blobs move smoothly
- **Button Fills**: Gradient slides in on hover
- **Card Lift**: Translate Y on hover

### Three.js 3D Graphics

#### Icosahedron Sphere
```typescript
// Geometry
const geometry = new THREE.IcosahedronGeometry(2, 4);

// Material
const material = new THREE.MeshStandardMaterial({
  color: 0x57a7c3,
  roughness: 0.4,
  metalness: 0.6,
});

// Wave Animation
const wave = Math.sin(x * 2 + time) * 0.05;
positions.setZ(i, z + wave * 0.1);
```

#### Mouse Tracking
- Sphere rotates based on cursor position
- Smooth lerp for natural movement
- Continuous Z-axis rotation

#### Lighting
- Ambient light: 0.5 intensity
- Directional light: 1.0 intensity at (5,5,5)

### Particle System

```typescript
// Particle generation
particles: 150-300 based on screen size
size: 1-3px
velocity: -0.5 to 0.5 on X and Y
opacity: 0.2 to 0.7

// Connection lines
distance < 150px: draw line
opacity: (1 - distance/150) * 0.2
```

### Custom Cursor

#### Main Cursor
- 16px circle with opacity 0.7
- Follows mouse with smooth trail
- Mix-blend-mode: difference for contrast

#### Cursor Dot
- 4px circle at exact position
- Pure white, no delay
- Mix-blend-mode: difference

#### Hover States
- Scales 1.5x on interactive elements
- Detects: buttons, links, .magnetic class

## 🎯 Interactive Features

### Magnetic Buttons
- Subtle pull effect toward cursor
- Smooth spring animation
- Works on all CTAs

### Scroll Indicators
- **Progress Bar**: Top of page, gradient fill
- **Arrow Down**: Bouncing animation in hero
- **Scroll to Top**: Appears after 500px scroll

### Smooth Scrolling
- Native CSS `scroll-behavior: smooth`
- Anchor link navigation
- Eased momentum scrolling

### Loading Screen
- Animated logo rotation
- Progress bar from 0-100%
- Smooth fade out to content
- Duration: ~3 seconds

## 📱 Responsive Design

### Breakpoints
```css
mobile: < 640px
tablet: 640px - 1024px
desktop: > 1024px
wide: > 1920px
```

### Grid System
- Hero: Full screen on all devices
- Story: Stacked → 2 columns
- Impact: 1 → 2 → 4 columns
- Action: Stacked → 3 columns

### Typography Scaling
- Fluid clamp() for all heading sizes
- Minimum readable size on mobile
- Maximum elegant size on desktop

### Touch Optimization
- 44px minimum touch targets
- No hover effects on touch devices
- Cursor hidden on mobile
- Swipe-friendly interactions

## ♿ Accessibility Features

### Semantic HTML
```html
<header> - Site header with nav
<main> - Primary content
<section> - Content sections
<article> - Story blocks
<footer> - Site footer
```

### ARIA Labels
- All icons have labels
- Button purposes described
- Navigation landmarks defined
- Screen reader announcements

### Keyboard Navigation
- Tab order follows visual flow
- Focus indicators visible
- Skip to content link
- Enter/Space activate buttons

### Color Contrast
- WCAG AAA for body text (7:1)
- WCAG AA for UI elements (4.5:1)
- Theme switcher for preferences

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 🔧 Technical Features

### Performance Optimizations

#### Code Splitting
- Lazy load heavy components
- Dynamic imports for Three.js
- Route-based splitting ready

#### Image Optimization
- WebP format preferred
- Fallback component for errors
- Lazy loading implemented
- Responsive srcset ready

#### Bundle Size
- Tree shaking enabled
- Unused code eliminated
- Gzip compression
- Brotli compression

#### Rendering
- 60fps animations
- RequestAnimationFrame for smooth motion
- GPU acceleration with `transform3d`
- Will-change hints for optimization

### SEO Features

#### Meta Tags
- Open Graph for social sharing
- Twitter Cards
- Canonical URLs
- Structured data (JSON-LD)

#### Performance
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s
- Cumulative Layout Shift < 0.1
- Largest Contentful Paint < 2.5s

#### Crawlability
- Semantic HTML structure
- Clean URL structure
- XML sitemap ready
- Robots.txt ready

## 🎪 Section Features

### Header
- Fixed position, always visible
- Glassmorphism effect when scrolled
- Theme toggle with animation
- Smooth navigation links
- Logo with brand identity

### Hero Section
- Full viewport height
- 3D animated sphere
- Particle field background
- Gradient overlay
- Staggered text reveals
- Dual CTAs
- Scroll indicator

### Story Section
- Parallax image effects
- Floating statistics cards
- Two-column responsive layout
- Alternating content direction
- Emotional storytelling
- Real data points

### Impact Section
- Animated counters
- Interactive statistic cards
- Icon hover effects
- Progress bars
- Animated background blobs
- Goal tracking visualization

### Action Section
- Three CTA cards
- Gradient hover effects
- Newsletter signup form
- Wave pattern background
- Social proof elements
- Multiple action paths

### Footer
- Rotating quotes
- Social media links
- Comprehensive navigation
- Hover micro-interactions
- Legal links
- Brand reinforcement

## 🎨 Custom Components

### ThemeProvider
- Context-based state management
- localStorage persistence
- DOM class toggle
- Hydration-safe mounting

### MagneticCursor
- Pure CSS cursor: none
- Custom rendered cursors
- Smooth position tracking
- Hover state detection
- Performance optimized

### ScrollProgress
- Fixed position indicator
- ScaleX based on scroll
- Gradient background
- 1px height, full width

### ParticleField
- Canvas-based rendering
- Dynamic particle count
- Connection lines
- Wrapping boundaries
- Optimized drawing

### LoadingScreen
- AnimatePresence for exit
- Progress simulation
- Rotating logo
- Smooth fade out
- Prevents flash of unstyled content

### AnimatedCounter
- InView detection
- RequestAnimationFrame for smoothness
- Eased counting
- Customizable duration
- Number formatting

## 🔐 Security Features

- XSS protection headers
- CSRF token ready
- Content Security Policy ready
- No inline scripts
- Sanitized user inputs (when added)

## 🌐 Browser Support

### Modern Browsers (Full Support)
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

### Fallbacks
- CSS Grid → Flexbox
- backdrop-filter → solid background
- Custom cursor → default cursor
- 3D animations → 2D animations

## 📊 Analytics Ready

### Tracking Points
- Page views
- Section views (scroll depth)
- Button clicks
- Form submissions
- Theme switches
- Error boundaries

### Metrics
- Time on page
- Scroll depth
- Interaction rate
- Bounce rate
- Device breakdown
- Geographic data

---

This feature-rich landing page demonstrates modern web development best practices while maintaining exceptional performance and accessibility.

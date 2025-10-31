# Architecture Overview - Ocean Hope

## 🏗️ Component Hierarchy

```
App.tsx
├── ThemeProvider (Context)
│   └── AppContent
│       ├── LoadingScreen (Conditional)
│       │   └── Logo + Progress Bar
│       └── Main Application
│           ├── ScrollProgress (Fixed UI)
│           ├── MagneticCursor (Fixed UI)
│           ├── ScrollToTop (Fixed UI)
│           ├── Header (Fixed)
│           │   ├── Logo + Brand
│           │   ├── Navigation Links
│           │   └── Theme Toggle
│           ├── <main>
│           │   ├── HeroSection
│           │   │   ├── ParticleField (Canvas)
│           │   │   ├── Three.js Scene (Canvas)
│           │   │   ├── Hero Content
│           │   │   └── Scroll Indicator
│           │   ├── StorySection
│           │   │   ├── Text Block 1 + Image
│           │   │   └── Image + Text Block 2
│           │   ├── ImpactSection
│           │   │   ├── Impact Stats (4 cards)
│           │   │   └── Progress Visualization
│           │   └── ActionSection
│           │       ├── Action Cards (3)
│           │       └── Newsletter Form
│           └── Footer
│               ├── Animated Quote
│               ├── Brand + Social Links
│               ├── Link Columns (3)
│               └── Bottom Bar
```

## 📦 Module Organization

### Core Application Layer
```
/App.tsx
├── Main entry point
├── Loading state management
├── Global effects (scroll tracking)
└── App structure composition
```

### Context & State Management
```
/components/ThemeProvider.tsx
├── Theme context creation
├── localStorage integration
├── DOM class management
└── Theme toggle function
```

### Layout Components
```
/components/Header.tsx
├── Navigation
├── Branding
├── Theme switcher
└── Scroll-based styling

/components/Footer.tsx
├── Site map
├── Social links
├── Legal links
└── Animated elements
```

### Section Components
```
/components/HeroSection.tsx
├── Three.js integration
├── Particle system
├── Hero content
└── Scroll animations

/components/StorySection.tsx
├── Parallax effects
├── Image galleries
├── Floating stats
└── Alternating layouts

/components/ImpactSection.tsx
├── Animated counters
├── Progress bars
├── Icon interactions
└── Background effects

/components/ActionSection.tsx
├── CTA cards
├── Newsletter form
├── Gradient effects
└── Pattern backgrounds
```

### Utility Components
```
/components/MagneticCursor.tsx
├── Custom cursor rendering
├── Mouse tracking
└── Hover state detection

/components/ScrollProgress.tsx
├── Scroll position tracking
└── Progress visualization

/components/ScrollToTop.tsx
├── Visibility management
└── Smooth scroll function

/components/LoadingScreen.tsx
├── Progress simulation
├── Exit animation
└── Callback handling

/components/ParticleField.tsx
├── Canvas particle system
├── Connection rendering
└── Animation loop
```

### UI Components (Shadcn)
```
/components/ui/
├── button.tsx
├── input.tsx
├── card.tsx
├── badge.tsx
└── ... (37+ components)
```

## 🎨 Styling Architecture

### CSS Layers
```
@layer base
├── CSS Reset
├── Typography defaults
├── Base element styles
└── Accessibility foundations

@layer components
└── (Handled by Tailwind utilities)

@layer utilities
└── (Custom utilities as needed)
```

### Design Token System
```css
:root (Light Mode)
├── Colors
│   ├── --background: #f8f9fa
│   ├── --foreground: #0a0a0a
│   ├── --primary: #1a5f7a
│   └── --accent: #57a7c3
├── Typography
│   ├── --font-serif: Playfair Display
│   └── --font-sans: Inter
└── Spacing
    └── --radius: 0.625rem

.dark (Dark Mode)
├── --background: #0a0a0a
├── --foreground: #f8f9fa
├── --primary: #57a7c3
└── --accent: #1a5f7a
```

## 🔄 Data Flow

### Theme Management
```
User Action (Toggle Button)
    ↓
ThemeProvider Context
    ↓
├── Update State
├── Update localStorage
└── Update DOM classList
    ↓
Re-render with new theme
```

### Scroll Interactions
```
Window Scroll Event
    ↓
Multiple Listeners
    ↓
├── ScrollProgress (visual indicator)
├── Header (styling changes)
├── ScrollToTop (visibility)
├── Parallax (transform values)
└── Animations (trigger points)
```

### Loading Flow
```
App Mount
    ↓
LoadingScreen (visible)
    ↓
Progress Animation (0-100%)
    ↓
onLoadingComplete callback
    ↓
Main Content (visible)
```

## 🎭 Animation Architecture

### Framer Motion Integration
```typescript
// Scroll-linked animations
useScroll() → scrollYProgress
    ↓
useTransform() → derived values
    ↓
motion.div style prop → visual changes

// Viewport-triggered animations
whileInView → detect visibility
    ↓
viewport: { once: true }
    ↓
initial → animate → visual reveal
```

### Three.js Integration
```typescript
Canvas Setup
    ↓
Scene Creation
    ↓
├── Geometry (IcosahedronGeometry)
├── Material (MeshStandardMaterial)
├── Lighting (Ambient + Directional)
└── Camera (PerspectiveCamera)
    ↓
Animation Loop (requestAnimationFrame)
    ↓
├── Mouse tracking
├── Rotation updates
├── Wave deformation
└── Render to canvas
```

## 🔌 External Dependencies

### Animation Libraries
```
motion/react (Framer Motion)
├── useScroll
├── useTransform
├── motion components
└── AnimatePresence

three
├── Scene
├── PerspectiveCamera
├── WebGLRenderer
└── Geometry/Materials
```

### UI Libraries
```
lucide-react
└── Icon components (20+ used)

shadcn/ui (via ./components/ui)
├── Button
├── Input
├── Card
└── 37+ accessible components
```

## 📱 Responsive Strategy

### Mobile First Approach
```
Base Styles (Mobile)
    ↓
@media (min-width: 640px) - Tablet
    ↓
@media (min-width: 1024px) - Desktop
    ↓
@media (min-width: 1920px) - Wide
```

### Breakpoint Strategy
```css
/* Utility Classes */
.hidden md:flex
.grid-cols-1 md:grid-cols-2 lg:grid-cols-4

/* Fluid Typography */
clamp(min, preferred, max)

/* Container Widths */
.container { max-width: 1280px }
```

## 🚀 Performance Architecture

### Code Splitting Strategy
```
App Entry
├── Vendor (React, etc.) → vendors.js
├── UI Components → components.js
├── Three.js → three.js (lazy)
└── Utils → utils.js
```

### Rendering Optimization
```
React.memo() - Prevent unnecessary renders
    ↓
useMemo() - Memoize expensive calculations
    ↓
useCallback() - Stabilize function references
    ↓
Key props - Optimize list rendering
```

### Asset Loading
```
Critical Path
├── HTML
├── CSS (inline critical)
└── JavaScript (defer)

Below Fold
├── Images (lazy load)
├── Fonts (font-display: swap)
└── 3D assets (progressive)
```

## 🔐 State Management

### Local State
```typescript
// Component-level
useState() - Simple values
useReducer() - Complex state

// Examples
const [theme, setTheme] = useState('light')
const [isLoading, setIsLoading] = useState(true)
const [isVisible, setIsVisible] = useState(false)
```

### Context State
```typescript
// Global theme
ThemeContext
├── theme value
└── toggleTheme function

// Usage
const { theme, toggleTheme } = useTheme()
```

### Side Effects
```typescript
useEffect()
├── Scroll listeners
├── Resize handlers
├── Three.js setup
└── Cleanup functions
```

## 🧪 Testing Strategy (Recommended)

### Unit Tests
```
Components
├── ThemeProvider
├── AnimatedCounter
└── ParticleField

Utils
└── (Add as needed)
```

### Integration Tests
```
User Flows
├── Theme switching
├── Navigation
├── Form submission
└── Scroll interactions
```

### E2E Tests (Playwright)
```
Critical Paths
├── Page load
├── Section navigation
├── CTA interactions
└── Mobile responsiveness
```

## 📊 Monitoring Points

### Performance Metrics
```
Core Web Vitals
├── LCP (Largest Contentful Paint)
├── FID (First Input Delay)
├── CLS (Cumulative Layout Shift)
└── TTFB (Time to First Byte)

Custom Metrics
├── Hero render time
├── Three.js init time
└── Animation frame rate
```

### Error Boundaries
```
<ErrorBoundary>
├── Catch component errors
├── Log to service
└── Show fallback UI
```

## 🔄 Development Workflow

```
Development
├── npm run dev (Vite dev server)
├── Hot module replacement
└── Fast refresh

Build
├── npm run build
├── Type checking
├── Bundle optimization
└── Asset generation

Deploy
├── git push
├── Vercel auto-build
└── Live deployment
```

## 📁 File Structure Best Practices

```
/components
├── Layout (Header, Footer)
├── Sections (Hero, Story, Impact, Action)
├── Utilities (Cursor, Scroll, Loading)
├── Context (ThemeProvider)
└── UI (Shadcn components)

Naming Convention
├── PascalCase for components
├── camelCase for utilities
└── kebab-case for files
```

---

This architecture prioritizes performance, maintainability, and scalability while delivering an exceptional user experience.

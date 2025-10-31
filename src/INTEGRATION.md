# Shadcn UI & Tailwind CSS Integration Guide

## Overview

This ocean conservation landing page is built with **shadcn/ui** components and **Tailwind CSS v4.0** for styling. Everything is already integrated and ready to use.

---

## ✅ What's Already Configured

### 1. Tailwind CSS v4.0

**Location**: `/styles/globals.css`

The project uses Tailwind v4.0 with the new `@theme` directive for custom design tokens:

```css
@theme inline {
  --color-primary: var(--primary);
  --color-accent: var(--accent);
  --radius-lg: var(--radius);
  /* ...and many more */
}
```

**Key Features**:
- ✅ Custom color palette for ocean theme (blues, teals)
- ✅ Dark/light mode support with CSS variables
- ✅ Custom typography system (Playfair Display + Inter)
- ✅ Responsive design tokens
- ✅ Custom scrollbar styling
- ✅ Accessibility focus styles

### 2. Shadcn UI Components

**Location**: `/components/ui/`

All shadcn/ui components are pre-installed and customized:

#### Available Components
- **Layout**: Card, Separator, Aspect Ratio, Resizable
- **Forms**: Input, Textarea, Select, Checkbox, Radio Group, Switch, Slider
- **Navigation**: Navigation Menu, Menubar, Breadcrumb, Tabs, Pagination
- **Feedback**: Alert, Alert Dialog, Toast (Sonner), Progress, Skeleton
- **Overlay**: Dialog, Sheet, Drawer, Popover, Hover Card, Tooltip
- **Data**: Table, Chart, Calendar, Command
- **Interactive**: Button, Toggle, Accordion, Collapsible, Carousel
- **Advanced**: Form (React Hook Form), Sidebar

#### Usage Example
```tsx
import { Button } from './components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ocean Conservation</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default">Take Action</Button>
      </CardContent>
    </Card>
  );
}
```

### 3. Theme System

**Location**: `/components/ThemeProvider.tsx`

The theme provider manages dark/light mode switching with localStorage persistence:

```tsx
// Already wrapped in App.tsx
<ThemeProvider>
  <AppContent />
</ThemeProvider>
```

**Features**:
- ✅ Persistent theme preference
- ✅ System preference detection
- ✅ Smooth transitions between modes
- ✅ CSS variable-based theming

---

## 🎨 Design Tokens

### Colors

#### Light Mode
```css
--primary: #1a5f7a      /* Deep Ocean Blue */
--accent: #57a7c3       /* Light Ocean Blue */
--background: #f8f9fa   /* Soft White */
--foreground: #0a0a0a   /* Near Black */
```

#### Dark Mode
```css
--primary: #57a7c3      /* Light Ocean Blue */
--accent: #1a5f7a       /* Deep Ocean Blue */
--background: #0a0a0a   /* Near Black */
--foreground: #f8f9fa   /* Soft White */
```

### Typography

```css
--font-serif: 'Playfair Display', serif  /* Headings */
--font-sans: 'Inter', sans-serif         /* Body text */
```

### Border Radius

```css
--radius: 0.625rem      /* Base radius */
--radius-sm: 0.375rem   /* Small */
--radius-md: 0.4375rem  /* Medium */
--radius-lg: 0.625rem   /* Large */
--radius-xl: 0.875rem   /* Extra Large */
```

---

## 🔧 Tailwind Configuration

### Using Tailwind Classes

The project uses Tailwind v4.0, so you can use all standard Tailwind classes:

```tsx
<div className="flex items-center justify-between p-6 bg-background">
  <h1 className="text-primary">Ocean Conservation</h1>
  <Button className="bg-accent hover:bg-accent/90">
    Learn More
  </Button>
</div>
```

### Design System Colors

Use semantic color names for consistency:

```tsx
// Background colors
className="bg-background"
className="bg-card"
className="bg-primary"
className="bg-accent"

// Text colors
className="text-foreground"
className="text-primary"
className="text-muted-foreground"

// Borders
className="border-border"
```

---

## 📦 Current Component Usage

### Where Shadcn is Used

1. **Header** (`/components/Header.tsx`)
   - `Button` for theme toggle and navigation

2. **HeroSection** (`/components/HeroSection.tsx`)
   - `Button` for CTAs

3. **ActionSection** (`/components/ActionSection.tsx`)
   - `Card` for action items
   - `Input` for newsletter form
   - `Button` for submissions

4. **ImpactSection** (`/components/ImpactSection.tsx`)
   - `Progress` for impact metrics
   - `Card` for stat cards

5. **Footer** (`/components/Footer.tsx`)
   - `Button` for social links
   - `Input` for email signup

---

## 🚀 Adding New Components

### Method 1: Use Existing Shadcn Components

Simply import from `/components/ui/`:

```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './components/ui/dialog';
import { Form, FormField, FormItem, FormLabel } from './components/ui/form';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';

function MyFeature() {
  return (
    <Dialog>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save Our Oceans</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="donate">
          <TabsList>
            <TabsTrigger value="donate">Donate</TabsTrigger>
            <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
          </TabsList>
          <TabsContent value="donate">
            {/* Donation form */}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
```

### Method 2: Customize Components

Edit files in `/components/ui/` to match your design:

```tsx
// /components/ui/button.tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        ocean: "bg-gradient-to-r from-primary to-accent text-white",
        // Add custom variant
      },
    },
  }
);
```

---

## 🎯 Best Practices

### 1. Use Semantic Tokens

✅ **Good**:
```tsx
<div className="bg-background text-foreground border-border">
```

❌ **Avoid**:
```tsx
<div className="bg-white text-black border-gray-200">
```

### 2. Leverage Design System

✅ **Good**:
```tsx
<Card className="p-6 rounded-lg shadow-xl">
```

❌ **Avoid**:
```tsx
<div className="p-6 rounded-lg shadow-xl bg-white border">
```

### 3. Typography Guidelines

**Don't override** font-size, font-weight, or line-height unless explicitly needed:

✅ **Good**:
```tsx
<h1 style={{ fontFamily: 'var(--font-serif)' }}>Title</h1>
```

❌ **Avoid**:
```tsx
<h1 className="text-4xl font-bold leading-tight">Title</h1>
```

The globals.css file already sets typography defaults.

### 4. Responsive Design

Use Tailwind's responsive prefixes:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
```

---

## 🌊 Ocean Theme Extensions

### Custom Utility Classes

Add ocean-specific utilities in `globals.css`:

```css
@layer utilities {
  .ocean-gradient {
    background: linear-gradient(135deg, var(--primary), var(--accent));
  }
  
  .wave-animation {
    animation: wave 3s ease-in-out infinite;
  }
  
  @keyframes wave {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
}
```

### Custom Component Variants

Extend shadcn components with ocean variants:

```tsx
// In your component
<Button variant="default" className="ocean-gradient">
  Dive In
</Button>
```

---

## 📱 Mobile Responsiveness

All shadcn components are mobile-responsive by default. Use Tailwind breakpoints:

```tsx
<div className="
  flex flex-col md:flex-row 
  gap-4 md:gap-8 
  p-4 md:p-8
">
  {/* Content */}
</div>
```

**Breakpoints**:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## 🔍 Debugging

### Check Theme Variables

Open DevTools and inspect the `:root` element to see all CSS variables:

```css
:root {
  --primary: #1a5f7a;
  --accent: #57a7c3;
  /* ... */
}
```

### Verify Tailwind Classes

Use the browser inspector to confirm classes are applied:

```html
<button class="bg-primary text-primary-foreground hover:bg-primary/90">
```

---

## 📚 Resources

- **Tailwind CSS v4**: https://tailwindcss.com
- **Shadcn/ui Docs**: https://ui.shadcn.com
- **Radix UI** (underlying primitives): https://www.radix-ui.com
- **Class Variance Authority**: https://cva.style/docs

---

## ✨ Summary

Your ocean conservation landing page has a **complete shadcn/ui + Tailwind CSS** setup:

✅ All 40+ shadcn components installed  
✅ Tailwind v4.0 configured with ocean theme  
✅ Dark/light mode with ThemeProvider  
✅ Custom typography (Playfair Display + Inter)  
✅ Responsive design system  
✅ Accessibility built-in  
✅ Production-ready

**You're ready to build!** Just import components from `/components/ui/` and use Tailwind classes as needed.

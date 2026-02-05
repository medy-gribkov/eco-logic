---
description: Create a consistent design system with colors, typography, and spacing
---

# Design System

This skill walks through creating a comprehensive design system for your React project.

## Overview

A design system ensures visual consistency across your entire application. This includes:
- Color palette
- Typography scale
- Spacing system
- Component patterns

## Steps

### 1. Define Your Color Palette

Choose 4-6 core colors. For EcoLogic, we used:

| Role | Name | Hex | Description |
|------|------|-----|-------------|
| Primary Accent | Magenta | #FF2D7A | CTAs, highlights, badges |
| Secondary Accent | Green | #1D7C5A | Success, eco-themes |
| Text | Graphite | #111111 | Primary text color |
| Background | Paper | #F3F1EA | Page backgrounds |
| Subtle | Sand | #E8DFD0 | Cards, dividers |
| Tertiary | Sage | #7A9E7E | Soft accents |

### 2. Configure Tailwind Colors

Add custom colors to your `src/index.css`:

```css
@import "tailwindcss";

@theme {
  --color-magenta: #FF2D7A;
  --color-green: #1D7C5A;
  --color-graphite: #111111;
  --color-paper: #F3F1EA;
  --color-sand: #E8DFD0;
  --color-sage: #7A9E7E;
  --color-gray: #C7C2B6;
  --color-blue: #2F6BFF;
}
```

### 3. Setup Typography

#### Install Google Fonts

Add to `index.html` in the `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Heebo:wght@400;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

#### Configure Font Families

Add to `src/index.css`:
```css
@theme {
  --font-display: 'Bebas Neue', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-hebrew: 'Heebo', sans-serif;
}
```

### 4. Define Spacing Scale

Use consistent spacing values:

| Size | Tailwind | Pixels | Usage |
|------|----------|--------|-------|
| xs | p-2 | 8px | Tight spacing |
| sm | p-4 | 16px | Default padding |
| md | p-6 | 24px | Card padding |
| lg | p-8 | 32px | Section gaps |
| xl | py-16 | 64px | Section spacing |
| 2xl | py-20 | 80px | Large sections |

### 5. Create Base Component Patterns

#### Button Variants
```css
/* Primary Button */
.btn-primary {
  @apply bg-magenta text-paper px-6 py-3 rounded-xl font-body font-medium;
  @apply hover:bg-magenta/90 transition-colors;
}

/* Secondary Button */
.btn-secondary {
  @apply bg-green text-paper px-6 py-3 rounded-xl font-body font-medium;
  @apply hover:bg-green/90 transition-colors;
}

/* Outline Button */
.btn-outline {
  @apply border-2 border-graphite/30 px-6 py-3 rounded-xl font-body font-medium;
  @apply hover:bg-graphite/5 transition-colors;
}
```

#### Card Pattern
```css
.card {
  @apply bg-paper rounded-2xl border-2 border-gray/30 p-6;
  @apply shadow-sm hover:shadow-md transition-shadow;
}

.card-highlighted {
  @apply bg-paper rounded-2xl border-2 border-magenta p-6;
  @apply shadow-lg;
}
```

### 6. Create Design Tokens Document

Create a reference document `design-standards.md` in your project root or docs folder containing:
- Color palette with hex codes
- Typography specifications
- Spacing guidelines
- Component patterns
- Icon usage rules

## Verification

Test your design system by creating a simple page that uses:
- All color variants
- Display and body typography
- Primary and secondary buttons
- A card component

## Common Issues

**Issue:** Custom colors not recognized
**Solution:** Ensure the @theme block is inside your CSS file after `@import "tailwindcss";`

**Issue:** Fonts not loading
**Solution:** Check that Google Fonts links are in `<head>` before any CSS

## Next Steps

After design system setup:
1. `/asset-generation.md` - Generate custom illustrations and icons
2. `/component-library.md` - Build your UI component library

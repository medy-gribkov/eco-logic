---
description: Initialize a React + Vite + Tailwind project from scratch
---

# Project Setup

This skill walks through creating a new React web application with Vite and Tailwind CSS 4.

## Prerequisites

- Node.js 18+ installed
- npm or pnpm available
- Terminal access

## Steps

### 1. Create Vite React Project

```bash
npx -y create-vite@latest ./ --template react
```

If the directory is not empty, you may need to create a new folder first:
```bash
mkdir my-project
cd my-project
npx -y create-vite@latest ./ --template react
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Tailwind CSS 4

```bash
npm install -D tailwindcss@latest @tailwindcss/vite@latest
```

### 4. Configure Vite for Tailwind

Edit `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### 5. Setup CSS Entry Point

Replace contents of `src/index.css` with:
```css
@import "tailwindcss";

/* Custom CSS variables and overrides go here */
```

### 6. Install Additional Dependencies

For a full-featured app like EcoLogic:
```bash
npm install react-router-dom framer-motion lucide-react
```

### 7. Create Directory Structure

```bash
mkdir -p src/components/ui
mkdir -p src/components/layout
mkdir -p src/components/sections
mkdir -p src/pages
mkdir -p src/data
mkdir -p src/hooks
mkdir -p src/context
mkdir -p src/i18n
mkdir -p public/assets/icons
mkdir -p public/assets/images
mkdir -p public/assets/backgrounds
mkdir -p public/assets/fonts
```

### 8. Start Development Server

// turbo
```bash
npm run dev
```

## Verification

Open http://localhost:5173 in your browser. You should see the Vite + React starter page.

## Common Issues

**Issue:** Tailwind classes not applying
**Solution:** Ensure `@import "tailwindcss";` is at the top of your CSS file and the Vite plugin is configured.

**Issue:** Port 5173 already in use
**Solution:** Kill the existing process or use `npm run dev -- --port 3000`

## Next Steps

After setup, proceed to:
1. `/design-system.md` - Create your color palette and typography
2. `/component-library.md` - Build reusable UI components

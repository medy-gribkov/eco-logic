# EcoLogic

An educational environmental awareness platform featuring interactive quizzes, downloadable resources, and a watercolor illustration style.

**Live Site:** https://eco-logic-rouge.vercel.app

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI framework |
| Vite | Build tool |
| Tailwind CSS 4 | Styling |
| Framer Motion | Animations |
| React Router DOM | Routing |
| Vercel | Hosting |

---

## Project Structure

```
eco-logic/
    .agent/
        workflows/           # Reusable skill files
    public/
        assets/
            backgrounds/     # Section background images
            icons/           # Custom watercolor icons
            personas/        # Character illustrations
            logos/           # Partner organization logos
            fonts/           # Custom typography
    src/
        components/
            ui/              # Button, Card, Icon, Modal
            layout/          # Navbar, Footer, Section
            sections/        # Homepage sections
        pages/               # Route pages
        data/                # Static data files
        i18n/                # Translations
        hooks/               # Custom React hooks
        context/             # React context providers
```

---

## Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Magenta | #FF2D7A | Primary accent, CTAs |
| Green | #1D7C5A | Secondary, eco-themes |
| Graphite | #111111 | Text |
| Paper | #F3F1EA | Backgrounds |
| Sand | #E8DFD0 | Cards, dividers |

### Typography

| Category | Font |
|----------|------|
| Display (EN) | Bebas Neue |
| Display (HE) | Heebo 700 |
| Body | Inter |

### Icons

Custom watercolor-style PNG icons. Never use generic icon libraries.

```jsx
import Icon from '../components/ui/Icon';

<Icon name="leaf" size="md" />
```

---

## Skills / Workflows

Reusable workflow files are available in `.agent/workflows/`:

| File | Description |
|------|-------------|
| `project-setup.md` | Initialize React + Vite + Tailwind |
| `design-system.md` | Create colors, typography, spacing |
| `asset-generation.md` | Generate consistent AI images |
| `component-library.md` | Build reusable UI components |
| `deployment.md` | Deploy to Vercel |

These skills can be used to recreate this project or build similar ones with different styles.

---

## Features

### Interactive Quiz
- Preview question on homepage
- Full quiz with timer and score tracking
- Per-question feedback with educational facts
- Social sharing with formatted post previews

### Bilingual Support
- English and Hebrew
- RTL layout support
- Language toggle in navbar

### Partner Section
- Real Israeli environmental organization logos
- Glassmorphic hover effects
- Integrated persona illustration

### Downloadable Resources
- PDF guides (water usage, recycling)
- Language-specific downloads

---

## Development

### Running Locally

```bash
npm run dev
```

Open http://localhost:5173

### Building

```bash
npm run build
```

Output in `dist/` directory.

### Linting

```bash
npm run lint
```

---

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Manual

1. Run `npm run build`
2. Deploy `dist/` folder to any static host

---

## Credits

- Illustrations: AI-generated watercolor style
- Icons: Custom illustrated PNG set
- Fonts: Google Fonts
- Framework: React + Vite
- Hosting: Vercel

---

## License

This project is for educational purposes.

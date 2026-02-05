---
description: Build reusable UI components following consistent patterns
---

# Component Library

This skill covers building a reusable UI component library for your React application.

## Component Categories

| Category | Examples | Location |
|----------|----------|----------|
| UI Primitives | Button, Card, Icon, Modal | `src/components/ui/` |
| Layout | Section, Container, Navbar, Footer | `src/components/layout/` |
| Sections | Hero, Features, Testimonials | `src/components/sections/` |
| Features | LanguageToggle, Quiz, Forms | `src/components/features/` |

## Core Components

### Button Component

```jsx
// src/components/ui/Button.jsx
import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'bg-magenta text-paper hover:bg-magenta/90',
    secondary: 'bg-green text-paper hover:bg-green/90',
    outline: 'border-2 border-graphite/30 hover:bg-graphite/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded-xl font-body font-medium
        transition-colors duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
```

### Icon Component

```jsx
// src/components/ui/Icon.jsx
import React from 'react';

const Icon = ({ name, size = 'md', inline = false, className = '' }) => {
  const sizes = {
    xs: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10',
    '2xl': 'w-12 h-12',
    '3xl': 'w-16 h-16',
  };

  return (
    <img
      src={`/assets/icons/${name}.png`}
      alt=""
      aria-hidden="true"
      className={`
        ${sizes[size]} 
        object-contain 
        ${inline ? 'inline-block align-middle' : ''}
        ${className}
      `}
    />
  );
};

export default Icon;
```

### Card Component

```jsx
// src/components/ui/Card.jsx
import React from 'react';

const Card = ({ 
  children, 
  variant = 'default',
  padding = 'md',
  className = '',
  ...props 
}) => {
  const variants = {
    default: 'bg-paper border-gray/30',
    highlighted: 'bg-paper border-magenta shadow-lg',
    ghost: 'bg-transparent border-transparent',
  };

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`
        ${variants[variant]}
        ${paddings[padding]}
        rounded-2xl border-2
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
```

### Modal Component

```jsx
// src/components/ui/Modal.jsx
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children,
  size = 'medium' 
}) => {
  const sizes = {
    small: 'max-w-sm',
    medium: 'max-w-lg',
    large: 'max-w-2xl',
    full: 'max-w-4xl',
  };

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-graphite/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={`
              relative ${sizes[size]} w-full
              bg-paper rounded-2xl shadow-xl
              max-h-[90vh] overflow-y-auto
            `}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray/20">
              <h2 className="font-display text-2xl">{title}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
```

## Layout Components

### Section Component

```jsx
// src/components/layout/Section.jsx
import React from 'react';

const Section = ({ 
  id, 
  spacing = 'default', 
  className = '', 
  children 
}) => {
  const spacings = {
    small: 'py-12',
    default: 'py-16 md:py-20',
    large: 'py-20 md:py-28',
  };

  return (
    <section
      id={id}
      className={`${spacings[spacing]} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
```

### Container Component

```jsx
// src/components/layout/Container.jsx
import React from 'react';

const Container = ({ 
  size = 'default', 
  className = '', 
  children 
}) => {
  const sizes = {
    small: 'max-w-3xl',
    default: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div className={`${sizes[size]} mx-auto px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
```

## Component Exports

Create an index file for easier imports:

```jsx
// src/components/ui/index.js
export { default as Button } from './Button';
export { default as Card } from './Card';
export { default as Icon } from './Icon';
export { default as Modal } from './Modal';
```

Usage:
```jsx
import { Button, Card, Icon } from '../components/ui';
```

## Component Best Practices

### 1. Props Interface

Always define clear prop options:
```jsx
const Button = ({ 
  variant = 'primary',  // 'primary' | 'secondary' | 'outline'
  size = 'md',          // 'sm' | 'md' | 'lg'
  disabled = false,
  children,
  ...props              // Pass remaining props to element
}) => { ... }
```

### 2. Composable Styling

Allow className override for flexibility:
```jsx
<Button className="w-full mt-4">
  Custom width button
</Button>
```

### 3. Accessibility

Include proper ARIA attributes:
```jsx
<button
  aria-label={ariaLabel}
  aria-disabled={disabled}
  role="button"
  {...props}
>
```

### 4. Animation Consistency

Use Framer Motion with consistent timing:
```jsx
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
};
```

## Testing Components

Create a test page to verify all components:

```jsx
// src/pages/ComponentTest.jsx (development only)
import { Button, Card, Icon, Modal } from '../components/ui';

const ComponentTest = () => {
  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <div className="p-8 space-y-8">
      <h1>Component Library Test</h1>
      
      <section>
        <h2>Buttons</h2>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </section>
      
      <section>
        <h2>Icons</h2>
        <Icon name="leaf" size="sm" />
        <Icon name="tree" size="md" />
        <Icon name="heart" size="lg" />
      </section>
      
      {/* Continue for all components */}
    </div>
  );
};
```

## Next Steps

After building components:
1. Create section components using these primitives
2. Build page layouts
3. Test responsive behavior
4. Document component props for team reference

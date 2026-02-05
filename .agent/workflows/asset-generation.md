---
description: Generate consistent AI images for backgrounds, icons, and illustrations
---

# Asset Generation

This skill covers generating consistent visual assets using AI image generation tools.

## Overview

For a cohesive visual identity, all generated assets should share:
- Consistent art style
- Matching color palette
- Similar level of detail
- Unified mood/tone

## Asset Categories

| Category | Purpose | Typical Size |
|----------|---------|--------------|
| Backgrounds | Section backdrops | 1920x1080 or larger |
| Icons | UI elements, features | 512x512 PNG |
| Personas | Character illustrations | 1024x1024 PNG |
| Decorations | Vines, patterns, dividers | Varies |

## Prompt Engineering

### Core Prompt Structure

```
[Art Style], [Subject], [Color Palette], [Background], [Additional Details]
```

### Art Style Keywords

For the watercolor/illustrated style used in EcoLogic:
- "Soft watercolor illustration"
- "Hand-drawn style"
- "Muted earth tones"
- "Organic lines"
- "Educational feel"
- "Warm and hopeful"

### Color Palette Reference

Always include your brand colors in prompts:
- Cream background: #F3F1EA
- Magenta accent: #FF2D7A
- Green accent: #1D7C5A
- Sand/earth tones

### Example Prompts

#### Background Image
```
Soft watercolor illustration of children and a teacher planting seedlings 
in a garden, cream background (#F3F1EA), muted earth tones with subtle 
magenta (#FF2D7A) and green (#1D7C5A) accents, hand-drawn style, 
no text, educational and hopeful feel, wide composition
```

#### Icon
```
Simple watercolor icon of a single green leaf, transparent background, 
minimalist style, soft shadows, green (#1D7C5A) color palette, 
centered composition, 512x512
```

#### Persona Character
```
Watercolor illustration of a friendly female teacher with short brown hair, 
wearing an apron, kneeling next to children planting a seedling, 
cream background (#F3F1EA), warm earth tones with magenta (#FF2D7A) 
accents on clothing, educational style illustration
```

## Maintaining Consistency

### Character Descriptions

Create a reference document with exact character descriptions:

```markdown
## Teacher Character
- Female, approximately 35 years old
- Short brown hair
- Warm smile
- Wears: Green apron, comfortable clothing
- Personality: Nurturing, enthusiastic

## Student Characters
- Mixed group of children ages 7-10
- Diverse appearances
- Curious expressions
- Casual school clothing
```

### Style Reference

Keep a "style bible" with:
- 3-5 reference images that match your desired style
- Color swatches
- Line weight examples
- Level of detail examples

## Asset Organization

```
public/assets/
    backgrounds/
        bg-hero.png
        bg-about.png
        bg-features.png
    icons/
        leaf.png
        tree.png
        heart.png
    personas/
        persona-planting.png
        persona-celebration.png
    decor/
        vine-left.png
        vine-right.png
    logos/
        partner-logo-1.png
```

## Post-Processing

After generation, assets may need:

1. **Background Removal** - For icons and personas
2. **Color Correction** - Match exact brand colors
3. **Resizing** - Optimize for web (reduce file size)
4. **Format Conversion** - PNG for transparency, WebP for smaller size

### Recommended Tools
- Remove.bg or similar for background removal
- Photoshop/GIMP for color correction
- Squoosh.app for compression
- Any image editor for cropping

## Common Issues

**Issue:** Inconsistent style across generations
**Solution:** Use the same style keywords at the start of every prompt. Include "style of [previous image]" if the tool supports it.

**Issue:** Text appearing in images
**Solution:** Always include "no text" or "without text" in prompts.

**Issue:** Wrong aspect ratio
**Solution:** Specify dimensions explicitly: "wide landscape composition" or "square 1:1 format"

**Issue:** Colors don't match brand
**Solution:** Include exact hex values in prompts. May need post-processing color correction.

## Batch Generation Tips

When generating multiple similar assets:

1. Create one "hero" image first and refine until perfect
2. Use that image's prompt as a template
3. Only change the subject description
4. Generate remaining assets in batches

Example for icons:
```
# Base prompt (save this)
Simple watercolor icon of [SUBJECT], transparent background, 
minimalist style, soft shadows, green (#1D7C5A) and cream (#F3F1EA) 
color palette, centered, 512x512

# Then replace [SUBJECT] with:
- a single leaf
- a growing seedling
- an open book
- a heart shape
- a globe/earth
```

## Quality Checklist

Before finalizing assets:

- [ ] Consistent art style across all images
- [ ] Colors match brand palette
- [ ] No unwanted text or artifacts
- [ ] Appropriate resolution for intended use
- [ ] File size optimized for web
- [ ] Transparent backgrounds where needed
- [ ] Proper file naming convention

## Next Steps

After generating assets:
1. `/component-library.md` - Build components that use these assets
2. `/deployment.md` - Deploy your site with all assets

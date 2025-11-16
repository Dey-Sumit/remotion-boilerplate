# Design System Guidelines

## Overview
This design system emphasizes **professional minimalism** with clean aesthetics, proper spacing, and sophisticated visual hierarchy. No childish or amateur UI elements.

## UI Components
- Use Shadcn UI components as the base.
- Customize components to align with the professional minimalism theme using Tailwind CSS.
- Never ever modify the core Shadcn UI components directly.

## Typography
- **Primary Font**: Inter (system font)
- **Implementation**: Use `font-sans` class
- **Hierarchy**: Clear size jumps (text-sm → text-base → text-lg → text-xl → text-2xl)
- **Line Height**: Use `leading-relaxed` or `leading-6` for body text

## Color Palette
**Neutral Gray System** (no bright colors like emerald green):
- **Background**: `bg-background` (white)
- **Muted Background**: `bg-muted/50` for subtle containers
- **Text**: `text-foreground` (dark gray)
- **Muted Text**: `text-muted-foreground` (medium gray)
- **Borders**: `border-border` (light gray)
- **Accents**: `bg-accent` and `text-accent-foreground` for interactive elements

## Layout Principles
- **Container Constraints**: Max width `max-w-6xl`, max height `max-h-[800px]`
- **Centering**: Use flexbox with `flex items-center justify-center min-h-screen`
- **Spacing**: Generous but controlled whitespace using `gap-6`, `gap-8`, `p-6`, `p-8`
- **Grid Systems**: Use CSS Grid for complex layouts, Flexbox for most cases

## Visual Elements
- **NO Box Shadows**: Use subtle borders and background colors instead
- **Borders**: Subtle `border border-border rounded-lg`
- **Backgrounds**: Prefer `bg-muted/50` over harsh shadows
- **Corners**: Consistent `rounded-lg` for containers

## Component Patterns
- **Forms**: Clean inputs with proper labels, subtle borders
- **Buttons**: Solid backgrounds with hover states, no shadows
- **Cards**: Subtle borders, light backgrounds, proper padding
- **Scrollable Areas**: Clean scrollbars, proper spacing

## Spacing System
- **Container Padding**: `p-6` or `p-8`
- **Element Gaps**: `gap-4`, `gap-6`, `gap-8`
- **Section Spacing**: `space-y-4`, `space-y-6`
- **Avoid**: Excessive whitespace that creates empty, amateur layouts

## Professional Standards
- **Consistency**: Same patterns across all components
- **Accessibility**: Proper contrast ratios, semantic HTML
- **Responsiveness**: Mobile-first approach
- **Performance**: System fonts, minimal custom assets
- **Clean Code**: Semantic class names, organized structure

## What to Avoid
- Bright, childish colors (emerald green, bright blues, etc.)
- Box shadows and drop shadows
- Excessive animations or transitions
- Amateur spacing (too much or too little whitespace)
- Decorative fonts for body text
- Inconsistent component patterns
- Never ever modify the core Shadcn UI components directly.

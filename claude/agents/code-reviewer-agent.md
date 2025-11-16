# Code Review Guidelines

## Overview
This code reviewer agent ensures high-quality, maintainable, and performant code that follows best practices for **Remotion**, **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, and **CodeHike** projects.

## Tech Stack Standards

### Remotion
- **Deterministic Code**: Never use `Math.random()` - always use `random()` from 'remotion' with static seeds
- **useCurrentFrame**: Use for frame-based animations, ensure proper integration with sequences
- **Video Config**: Use `useVideoConfig()` hook for composition settings (fps, width, height, durationInFrames)
- **Interpolation**: Always include `extrapolateLeft: 'clamp'` and `extrapolateRight: 'clamp'` in `interpolate()` calls
- **Spring Animations**: Default damping should be 200 unless specified otherwise
- **Media Tags**: Use proper Remotion tags (`<Video>`, `<Audio>`, `<Img>`, `<Gif>`)
- **Asset Management**: Use `staticFile()` for public folder assets
- **Layering**: Use `<AbsoluteFill>` for overlapping elements
- **Sequences**: Properly use `<Sequence>`, `<Series>`, and `<TransitionSeries>` for timing

### React & TypeScript
- **Type Safety**: All components must have explicit TypeScript types
- **Props**: Use simple function type signatures - NEVER use `React.FC` or `React.FunctionComponent`
- **Hooks**: Follow React hooks rules (no conditional hooks, proper dependency arrays)
- **Component Structure**: Prefer functional components over class components
- **Exports**: Use named exports for better refactoring and tree-shaking
- **Avoid Any**: Never use `any` type - use proper types or `unknown` with type guards

### Next.js
- **File Structure**: Follow Next.js App Router conventions
- **Server Components**: Use server components by default, client components only when needed
- **Metadata**: Properly define page metadata for SEO
- **Route Handlers**: Follow REST conventions in API routes
- **Error Handling**: Implement proper error boundaries and error handling

### Tailwind CSS
- **Design System**: Follow the design guidelines (professional minimalism, no shadows)
- **Spacing**: Use consistent spacing scale (`gap-4`, `gap-6`, `gap-8`, `p-6`, `p-8`)
- **Colors**: Use semantic color tokens (`bg-background`, `text-foreground`, `border-border`)
- **Responsive**: Mobile-first approach with proper breakpoints
- **Class Organization**: Logical order (layout � spacing � colors � typography)
- **Avoid Arbitrary Values**: Use design tokens unless absolutely necessary

### Shadcn UI
- **Component Usage**: Use Shadcn UI components without modifying core files
- **Customization**: Extend components through composition and Tailwind classes
- **Imports**: Always import from `./ui/[component]` paths
- **Accessibility**: Maintain Radix UI accessibility features

## Code Quality Checks

### Performance
- **Memoization**: Use `useMemo`, `useCallback`, and `React.memo` appropriately
- **Lazy Loading**: Implement code splitting for large components
- **Bundle Size**: Avoid importing entire libraries when only using specific functions
- **Re-renders**: Prevent unnecessary re-renders with proper state management
- **Image Optimization**: Use Next.js `<Image>` component when appropriate

### Security
- **XSS Prevention**: Sanitize user input, avoid `dangerouslySetInnerHTML`
- **Authentication**: Implement proper auth checks in API routes and server components
- **Environment Variables**: Use `process.env` correctly, never expose secrets client-side
- **Dependencies**: Check for known vulnerabilities in packages
- **CORS**: Properly configure CORS in API routes if needed

### Maintainability
- **DRY Principle**: Extract reusable logic into hooks or utility functions
- **Single Responsibility**: Each function/component should do one thing well
- **Naming**: Use descriptive, semantic names (no `temp`, `data`, `handle` without context)
- **Comments**: Add comments for complex logic, not obvious code
- **File Organization**: Group related files, maintain clear folder structure
- **Magic Numbers**: Replace with named constants

### Testing Readiness
- **Testable Code**: Components should be easy to unit test
- **Pure Functions**: Prefer pure functions for business logic
- **Prop Drilling**: Avoid excessive prop drilling, use context when appropriate
- **Side Effects**: Isolate side effects for easier testing

## Common Issues to Flag

### React/Next.js
- Missing dependency arrays in useEffect/useMemo/useCallback
- State updates in render phase
- Unused state or variables
- Console.log statements left in production code
- Missing error boundaries for error-prone components
- Improper use of "use client" directive
- Fetching data in client components when it should be server-side

### Remotion Specific
- Using Math.random() instead of random()
- Missing extrapolate options in interpolate()
- Incorrect frame calculations in sequences
- Non-deterministic code that causes flicker
- Improper asset loading (not using staticFile)
- Missing useVideoConfig() when composition settings are needed

### TypeScript
- Using `any` type
- Using `React.FC` or `React.FunctionComponent` (use simple function signatures instead)
- Missing return types on functions
- Ignoring TypeScript errors with `@ts-ignore`
- Weak or incorrect type definitions
- Missing null checks for optional props

### Tailwind CSS
- Using arbitrary values excessively
- Inconsistent spacing scale
- Box shadows (violates design guidelines)
- Bright, childish colors (violates design guidelines)
- Missing responsive breakpoints
- Excessive custom CSS when Tailwind utilities exist

### General Code Smells
- Functions longer than 50 lines
- Deeply nested code (> 3 levels)
- Dead code or commented-out code
- Inconsistent formatting
- Missing error handling
- Hardcoded values that should be configurable

## Review Process

1. **Architecture**: Does the code follow project structure conventions?
2. **Types**: Are all types properly defined and used?
3. **Performance**: Are there any obvious performance bottlenecks?
4. **Security**: Are there any security vulnerabilities?
5. **Design System**: Does it follow the design guidelines?
6. **Remotion**: Are Remotion-specific patterns used correctly?
7. **Best Practices**: Does it follow React/Next.js/TypeScript best practices?
8. **Readability**: Is the code easy to understand and maintain?
9. **Edge Cases**: Are edge cases handled properly?
10. **Consistency**: Is the code consistent with the rest of the codebase?

## Review Priorities

**Critical Issues (Must Fix):**
- Security vulnerabilities
- TypeScript errors
- Non-deterministic Remotion code
- Breaking design system guidelines
- Performance issues causing poor UX

**Important Issues (Should Fix):**
- Missing types
- Poor accessibility
- Code duplication
- Missing error handling
- Inconsistent naming

**Minor Issues (Nice to Fix):**
- Code style inconsistencies
- Missing comments
- Suboptimal patterns
- Minor performance optimizations

## Example Review Format

### ✅ Good
```tsx
import { useCurrentFrame, interpolate } from 'remotion';

export const FadeIn = ({ children }: { children: React.ReactNode }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return <div style={{ opacity }}>{children}</div>;
};
```

### ❌ Bad
```tsx
// Bad: Using React.FC
export const FadeIn: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]); // Missing extrapolate options!

  return <div style={{ opacity }}>{children}</div>;
};

// Bad: Using any type
export const FadeIn = ({ children }: any) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]); // Missing extrapolate options!

  return <div style={{ opacity }}>{children}</div>;
};
```

## AI Code Review Checklist

When reviewing code, systematically check:
- [ ] TypeScript types are properly defined
- [ ] Remotion patterns are used correctly (no Math.random, proper interpolate usage)
- [ ] Design system guidelines are followed (no shadows, proper spacing)
- [ ] Shadcn UI components are not modified directly
- [ ] Security best practices are followed
- [ ] Performance optimizations are in place
- [ ] Code is maintainable and readable
- [ ] Error handling is implemented
- [ ] Accessibility is maintained
- [ ] Consistent code style throughout

always use pnpm as package manager

Tech stack:
 - Remotion (for video generation) (about-remotion.md contains more about remotion)
 - Codehike (for code presentation in videos)
 - Tailwind CSS (for styling)
 - TypeScript (for type safety)
 - Next js and React (for building UI components)

## Coding Guidelines

### TypeScript & React Components
- **NEVER use `React.FC` or `React.FunctionComponent`** - use simple function type signatures instead
- Always use explicit type annotations for component props
- Example:
  ```tsx
  // ✅ Good
  export const MyComponent = ({ title, count }: { title: string; count: number }) => {
    return <div>{title}: {count}</div>;
  };

  // ❌ Bad
  export const MyComponent: React.FC<{ title: string; count: number }> = ({ title, count }) => {
    return <div>{title}: {count}</div>;
  };
  ```

### General TypeScript
- Never use `any` type - use proper types or `unknown` with type guards
- Use named exports for better refactoring
- Always provide explicit return types for functions

Mcps Available:

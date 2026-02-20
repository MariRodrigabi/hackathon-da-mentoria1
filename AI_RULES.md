# AI Development Rules

This document outlines the rules and conventions for the AI assistant to follow when developing this application. Its purpose is to ensure consistency, maintainability, and adherence to the project's architectural choices.

## Tech Stack

- **Framework**: React 19, built as a single-page application.
- **Language**: TypeScript for type safety and improved developer experience.
- **Build Tool**: Vite for a fast and modern development environment.
- **Styling**: Tailwind CSS is used exclusively for styling. All styles should be applied via utility classes directly in the component files.
- **State Management**: Local component state is managed with React Hooks (`useState`).
- **Component Architecture**: The application is built with small, reusable components located in the `src/components` directory.
- **Static Data**: Application constants and static data (like testimonials) are stored in `src/constants.ts`.

## Library and Coding Conventions

### Styling
- **Primary Method**: Always use Tailwind CSS utility classes. Avoid writing custom CSS files or using inline `style` objects unless absolutely necessary for dynamic properties that cannot be handled by Tailwind.
- **Responsiveness**: All new components and layouts must be fully responsive using Tailwind's breakpoint prefixes (e.g., `md:`, `lg:`).

### UI Components
- **Creation**: New components should be created in their own file within `src/components`. Keep components small and focused on a single responsibility.
- **Component Library**: Do not introduce a third-party component library like Material-UI or Ant Design. We will build custom components using Tailwind CSS. For complex, unstyled components (like dialogs or dropdowns), we can use Headless UI if needed.

### Icons
- **Preferred Library**: For any new icons, please use the `lucide-react` library. It's lightweight, tree-shakable, and integrates well with Tailwind CSS.
- **Usage**: Import icons directly from `lucide-react` and style them with Tailwind's `className` prop (e.g., `className="h-5 w-5 text-blue-400"`).

### Routing
- **Library**: If the application needs to expand to multiple pages, use `react-router-dom` for all routing.
- **Structure**: Page components should be placed in a new `src/pages` directory.

### State Management
- **Local State**: Continue using `useState` for state that is local to a single component.
- **Shared State**: For state that needs to be shared between a few components, lift state up to the nearest common ancestor. If this becomes cumbersome, React Context (`useContext`) is the preferred solution. Do not add a global state library like Redux or Zustand without discussion.
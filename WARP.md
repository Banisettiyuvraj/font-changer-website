# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Font Changer Website is a modern, interactive font preview and comparison tool built with React 18, TypeScript, and Tailwind CSS. It provides a comprehensive font library with real-time preview capabilities, advanced typography controls, and export functionality for CSS styles.

## Development Commands

### Core Development
- `npm run dev` - Start development server (runs on http://localhost:3000, auto-opens browser)
- `npm run build` - Build for production (TypeScript compilation + Vite build, outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint with TypeScript rules (reports unused disable directives, max 0 warnings)
- `npm run format` - Format all code with Prettier

### Testing & Quality
- No test framework is currently configured
- ESLint is configured with TypeScript, React hooks, and React refresh rules
- Prettier is configured for code formatting

## Project Architecture

### Core Technology Stack
- **Frontend Framework**: React 18 with TypeScript (ES2020 target)
- **Build Tool**: Vite 4.5+ with React plugin
- **Styling**: Tailwind CSS 3.3+ with PostCSS and Autoprefixer
- **State Management**: React hooks (no external state library)
- **Icons**: Lucide React
- **Utilities**: clsx + tailwind-merge for conditional styling

### Directory Structure
```
src/
├── components/          # React components (FontCard, FontControls, FontPreview)
├── data/               # Static data (fonts.ts - contains 30+ font definitions)
├── hooks/              # Custom React hooks (useFontSettings for font state management)
├── types/              # TypeScript type definitions (font interfaces)
├── utils/              # Utility functions (filtering, CSS generation, file operations)
├── App.tsx             # Main application component with layout and state orchestration
├── main.tsx            # React app entry point
└── index.css           # Global styles with Tailwind layers and custom components
```

### Key Architectural Patterns

#### Font Data Management
- **Static Font Database**: `src/data/fonts.ts` contains comprehensive font definitions with metadata (weights, styles, popularity, Google Fonts/web-safe flags)
- **Type System**: Strong TypeScript interfaces in `src/types/font.ts` define Font, FontSettings, FontFilter, and FontPair structures
- **Filtering & Search**: Pure utility functions in `src/utils/index.ts` handle font filtering by category, search terms, and source type

#### State Management Architecture
- **useFontSettings Hook**: Central hook managing font selection, typography settings (size, weight, style, line height, letter spacing, color), and preview text
- **Smart Font Selection**: Automatically adjusts weight and style when switching fonts based on availability
- **Debounced Search**: Performance-optimized search with 300ms debounce to prevent excessive filtering

#### Component Architecture
- **Layout**: Three-column responsive grid (font list, preview, controls) with sticky positioning
- **FontCard**: Reusable font preview cards with selection state and hover effects
- **FontPreview**: Main preview area with customizable preview text
- **FontControls**: Typography control panel with range sliders and dropdowns

### Styling System
- **Custom Tailwind Classes**: Defined in `index.css` for font cards, control panels, buttons, and inputs
- **Design Tokens**: Extended Tailwind config with custom font families, animations, and keyframes
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Performance**: Custom scrollbar styling and smooth transitions

### Font Loading Strategy
- **Google Fonts**: Dynamically loaded fonts with fallback font stacks
- **Web Safe Fonts**: System fonts for immediate rendering
- **Font Fallbacks**: Category-based fallback chains (serif → Georgia, sans-serif → Arial, etc.)

### Export & Utility Features
- **CSS Generation**: Utility functions to generate CSS rules from font settings
- **Clipboard Operations**: Copy CSS to clipboard functionality
- **File Downloads**: Generate and download CSS files
- **Responsive Font Preview**: Real-time typography adjustment with live preview

## Development Notes

### Font System Integration
When adding new fonts, update the `FONTS` array in `src/data/fonts.ts` with complete metadata including weights, styles, popularity ranking, and Google Fonts/web-safe classification.

### State Management
The `useFontSettings` hook is the single source of truth for typography state. When adding new font properties, extend the `FontSettings` interface and update the hook accordingly.

### Performance Considerations
- Search is debounced to 300ms to prevent excessive re-renders
- Font filtering uses memoized computations with dependency tracking
- Font list is popularity-sorted for better UX

### Styling Guidelines
- Use existing Tailwind custom classes from `index.css` for consistency
- Follow the established color scheme (blue primary, gray neutrals)
- Maintain responsive design patterns with mobile-first approach

## Browser Requirements
- Modern browsers with ES2020 support
- CSS Custom Properties support
- JavaScript clipboard API for copy functionality
- CSS Grid and Flexbox support for layout

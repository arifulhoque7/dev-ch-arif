# React App

A modern React application built with Vite, TypeScript, and Tailwind CSS.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/arifulhoque7/dev-ch-arif
cd dev-ch-arif
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Build

Build the production-ready app:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Project Structure

```
react-app/
├── src/
│   ├── components/       # React components
│   │   ├── CallToAction.tsx
│   │   ├── CardsImage.tsx
│   │   ├── CompaniesSection.tsx
│   │   ├── CreditCards.tsx
│   │   ├── HeroSection.tsx
│   │   └── Navbar.tsx
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── vite-env.d.ts     # TypeScript environment definitions
├── public/               # Static assets
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## License

ISC
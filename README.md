# Portfolio Site (tanabee.github.io)

This is a portfolio site built with [Next.js](https://nextjs.org) and [Firebase](https://firebase.google.com/).

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Install dependencies with legacy peer deps (due to React 19 & react-simple-maps conflict):

```bash
npm install --legacy-peer-deps
```

### Running Locally

Start the Firebase Emulators (recommended):

```bash
npm start
```

This command runs `firebase emulators:start`.
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Other Commands

- `npm run dev`: Run Next.js development server directly
- `npm run build`: Build the application
- `npm run kill`: Kill process on port 3000 (useful if emulator hangs)
- `npm run lint`: Run ESLint

## Tech Stack

- **Framework**: Next.js 16
- **Library**: React 19
- **Hosting**: Firebase App Hosting
- **Visualization**: react-simple-maps, d3-scale
- **Icons**: react-icons

## Deploy

This project is configured for Firebase App Hosting.

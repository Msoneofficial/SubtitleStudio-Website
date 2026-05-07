# Subtitle Studio Website

A modern, responsive website for Subtitle Studio - an open-source subtitle editor.

## Project Structure

```
.
├── index.html              # Main HTML file
├── src/
│   └── styles.css         # Tailwind CSS input file with custom styles
├── dist/
│   └── styles.css         # Compiled CSS (generated)
├── package.json           # npm dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
└── .vscode/
    └── tasks.json         # VS Code build tasks
```

## Development

### Prerequisites

- Node.js and npm installed

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

### Building

**Build CSS (one-time):**
```bash
npm run build
```

**Watch for changes (during development):**
```bash
npm run dev
```

Or use VS Code tasks:
- Press `Ctrl+Shift+B` (or `Cmd+Shift+B` on Mac) to run the default build task
- Select "Tailwind: Watch CSS" to watch for changes

## Styling

All styles are managed through Tailwind CSS:

- **Base styles**: `src/styles.css` contains Tailwind directives and custom CSS classes
- **Configuration**: `tailwind.config.js` defines custom theme extensions (colors, fonts, etc.)
- **Output**: `dist/styles.css` is the compiled CSS file included in `index.html`

### Custom Classes

Custom CSS classes are defined in `src/styles.css`:
- `.wave-bar` - Waveform animation
- `.glitch` - Glitch text effect
- `.feature-card` - Feature card hover effects
- `.dl-btn` - Download button with animation
- `.ticker-track` - Scrolling ticker animation
- `.reveal` - Scroll reveal animation

## Features

- ✨ Modern design with custom animations
- 📱 Fully responsive layout
- 🎨 Custom brand colors and typography
- ⚡ Optimized Tailwind CSS build
- 🔄 Watch mode for development
- 🎯 Semantic HTML structure

## Color Palette

- **ink** (#0a0a0f) - Dark background
- **paper** (#f5f3ef) - Light text
- **accent** (#e8ff47) - Highlight accent
- **dim** (#1c1c24) - Secondary background
- **muted** (#5a5a72) - Secondary text
- **border** (#2a2a38) - Border color

## Fonts

- **Display**: Syne (900, 800, 700, 600)
- **Body**: DM Sans (300-500)
- **Mono**: DM Mono (300, 400)

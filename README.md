# Gavin Antonacci - Portfolio Website

Professional portfolio website built with Vite, ES6 modules, and modern best practices.

## Features

- **Modern Architecture**: ES6 modules with class-based components
- **Build Tool**: Vite for fast development and optimized production builds
- **Theme Toggle**: Light/Dark mode with localStorage persistence
- **Responsive Design**: Mobile, tablet, and desktop layouts
- **Email Copy**: Click-to-copy email functionality with toast notifications
- **Link Prefetching**: Instant page loading with intelligent prefetching
- **Code Quality**: ESLint and Prettier for consistent code style
- **Accessibility**: Keyboard navigation, ARIA labels, and focus states

## Project Structure

```
Personal_Website/
├── .eslintrc.json          # ESLint configuration (legacy)
├── .gitignore              # Git ignore rules
├── .prettierrc             # Prettier configuration
├── eslint.config.js        # ESLint flat config (ESLint 9+)
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite build configuration
├── index.html              # Main HTML entry point
├── src/
│   ├── main.js             # JavaScript entry point
│   ├── js/
│   │   ├── config/
│   │   │   └── constants.js    # Single source of truth for config
│   │   └── modules/
│   │       ├── theme.js            # Theme toggle functionality
│   │       ├── email-copy.js       # Email copy to clipboard
│   │       ├── prefetch.js         # Link prefetching
│   │       ├── smooth-scroll.js    # Smooth scrolling
│   │       └── entrance-animation.js # Page load animation
│   └── styles/
│       └── main.css        # Organized CSS with CSS variables
└── public/
    └── assets/
        └── resume_gavin_antonacci_2026_v1.pdf  # Resume file
```

## Prerequisites

- Node.js 18+ (includes npm)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/imhubgitting/Personal_Website.git
cd Personal_Website
```

2. Install dependencies:

```bash
npm install
```

## Development

### Start Development Server

Run the Vite development server with hot module reloading:

```bash
npm run dev
```

The site will open automatically at [http://localhost:3000](http://localhost:3000)

### Build for Production

Create an optimized production build:

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Code Quality

Run ESLint to check for code issues:

```bash
npm run lint
```

Auto-fix ESLint issues:

```bash
npm run lint:fix
```

Format code with Prettier:

```bash
npm run format
```

## Customization

### Update Personal Information

Edit [src/js/config/constants.js](src/js/config/constants.js):

```javascript
export const CONFIG = {
  email: 'your-email@example.com',
  social: {
    linkedin: 'https://linkedin.com/in/your-profile',
    github: 'https://github.com/your-username',
  },
  // ... other settings
};
```

### Update HTML Content

Edit [index.html](index.html):

- **Line 14**: Your name
- **Line 15**: Your title
- **Line 42**: Bio paragraph
- **Lines 45-69**: Social links

### Customize Colors

Edit [src/styles/main.css](src/styles/main.css) CSS variables:

```css
:root {
  --color-bg-primary: #f7f7f7;
  --color-accent-blue: #60a5fa;
  /* ... other variables */
}
```

### Add Your Resume

1. Place your resume PDF in `public/assets/`
2. Update the filename in [src/js/config/constants.js](src/js/config/constants.js):

```javascript
files: {
  cv: '/assets/your-cv.pdf',
  resume: '/assets/your-resume.pdf',
}
```

## Deployment

### GitHub Pages

1. Build the project:

```bash
npm run build
```

2. Deploy the `dist/` folder to GitHub Pages

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect Vite and configure correctly

## Technologies

- **Vite 7**: Build tool and dev server
- **ES6 Modules**: Modern JavaScript architecture
- **CSS Variables**: Dynamic theming
- **ESLint 9**: Code linting with flat config
- **Prettier 3**: Code formatting
- **HTML5**: Semantic markup

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - See repository for details

## Contact

**Gavin Antonacci**

- Email: gavinaantonacci@gmail.com
- GitHub: [imhubgitting](https://github.com/imhubgitting)
- LinkedIn: [Gavin Antonacci](https://www.linkedin.com/in/gavin-antonacci-6b4b342a9/)

---

Built with modern web technologies and best practices.

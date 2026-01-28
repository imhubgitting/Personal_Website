# Personal Website - Gavin Antonacci

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. Features a clean design with light/dark theme toggle functionality.

## Features

- Clean, minimal design matching modern web standards
- Light/Dark theme toggle with localStorage persistence
- Responsive design (mobile, tablet, desktop)
- Social media links section
- CV download functionality
- Email and online status display
- Smooth animations and transitions
- Accessibility-friendly (keyboard navigation, focus states)

## Project Structure

```
Personal_Website/
├── index.html          # Main HTML file
├── styles.css          # Styling for light/dark themes
├── script.js           # Theme toggle and interactions
├── assets/
│   └── cv/
│       └── README.txt  # Instructions for adding your CV
└── README.md           # This file
```

## How to Run

This is a static website that doesn't require any build tools or servers. Simply:

1. Open `index.html` in your web browser
2. Or use a local server:
   - Python: `python -m http.server 8000`
   - Node.js: `npx serve`
   - VS Code: Use the Live Server extension

## Customization Guide

### 1. Update Personal Information

Open [index.html](index.html) and update:

- **Line 10**: Page title
- **Line 18-19**: Your name and title
- **Line 48**: Bio paragraph
- **Line 51-140**: Social media links

### 2. Add Your Social Links

Replace the placeholder `href="#"` attributes with your actual URLs:

```html
<!-- Example: Update LinkedIn -->
<a href="https://www.linkedin.com/in/your-profile" class="social-card" target="_blank">
```

Update these sections:
- LinkedIn (line ~51)
- GitHub (line ~63)
- Social Link 1-4 (lines ~75-140)

You can also change the card text and icons to match your preferred social platforms.

### 3. Add Your CV

1. Place your CV PDF in the `assets/cv/` folder
2. Update the download link in [index.html](index.html) (line ~155):

```html
<a href="assets/cv/YOUR_CV_FILENAME.pdf" download class="cv-button">
```

### 4. Customize Colors

Edit [styles.css](styles.css) to change the color scheme:

**Light Theme** (line 11-21):
```css
:root {
    --bg-primary: #f7f7f7;      /* Background color */
    --accent-blue: #60a5fa;      /* Button and link color */
    /* ... other colors */
}
```

**Dark Theme** (line 24-34):
```css
body.dark-theme {
    --bg-primary: #0f172a;       /* Dark background */
    /* ... other colors */
}
```

### 5. Update Navigation Links

The navigation links (/projects, /articles, /about) are currently placeholders. To make them functional:

**Option 1**: Create separate HTML pages
```
/projects.html
/articles.html
/about.html
```

**Option 2**: Add sections to the same page and update links:
```html
<a href="#projects" class="nav-link">/projects</a>
```

### 6. Customize Footer

Edit line ~170 in [index.html](index.html):
```html
<p class="footer-message">Your custom message here</p>
```

## Browser Compatibility

Tested and working on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties (CSS variables), Flexbox, responsive design
- **JavaScript**: Theme toggle, localStorage, smooth animations
- **SVG Icons**: Inline icons for scalability and customization

## Theme Toggle

The theme toggle button (sun/moon icon) switches between light and dark modes:
- Click to toggle themes
- Preference saved in browser localStorage
- Theme persists across page reloads
- Keyboard accessible (Tab + Enter/Space)

## Deployment

### GitHub Pages

1. Commit all changes:
```bash
git add .
git commit -m "Initial website setup"
```

2. Push to GitHub:
```bash
git push origin main
```

3. Go to repository Settings > Pages
4. Select "main" branch as source
5. Your site will be live at: `https://yourusername.github.io/Personal_Website/`

### Other Hosting Options

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **Cloudflare Pages**: Connect your GitHub repository
- **Traditional hosting**: Upload files via FTP

## Responsive Breakpoints

- **Desktop**: 1000px+ (max-width container)
- **Tablet**: 768px - 1000px
- **Mobile**: < 768px (stacked layout)
- **Small Mobile**: < 480px (compact spacing)

## Accessibility Features

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states for all interactive elements
- Color contrast ratios meet WCAG standards
- Alt text for icons (where applicable)

## Future Enhancements

Potential additions you might consider:

- [ ] Create dedicated /projects page with project cards
- [ ] Create dedicated /articles page with blog posts
- [ ] Create dedicated /about page with detailed bio
- [ ] Add contact form
- [ ] Add animations on scroll (AOS library)
- [ ] Integrate with a CMS for blog functionality
- [ ] Add analytics (Google Analytics, Plausible)
- [ ] Add RSS feed for articles
- [ ] Create a sitemap for SEO

## License

This project is open source and available for personal use.

## Contact

**Gavin Antonacci**
- Email: gavinaantonacci@gmail.com
- GitHub: [Add your GitHub URL]
- LinkedIn: [Add your LinkedIn URL]

---

**Work In Progress :)**

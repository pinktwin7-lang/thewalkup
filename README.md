# The Walk Up - Home Cocktail Bar Website

A sophisticated website for your home cocktail bar, featuring an elegant menu of craft cocktails inspired by NYC nightlife.

## Features

- ✨ Full-width hero section with background image
- 🍸 Clean, editorial cocktail menu layout
- 🔍 Real-time search by name or ingredient
- 📱 Fully responsive design
- 🎨 Maroon and cream color scheme
- 🔤 Darline serif typography

## Quick Start

1. Open `index.html` in your web browser
2. That's it! The site is ready to use.

## Adding Your Hero Image

To add your custom background image to the hero section:

1. Save your image as `hero-image.jpg` in the same folder as `index.html`
2. Update `styles.css` - find the `.hero-background` section (around line 80) and update it:

```css
.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('hero-image.jpg');  /* Add this line */
    background-size: cover;                    /* Add this line */
    background-position: center;               /* Add this line */
}
```

The placeholder gradient will be replaced with your full-width image.

## Customization

### Colors
Edit the CSS variables in `styles.css` (lines 2-8) to change the color scheme:

```css
:root {
    --color-burgundy: #7A3D3D;
    --color-olive: #6B7556;
    --color-tan: #A67C52;
    /* ... */
}
```

### Cocktails
Edit the `cocktails` array in `script.js` to add, remove, or modify cocktails.

### Description
Edit the hero description in `index.html` (around line 27) to personalize your story.

## Deployment

This is a static website with no dependencies. You can host it anywhere:

- **GitHub Pages**: Push to a repo and enable GitHub Pages
- **Netlify**: Drag and drop the folder
- **Vercel**: Import the project
- **Any web server**: Upload the files via FTP

## Technologies

- Pure HTML5, CSS3, JavaScript (no frameworks or dependencies)
- Google Fonts: Cormorant Garamond & Montserrat
- Fully client-side, no backend required

---

Enjoy your home bar! 🍸

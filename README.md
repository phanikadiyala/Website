# Phani Kadiyala – Portfolio Website

A React portfolio website built with Create React App, CSS Modules, and Google Fonts.

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx          + Hero.module.css
│   │   ├── Skills.jsx        + Skills.module.css
│   │   ├── Experience.jsx    + Experience.module.css
│   │   ├── Education.jsx     + Education.module.css
│   │   └── Contact.jsx       + Contact.module.css
│   ├── App.jsx
│   ├── index.js
│   └── index.css
└── package.json
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm start
```
Opens at http://localhost:3000

### 3. Build for production
```bash
npm run build
```
Output goes to the `build/` folder — ready to deploy to Netlify, Vercel, or GitHub Pages.

## Customization

- **Colors & fonts** — edit CSS variables in `src/index.css` (`:root` block)
- **Content** — edit data arrays at the top of each component file
- **Add a photo** — place an image in `public/` and add an `<img>` tag in `Hero.jsx`
- **Add projects section** — create `src/components/Projects.jsx` and import it in `App.jsx`

## Deploy to Vercel (easiest)
1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import your repo
3. Vercel auto-detects Create React App and deploys it

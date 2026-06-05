# Bollam Laxmi Spandana Portfolio

Modern responsive portfolio website built with React, Vite, Tailwind CSS, Framer Motion, React Icons, and EmailJS.

## Features

- Responsive mobile, tablet, and desktop layout
- Dark and light mode toggle with local persistence
- Smooth scrolling navigation
- Glassmorphism cards with scroll reveal animations
- Hero, About, Skills, Experience, Projects, Publications, Achievements, NCC, Resume, Contact, and Footer sections
- Config-driven content in `src/data/portfolio.js`
- EmailJS-ready contact form
- Vercel deployable

## Project Structure

```text
public/
  assets/
    documents/
      resume.pdf
      ncc-certificate.pdf
    images/
      profile-placeholder.svg
      ncc-placeholder.svg
      project-bci.svg
      project-foodsprint.svg
      project-hotel.svg
src/
  components/
  data/
    portfolio.js
  App.jsx
  index.css
  main.jsx
```

## Update Content

Edit `src/data/portfolio.js` to update text, social links, project links, publication links, EmailJS credentials, photo paths, resume path, and NCC certificate path.

Replace placeholder files in `public/assets/images` and `public/assets/documents` with real files. Keep the same filenames or update the paths in the config file.

## EmailJS Setup

1. Create an EmailJS account.
2. Create a service and email template.
3. Replace `YOUR_EMAILJS_SERVICE_ID`, `YOUR_EMAILJS_TEMPLATE_ID`, and `YOUR_EMAILJS_PUBLIC_KEY` in `src/data/portfolio.js`.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Use these defaults:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

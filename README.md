# Birthday Wishes Website for Sreya 💫

A beautiful, romantic birthday wishes website with elegant animations and a soft pastel theme.

## Features

- 🎨 Romantic & elegant minimal design with soft pastel colors
- ✨ Smooth scroll-triggered animations
- 📱 Fully responsive (mobile & desktop)
- 🖼️ Integrated photo gallery with your memories
- 🌸 Subtle floating elements (sparkles, hearts, flowers)
- 💫 Animated text reveals
- 🎭 Framer Motion animations

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Photos

Create a folder `public/images/` and add your 8 photos with these names:
- `photo1.jpg` - First outdoor photo
- `photo2.jpg` - Second college photo
- `photo3.jpg` - Graduation photo
- `photo4.jpg` - Close moment photo
- `photo5.jpg` - Sunflower photo
- `photo6.jpg` - Flowers photo
- `photo7.jpg` - Happy moment photo
- `photo8.jpg` - Together photo

You can use JPG or PNG format. The website will automatically scale and optimize them.

### 3. Run Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

The build files will be in the `dist/` folder, ready to deploy.

## Customization

### Colors
Edit the CSS files in `src/components/` to change the color scheme. Current palette:
- Primary: `#f5a3c7` (soft pink)
- Secondary: `#d8a7e5` (lavender)
- Background: Gradient from `#fef5f7` to `#f0e6f5`

### Fonts
The website uses:
- **Playfair Display** for headings (elegant serif)
- **Raleway** for body text (clean sans-serif)

### Message Content
Edit `src/components/MessageSection.jsx` to modify the birthday message text.

## Deployment Options

You can deploy this website to:
- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag & drop the `dist/` folder
- **GitHub Pages**: Push to GitHub and enable Pages

## Tech Stack

- React 18
- Vite
- Framer Motion (animations)
- React Intersection Observer (scroll triggers)

---

Made with 💖 for Sreya's Birthday

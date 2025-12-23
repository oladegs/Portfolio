# Portfolio Website - Fuwad Oladega

A clean, professional, responsive portfolio website built with HTML, Bootstrap 5, and vanilla JavaScript.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme Toggle**: Persistent theme preference saved to localStorage
- **Smooth Scrolling**: Navigate seamlessly between sections
- **Active Navigation Highlighting**: Current section is highlighted in the navbar
- **Modern Design**: Professional layout with emerald green accent color
- **Sections Include**:
  - Hero/Home with profile card
  - About with detailed bio
  - What I Do services
  - Experience timeline
  - Projects grid showcase
  - Documents library
  - Contact form with quick channels
  - How I Work principles

## 📁 File Structure

```
Portfolio/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css     # Custom styles with CSS variables
│   ├── js/
│   │   └── main.js        # JavaScript functionality
│   └── img/
│       └── profile.svg    # Placeholder profile image
└── README.md              # This file
```

## 🎨 Tech Stack

- **HTML5**: Semantic markup
- **Bootstrap 5.3.2**: Via CDN for responsive layout
- **Bootstrap Icons**: Via CDN for iconography
- **Vanilla JavaScript**: No frameworks or build tools
- **CSS Variables**: For easy theme customization

## 🔧 Setup & Usage

### Option 1: Open Directly

Simply open `index.html` in your web browser:

- Double-click the file, or
- Right-click → "Open with" → Choose your browser

### Option 2: Use a Local Server (Recommended)

For the best experience, use a local development server:

**Using Python:**

```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

**Using Node.js (http-server):**

```bash
npx http-server -p 8000
```

**Using VS Code:**

- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

## 🎨 Customization Guide

### 1. Update Personal Information

**In `index.html`, search and replace:**

- `Fuwad Oladega` → Your name
- `oladegafuwad@gmail.com` → Your email
- `fuwad-oladega` → Your LinkedIn username
- `@Fuwad2000` → Your GitHub username

### 2. Replace Profile Image

Replace `assets/img/profile.svg` with your photo:

- Use `.jpg`, `.png`, or keep `.svg`
- Recommended size: 600x600px or larger
- Update the file path in `index.html` if needed

### 3. Customize Colors

Edit CSS variables in `assets/css/styles.css`:

```css
:root {
  --accent-primary: #10b981; /* Change to your preferred color */
  --accent-hover: #059669; /* Darker shade of accent */
}
```

### 4. Update Content

All content is in `index.html`. Each section is clearly marked with comments:

- Hero section: Lines ~60-130
- About section: Lines ~135-195
- Experience section: Lines ~245-380
- Projects section: Lines ~385-620
- Documents section: Lines ~625-780
- Contact section: Lines ~785-920

### 5. Add Real Links

Replace placeholder links (`#`) with your actual URLs:

- GitHub repositories
- Live project demos
- Social media profiles
- Document downloads

## 🌓 Theme System

The website includes a light/dark theme toggle:

- **Light Theme**: Clean white background with emerald accents
- **Dark Theme**: Deep navy background (#0B1220) with same accents
- Theme preference is saved to `localStorage`
- Smooth transitions between themes

## 📱 Responsive Breakpoints

- Desktop: 1200px and above
- Laptop: 992px - 1199px
- Tablet: 768px - 991px
- Mobile: Below 768px

## ✨ Features Breakdown

### Theme Toggle

- Click the sun/moon icon in the navbar
- Preference is saved and restored on next visit

### Smooth Scrolling

- Click any navigation link for smooth scroll
- Mobile menu auto-closes after selection

### Active Section Highlighting

- Uses Intersection Observer API
- Highlights current section in navbar
- Updates as you scroll

### Contact Form

- Client-side validation
- Shows success/error messages
- Form data logged to console (connect to backend)

## 🔄 Next Steps

1. **Replace placeholder image** with your professional photo
2. **Update all text content** with your actual information
3. **Add real project links** to GitHub and live demos
4. **Connect contact form** to a backend service (e.g., Formspree, EmailJS)
5. **Add your actual documents** (resume, certificates) to download
6. **Update social media links** with your profiles
7. **Test on multiple devices** to ensure responsiveness
8. **Deploy to hosting** (GitHub Pages, Netlify, Vercel)

## 🚀 Deployment Options

### GitHub Pages

1. Create a GitHub repository
2. Push your code
3. Go to Settings → Pages
4. Select branch and save
5. Your site will be live at `username.github.io/repo-name`

### Netlify

1. Drag and drop the Portfolio folder to Netlify
2. Or connect your GitHub repository
3. Site will be live instantly

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the Portfolio directory
3. Follow the prompts

## 📄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This portfolio template is free to use for personal and commercial projects.

## 🤝 Credits

- **Bootstrap 5**: https://getbootstrap.com
- **Bootstrap Icons**: https://icons.getbootstrap.com
- **Design Inspiration**: Modern portfolio best practices

---

**Built with ❤️ using HTML, Bootstrap 5, and vanilla JavaScript**

For questions or customization help, feel free to reach out!

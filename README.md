# Maciej Leoniak's Portfolio

A modern React-based portfolio website built with Vite and automatically deployed to GitHub Pages via GitHub Actions.

## 🚀 Features

- **React 18** - Modern UI library
- **Vite** - Fast build tool and development server
- **Dark Mode** - Toggle between light and dark themes (saved to localStorage)
- **Responsive Design** - Mobile-friendly layout
- **GitHub Actions** - Automatic CI/CD pipeline for deployment
- **Tech Stack Carousel** - Showcasing technologies and tools
- **GitHub Pages Hosting** - Free hosting with automatic deployments

## 📁 Project Structure

```
maciejleoniak.github.io/
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation and dark mode toggle
│   │   ├── Intro.jsx       # Introduction section with avatar
│   │   ├── TechStack.jsx   # Tech stack description
│   │   ├── Carousel.jsx    # Animated technology carousel
│   │   └── Footer.jsx      # Footer with copyright
│   ├── App.jsx             # Main application component
│   ├── App.css             # App styles
│   ├── index.css           # Global styles
│   └── main.jsx            # React entry point
├── public/                 # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
└── index.html              # HTML entry point
```

## 🛠️ Development

### Prerequisites
- Node.js 16+ (18+ recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/maciejleoniak/maciejleoniak.github.io.git
cd maciejleoniak.github.io

# Install dependencies
npm install
```

### Running Locally

```bash
# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Building for Production

```bash
# Build the optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

## 🚢 Deployment

The portfolio is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### GitHub Actions Workflow

The `.github/workflows/deploy.yml` file:
1. Installs dependencies
2. Builds the React app with Vite
3. Deploys to GitHub Pages

**No manual deployment steps needed!** Just push to main and GitHub Actions handles the rest.

### Configure GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages"
3. Set source to "Deploy from a branch"
4. Select `gh-pages` branch (created automatically by the workflow)
5. Save

## 📝 Content

The portfolio includes:
- **Introduction** - Brief bio and professional background
- **Tech Stack** - Description of technologies used
- **Carousel** - Animated display of tools and technologies (HTML, JavaScript, Cypress, Python, Pytest, Selenium, Playwright, ChatGPT)
- **Dark Mode** - Toggle-able dark theme with localStorage persistence

## 🎨 Styling

- Global styles in `src/index.css`
- Component-specific CSS files for organization
- Dark mode implementation with CSS classes
- Responsive design with media queries

## ✨ Key Components

### Header
- Navigation menu
- Dark mode toggle button
- Sticky positioning

### Intro
- Welcome message
- Professional biography
- Avatar image from repository

### TechStack
- Description of technology approach
- Introduction to carousel

### Carousel
- Auto-scrolling animation
- Technology logos
- Infinite loop effect

### Footer
- Copyright information
- Year auto-update

## 🔄 Updating Content

To update the portfolio content:

1. Edit component files in `src/components/`
2. Update text directly in JSX
3. Modify styles in CSS files
4. Commit and push to `main` branch
5. GitHub Actions automatically deploys the changes

## 📱 Responsive Breakpoints

- Tablet: 768px and below
- Mobile: Adjusted padding and font sizes
- Full-width layout maintained across devices

## 🌙 Dark Mode

Dark mode preference is automatically saved to browser localStorage and persists across sessions.

## 📦 Dependencies

- **react** - UI framework
- **react-dom** - React rendering
- **vite** - Build tool
- **@vitejs/plugin-react** - React support for Vite

## 🔗 Links

- **Live Site**: https://maciejleoniak.github.io/maciejleoniak.github.io/
- **Repository**: https://github.com/maciejleoniak/maciejleoniak.github.io

## 📄 License

No rights reserved © 2024 Maciej Leoniak
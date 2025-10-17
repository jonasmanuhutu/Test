# Jonas Manuhutu - Cinematic Portfolio Website

A fully functional, dark-style cinematic portfolio website for Jonas Manuhutu, a freelance lighting programmer/operator and video-/photographer based in Breda, Netherlands.

![Portfolio Preview](https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071)

## 🎬 Features

### Cinematic Aesthetic
- **Dark Theme**: Deep blacks, subtle gradients, and glowing highlights in cyan and amber
- **Film Grain Effect**: Subtle texture overlay for authentic cinematic feel
- **Smooth Animations**: Page load animations, scroll-triggered transitions, and interactive elements
- **3D Elements**: Interactive 3D camera and lighting models using Three.js
- **Parallax Effects**: Mouse-based depth movement on hero elements
- **Glass Morphism**: Modern frosted glass effects throughout the UI

### Sections

#### 🎯 Hero Section
- Cinematic background with gradient overlay
- Animated light beams
- Glowing typography with sweep animations
- Smooth scroll indicator
- Mouse parallax effect

#### 👤 About Section
- Dynamic spotlight effect on profile image
- Interactive experience timeline
- Animated statistics cards
- Hover effects and transitions

#### 🎨 Portfolio Section
- Filterable project grid (All, Lighting Design, Photography, Video Work)
- Smooth category transitions
- Hover light sweep effects
- Full-screen modal gallery
- Cinematic project cards

#### ⚙️ Gear Section
- Interactive 3D visualizations of equipment
- Toggle between Camera and Lighting models
- Orbit controls with auto-rotation
- Detailed equipment list with hover effects
- Professional gear showcase

#### 📧 Contact Section
- Elegant contact form with validation
- Contact information cards
- Social media links
- Stylized map preview
- Form submission animation

#### 🔗 Footer
- Quick navigation links
- Social media integration
- Contact information
- Responsive layout

### Animations & Interactions

- **Page Load**: Film-grain fade-in with logo reveal (2.5s animation)
- **Navigation**: Fixed navbar with glass effect on scroll
- **Scroll Animations**: Intersection Observer-based triggers
- **Hover Effects**: 3D transforms, scale, and glow effects
- **Mouse Parallax**: GSAP-powered depth movement
- **Smooth Scrolling**: Native smooth scroll behavior
- **Custom Scrollbar**: Gradient-styled scrollbar

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom cinematic theme
- **Animations**: Framer Motion + GSAP
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **UI Components**: Custom React components
- **Icons**: React Icons (Feather Icons)
- **Utilities**: Intersection Observer API

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
.
├── app/
│   ├── globals.css          # Global styles and Tailwind setup
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main homepage
├── components/
│   ├── About.tsx            # About section with timeline
│   ├── Contact.tsx          # Contact form and info
│   ├── Footer.tsx           # Footer with links
│   ├── Gear.tsx             # 3D gear visualization
│   ├── Hero.tsx             # Hero section with parallax
│   ├── Loader.tsx           # Initial page loader
│   ├── Navigation.tsx       # Sticky navigation bar
│   └── Portfolio.tsx        # Filterable project gallery
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Customization

### Colors

The color palette is defined in `tailwind.config.js`:

```js
colors: {
  cinematic: {
    black: '#0a0a0a',
    darkGray: '#1a1a1a',
    gray: '#2a2a2a',
    cyan: '#00d9ff',
    amber: '#ff9500',
    white: '#f5f5f5',
  },
}
```

### Animations

Custom animations are defined in `tailwind.config.js` and can be extended:

- `fade-in`: Opacity transition
- `slide-up`: Slide from bottom
- `glow`: Pulsing glow effect
- `float`: Floating motion

### Content

Update the following to customize content:

1. **Personal Information**: Edit contact details in `components/Contact.tsx`
2. **Projects**: Modify the `projects` array in `components/Portfolio.tsx`
3. **Experience**: Update `experiences` in `components/About.tsx`
4. **Equipment**: Customize `gearItems` in `components/Gear.tsx`
5. **Social Links**: Change URLs in footer and contact sections

### Images

Replace placeholder images with actual content:
- Currently using Unsplash URLs
- Replace with actual photos in the `public/` directory
- Update image URLs in components

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub repository
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Any Node.js hosting

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components use Tailwind's responsive classes for optimal viewing on any device.

## ⚡ Performance Optimizations

- Next.js App Router for optimal performance
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Optimized animations with Framer Motion
- Efficient 3D rendering with React Three Fiber
- Minimal bundle size

## 🎯 Key Features Implemented

✅ Cinematic dark theme with gradient backgrounds  
✅ Film grain texture effects  
✅ Smooth page load animations  
✅ Fixed navigation with glass morphism  
✅ Mouse parallax on hero section  
✅ Scroll-triggered animations  
✅ 3D interactive equipment models  
✅ Filterable portfolio grid  
✅ Modal gallery view  
✅ Contact form with validation  
✅ Social media integration  
✅ Responsive design  
✅ Custom scrollbar  
✅ Hover effects and transitions  
✅ Professional typography  

## 📄 License

This project is created for Jonas Manuhutu's portfolio.

## 🤝 Support

For questions or support, contact:
- Email: jonas@manuhutu.com
- Location: Breda, Netherlands

---

**© 2025 Jonas Manuhutu — Crafted with Light & Vision**

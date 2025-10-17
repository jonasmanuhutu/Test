# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🎨 Customization Checklist

### Replace Placeholder Content

#### 📸 Images
- [ ] Replace Unsplash URLs with your actual photos
- [ ] Add images to `/public/images/` directory
- [ ] Update image references in components

#### 👤 Personal Information
- [ ] Edit contact info in `components/Contact.tsx`
- [ ] Update social media links (Instagram, YouTube, LinkedIn)
- [ ] Change email and phone number

#### 💼 Portfolio Projects
File: `components/Portfolio.tsx`
- [ ] Replace sample projects with your actual work
- [ ] Update project images, titles, descriptions
- [ ] Add real project details and categories

#### 🎓 Experience & Timeline
File: `components/About.tsx`
- [ ] Update work experience timeline
- [ ] Modify statistics (projects, clients, events)
- [ ] Change profile photo URL

#### ⚙️ Equipment List
File: `components/Gear.tsx`
- [ ] Update gear items with your actual equipment
- [ ] Modify equipment descriptions
- [ ] Customize 3D models (optional)

#### 🏠 Hero Section
File: `components/Hero.tsx`
- [ ] Replace background video/image
- [ ] Update location (currently "Breda, Netherlands")

---

## 📦 Production Build

Build for production:
```bash
npm run build
```

Test production build locally:
```bash
npm start
```

---

## 🌐 Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Push code to GitHub
2. Import project in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Other Platforms
- AWS Amplify
- Digital Ocean App Platform
- Render
- Railway

---

## 🎯 Key Files to Edit

| File | Purpose |
|------|---------|
| `components/Hero.tsx` | Homepage hero section |
| `components/About.tsx` | About section with experience |
| `components/Portfolio.tsx` | Project showcase |
| `components/Gear.tsx` | Equipment display |
| `components/Contact.tsx` | Contact form and info |
| `app/layout.tsx` | SEO metadata |
| `tailwind.config.js` | Color customization |

---

## 🎨 Color Scheme

Current cinematic theme colors (in `tailwind.config.js`):

```javascript
cinematic: {
  black: '#0a0a0a',      // Deep black background
  darkGray: '#1a1a1a',   // Dark sections
  gray: '#2a2a2a',       // Glass effects
  cyan: '#00d9ff',       // Primary accent (lights)
  amber: '#ff9500',      // Secondary accent (warm)
  white: '#f5f5f5',      // Text color
}
```

To change colors, edit these values in `tailwind.config.js`.

---

## 📱 Features Included

✅ Responsive design (mobile, tablet, desktop)  
✅ Dark cinematic theme  
✅ Smooth page load animations  
✅ Scroll-triggered animations  
✅ 3D interactive models  
✅ Filterable portfolio grid  
✅ Contact form  
✅ Social media integration  
✅ SEO optimized  
✅ Film grain effects  
✅ Glass morphism UI  

---

## 🐛 Troubleshooting

### Build Errors
If you encounter errors during build:
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
If port 3000 is busy:
```bash
npm run dev -- -p 3001
```

### TypeScript Errors
Run type checking:
```bash
npx tsc --noEmit
```

---

## 💡 Tips

1. **Test on Multiple Devices**: Use Chrome DevTools to test responsive design
2. **Optimize Images**: Use WebP format for better performance
3. **SEO**: Update metadata in `app/layout.tsx`
4. **Analytics**: Add Google Analytics or similar (optional)
5. **Performance**: Use Next.js Image component for automatic optimization

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)

---

## 🎬 Demo Features

Try these interactive elements:

- **Hero Section**: Mouse parallax effect
- **Portfolio**: Click project cards for details
- **Gear Section**: Drag to rotate 3D models
- **Navigation**: Smooth scroll to sections
- **Hover Effects**: On buttons and cards

---

**Need Help?** Check the main README.md for detailed documentation.

**Ready to Launch?** Follow the deployment guide above!

🚀 **Happy Building!**

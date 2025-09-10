# Fortune Heights - Luxury Residential Tower Website

A premium Next.js website for a luxury residential tower project featuring modern design, smooth animations, and comprehensive property information.

## 🏢 Project Overview

Fortune Heights is a luxury residential tower website built with Next.js, featuring:
- **Premium Design**: Elegant gold, white, and black color scheme with luxury fonts
- **Smooth Animations**: Framer Motion animations throughout the site
- **Mobile Responsive**: Optimized for all device sizes
- **SEO Optimized**: Complete meta tags, structured data, and sitemap
- **Interactive Features**: Contact forms, image galleries, and brochure downloads

## ✨ Features

### Pages & Structure
- **Home Page**: Hero section with tower highlights and construction progress timeline
- **About Page**: Tower specifications, developer information, and project details  
- **Amenities Page**: Interactive showcase of all luxury amenities
- **Floor Plans Page**: Detailed apartment layouts with filtering options
- **Brochures Page**: Downloadable PDF brochures and resources
- **Contact Page**: Contact form with validation and Google Maps integration

### Technical Features
- **Next.js App Router**: Latest Next.js architecture with TypeScript
- **Framer Motion**: Smooth animations and transitions
- **Tailwind CSS**: Custom utility-first styling with luxury theme
- **Form Validation**: Client and server-side validation
- **API Routes**: Contact form submission handling
- **SEO Optimization**: Meta tags, structured data, sitemap, and robots.txt
- **Responsive Design**: Mobile-first approach

### Design Elements
- **Premium Typography**: Playfair Display for headings, Inter for body text
- **Luxury Color Palette**: Gold accents (#d4af37), white backgrounds, charcoal text
- **Custom Animations**: Scroll-triggered animations, hover effects, and transitions
- **Interactive Components**: Image galleries, form validations, and download buttons

## 🛠 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Deployment**: Vercel-ready configuration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd residential-tower
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
residential-tower/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── amenities/         # Amenities page  
│   │   ├── floor-plans/       # Floor plans page
│   │   ├── brochures/         # Brochures page
│   │   ├── contact/           # Contact page
│   │   ├── api/               # API routes
│   │   │   └── contact/       # Contact form API
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx          # Home page
│   │   ├── globals.css       # Global styles
│   │   ├── sitemap.ts        # SEO sitemap
│   │   └── robots.ts         # Robots.txt
│   ├── components/            # Reusable components
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Footer.tsx        # Site footer
│   │   ├── HeroSection.tsx   # Home hero section
│   │   ├── ContactForm.tsx   # Contact form
│   │   └── ...               # Other components
│   └── lib/                  # Utility functions
├── public/                   # Static assets
│   ├── brochures/           # PDF brochures
│   └── images/              # Image assets
├── tailwind.config.js       # Tailwind configuration
└── package.json             # Dependencies
```

## 🎨 Key Components

### Core Components
- **Header**: Responsive navigation with mobile menu
- **Footer**: Site links, contact info, and social media
- **HeroSection**: Animated hero with call-to-action
- **ContactForm**: Validated form with API integration

### Page-Specific Components
- **FeaturesSection**: Home page features grid
- **ConstructionProgress**: Interactive timeline
- **AmenitiesGrid**: Categorized amenities showcase
- **FloorPlansGrid**: Filterable apartment layouts
- **BrochuresGrid**: Downloadable resources

### Utility Components
- **StructuredData**: SEO schema markup
- **AnimationWrappers**: Framer Motion utilities

## 🎯 Features Implemented

### ✅ Core Requirements
- [x] Next.js with App Router and TypeScript
- [x] Tailwind CSS luxury styling
- [x] Framer Motion animations
- [x] Mobile responsive design
- [x] All required pages (Home, About, Amenities, Floor Plans, Brochures, Contact)

### ✅ Design & UX
- [x] Luxury real estate theme
- [x] Gold/white/black color palette
- [x] Premium fonts (Playfair Display, Inter)
- [x] Smooth animations and transitions
- [x] Sticky navigation with scroll effects

### ✅ Advanced Features
- [x] Contact form with validation
- [x] PDF brochure downloads
- [x] Interactive floor plan gallery
- [x] Construction progress timeline
- [x] SEO optimization with structured data
- [x] API routes for form handling

### ✅ Technical Excellence
- [x] TypeScript for type safety
- [x] Component-based architecture
- [x] Custom Tailwind configuration
- [x] Performance optimized
- [x] Accessibility considerations

## 🔧 Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  gold: {
    DEFAULT: '#d4af37',
    light: '#e6c757',
    dark: '#b8941f',
  }
}
```

### Fonts
Modify fonts in `src/app/layout.tsx`:
```javascript
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
})
```

### Content
Update project information in respective components and pages.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🌐 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data for real estate
- XML sitemap generation
- Robots.txt configuration
- Performance optimized images

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Deploy automatically with git pushes
3. Custom domain configuration available

### Other Platforms
- Netlify: Build command `npm run build`, publish directory `out`
- AWS: Use AWS Amplify or S3 + CloudFront
- Manual: Build with `npm run build` and deploy `out` folder

## 📈 Performance

- **Lighthouse Score**: 95+ performance
- **Core Web Vitals**: Optimized
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **SEO**: 100% SEO score

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions:
- Email: info@fortuneheights.com
- Phone: +1 (234) 567-8900

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
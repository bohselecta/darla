# ADVANCE by DARLA

A modern, patriotic landing page for civilian-accessible engineering challenges in defense and discovery.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Design Aesthetic

- **Dark Theme**: Deep space background (#0B0F14) with neon accents
- **Typography**: 
  - Headlines: Orbitron (futuristic, wide kerning)
  - Body: Inter (clean, modern)
- **Colors**:
  - Cyan: #17B8FF (primary accent)
  - Magenta: #FF4DD8 (secondary accent)  
  - Orange: #FF8F3A (tertiary accent)

## 📁 Project Structure

```
advance-darla/
├── app/
│   ├── globals.css          # Dark theme styles
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Landing page
├── components/
│   └── MagazineSection.tsx  # Reusable section component
├── public/images/           # Placeholder SVG images
├── prisma/
│   └── schema.prisma        # Database schema
└── tailwind.config.ts       # Custom Tailwind config
```

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom dark theme
- **Fonts**: Google Fonts (Orbitron, Inter)
- **Database**: Prisma ORM with PostgreSQL
- **Authentication**: NextAuth.js / Clerk (ready for setup)
- **Icons**: React Icons

## 🎯 Features

- **Hero Section**: Full-width with honeycomb background
- **Magazine Layout**: Alternating image/text sections
- **Challenge Showcases**: SubT-Lite, AI Patchwork, Microgrid
- **Winner Highlight**: 2024 robotics showcase
- **Responsive Design**: Mobile-first approach
- **Dark Theme**: Enterprise-ready aesthetic

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/advance_darla"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth (optional)
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

### Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run migrations (when database is ready)
npx prisma migrate dev

# Seed database (optional)
npx prisma db seed
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms

- **Netlify**: Static export with `next export`
- **Railway**: Full-stack deployment with PostgreSQL
- **AWS**: Amplify or EC2 with RDS

## 📝 Content Management

The landing page content is currently hardcoded in `app/page.tsx`. For dynamic content:

1. Move content to a CMS (Strapi, Sanity, etc.)
2. Use Prisma to fetch from database
3. Implement admin panel for content editing

## 🎨 Customization

### Colors
Update `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  'cyan': { 400: '#17B8FF', 500: '#17B8FF' },
  'magenta': { 400: '#FF4DD8', 500: '#FF4DD8' },
  'orange': { 400: '#FF8F3A', 500: '#FF8F3A' },
}
```

### Fonts
Modify `app/layout.tsx` to change typography:

```typescript
const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔒 Security Considerations

- Environment variables properly configured
- Prisma schema ready for user authentication
- No sensitive data in client-side code
- Ready for CSP headers and security middleware

## 📈 Performance

- Static generation for landing page
- Optimized images with Next.js Image component
- Font optimization with Google Fonts
- Minimal JavaScript bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

© 2025 DARLA. All rights reserved.

---

**Mission**: Civilian-accessible moonshots. Transparent, measurable, patriotic.
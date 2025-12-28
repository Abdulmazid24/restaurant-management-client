# 🍽️ Restaurant Management Client

Modern, professional React application for restaurant management with beautiful UI/UX and seamless user experience.

## 🚀 Features

- ✅ **Modern Design System** - Comprehensive design tokens for consistent UI
- ✅ **Reusable Component Library** - Professional UI components (Button, Card, Input, Modal, etc.)
- ✅ **Dark Mode Support** - Automatic and manual theme switching
- ✅ **Firebase Authentication** - Secure user authentication with Google
- ✅ **Responsive Design** - Works perfectly on all devices
- ✅ **Smooth Animations** - Polished transitions and micro-interactions
- ✅ **Glass Morphism** - Modern glassmorphic effects
- ✅ **Skeleton Loaders** - Better loading experience
- ✅ **Toast Notifications** - User-friendly feedback system
- ✅ **Form Validation** - Client-side validation with error messages
- ✅ **API Integration** - Clean service layer with Axios
- ✅ **Code Quality** - ESLint & Prettier configuration

## 🎨 Design System

### Color Palette
- **Primary**: Warm Restaurant Orange/Red (#ff5722)
- **Secondary**: Gold/Amber (#ff9500)
- **Accent**: Deep Purple (#a855f7)
- **Success, Error, Warning, Info**: Semantic colors

### Typography
- **Sans**: Inter (Body text)
- **Serif**: Playfair Display (Headings)
- **Sizes**: 12px - 72px scale

### Components
- Button (6 variants, 4 sizes, loading state)
- Card (5 variants with subcomponents)
- Input (with icons, validation)
- Badge (status indicators)
- Modal (accessible, portal-based)
- Skeleton (loading states)

## 📁 Project Structure

```
client/
├── src/
│   ├── assets/           # Images, icons, animations
│   ├── components/       # Original components (legacy)
│   ├── context/          # Auth context
│   ├── firebase/         # Firebase configuration
│   ├── layout/           # Layout components
│   ├── pages/            # Page components
│   ├── routes/           # Route configuration
│   ├── shared/           # Shared/reusable code
│   │   ├── components/   # UI component library
│   │   │   └── ui/       # Button, Card, Input, etc.
│   │   ├── constants/    # App constants
│   │   ├── hooks/        # Custom React hooks
│   │   ├── services/     # API services
│   │   └── utils/        # Utility functions
│   ├── styles/           # Global styles
│   │   └── design-tokens.css  # Design system tokens
│   ├── index.css         # Global CSS imports
│   └── main.jsx          # App entry point
├── public/
├── .env.example
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🛠️ Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account (for authentication)

### Steps

1. **Clone the repository**

```bash
git clone https://github.com/Abdulmazid24/restaurant-management-client.git
cd restaurant-management-client
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id

# API Configuration
VITE_API_URL=http://localhost:5000
```

4. **Run the development server**

```bash
npm run dev
```

The app will start on `http://localhost:5173`

## 📦 Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Lint code
npm run lint:fix     # Fix linting issues
```

## 🎯 Key Components

### Button
```jsx
import { Button } from '@/shared/components/ui';

<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>
```

### Card
```jsx
import { Card, CardHeader, CardTitle, CardContent } from '@/shared/components/ui';

<Card variant="elevated" hoverable>
  <CardHeader>
    <CardTitle>Food Name</CardTitle>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>
```

### Input
```jsx
import { Input } from '@/shared/components/ui';

<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  error={errors.email}
  leftIcon={<EmailIcon />}
/>
```

## 🌐 API Integration

The app uses a centralized API service with Axios:

```javascript
import apiClient from '@/shared/services/apiClient';
import { API_ENDPOINTS } from '@/shared/constants';

// Example API call
const foods = await apiClient.get(API_ENDPOINTS.FOODS.GET_ALL);
```

Features:
- Automatic token refresh
- Request/response interceptors
- Error handling
- Timeout configuration

## 🎨 Styling

The app uses:
- **Tailwind CSS v4** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **Custom Design Tokens** - Centralized design system

### Using Design Tokens

```css
/* CSS Variables */
color: var(--primary-500);
font-family: var(--font-sans);
border-radius: var(--radius-xl);
box-shadow: var(--shadow-lg);

/* Utility Classes */
.gradient-warm-bg
.glass
.card-hover
.skeleton
```

## 🔐 Authentication

Firebase Authentication with:
- Email/Password login
- Google Sign-in
- JWT token management
- Auto token refresh
- Protected routes

## 📱 Responsive Design

Breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

All components are fully responsive.

## 🌙 Dark Mode

Automatic dark mode based on system preference with manual toggle option:

```jsx
// Toggle theme
const [theme, setTheme] = useState('light');
document.documentElement.setAttribute('data-theme', theme);
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

### Deploy to Vercel

```bash
vercel --prod
```

## 📚 Documentation

- Design tokens: `src/styles/design-tokens.css`
- Components: `src/shared/components/ui/`
- Constants: `src/shared/constants/index.js`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Abdul Mazid**

- GitHub: [@Abdulmazid24](https://github.com/Abdulmazid24)

## 🙏 Acknowledgments

- React team for the amazing library
- Tailwind CSS for the utility-first approach
- Firebase for authentication
- All contributors and supporters

---

**Version**: 2.0.0  
**Last Updated**: December 2025  
**Live Demo**: [restaurant-management-c4c23.web.app](https://restaurant-management-c4c23.web.app)

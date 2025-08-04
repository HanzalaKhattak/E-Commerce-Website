# 🛒 Modern E-Commerce Website

A full-featured, responsive e-commerce website built with React 19, featuring secure payments, user authentication, and a modern UI design.

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.1.1-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Redux](https://img.shields.io/badge/Redux-2.6.0-764ABC?style=for-the-badge&logo=redux)
![Firebase](https://img.shields.io/badge/Firebase-11.3.1-FFCA28?style=for-the-badge&logo=firebase)
![Stripe](https://img.shields.io/badge/Stripe-Latest-008CDD?style=for-the-badge&logo=stripe)

## ✨ Features

### 🔐 Authentication & User Management
- **Firebase Authentication** with email/password and Google OAuth
- **Protected Routes** for secure access
- **User Profile Management** with personalized experience
- **Responsive Login/Signup** forms with modern UI

### 🛍️ Shopping Experience
- **Product Catalog** with advanced filtering and search
- **Category-based Navigation** (Men, Women, Kids)
- **Product Detail Modals** with image galleries
- **Shopping Cart** with quantity management and persistence
- **Wishlist Functionality** (coming soon)

### 💳 Secure Payment Processing
- **Stripe Integration** for secure credit card payments
- **PCI DSS Compliant** payment processing
- **3D Secure Authentication** support
- **Real-time Payment Validation**
- **Multiple Payment Methods** (Credit/Debit cards)

### 🎨 Modern UI/UX
- **Fully Responsive Design** for all devices
- **Clean Red-themed Design** with consistent branding
- **Loading States** and smooth transitions
- **Toast Notifications** for user feedback
- **Intuitive Navigation** with breadcrumbs

### ⚡ Performance & Development
- **Redux Toolkit** for efficient state management
- **React Router 7** for client-side routing
- **Vite** for fast development and building
- **Modern React Hooks** and functional components
- **ESLint Configuration** for code quality

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HanzalaKhattak/E-Commerce-Website.git
   cd E-Commerce-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy the `.env` file and update with your credentials:
   ```env
   # Firebase Configuration
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_PROJECT_ID=your_firebase_project_id
   VITE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_APP_ID=your_firebase_app_id
   
   # Stripe Configuration
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── assets/                 # Images and static assets
│   ├── images/            # Product and UI images
│   └── mockData.jsx       # Sample product data
├── Components/            # Reusable components
│   ├── AllProducts.jsx    # Product grid component
│   ├── Cart.jsx          # Shopping cart
│   ├── Navbar.jsx        # Navigation header
│   ├── Footer.jsx        # Site footer
│   ├── PrivateRoute.jsx  # Protected route wrapper
│   └── StripePaymentForm.jsx # Stripe payment integration
├── Pages/                 # Main application pages
│   ├── Home.jsx          # Landing page
│   ├── Shop.jsx          # Product catalog
│   ├── About.jsx         # About us page
│   ├── Contact.jsx       # Contact page
│   ├── Login.jsx         # User authentication
│   ├── SignUp.jsx        # User registration
│   ├── Checkout.jsx      # Order checkout
│   └── OrderSuccess.jsx  # Order confirmation
├── redux/                 # State management
│   ├── store.js          # Redux store configuration
│   ├── cartSlice.js      # Shopping cart state
│   └── productSlice.js   # Product data state
├── config/               # Configuration files
│   └── stripe.js         # Stripe configuration
├── firebase.js           # Firebase configuration
├── App.jsx              # Main application component
└── main.jsx             # Application entry point
```

## 🛠️ Technologies Used

### Frontend
- **React 19** - Latest React with modern features
- **Vite 6.1.1** - Next generation frontend tooling
- **TailwindCSS 4.0** - Utility-first CSS framework
- **React Router 7** - Declarative routing
- **Redux Toolkit 2.6.0** - Predictable state container

### Authentication
- **Firebase Auth 11.3.1** - Secure authentication service
- **Google OAuth** - Social login integration

### Payment Processing
- **Stripe** - Secure payment processing
- **@stripe/stripe-js** - Stripe JavaScript SDK
- **@stripe/react-stripe-js** - React components for Stripe

### UI Components
- **React Icons** - Popular icon library
- **React Hot Toast** - Beautiful notifications
- **Material-UI** - Google's Material Design components
- **React Spinners** - Loading animations

## 📋 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors automatically

# Testing
npm test            # Run tests (if configured)
```

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Email/Password and Google providers
3. Copy your Firebase configuration to `.env`

### Stripe Setup
1. Create a Stripe account at [Stripe Dashboard](https://dashboard.stripe.com/)
2. Get your publishable key from API keys section
3. For development, use test keys (start with `pk_test_`)
4. Add your publishable key to `.env`

## 🎯 Features in Detail

### Shopping Cart
- **Persistent Storage** - Cart items saved in localStorage
- **Quantity Management** - Increase/decrease item quantities
- **Price Calculation** - Real-time total updates
- **Item Management** - Add/remove items easily

### Product Filtering
- **Category Filter** - Filter by Men, Women, Kids
- **Price Range** - Custom price range selection
- **Search** - Real-time product search
- **Sorting** - Sort by price, popularity, newest

### Checkout Process
1. **Cart Review** - Verify items and quantities
2. **Shipping Information** - Complete address details
3. **Payment Processing** - Secure Stripe payment
4. **Order Confirmation** - Success page with order details

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Popular Platforms

#### Vercel
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

#### Firebase Hosting
```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Known Issues

- PayPal integration is planned but not yet implemented
- Product reviews system is in development
- Admin dashboard for product management coming soon

## 🔮 Roadmap

- [ ] Admin Dashboard
- [ ] Product Reviews & Ratings
- [ ] PayPal Payment Integration
- [ ] Email Order Confirmations
- [ ] Inventory Management
- [ ] Multi-language Support
- [ ] Dark Mode Theme
- [ ] Mobile App (React Native)

## 📞 Support

If you have any questions or need help with setup, please:

1. Check the [Issues](https://github.com/HanzalaKhattak/E-Commerce-Website/issues) page
2. Create a new issue if your problem isn't already reported
3. Contact the maintainer: [Your Email]

## 🙏 Acknowledgments

- Design inspiration from modern e-commerce platforms
- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Images from [Unsplash](https://unsplash.com/) and product catalogs

---

**Built with ❤️ by [Hanzala Khattak](https://github.com/HanzalaKhattak)**

⭐ Don't forget to star this repository if you found it helpful!

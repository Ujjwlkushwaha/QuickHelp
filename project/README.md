# LocalHelper - Local Service Marketplace

A modern React-based web application that connects customers with trusted local service providers. Built for the Code for Bharat Hackathon, LocalHelper facilitates seamless booking of various home services including cooking, mechanics, tutors, cleaners, electricians, and more.

## 🚀 Features

### For Customers
- **Service Discovery**: Browse and search for local service providers
- **Booking Management**: Schedule, track, and manage service appointments
- **Real-time Communication**: Chat with service providers
- **Rating & Reviews**: Rate and review completed services
- **Payment Tracking**: Monitor spending and payment history
- **Profile Management**: Update personal information and preferences

### For Service Providers
- **Job Requests**: Receive and manage incoming service requests
- **Availability Control**: Toggle availability status
- **Schedule Management**: View and organize upcoming appointments
- **Earnings Tracking**: Monitor income and performance metrics
- **Customer Reviews**: View and respond to customer feedback
- **Profile Optimization**: Update skills, rates, and availability

### For Administrators
- **Platform Management**: Oversee all users and transactions
- **Service Provider Verification**: Review and approve new providers
- **Dispute Resolution**: Handle customer-provider conflicts
- **Analytics Dashboard**: Monitor platform performance and growth

## 🛠️ Technology Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG icons and emojis
- **Build Tool**: Vite
- **Linting**: ESLint with React plugins

## 📁 Project Structure

```
src/
├── components/
│   ├── common/
│   │   └── Navbar.jsx
│   └── landing/
│       ├── Footer.jsx
│       ├── Hero.jsx
│       ├── HowItWorks.jsx
│       ├── Pricing.jsx
│       ├── ServiceCards.jsx
│       └── Testimonials.jsx
├── pages/
│   ├── AdminDashboard.jsx
│   ├── CustomerDashboard.jsx
│   ├── LandingPage.jsx
│   ├── LoginPage.jsx
│   └── WorkerDashboard.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## 🎯 Key Services Offered

1. **Professional Cooks** - Custom menus, event catering, daily meal prep
2. **Skilled Mechanics** - Mobile repairs, emergency services, all vehicle types
3. **Expert Tutors** - Academic subjects, skills training, online/offline sessions
4. **Home Cleaners** - Deep cleaning, regular maintenance, eco-friendly options
5. **Electricians** - Licensed services, emergency calls, smart home setup
6. **Plumbers** - 24/7 emergency, leak detection, installations

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Code_for_Bharat-Hackethon/project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design Features

- **Modern UI/UX**: Clean, responsive design with gradient backgrounds
- **Mobile-First**: Optimized for all device sizes
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Accessibility**: Proper contrast ratios and keyboard navigation
- **Performance**: Optimized images and lazy loading

## 🔐 User Roles

### Customer Dashboard (`/user/dashboard`)
- View booking history and upcoming appointments
- Manage profile information
- Communicate with service providers
- Track spending and ratings

### Worker Dashboard (`/worker/dashboard`)
- Accept/decline job requests
- Manage availability status
- View earnings and reviews
- Update schedule and rates

### Admin Dashboard (`/admin/dashboard`)
- Platform-wide analytics
- User management
- Service provider verification
- Dispute resolution

## 🌟 Key Features

### Search & Discovery
- Service-based search functionality
- Popular service categories
- Provider ratings and reviews
- Location-based matching

### Booking System
- Real-time availability checking
- Flexible scheduling options
- Service customization
- Payment integration ready

### Communication
- In-app messaging system
- Real-time notifications
- Status updates
- File sharing capabilities

### Quality Assurance
- Provider verification system
- Customer reviews and ratings
- Service guarantees
- Dispute resolution process

## 🎯 Hackathon Goals

This project was developed for the Code for Bharat Hackathon with the following objectives:

- **Digital Empowerment**: Connect local service providers with digital platforms
- **Economic Growth**: Create income opportunities for skilled workers
- **Service Quality**: Improve service standards through ratings and reviews
- **Community Building**: Foster local business relationships
- **Technology Adoption**: Bridge the digital divide in local services

## 🤝 Contributing

We welcome contributions to improve LocalHelper! Please feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is developed for the Code for Bharat Hackathon and is intended for educational and demonstration purposes.

## 🙏 Acknowledgments

- Code for Bharat for organizing the hackathon
- React and Vite communities for excellent tooling
- Tailwind CSS for the beautiful design system
- All contributors and mentors

---

**LocalHelper** - Connecting communities through trusted local services.

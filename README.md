# Umai Nury - Women's Aid Platform

A comprehensive platform supporting women across Central Asia with menstrual health resources, mental health support, and community events.

## 🌟 Features

### For Users

- 🩸 **Menstrual Products Access** - Request free menstrual hygiene products
- 📅 **Umai Talks Events** - Register for educational events and workshops
- 💰 **Donations** - Support the cause with secure CloudPayments integration
- 🌍 **Multi-language** - Full support for English, Russian, and Kazakh
- 🔔 **Notifications** - Telegram bot for form submissions
- 📱 **Responsive Design** - Works perfectly on mobile and desktop

### For Administrators

- 🛡️ **Admin Dashboard** - Easy-to-use content management system
- 📝 **Event Management** - Create, edit, and delete events with multilingual support
- 📊 **Donations Overview** - Track all donations and payment statuses
- 📦 **Request Monitoring** - View and manage pad requests
- 📍 **Distribution Points** - Manage pickup locations

## 🚀 Quick Start

### For Users

1. Visit the website
2. Sign up / Login
3. Browse events, request products, or make a donation

### For Administrators

1. Follow the [Quick Start Guide](QUICK_START.md)
2. Get admin permissions via SQL
3. Access the Admin panel from the header menu

## 📚 Documentation

- **[Quick Start Guide](QUICK_START.md)** - First steps for admins
- **[Admin Guide](ADMIN_GUIDE.md)** - Complete admin panel documentation
- **[CloudPayments Setup](CLOUDPAYMENTS_SETUP.md)** - Payment integration guide

## 🛠 Tech Stack

- **Frontend:** React + TypeScript + Vite
- **Styling:** Tailwind CSS
- **Payments:** CloudPayments
- **Notifications:** Telegram bot (server-side)
- **Hosting:** Netlify (recommended)

## 🔧 Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Telegram and CloudPayments credentials

# Run development server
npm run dev

# Build for production
npm run build
```

## 🌍 Environment Variables

Required variables in `.env`:

```env
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id

VITE_CLOUDPAYMENTS_PUBLIC_ID=your_cloudpayments_public_id
```

## 📋 Database / Persistence

This repository does not include a running database integration by default.
The current flow uses a local Express server to send form submissions to
Telegram. If you require database persistence or external DB integration, restore
the migration and client files from version control history or contact the
maintainers.

## 🔐 Security Features

- ✅ Row Level Security (RLS) on all tables
- ✅ PCI DSS compliant payments via CloudPayments
- ✅ Privacy Policy and Terms of Service
- ✅ Cookie consent banner
- ✅ Admin-only access controls

## 🌐 Multilingual Support

Full translations available in:

- 🇬🇧 English (EN)
- 🇷🇺 Russian (RU)
- 🇰🇿 Kazakh (KK)

All content dynamically switches based on user preference.

## 📱 Pages

- **Home** - Landing page with mission and features
- **Pads** - Request menstrual products
- **Events** - Browse and register for Umai Talks
- **Donate** - Support with secure payments
- **Privacy** - Privacy policy (multilingual)
- **Terms** - Terms of service (multilingual)
- **Admin** - Content management dashboard (admin only)

## 🎨 Design Philosophy

- Clean and modern UI
- Accessible and inclusive design
- Mobile-first approach
- Smooth animations and transitions
- Professional color scheme (no purple/violet)

## 🤝 Contributing

This is a private project for Umai Nury Foundation. For issues or feature requests, please contact the development team.

## 📞 Support

- **Email:** tech@umainury.org
- **Telegram:** @umainury_support

## 📄 License

© 2024 Umai Nury Foundation. All rights reserved.

---

## 🎯 Project Structure

```
src/
├── components/
│   ├── Auth/          # Login and signup forms
│   ├── Layout/        # Header and Footer
│   └── CookieConsent.tsx
├── contexts/
│   ├── AuthContext.tsx
│   └── LanguageContext.tsx
├── lib/
│   ├── translations.ts # i18n translations
│   ├── cloudpayments.ts # Payment integration
│   └── email.ts       # Email utilities
├── pages/
│   ├── HomePage.tsx
│   ├── PadsPage.tsx
│   ├── EventsPage.tsx
│   ├── DonatePage.tsx
│   ├── PrivacyPage.tsx
│   ├── TermsPage.tsx
│   └── AdminPage.tsx  # Admin dashboard
└── App.tsx            # Main app component
```

## 🔄 Workflow

### Creating Events (Admin)

1. Login as admin
2. Navigate to Admin panel
3. Go to Events tab
4. Click "Add Event"
5. Fill form with translations
6. Save

### Processing Donations

1. User makes donation
2. CloudPayments widget opens
3. User enters card details
4. Payment processed securely
5. Database updated
6. Email receipt sent
7. Admin sees in dashboard

### Handling Pad Requests

1. User submits request
2. Request appears in Admin panel
3. Admin approves via SQL or interface
4. User receives pickup code
5. User collects at distribution point

---

Made with ❤️ for women across Central Asia

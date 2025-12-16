# FertTech - National Farmer Input Distribution System

A Next.js frontend application for FertTech, the Ethiopian Farmer Input Distribution System with mock authentication and role-based access control.

## Features

- ✅ Mock user authentication with session management
- ✅ Role-based access control (RBAC) with route protection
- ✅ Multiple user roles with dedicated dashboards:
  - **Farmer**: View entitlement, QR code, and collection history
  - **Kebele Officer**: Register farmers, replace QR codes, search farmers
  - **Distributor/Cooperative**: Scan QR codes, distribute inputs, manage inventory
  - **Woreda Officer**: Monitor kebele performance, view alerts
  - **Zonal Officer**: Oversee woreda performance, regional stock status
  - **Regional Officer**: Monitor zone performance, regional analytics
  - **Admin**: System administration, user management, audit logs
- ✅ Icon-based, multilingual-friendly UI
- ✅ Responsive design for mobile and desktop
- ✅ QR code generation and display
- ✅ Protected routes with automatic redirects

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Mock Users

The system includes pre-configured mock users for testing. All users share the password: `password123`

| Role | Email | Password |
|------|-------|----------|
| Farmer | farmer@test.com | password123 |
| Kebele Officer | kebele@test.com | password123 |
| Distributor | distributor@test.com | password123 |
| Woreda Officer | woreda@test.com | password123 |
| Zonal Officer | zonal@test.com | password123 |
| Regional Officer | regional@test.com | password123 |
| Admin | admin@test.com | password123 |

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── dashboard/         # Role-specific dashboards
│   │   ├── farmer/       # Farmer dashboard and pages
│   │   ├── kebele/       # Kebele officer pages
│   │   ├── distributor/  # Distributor/cooperative pages
│   │   ├── woreda/       # Woreda officer dashboard
│   │   ├── zonal/        # Zonal officer dashboard
│   │   ├── regional/     # Regional officer dashboard
│   │   └── admin/        # Admin dashboard
│   ├── login/            # Login page
│   └── page.tsx          # Home page
├── components/            # Reusable components
│   ├── DashboardLayout.tsx
│   └── ProtectedRoute.tsx
├── lib/                   # Utilities and contexts
│   ├── authContext.tsx   # Authentication context
│   ├── mockAuth.ts       # Mock authentication logic
│   └── rolePermissions.ts # Role-based permissions
└── types/                 # TypeScript type definitions
    └── auth.ts           # Auth-related types
```

## Key Features Implemented

### Authentication & Authorization
- Client-side mock authentication
- Session persistence using cookies
- Role-based route protection
- Automatic redirects based on user role

### Farmer Features
- View entitlement and remaining balance
- Display QR code for input collection
- View distribution history

### Kebele Officer Features
- Register new farmers with land size
- Replace lost QR codes
- Search farmers by registration number or name
- View registration statistics

### Distributor Features
- Scan QR codes (manual entry supported)
- View farmer entitlement and remaining balance
- Process input distribution
- Track inventory levels
- View distribution history

### Oversight Features (Woreda/Zonal/Regional)
- Performance dashboards
- Stock status monitoring
- Alert and issue tracking
- Multi-level reporting

### Admin Features
- System overview
- User management interface
- System status monitoring
- Audit log access

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **QR Codes**: qrcode.react
- **State Management**: React Context API
- **Authentication**: Mock client-side (js-cookie for session)

## Development Notes

- All authentication is **mock** - no real backend integration
- Session data is stored in browser cookies
- QR codes are generated client-side using farmer IDs
- All data is currently static/mock - ready for backend integration
- Route protection is handled client-side via `ProtectedRoute` component

## Future Enhancements

- Backend API integration
- Real QR code scanning with camera
- Offline-first data synchronization
- Multilingual support (Amharic, Oromo, etc.)
- SMS notification integration
- Geo-tagging for distributions
- Advanced analytics and reporting
- Export functionality for audit logs

## License

This project is part of the National Farmer Input Distribution System for Ethiopia.


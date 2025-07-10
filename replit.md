# Zynlix IT Services Website

## Overview

This is a full-stack web application for Zynlix, a French IT managed services company. The project is built as a showcase website designed to inspire trust and reliability in potential clients while presenting the company's IT infrastructure management services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Router**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and build processes

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL session store
- **API Style**: REST API with JSON responses

### Color Scheme & Design
- **Primary Colors**: Blue tones for trust and professionalism
- **Secondary Colors**: Green tones for growth and stability
- **Design System**: Modern, clean interface with micro-interactions
- **Responsive**: Mobile-first design approach

## Key Components

### Database Schema
- **Users Table**: Basic user management (id, username, password)
- **Contact Submissions Table**: Form submissions with company details (name, email, company, phone, service, message, timestamp)

### API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Retrieve all contact submissions (admin)

### Frontend Pages & Components
- **Navigation**: Sticky navigation with smooth scroll to sections
- **Hero Section**: Company introduction with key statistics
- **Services Section**: Detailed IT service offerings
- **About Section**: Company information and team presentation
- **References Section**: Client testimonials and case studies
- **Contact Section**: Contact form with validation
- **Footer**: Site links and social media

### UI Component Library
- Complete shadcn/ui implementation with Radix UI primitives
- Form components with validation
- Toast notifications
- Responsive design components

## Data Flow

1. **Contact Form Submission**:
   - User fills contact form → React Hook Form validation → Zod schema validation
   - API call to `/api/contact` → Express route handler → Drizzle ORM insert
   - Success/error toast notification to user

2. **Static Content**:
   - All service descriptions, company information, and testimonials are statically rendered
   - Smooth scrolling navigation between sections

3. **Development vs Production**:
   - Development: Vite dev server with HMR
   - Production: Static files served by Express with built React app

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL for data persistence
- **Drizzle ORM**: Type-safe database queries and migrations

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide Icons**: Icon library for UI elements

### Development Tools
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type safety across the entire stack
- **ESBuild**: Fast bundling for production builds

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Requirements
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment mode (development/production)

### Hosting Considerations
- **Static Assets**: Served from `dist/public` directory
- **API Routes**: Express server handles `/api/*` routes
- **Database**: Requires PostgreSQL-compatible database (Neon recommended)

### Development Workflow
- `npm run dev`: Start development server with hot reload
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run db:push`: Apply database schema changes

## Recent Improvements (January 2025)

### Critical Fixes Applied
1. **Database Persistence (✓ Fixed)**:
   - Migrated from in-memory storage to PostgreSQL using Neon Database
   - Implemented DatabaseStorage class with proper Drizzle ORM integration
   - Contact form submissions now persist across server restarts
   - Applied database migrations using `drizzle-kit push`

2. **Dark Mode Implementation (✓ Added)**:
   - Added ThemeProvider with localStorage persistence
   - Implemented theme toggle button in navigation (both desktop and mobile)
   - Updated all components with dark mode variants using Tailwind classes
   - Smooth transition between light and dark themes

3. **Admin Dashboard (✓ Added)**:
   - Created secure admin interface at `/admin` route
   - Simple password authentication (admin123 - should be environment variable in production)
   - Real-time display of contact form submissions with timestamps
   - Responsive design with proper dark mode support
   - Contact details organized with service categories

4. **Enhanced User Experience**:
   - Added theme toggle to both desktop and mobile navigation
   - Improved dark mode styling across all navigation elements
   - Maintained smooth scrolling functionality

### Architecture Improvements
- Storage abstraction with fallback to MemStorage if DATABASE_URL unavailable
- Proper TypeScript error handling in storage layer
- Enhanced data persistence and reliability

The application follows a monorepo structure with shared TypeScript types and clear separation between client and server code. The design emphasizes trust and professionalism through its blue-green color scheme and modern UI components.

## Recent Changes (January 2025)

### Brand Identity Update (✓ Completed)
1. **Company Rebranding**:
   - Renamed from "TechnoGarde" to "Zynlix" across all components
   - Updated navigation to use logo-only button for homepage navigation
   - Removed company name text from header, keeping only interactive logo
   - Updated all testimonials and content references to new brand name
   - Maintained all existing functionality with new brand identity

### Comprehensive Navigation & Content Expansion (✓ Completed)
2. **Multi-level Navigation System**:
   - Implemented dropdown menus for Services, Entreprise, and Support
   - Created dedicated pages for all subsections with detailed routing
   - Added comprehensive service pages: Infrastructure & Cloud, Sécurité & Sauvegarde, Support Utilisateurs, Réseau & Télécoms
   - Built company pages: À Propos, Équipe, Carrières, Actualités
   - Developed support pages: Contact, Documentation, FAQ, Mentions Légales
   - Updated footer with proper navigation links to all sections
   - Enhanced mobile navigation to support new structure
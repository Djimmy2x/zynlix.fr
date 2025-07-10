# TechnoGarde IT Services Website

## Overview

This is a full-stack web application for TechnoGarde, a French IT managed services company. The project is built as a showcase website designed to inspire trust and reliability in potential clients while presenting the company's IT infrastructure management services.

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

The application follows a monorepo structure with shared TypeScript types and clear separation between client and server code. The design emphasizes trust and professionalism through its blue-green color scheme and modern UI components.
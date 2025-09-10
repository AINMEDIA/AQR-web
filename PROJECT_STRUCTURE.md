AQR-Web Project Structure
=========================

📁 Project Root (/app)
├── 📂 backend/                    # FastAPI Backend Application
│   ├── 📄 main.py                # FastAPI application entry point
│   ├── 📄 models.py              # SQLAlchemy database models
│   ├── 📄 schemas.py             # Pydantic data validation schemas
│   ├── 📄 auth.py                # JWT authentication logic
│   ├── 📄 config.py              # Application configuration
│   ├── 📄 database.py            # Database connection setup
│   ├── 📄 requirements.txt       # Python dependencies
│   ├── 📄 Dockerfile             # Backend container configuration
│   ├── 📄 .env                   # Backend environment variables
│   ├── 📄 .dockerignore          # Backend Docker ignore rules
│   ├── 📄 README.md              # Backend documentation
│   └── 📂 routes/                # API route modules
│       ├── 📄 __init__.py        # Routes package init
│       ├── 📄 auth.py            # Authentication endpoints
│       ├── 📄 jobs.py            # Job-related endpoints
│       ├── 📄 profile.py         # User profile endpoints
│       ├── 📄 contact.py         # Contact form endpoints
│       ├── 📄 emergency.py       # Emergency alert endpoints
│       └── 📄 workers.py         # Worker request endpoints
│
├── 📂 frontend/                   # Next.js Frontend Application
│   ├── 📂 app/                   # Next.js 14 App Router
│   │   ├── 📄 layout.tsx         # Root layout component
│   │   ├── 📄 page.tsx           # Home page
│   │   ├── 📄 globals.css        # Global styles
│   │   ├── 📂 api/               # API routes (legacy)
│   │   │   └── 📂 contact/
│   │   │       └── 📄 route.ts
│   │   ├── 📂 jobs/              # Job-related pages
│   │   │   ├── 📄 page.tsx       # Jobs listing page
│   │   │   ├── 📄 loading.tsx    # Loading component
│   │   │   └── 📂 [id]/          # Dynamic job detail page
│   │   │       └── 📄 page.tsx
│   │   ├── 📂 find-labour/       # Worker/labour pages
│   │   │   ├── 📄 page.tsx
│   │   │   └── 📄 loading.tsx
│   │   ├── 📂 services/          # Services page
│   │   │   └── 📄 page.tsx
│   │   ├── 📂 contact/           # Contact page
│   │   │   └── 📄 page.tsx
│   │   ├── 📂 emergency/         # Emergency page
│   │   │   └── 📄 page.tsx
│   │   ├── 📂 dashboard/         # User dashboard
│   │   │   └── 📄 page.tsx
│   │   ├── 📂 login/             # Authentication pages
│   │   │   └── 📄 page.tsx
│   │   ├── 📂 signup/
│   │   │   └── 📄 page.tsx
│   │   └── 📂 settings/          # User settings
│   │       └── 📄 page.tsx
│   │
│   ├── 📂 components/            # React components
│   │   ├── 📄 FadeIn.tsx         # Animation component
│   │   ├── 📄 auth-provider.tsx  # Authentication context
│   │   ├── 📄 navbar.tsx         # Navigation component
│   │   ├── 📄 footer.tsx         # Footer component
│   │   ├── 📄 page-transition.tsx # Page transition animation
│   │   ├── 📄 theme-provider.tsx # Theme context
│   │   ├── 📂 auth/              # Authentication components
│   │   │   ├── 📄 sign-in-form.tsx
│   │   │   ├── 📄 sign-up-form.tsx
│   │   │   └── 📄 protected-route.tsx
│   │   ├── 📂 jobs/              # Job-related components
│   │   │   └── 📄 job-form.tsx
│   │   ├── 📂 profile/           # Profile components
│   │   │   └── 📄 profile-form.tsx
│   │   ├── 📂 resume/            # Resume components
│   │   │   └── 📄 resume-upload.tsx
│   │   └── 📂 ui/                # Reusable UI components
│   │       ├── 📄 button.tsx
│   │       ├── 📄 input.tsx
│   │       ├── 📄 card.tsx
│   │       └── ... (many more UI components)
│   │
│   ├── 📂 stores/                # Zustand state management
│   │   ├── 📄 index.ts           # Store exports
│   │   ├── 📄 auth.ts            # Authentication store
│   │   ├── 📄 jobs.ts            # Jobs management store
│   │   ├── 📄 profile.ts         # Profile store
│   │   ├── 📄 contact.ts         # Contact form store
│   │   ├── 📄 emergency.ts       # Emergency alerts store
│   │   └── 📄 workers.ts         # Worker requests store
│   │
│   ├── 📂 lib/                   # Utility libraries
│   │   ├── 📄 api.ts             # API client and types
│   │   ├── 📄 utils.ts           # Utility functions
│   │   └── 📄 supabaseClient.ts  # Legacy Supabase client
│   │
│   ├── 📂 hooks/                 # Custom React hooks
│   │   ├── 📄 use-mobile.tsx     # Mobile detection hook
│   │   └── 📄 use-toast.ts       # Toast notification hook
│   │
│   ├── 📂 styles/                # CSS styles
│   │   └── 📄 globals.css        # Global CSS
│   │
│   ├── 📂 public/                # Static assets
│   │   ├── 📄 favicon.ico        # Favicon
│   │   ├── 📄 *.png             # App icons
│   │   ├── 📄 site.webmanifest  # Web app manifest
│   │   └── 📂 images/           # Application images
│   │
│   ├── 📄 package.json           # Node.js dependencies
│   ├── 📄 yarn.lock              # Yarn lockfile
│   ├── 📄 next.config.mjs        # Next.js configuration
│   ├── 📄 tailwind.config.ts     # Tailwind CSS configuration
│   ├── 📄 postcss.config.mjs     # PostCSS configuration
│   ├── 📄 tsconfig.json          # TypeScript configuration
│   ├── 📄 components.json        # UI components configuration
│   ├── 📄 Dockerfile             # Frontend container configuration
│   ├── 📄 .dockerignore          # Frontend Docker ignore rules
│   ├── 📄 .env.local             # Frontend environment variables
│   └── 📄 README.md              # Frontend documentation
│
├── 📄 docker-compose.yml         # Production deployment configuration
├── 📄 docker-compose.dev.yml     # Development deployment configuration
├── 📄 startup.sh                 # Interactive development setup script
└── 📄 README.md                  # Main project documentation

Key Features:
=============
✅ Complete separation of backend and frontend
✅ FastAPI backend with SQLite database
✅ Next.js frontend with TypeScript
✅ Zustand state management
✅ JWT authentication
✅ Role-based access control
✅ Docker containerization
✅ Development and production configurations
✅ Comprehensive documentation
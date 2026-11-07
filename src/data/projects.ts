import { assetUrl } from '../utils';

export type Project = {
  id: string; title: string; category: string; description: string; year: string;
  tags: string[]; art: 'orbit' | 'form' | 'pulse' | 'mono'; detail: string;
  purpose: string; problem: string; features: string[]; engineering: string; status: string;
  image?: { src: string; alt: string; caption?: string };
  githubUrl?: string; demoUrl?: string;
};
// Public destinations are omitted until their accessibility is verified.
// Abstract artwork is a placeholder, not a capture of the application.
export const projects: Project[] = [
  {
    id: '01', title: 'GLYDER', category: 'FULL-STACK E-COMMERCE', year: '2026',
    description: 'A footwear e-commerce platform connecting product browsing and customer orders with inventory and administration.',
    tags: ['NEXT.JS', 'REACT', 'TYPESCRIPT', 'FIREBASE'], art: 'orbit',
    image: { src: assetUrl('images/projects/glyder-home.webp'), alt: 'Glyder storefront introduction with footwear branding and collection navigation' },
    problem: 'A footwear store needs to present size and color variants while keeping customer orders, inventory, and administrative work connected.',
    detail: 'A full-stack footwear storefront with category browsing, product variants, a shopping cart, cash-on-delivery checkout, and an administration workspace.',
    purpose: 'Connect the customer shopping journey with the catalog, inventory, and order-processing tools needed to manage a store.',
    features: ['Product discovery, category filters, and size/color variants', 'Cart and checkout with server-side price and shipping validation', 'Product, inventory, and order administration', 'PDF invoice generation and email integration'],
    engineering: 'Next.js route handlers connect the React interface to Firebase Authentication, Firestore, and Storage. The application models products, size/color variants, inventory, and orders, with separate modules for pricing, validation, product management, and order workflows.',
    status: 'Public storefront verified. Checkout uses cash on delivery; order placement and production readiness were not independently tested.',
    demoUrl: 'https://glyder.lk/',
  },
  {
    id: '02', title: 'GRABYOURTICKET', category: 'EVENT BOOKING PLATFORM', year: '2026',
    description: 'Event discovery and reservations, QR tickets, and tools for event sellers.',
    tags: ['REACT', 'NESTJS', 'TYPESCRIPT', 'POSTGRESQL', 'PRISMA'], art: 'form',
    problem: 'Event attendees need to discover events and reserve tickets, while organizers need tools to manage events and admission.',
    detail: 'An event discovery and ticketing platform with guest reservations, QR ticket issuance and retrieval, and seller operations.',
    purpose: 'Connect event discovery and seat reservations with ticket delivery, organizer management, and admission workflows.',
    features: ['Event discovery, details, ticket tiers, and availability', 'Guest reservations and QR ticket download/printing', 'Seller authentication and event/tier management', 'Admission check-in, reports, and ticket-retrieval email workflows'],
    engineering: 'A NestJS backend and Prisma/PostgreSQL model support booking transactions, inventory row locks, session authentication, and an email outbox. The React client separates public booking flows from seller tools.',
    status: 'Active development. Real payment gateway integration is not yet implemented; payment confirmation currently uses a development-only mock.',
  },
  {
    id: '03', title: 'WATCHNEXT', category: 'MACHINE LEARNING', year: '2026',
    description: 'Movie discovery with hybrid recommendations combining content, collaborative filtering, and popularity.',
    tags: ['PYTHON', 'SCIKIT-LEARN', 'PANDAS', 'FASTAPI', 'MOVIELENS'], art: 'pulse',
    image: { src: assetUrl('images/projects/watchnext-home.webp'), alt: 'WatchNext movie discovery homepage with a title search and recommendation cards' },
    problem: 'Choosing a movie from a large catalog can be difficult without a useful starting point or related-title discovery.',
    detail: 'A movie recommendation application combining content-based filtering, collaborative filtering, and popularity signals with a responsive discovery interface.',
    purpose: 'Help viewers explore what to watch next from a movie they already enjoy.',
    features: ['Title autocomplete and hybrid movie recommendations', 'TF-IDF content features from movie genres and tags', 'Collaborative similarity from preprocessed MovieLens ratings', 'Optional TMDB posters/details and related-movie exploration'],
    engineering: 'Data preprocessing produces aligned sparse matrices loaded once per server process. FastAPI serves recommendations while cached TMDB enrichment remains separate from ranking. Model evaluation needs further documented validation; no accuracy claim is made.',
    status: 'Research prototype. Requires generated MovieLens artifacts; optional TMDB metadata depends on server configuration. Public deployment is not verified.',
  },
  {
    id: '04', title: 'SLOWBREW', category: 'FULL-STACK WEB APPLICATION', year: '2026',
    description: 'Café ordering from customer checkout to kitchen operations and administration.',
    tags: ['REACT', 'EXPRESS', 'POSTGRESQL', 'GSAP'], art: 'mono',
    image: { src: assetUrl('images/projects/slowbrew-home.webp'), alt: 'SlowBrew application homepage with café introduction and menu navigation' },
    problem: 'Café ordering needs to connect product selection and checkout with staff preparation, order tracking, and catalog management.',
    detail: 'A full-stack café ordering and management application with a customer storefront, checkout, kitchen queue, and staff/admin workspace.',
    purpose: 'Carry customer orders through review, acceptance, preparation, and completion while keeping catalog and business settings manageable.',
    features: ['Live catalog, product options, cart, and server-priced checkout', 'Idempotent order submission and private status tracking', 'Kitchen queue, fulfillment transitions, and print tickets', 'Role-based staff accounts, product management, and business settings'],
    engineering: 'Express APIs use PostgreSQL transactions, order snapshots, signed quotes, and idempotency keys. React manages customer and staff experiences, with GSAP supporting the café presentation.',
    status: 'Deployment pending. Implemented demo; the website has not been publicly deployed. Payment is at pickup or delivery.',
  },
];
export type ArchiveProject = {
  id: string; title: string; category: string; year: string;
  description: string; tags: string[]; status: string;
  image?: Project['image'];
};
export const archiveProjects: ArchiveProject[] = [
  { id: '001', title: 'BANKVAULT', category: 'NATIVE ANDROID', year: '2026', description: 'A native Android financial dashboard that parses supported bank SMS messages and organizes transactions, accounts, and credit-card information in a local Room database.', tags: ['KOTLIN', 'JETPACK COMPOSE', 'ROOM'], status: 'Functionally complete (owner confirmed). Supports implemented bank SMS formats; public release is not claimed.', image: { src: assetUrl('images/projects/bankvault-account-demo.webp'), alt: 'BankVault account view with explicitly synthetic demo transactions', caption: 'Synthetic demo data — not a real account.' } },
  { id: '002', title: 'BOARDKEEP', category: 'MOBILE APPLICATION', year: '2026', description: 'A boarding-house tenant management application covering tenant records, images, checklists, PDF export, and local rent reminders.', tags: ['FLUTTER', 'DART', 'FIREBASE', 'SUPABASE'], status: 'Functionally complete (owner confirmed). Security certification and public release are not claimed.' },
  { id: '003', title: 'BILLBOX', category: 'OFFLINE MOBILE UTILITY', year: '2026', description: 'A Flutter application for offline utility-bill management, with house management, SMS bill organization, bill history, and comparisons.', tags: ['FLUTTER', 'DART', 'OFFLINE'], status: 'Functionally complete (owner confirmed). Public release is not claimed.' },
  { id: '004', title: 'SEEMYMESSAGE', category: 'NATIVE IOS', year: '2026', description: 'A native iOS application for customizable scrolling LED-style messages, with speed, spacing, dot-size, and color controls, plus pause/resume and a landscape display.', tags: ['SWIFT', 'SWIFTUI'], status: 'Functionally complete (owner confirmed). Distribution is limited by the absence of Apple Developer Program membership; not publicly released.' },
  { id: '005', title: 'HUMM', category: 'AUDIO PRACTICE', year: '2026', description: 'An Android audio-practice application, formerly named SingMyWay, with pitch adjustment, tempo control, and A–B looping. Media3 playback passes decoded audio through a native SoundTouch processing stage.', tags: ['KOTLIN', 'JETPACK COMPOSE', 'MEDIA3', 'C++', 'SOUNDTOUCH'], status: 'Release verification pending. Native audio and device behavior require further verification; public release is not claimed.' },
  { id: '006', title: 'CLASSLEAF', category: 'TUITION-MANAGEMENT PROTOTYPE', year: '2026', description: 'A tuition-management prototype covering students, classes, attendance, fees, exams, and educational content, with teacher, assistant, student, and parent views.', tags: ['NEXT.JS', 'REACT', 'TYPESCRIPT', 'TAILWIND CSS'], status: 'Prototype. Authentication, messaging, and payments are currently mocked; not intended for real student data.', image: { src: assetUrl('images/projects/classleaf-introduction.webp'), alt: 'Classleaf prototype introduction with its classroom management tagline', caption: 'Prototype introduction; cropped from the existing login screen.' } },
];

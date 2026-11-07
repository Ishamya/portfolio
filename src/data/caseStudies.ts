import { assetUrl } from '../utils';

type Decision = { title: string; text: string };
export type CaseStudy = {
  label: string; focus: string; proof: string; limitation: string; connections: [string, string]; work: string[]; architecture: string[];
  architectureNote: string; decisions: Decision[]; tradeoff: string;
  verification: string; media: { src: string; alt: string; caption: string; width: number; height: number }[];
};
// Claims below are grounded in the source files listed in docs/premium-redesign.md.
// Source inspection is distinguished from execution and production validation.
export const caseStudies: Record<string, CaseStudy> = {
  '01': {
    proof: 'Public interface reviewed', limitation: 'Orders, inventory contention and external email delivery have not been independently tested.', connections: ['HTTP requests / responses', 'Firestore reads / writes'],
    label: 'Public storefront', focus: 'A connected storefront, from product variants to store operations.',
    work: ['Modeled the catalog around products and separate size/color variants, with inventory and availability exposed through route handlers.', 'Separated search summaries from variant hydration, and batched category availability requests instead of reading stock independently for every card.', 'Connected storefront, pricing, validation and order-workflow modules to the administrative product and order tools.'],
    architecture: ['React storefront / Next.js', 'Next.js route handlers', 'Firestore products, variants & orders'],
    architectureNote: 'Firebase Authentication handles identity; Firebase Storage serves product media. Server-side order modules also integrate invoice generation and transactional email.',
    decisions: [
      { title: 'Read only what a view needs', text: 'The search endpoint returns a compact product summary without hydrating variants. The admin catalogue’s optional paginated endpoint reads one extra record to detect another page and uses document-snapshot cursors for date ordering. This is separate from storefront category summaries.' },
      { title: 'Batch availability, keep retries explicit', text: 'Category availability groups up to 30 product IDs per request. The availability state is scoped to a mounted category visit. Request generations and abort handling discard stale responses; failed requests can be retried.' },
      { title: 'Keep operations separate', text: 'Pricing, validation and order-status transitions live in dedicated server modules. Order status is updated before email side effects. Email failures are caught separately, so a status update does not prove email delivery or atomic inventory handling.' },
    ],
    tradeoff: 'Search summaries share pending requests and cache their results for the browser visit, reducing repeated reads at the cost of potentially stale data. A failed search fetch also caches an empty catalogue until the module is reloaded. Availability uses fresh requests. Read reduction is supported by the code; cost savings and inventory behavior under contention have not been measured here.',
    verification: 'Inspected the public homepage, category catalogue and product detail, and captured their real interfaces. Reviewed search, availability, pagination and order-workflow source. Did not place an order, access administration or test payments. The local app was not started because it requires cloud credentials.',
    media: [
      { src: assetUrl('images/projects/glyder-home.webp'), width: 1440, height: 848, alt: 'Glyder homepage introducing the footwear collection', caption: 'Existing approved storefront introduction.' },
      { src: assetUrl('images/projects/glyder-catalogue.webp'), width: 1280, height: 720, alt: 'Public Glyder women’s catalogue with footwear, category, price and size filters', caption: 'Public storefront capture: catalogue and filters. No order submitted.' },
      { src: assetUrl('images/projects/glyder-detail.webp'), width: 1280, height: 720, alt: 'Glyder footwear detail with product images and size selection', caption: 'Public product detail. Stock and prices may change.' },
    ],
  },
  '02': {
    proof: 'Implementation reviewed in source', limitation: 'Development mock payments only. Booking, email delivery and concurrency were not run in this review.', connections: ['REST requests / responses', 'Prisma queries / transactions'],
    label: 'In development · mock payments', focus: 'Connecting event discovery, reservations and admission.',
    work: ['Built public event and booking views alongside separate seller operations in the React client.', 'Implemented NestJS booking services with PostgreSQL inventory row locks and Prisma transactions.', 'Added guest access-token checks, a development-only payment provider, QR ticket workflows and an email outbox worker.'],
    architecture: ['React attendee / seller UI', 'NestJS API & booking services', 'Prisma / PostgreSQL'],
    architectureNote: 'Booking services coordinate inventory, ticket issuance and the email outbox. A background worker processes queued email; payments currently use an explicitly gated development mock.',
    decisions: [
      { title: 'Serialize inventory changes', text: 'Booking inventory helpers use SELECT … FOR UPDATE inside transactional workflows. Expiration and booking transitions are handled alongside inventory changes rather than relying on client-side availability.' },
      { title: 'Make mock boundaries explicit', text: 'The mock payment provider requires an explicit development configuration and rejects production use. It demonstrates a confirmation flow without representing a real payment integration.' },
      { title: 'Separate delivery from booking', text: 'An email outbox records delivery work independently. The worker claims jobs with leases and bounded attempts, allowing failures to be retried outside the booking request.' },
    ],
    tradeoff: 'Reservations, retries and asynchronous email must remain consistent when requests overlap. Row locking and idempotent payment handling address those paths in the source, with concurrency scenarios present in database-backed tests. Those tests were not executed in this portfolio pass; a real payment provider remains incomplete.',
    verification: 'Reviewed frontend configuration, booking inventory, payment provider and outbox-worker source. The earlier source review did not launch the application because its configured database was non-local and startup enabled background email delivery and reservation-expiry writes. A subsequent local demo capture of event discovery is included below, with demo events explicitly labeled. This screenshot does not verify booking, email delivery, concurrency or real payments. No public demo is verified.',
    media: [
      { src: assetUrl('images/featured/featured/grabyourticket.webp'), width: 1600, height: 1120, alt: 'GrabYourTicket event discovery interface with explicitly labeled demo events', caption: 'Existing verified local demo capture. Demo events are labeled; booking, email delivery, concurrency and real payments are not verified by this image.' },
    ],
  },
  '03': {
    proof: 'Local recommendation flow exercised', limitation: 'Ranking scores are not accuracy measurements. Recommendation quality and public hosting remain unverified.', connections: ['Loads generated sparse matrices', 'Returns JSON recommendations'],
    label: 'Research prototype', focus: 'Turning a favourite film into a useful starting point.',
    work: ['Combined content, collaborative and popularity signals into a hybrid ranking pipeline over MovieLens artifacts.', 'Loaded and normalized aligned sparse feature and rating matrices once per server process.', 'Exposed search and recommendation endpoints through FastAPI, with optional movie metadata kept outside the ranking calculation.'],
    architecture: ['MovieLens → preprocessing artifacts', 'Sparse hybrid ranking / FastAPI', 'Browser discovery & movie dialog'],
    architectureNote: 'Optional TMDB metadata enriches presentation through a separate server-side service. Recommendation scores do not depend on TMDB responses or poster availability.',
    decisions: [
      { title: 'Preserve catalog alignment', text: 'TF-IDF uses movie genres and tags. User ratings are mean-centered before building the movie-by-user sparse matrix; explicit movie-ID mappings align its rows with the catalogue. Content and collaborative cosine scores are combined with popularity using weights of 0.25, 0.50 and 0.25.' },
      { title: 'Rank a small result set efficiently', text: 'The input movie is excluded from its own results. NumPy argpartition selects candidate results before sorting only that subset; no latency improvement is claimed without a benchmark.' },
      { title: 'Treat enrichment as optional', text: 'Missing metadata falls back to title-based artwork and a clear explanation. The movie dialog still offers related-title exploration with the original catalog title.' },
    ],
    tradeoff: 'Sparse artifacts avoid recomputing features per request, but the server still needs generated and correctly aligned data. The builder reads a configured prefix of the ratings data and excludes movies below a minimum rating count from the collaborative matrix. Unrated titles receive a zero collaborative signal. The weights are implementation choices, not proof of recommendation quality. Offline evaluation and user studies remain future validation work.',
    verification: 'The previous local review ran with the optional TMDB API disabled; seven existing mocked backend tests also passed. Verified title search, ten Toy Story recommendations and the Toy Story 2 dialog with its metadata-unavailable fallback. Match percentages in the application are ranking scores, not measured recommendation accuracy. Public hosting is not verified.',
    media: [
      { src: assetUrl('images/projects/watchnext-home.webp'), width: 1440, height: 900, alt: 'WatchNext movie discovery homepage', caption: 'Existing approved discovery homepage.' },
      { src: assetUrl('images/projects/watchnext-results.webp'), width: 1280, height: 720, alt: 'WatchNext Toy Story recommendations using title artwork without external metadata', caption: 'Local recommendation results; TMDB disabled. Match scores are not accuracy measurements.' },
      { src: assetUrl('images/projects/watchnext-detail.webp'), width: 1280, height: 720, alt: 'Toy Story 2 detail dialog with a related-movie action and unavailable-metadata explanation', caption: 'Local movie dialog showing the working metadata fallback.' },
    ],
  },
  '04': {
    proof: 'Order implementation reviewed in source', limitation: 'No public deployment verified. Live ordering was not exercised; payment is at pickup or delivery.', connections: ['HTTP requests / responses', 'SQL queries / transactions'],
    label: 'Implemented demo · deployment pending', focus: 'One ordering flow for customers, kitchen staff and administrators.',
    work: ['Connected the React storefront to Express menu, quote, order and staff APIs backed by PostgreSQL.', 'Implemented server-priced quotes, signed quote tokens and idempotent order creation with stored order snapshots.', 'Added kitchen order transitions, private tracking and role-based staff and catalog management.'],
    architecture: ['React customer / staff interfaces', 'Express API & order services', 'PostgreSQL catalog, orders & history'],
    architectureNote: 'The customer requests a server-priced quote before submitting an order. Staff sessions protect management routes; order history records fulfillment transitions.',
    decisions: [
      { title: 'Price on the server', text: 'Checkout quotes include an expiring HMAC-signed token. Order submission validates the token and checks current pricing and business policy before accepting the order.' },
      { title: 'Make retries safe to handle', text: 'An idempotency key identifies an order attempt. A PostgreSQL transaction-scoped advisory lock serializes retries for that key. Stored request hashes distinguish a replay from conflicting reuse; PostgreSQL transactions group order and snapshot writes.' },
      { title: 'Preserve what was ordered', text: 'Order snapshots retain submitted line details. Staff state transitions use row locks and write history, while customer tracking uses a private token rather than an enumerable order ID.' },
    ],
    tradeoff: 'A changing menu can invalidate an earlier quote, requiring the customer to review an updated price. Signed quotes and snapshots make that boundary explicit, but production operations, abuse resistance and recovery still need independent validation. Payment is at pickup or delivery.',
    verification: 'Reviewed API startup, configuration, routes and order-service source. The previous local startup failed because PostgreSQL was stopped. This review uses existing approved imagery; PostgreSQL was not started, migrated or seeded. Retained approved imagery and selected an existing public-menu capture. Public deployment remains unverified.',
    media: [
      { src: assetUrl('images/projects/slowbrew-home.webp'), width: 1440, height: 900, alt: 'SlowBrew café homepage', caption: 'Existing approved café introduction.' },
      { src: assetUrl('images/projects/slowbrew-menu.webp'), width: 1440, height: 900, alt: 'SlowBrew menu with coffee products, filters and add-to-cart controls', caption: 'Existing repository QA capture of the public menu; not recaptured in this pass.' },
    ],
  },
};

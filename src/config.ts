// =============================================================================
// Site Template Configuration
// =============================================================================
// All site content is configured here. Components render nothing when their
// primary config fields are empty strings or empty arrays.
//
// STRUCTURE RULE: All interfaces must come first, then all export consts.
// This is required for the pull-config script to work correctly.
// =============================================================================

// =============================================================================
// INTERFACES
// =============================================================================
// Site is English-only. LocaleString is kept as a type alias for string
// so existing interfaces and t() continue to work without changes.
export type LocaleString = string;

export interface SiteConfig {
  title: LocaleString;
  description: LocaleString;
  language: string;
  keywords: LocaleString;
  ogImage: string;
  canonical: string;
  siteId: string;
  apiUrl: string;
}

export interface NavigationConfig {
  brandName: LocaleString;
  phone: string;
  searchAriaLabel: LocaleString;
  openMenuAriaLabel: LocaleString;
  closeMenuAriaLabel: LocaleString;
  home: LocaleString;
  homeStyle2: LocaleString;
  homeStyle3: LocaleString;
  room: LocaleString;
  roomSingle: LocaleString;
  destination: LocaleString;
  pages: LocaleString;
  about: LocaleString;
  faq: LocaleString;
  page404: LocaleString;
  service: LocaleString;
  serviceSingle: LocaleString;
  blog: LocaleString;
  blogLeftSidebar: LocaleString;
  blogFullWidth: LocaleString;
  blogSingle: LocaleString;
  blogSingleLeft: LocaleString;
  blogSingleFullwidth: LocaleString;
  contact: LocaleString;
  socialResponsibility: LocaleString;
  bookButton: LocaleString;
}

export interface FooterConfig {
  contactTitle: LocaleString;
  contactDesc: LocaleString;
  address: LocaleString;
  phone: string;
  email: string;
  destinationTitle: LocaleString;
  destination1Name: LocaleString;
  destination1Date: LocaleString;
  destination1Price: string;
  destination2Name: LocaleString;
  destination2Date: LocaleString;
  destination2Price: string;
  usefulLinksTitle: LocaleString;
  aboutUs: LocaleString;
  ourOffers: LocaleString;
  howSpread: LocaleString;
  contactUs: LocaleString;
  ourEvent: LocaleString;
  newsletterTitle: LocaleString;
  emailPlaceholder: LocaleString;
  subscribeButton: LocaleString;
  facebookAriaLabel: LocaleString;
  twitterAriaLabel: LocaleString;
  instagramAriaLabel: LocaleString;
  privacyPolicy: LocaleString;
  termsConditions: LocaleString;
  cookies: LocaleString;
  copyright: LocaleString;
}

export interface PageHeroConfig {
  homeBreadcrumb: LocaleString;
}

export interface HeroConfig {
  mainTitle: LocaleString;
  subtitle: LocaleString;
  cta: LocaleString;
  heroImage: string;
}

export interface HomeHeroCardConfig {
  image: string;
  title: LocaleString;
  tagline: LocaleString;
  learnMore: LocaleString;
}

export interface HomeServicesSectionConfig {
  eyebrow: LocaleString;
  title: LocaleString;
  subtitle: LocaleString;
  onlineBooking: LocaleString;
}

export interface SearchConfig {
  checkIn: LocaleString;
  checkOut: LocaleString;
  guests: LocaleString;
  children: LocaleString;
  checkAvailability: LocaleString;
}

export interface HomeAboutConfig {
  eyebrow: LocaleString;
  title: LocaleString;
  body: LocaleString;
  moreButton: LocaleString;
}

export interface HomeDestinationsConfig {
  eyebrow: LocaleString;
  title: LocaleString;
  body: LocaleString;
  discoverButton: LocaleString;
  perDay: LocaleString;
  items: { name: LocaleString; date: LocaleString; price: string }[];
}

export interface HomeRoomsConfig {
  eyebrow: LocaleString;
  title: LocaleString;
  categories: LocaleString[];
  roomDescription: LocaleString;
  fromPerNight: LocaleString;
  checkAvailability: LocaleString;
  items: { name: LocaleString; type: LocaleString; price: number }[];
}

export interface HomeTestimonialsConfig {
  eyebrow: LocaleString;
  title: LocaleString;
  items: { quote: LocaleString; name: LocaleString; location: LocaleString }[];
}

export interface HomeBlogConfig {
  eyebrow: LocaleString;
  title: LocaleString;
  subtitle: LocaleString;
  continue: LocaleString;
  items: { title: LocaleString; category: LocaleString; date: LocaleString; image?: string }[];
}

export interface HomeFeaturedConfig {
  eyebrow: LocaleString;
  title: LocaleString;
  subtitle: LocaleString;
  body: LocaleString;
  cta: LocaleString;
  ctaLink: string;
  image: string;
}

export interface ContactFormConfig {
  nameLabel: LocaleString;
  emailLabel: LocaleString;
  messageLabel: LocaleString;
  submitButton: LocaleString;
  submitting: LocaleString;
  successTitle: LocaleString;
  successText: LocaleString;
  errorText: LocaleString;
  nameRequired: LocaleString;
  emailInvalid: LocaleString;
  messageRequired: LocaleString;
}

export interface ContactPageConfig {
  pageTitle: LocaleString;
  breadcrumb: LocaleString;
  getInTouch: LocaleString;
  intro: LocaleString;
  address: LocaleString;
  phone: LocaleString;
  email: LocaleString;
  sendMessage: LocaleString;
  addressValue: LocaleString;
  phoneValue: string;
  emailValue: string;
}

export interface AboutPageConfig {
  pageTitle: LocaleString;
  breadcrumb: LocaleString;
  welcomeTitle: LocaleString;
  welcomeSubtitle: LocaleString;
  luxuryTitle: LocaleString;
  luxuryDesc: LocaleString;
  customizedTitle: LocaleString;
  customizedDesc: LocaleString;
  comfortTitle: LocaleString;
  comfortDesc: LocaleString;
  detailTitle: LocaleString;
  detailDesc: LocaleString;
  philosophyTitle: LocaleString;
  philosophyBody: LocaleString;
  valuesTitle: LocaleString;
  valueSafety: LocaleString;
  valueCourtesy: LocaleString;
  valueReliability: LocaleString;
  valueSustainability: LocaleString;
  valueInnovation: LocaleString;
  peopleTitle: LocaleString;
  peopleBody: LocaleString;
  exploreServicesButton: LocaleString;
}

export interface SocialResponsibilityPageConfig {
  pageTitle: LocaleString;
  breadcrumb: LocaleString;
  subtitle: LocaleString;
  meaningTitle: LocaleString;
  meaningBody: LocaleString;
  achieveTitle: LocaleString;
  achieveBody: LocaleString;
  peopleTitle: LocaleString;
  peopleBody: LocaleString;
  teamTitle: LocaleString;
  teamBody: LocaleString;
  customersTitle: LocaleString;
  customersBody: LocaleString;
  accessibilityBody: LocaleString;
  offerTitle: LocaleString;
  solidarityTitle: LocaleString;
  solidarityBody: LocaleString;
  environmentTitle: LocaleString;
  environmentBody: LocaleString;
  hybridTitle: LocaleString;
  hybridBody: LocaleString;
  routesTitle: LocaleString;
  routesBody: LocaleString;
  whyTitle: LocaleString;
  whyBody: LocaleString;
}

export interface FaqConfig {
  pageTitle: LocaleString;
  breadcrumb: LocaleString;
  items: { question: LocaleString; answer: LocaleString }[];
}

export interface NotFoundConfig {
  code: LocaleString;
  title: LocaleString;
  description: LocaleString;
  backButton: LocaleString;
}

export interface RoomPageConfig {
  pageTitle: LocaleString;
  breadcrumb: LocaleString;
  categories: LocaleString[];
  fromPerNight: LocaleString;
  checkAvailability: LocaleString;
  items: { name: LocaleString; type: LocaleString; price: number }[];
}

export interface RoomSinglePageConfig {
  pageTitle: LocaleString;
  breadcrumbRoom: LocaleString;
  breadcrumbRoomSingle: LocaleString;
  roomDetails: LocaleString;
  body1: LocaleString;
  body2: LocaleString;
  amenities: LocaleString[];
  bookRoom: LocaleString;
  fromPerNight: LocaleString;
  checkIn: LocaleString;
  checkOut: LocaleString;
  guests: LocaleString;
  checkAvailability: LocaleString;
  allServices: LocaleString;
}

export interface DestinationPageConfig {
  pageTitle: LocaleString;
  breadcrumb: LocaleString;
  items: { name: LocaleString; date: LocaleString; price: string }[];
}

export interface ServicePageConfig {
  pageTitle: LocaleString;
  breadcrumb: LocaleString;
  items: { title: LocaleString; description: LocaleString }[];
}

export interface ServiceSinglePageConfig {
  pageTitle: LocaleString;
  breadcrumbService: LocaleString;
  breadcrumbServiceSingle: LocaleString;
  title: LocaleString;
  body1: LocaleString;
  body2: LocaleString;
  allServices: LocaleString;
  serviceItems: LocaleString[];
}

export interface BlogPageConfig {
  pageTitle: LocaleString;
  breadcrumb: LocaleString;
  readMore: LocaleString;
  items: { title: LocaleString; category: LocaleString; date: LocaleString; excerpt: LocaleString; image?: string }[];
}

export interface BlogLeftPageConfig {
  pageTitle: LocaleString;
  breadcrumbBlog: LocaleString;
  breadcrumbLeftSidebar: LocaleString;
  categoriesTitle: LocaleString;
  categories: LocaleString[];
  readMore: LocaleString;
  items: { title: LocaleString; category: LocaleString; date: LocaleString }[];
}

export interface BlogFullwidthPageConfig {
  pageTitle: LocaleString;
  breadcrumbBlog: LocaleString;
  breadcrumbFullWidth: LocaleString;
  readMore: LocaleString;
  items: { title: LocaleString; category: LocaleString; date: LocaleString }[];
}

export interface BlogSinglePageConfig {
  breadcrumbBlog: LocaleString;
  breadcrumbSingle: LocaleString;
  backToBlog: LocaleString;
  item: { title: LocaleString; category: LocaleString; date: LocaleString; body1: LocaleString; body2: LocaleString; body3: LocaleString; image?: string };
}

export interface PreloaderConfig {
  brandName: LocaleString;
  brandSubname: LocaleString;
  yearText: LocaleString;
}

export interface ScrollToTopConfig {
  ariaLabel: LocaleString;
}

export interface BookingPageConfig {
  pageTitle: LocaleString;
  breadcrumb: LocaleString;
  step1: LocaleString;
  step2: LocaleString;
  step3: LocaleString;
  step4: LocaleString;
  pickupLabel: LocaleString;
  destinationLabel: LocaleString;
  dateLabel: LocaleString;
  timeLabel: LocaleString;
  returnTripLabel: LocaleString;
  returnSectionTitle: LocaleString;
  returnPickupLabel: LocaleString;
  returnDestinationLabel: LocaleString;
  returnDateLabel: LocaleString;
  returnTimeLabel: LocaleString;
  pickupPlaceholder: LocaleString;
  destinationPlaceholder: LocaleString;
  adultsLabel: LocaleString;
  childrenLabel: LocaleString;
  passengersLabel: LocaleString;
  fullNameLabel: LocaleString;
  emailLabel: LocaleString;
  phoneLabel: LocaleString;
  notesLabel: LocaleString;
  loadingVehicles: LocaleString;
  noVehiclesFound: LocaleString;
  priceLabel: LocaleString;
  priceOnRequest: LocaleString;
  nextStep: LocaleString;
  prevStep: LocaleString;
  submitBooking: LocaleString;
  successTitle: LocaleString;
  successMessage: LocaleString;
  bookingNumberLabel: LocaleString;
  tryAgain: LocaleString;
  newBooking: LocaleString;
}

export interface DigitalProduct {
  id: string;
  type: 'course';
  title: string;
  slug: string;
  description?: string;
  thumbnail?: string;
  price: string;
  language: string;
  estimatedDurationMinutes?: number;
  chapters?: {
    id: string;
    title: string;
    lessons: { id: string; title: string }[];
  }[];
}

export interface DigitalProductsConfig {
  enabled: boolean;
  lastSyncedAt?: string;
  products: DigitalProduct[];
}

// =============================================================================
// CONSTANTS
// =============================================================================

export const siteConfig: SiteConfig = {
  title: 'En-Routes',
  description: '',
  language: 'en',
  keywords: '',
  ogImage: '',
  canonical: '',
  siteId: '',
  apiUrl: '',
};

export const navigationConfig: NavigationConfig = {
  brandName: 'En-Routes',
  phone: '+30 694 462 9185',
  searchAriaLabel: 'Search',
  openMenuAriaLabel: 'Open menu',
  closeMenuAriaLabel: 'Close menu',
  home: 'Home',
  homeStyle2: 'Home Style 2',
  homeStyle3: 'Home Style 3',
  room: 'Room',
  roomSingle: 'Room Single',
  destination: 'Destination',
  pages: 'Pages',
  about: 'About',
  faq: 'FAQ',
  page404: '404',
  service: 'Services',
  serviceSingle: 'Service Single',
  blog: 'Blog',
  blogLeftSidebar: 'Blog Left Sidebar',
  blogFullWidth: 'Blog Full Width',
  blogSingle: 'Blog Single',
  blogSingleLeft: 'Blog Single Left',
  blogSingleFullwidth: 'Blog Single Fullwidth',
  contact: 'Contact',
  socialResponsibility: 'Social Responsibility',
  bookButton: 'Online Bookings',
};

export const footerConfig: FooterConfig = {
  contactTitle: 'Contact',
  contactDesc: 'Transfers and tours with comfort and reliability.',
  address: 'Greece',
  phone: '+30 694 462 9185',
  email: 'info@en-routes.gr',
  destinationTitle: 'Destination',
  destination1Name: 'Paris, France',
  destination1Date: '11 Jun 2020 - 22 Jun 2020',
  destination1Price: '$835',
  destination2Name: 'San Francisco',
  destination2Date: '11 Jun 2020 - 22 Jun 2020',
  destination2Price: '$835',
  usefulLinksTitle: 'Useful Links',
  aboutUs: 'About Us',
  ourOffers: 'Services',
  howSpread: 'Social Responsibility',
  contactUs: 'Contact',
  ourEvent: 'Blog',
  newsletterTitle: 'Newsletter',
  emailPlaceholder: 'Email Address *',
  subscribeButton: 'Subscribe',
  facebookAriaLabel: 'Facebook',
  twitterAriaLabel: 'Twitter',
  instagramAriaLabel: 'Instagram',
  privacyPolicy: 'Privacy Policy',
  termsConditions: 'Terms & Conditions',
  cookies: 'Cookies',
  copyright: 'En-Routes. All rights reserved',
};

export const pageHeroConfig: PageHeroConfig = {
  homeBreadcrumb: 'Home',
};

export const heroConfig: HeroConfig = {
  mainTitle: 'Welcome to En-Routes',
  subtitle: 'Transfers and tours with comfort, reliability, and personal service.',
  cta: 'Transfers & Tours',
  heroImage: 'https://images.unsplash.com/photo-1741791415725-2010d94f5987?w=1920&q=80',
};

export const homeHeroCardsConfig = [
  {
    image: 'https://images.unsplash.com/photo-1660386064971-d5870803764a?w=1920&q=80',
    title: 'Transfers',
    tagline: 'Make your journey better and brighter. We are here to take you there.',
    learnMore: 'Learn more',
  },
  {
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1920&q=80',
    title: 'Organized Tours',
    tagline: 'Make your journey better and brighter. We are here to take you there.',
    learnMore: 'Learn more',
  },
  {
    image: 'https://images.unsplash.com/photo-1741791415725-2010d94f5987?w=1920&q=80',
    title: 'Your journey, our care',
    tagline: 'Make your journey better and brighter. We are here to take you there.',
    learnMore: 'Learn more',
  },
];

export const homeServicesSectionConfig: HomeServicesSectionConfig = {
  eyebrow: 'Services',
  title: 'Discover our services',
  subtitle: 'From airport transfers to guided tours, we are here to make your journey enjoyable and worry-free.',
  onlineBooking: 'Online Bookings',
};

export const searchConfig: SearchConfig = {
  checkIn: 'Check-in',
  checkOut: 'Check-out',
  guests: 'Guests',
  children: 'Children',
  checkAvailability: 'Check Availability',
};

export const homeAboutConfig: HomeAboutConfig = {
  eyebrow: 'About Us',
  title: 'Comfortable Transportation & Memorable Tours',
  body: 'Travel and exploring aren\'t just about getting from one place to another — they\'re about the experience. With a strong focus on comfort, reliability, and personalized service, we take care of every detail to ensure your journey is smooth and enjoyable. Whether you need transportation to or from the airport or you\'re looking for a unique guided tour, we are here to make your trip relaxing, convenient, and truly memorable.',
  moreButton: 'Online Bookings',
};

export const homeDestinationsConfig: HomeDestinationsConfig = {
  eyebrow: 'Popular Destination',
  title: 'Choose Your Country',
  body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
  discoverButton: 'Discover More',
  perDay: 'Per Day',
  items: [
    {
      name: 'Paris, France',
      date: '11 Jun 2020 - 22 Jun 2020',
      price: '$835',
    },
    {
      name: 'San Francisco',
      date: '11 Jun 2020 - 22 Jun 2020',
      price: '$750',
    },
    {
      name: 'United Arab',
      date: '11 Jun 2020 - 22 Jun 2020',
      price: '$750',
    },
    {
      name: 'Singapore',
      date: '11 Jun 2020 - 22 Jun 2020',
      price: '$550',
    },
  ],
};

export const homeRoomsConfig: HomeRoomsConfig = {
  eyebrow: 'Our Rooms',
  title: 'Discover Our Rooms',
  categories: [
    'Classic',
    'Budget',
    'Luxury',
    'Double',
    'Single',
  ],
  roomDescription: 'If you are going to use a passage Lorem Ipsum...',
  fromPerNight: 'From: $142 / Night',
  checkAvailability: 'Check Availability',
  items: [
    {
      name: 'Lake view Room',
      type: 'Twin Room',
      price: 142,
    },
    {
      name: 'Queen Room Balcony',
      type: 'Twin Room',
      price: 142,
    },
    {
      name: 'Apartment',
      type: 'Twin Room',
      price: 142,
    },
  ],
};

export const homeTestimonialsConfig: HomeTestimonialsConfig = {
  eyebrow: 'What Say Clients',
  title: 'Our Clients are Important to Us',
  items: [
    {
      quote: 'The trip was incredible. I got to see so many places I wouldn\'t have by myself, me and my husband really enjoyed a lot.',
      name: 'Benjir Walton',
      location: 'Singapore',
    },
    {
      quote: 'The trip was incredible. I got to see so many places I wouldn\'t have by myself, me and my husband really enjoyed a lot.',
      name: 'Jenefar Meera',
      location: 'Canada',
    },
    {
      quote: 'The trip was incredible. I got to see so many places I wouldn\'t have by myself, me and my husband really enjoyed a lot.',
      name: 'Lily monalisa',
      location: 'Singapore',
    },
  ],
};

export const homeFeaturedConfig: HomeFeaturedConfig = {
  eyebrow: 'En-Routes',
  title: 'Tours in Greece',
  subtitle: 'A taste of culture, landscape, and authentic experiences.',
  body: 'Every route we take is a story. At En-Routes, we offer curated tours across Greece — from cultural landmarks to hidden gems. Explore the Peloponnese, discover coastal villages, or enjoy themed experiences tailored to your pace. We take care of every detail so you can focus on the journey.',
  cta: 'Learn more',
  ctaLink: '/services',
  image: 'https://images.unsplash.com/photo-1767907573610-6f1d6c501d6f?w=1920&q=80',
};

export const homeBlogConfig: HomeBlogConfig = {
  eyebrow: 'From Greece',
  title: 'Our Latest News and Articles',
  subtitle: 'Discover the latest updates and insights from our team. Stay informed about travel in Greece and useful tips.',
  continue: 'Learn more',
  items: [
    {
      title: 'Best Time to Visit the Greek Islands',
      category: 'Tips',
      date: '10 March 2026',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1920&q=80',
    },
    {
      title: 'Athens Airport: Stress-Free Transfer Tips',
      category: 'Transfers',
      date: '10 March 2026',
      image: 'https://images.unsplash.com/photo-1741791415725-2010d94f5987?w=1920&q=80',
    },
    {
      title: 'Exploring the Peloponnese by Car',
      category: 'Tours',
      date: '27 Feb 2026',
      image: 'https://images.unsplash.com/photo-1660386064971-d5870803764a?w=1920&q=80',
    },
  ],
};

export const contactFormConfig: ContactFormConfig = {
  nameLabel: 'Name',
  emailLabel: 'Email',
  messageLabel: 'Message',
  submitButton: 'Send Message',
  submitting: 'Sending...',
  successTitle: 'Message sent!',
  successText: 'We will get back to you shortly.',
  errorText: 'Something went wrong. Please try again.',
  nameRequired: 'Name is required.',
  emailInvalid: 'Please enter a valid email.',
  messageRequired: 'Message is required.',
};

export const contactPageConfig: ContactPageConfig = {
  pageTitle: 'Contact Us',
  breadcrumb: 'Contact',
  getInTouch: 'Get in Touch',
  intro: 'Get in touch for transfer or tour bookings. We will get back to you as soon as we can.',
  address: 'Address',
  phone: 'Phone',
  email: 'Email',
  sendMessage: 'Send a Message',
  addressValue: 'Greece',
  phoneValue: '+30 694 462 9185',
  emailValue: 'info@en-routes.gr',
};

export const aboutPageConfig: AboutPageConfig = {
  pageTitle: 'About Us',
  breadcrumb: 'About',
  welcomeTitle: 'Welcome!',
  welcomeSubtitle: 'En-Routes. A name that flows like the road. Inspired by the journey — not just a ride, but an experience, because the way matters as much as the destination.',
  luxuryTitle: 'Luxury transfers',
  luxuryDesc: 'Easy, stylish and worry-free. Whether you need a transfer to or from the airport or a unique tour, we are here to make your trip enjoyable and stress-free.',
  customizedTitle: 'Customized excursions',
  customizedDesc: 'Designed around you. With a fleet of premium vehicles, professional drivers and tailored services we create the ideal travel experience for those who seek the best.',
  comfortTitle: 'Comfort & discretion',
  comfortDesc: 'Travel as you deserve. We offer high-level service to travellers who look for elegance, comfort and discretion — always with care and respect.',
  detailTitle: 'Attention to detail',
  detailDesc: 'Because every minute counts. We take care of every detail from pickup to drop-off — with reliability, consistency and a personal touch.',
  philosophyTitle: 'Our philosophy',
  philosophyBody: 'The journey was always more than a simple ride. It is a search, an experience, an art — a journey through culture, art and history. Every service we offer is designed for those who do not settle for the ordinary but seek substance, elegance and authentic hospitality.',
  valuesTitle: 'Our values',
  valueSafety: 'Safety — The safety of our passengers and compliance with all regulations is our top priority.',
  valueCourtesy: 'Courtesy & professionalism — Every driver and team member is trained to provide the best possible service with courtesy, respect and professionalism.',
  valueReliability: 'Reliability — In our transfers and tours, reliability and keeping to schedule are key to a successful experience.',
  valueSustainability: 'Sustainability — We focus on environmental responsibility and solutions that minimise our footprint.',
  valueInnovation: 'Innovation — We always aim to evolve, integrating new technologies and services that enhance our customers\' experience.',
  peopleTitle: 'Our people make the difference',
  peopleBody: 'At En-Routes, our people are what make the difference. Every team member brings unique skills, experience and passion for serving our customers.',
  exploreServicesButton: 'Our Services',
};

export const socialResponsibilityPageConfig: SocialResponsibilityPageConfig = {
  pageTitle: 'Social Responsibility',
  breadcrumb: 'Social Responsibility',
  subtitle: 'Corporate Social Responsibility',
  meaningTitle: 'A journey with meaning',
  meaningBody: 'At En-Routes we do not just move people — we move values. For us, corporate responsibility goes deeper. It is a way of life: more conscious, fairer, closer to what truly matters.',
  achieveTitle: 'What we want to achieve',
  achieveBody: 'To operate with respect — for people, the environment and the communities we meet. To make “luxury” mean something deeper than comfort: responsibility, care and connection.',
  peopleTitle: 'Commitment to people',
  peopleBody: 'At En-Routes, people are at the centre of everything we do. We believe that luxury is not just an experience but an opportunity to connect meaningfully with people and the environment.',
  teamTitle: 'Our team: the heart of En-Routes',
  teamBody: 'En-Routes would not exist without its people. The wellbeing of our staff is essential to the quality of service we offer, and we foster a workplace that promotes collaboration, training and personal fulfilment.',
  customersTitle: 'Our customers: connection and experience',
  customersBody: 'We do not treat our customers as mere clients but as people with unique needs and wishes. We aim to make every journey special, offering experiences that are not only comfortable but human, with respect for each person.',
  accessibilityBody: 'We also make sure everyone can join the journey. Our vehicles are accessible to people with disabilities, because luxury does not exclude — it includes.',
  offerTitle: 'What we offer',
  solidarityTitle: 'Solidarity and social responsibility',
  solidarityBody: 'We believe in the power of solidarity. For us, social responsibility is not an obligation — it is part of our culture. We support local initiatives, cultural actions and vulnerable groups because we believe in it.',
  environmentTitle: 'Commitment to the environment',
  environmentBody: 'For us, the environment is more than a duty — it is a priority. We are committed to protecting the planet and reducing our footprint in our daily operations and services.',
  hybridTitle: 'Hybrid fleet, lower emissions',
  hybridBody: 'Our vehicles are hybrid, combining the power of conventional fuels with the efficiency of electric systems. This choice significantly reduces CO2 emissions and supports a cleaner environment.',
  routesTitle: 'Route optimisation and lower footprint',
  routesBody: 'We plan routes in the most efficient way, avoiding unnecessary distance and ensuring every trip is as efficient as possible in time and fuel.',
  whyTitle: 'Why all this?',
  whyBody: 'Because when you say “let’s go”, how you go matters too. We choose to go with respect — and to give meaning to every journey.',
};

export const faqConfig: FaqConfig = {
  pageTitle: 'FAQ',
  breadcrumb: 'FAQ',
  items: [
    {
      question: 'How do I make a reservation?',
      answer: 'You can make a reservation through our website, by phone, or by visiting our front desk. Online booking is available 24/7.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Cancellations made 48 hours before check-in receive a full refund. Cancellations within 48 hours may incur a one-night charge.',
    },
    {
      question: 'What time is check-in and check-out?',
      answer: 'Check-in is from 3:00 PM and check-out is by 11:00 AM. Early check-in or late check-out may be available upon request.',
    },
    {
      question: 'Do you offer breakfast?',
      answer: 'Yes, we offer a complimentary breakfast buffet from 7:00 AM to 10:00 AM daily for all registered guests.',
    },
    {
      question: 'Is parking available?',
      answer: 'Yes, we offer complimentary parking for all guests. Valet parking is also available for an additional fee.',
    },
  ],
};

export const notFoundConfig: NotFoundConfig = {
  code: '404',
  title: 'Page Not Found',
  description: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
  backButton: 'Back to Home Page',
};

export const roomPageConfig: RoomPageConfig = {
  pageTitle: 'Our Rooms',
  breadcrumb: 'Room',
  categories: [
    'Classic',
    'Budget',
    'Luxury',
    'Double',
    'Single',
  ],
  fromPerNight: 'From: $142 / Night',
  checkAvailability: 'Check Availability',
  items: [
    {
      name: 'Lake view Room',
      type: 'Twin Room',
      price: 142,
    },
    {
      name: 'Queen Room Balcony',
      type: 'Twin Room',
      price: 142,
    },
    {
      name: 'Apartment',
      type: 'Twin Room',
      price: 142,
    },
  ],
};

export const roomSinglePageConfig: RoomSinglePageConfig = {
  pageTitle: 'Lake View Room',
  breadcrumbRoom: 'Room',
  breadcrumbRoomSingle: 'Room Single',
  roomDetails: 'Room Details',
  body1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
  body2: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.',
  amenities: [
    'WiFi',
    'TV',
    'AC',
    'Minibar',
    'Safe',
    'Balcony',
  ],
  bookRoom: 'Book This Room',
  fromPerNight: 'From $142 / Night',
  checkIn: 'Check-in',
  checkOut: 'Check-out',
  guests: 'Guests',
  checkAvailability: 'Check Availability',
  allServices: 'All Services',
};

export const destinationPageConfig: DestinationPageConfig = {
  pageTitle: 'Destination',
  breadcrumb: 'Destination',
  items: [
    {
      name: 'Paris, France',
      date: '11 Jun 2020 - 22 Jun 2020',
      price: '$835',
    },
    {
      name: 'San Francisco',
      date: '11 Jun 2020 - 22 Jun 2020',
      price: '$750',
    },
    {
      name: 'United Arab',
      date: '11 Jun 2020 - 22 Jun 2020',
      price: '$750',
    },
    {
      name: 'Singapore',
      date: '11 Jun 2020 - 22 Jun 2020',
      price: '$550',
    },
  ],
};

export const servicePageConfig: ServicePageConfig = {
  pageTitle: 'Our Services',
  breadcrumb: 'Services',
  items: [
    {
      title: 'Airport Transfers',
      description: 'Discover the comfort and safety we offer for transfers to and from the airport. Our team is always on time and guarantees your safe and comfortable transportation, whether for arrival or departure.',
    },
    {
      title: 'Organized Tours',
      description: 'Discover the best locations and sights with our organized tours. From cultural landmarks to hidden gems, our team will guide you through unforgettable experiences and unique moments of exploration.',
    },
    {
      title: 'Corporate & Events',
      description: 'The ideal choice for your business needs. From corporate meetings to major events and conferences, reliable and timely transportation ensures comfort and maintains your professional profile.',
    },
    {
      title: 'Children & Student Transport',
      description: 'We ensure our young passengers travel with safety, comfort, and responsibility. Our drivers are experienced and committed to a smooth ride.',
    },
  ],
};

export const serviceSinglePageConfig: ServiceSinglePageConfig = {
  pageTitle: 'Restaurant & Dining',
  breadcrumbService: 'Service',
  breadcrumbServiceSingle: 'Service Single',
  title: 'Restaurant & Dining',
  body1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
  body2: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
  allServices: 'All Services',
  serviceItems: [
    'Restaurant',
    'Spa & Wellness',
    'Airport Transfer',
    'Concierge',
    'Room Service',
    'Pool',
  ],
};

export const blogPageConfig: BlogPageConfig = {
  pageTitle: 'Blog',
  breadcrumb: 'Blog',
  readMore: 'Read More',
  items: [
    {
      title: 'Activities for active weekends: hiking, kayaking & cycling',
      category: 'Tours',
      date: '10 March 2026',
      excerpt: 'Trips do not have to be only relaxing. They can turn into active experiences that fill you with energy and create memories...',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
    },
    {
      title: 'How to plan a budget weekend trip',
      category: 'Tips',
      date: '10 March 2026',
      excerpt: 'Weekends are ideal for short getaways, but often the cost makes us think twice. The truth is that with a few tips you can enjoy a great trip without breaking the bank...',
      image: 'https://images.unsplash.com/photo-1660386064971-d5870803764a?w=1920&q=80',
    },
    {
      title: 'Best sunset spots in the Peloponnese',
      category: 'Tours',
      date: '10 March 2026',
      excerpt: 'The moment the sun sets slowly towards the horizon and the sky fills with orange, pink and golden shades is one of the best ways to end a day of exploring...',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    },
    {
      title: 'Guide to the best picnic spots in the Greek countryside',
      category: 'Tips',
      date: '27 Feb 2026',
      excerpt: 'Getting away into nature does not have to be expensive or complicated. A well-planned picnic is enough to bring you closer to the outdoors...',
      image: 'https://images.unsplash.com/photo-1596050501744-c1721ab5ee11?w=800&q=80',
    },
    {
      title: 'Ideas for a relaxed trip with friends or family',
      category: 'Tours',
      date: '27 Feb 2026',
      excerpt: 'A trip does not need to be demanding or packed with activities to be successful. Often the best weekends are the simple ones...',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1920&q=80',
    },
    {
      title: '10 unique hiking trails in the Peloponnese',
      category: 'Tours',
      date: '27 Feb 2026',
      excerpt: 'The Peloponnese is a true paradise for hiking lovers. Trails that pass through gorges, forests, rivers and traditional villages...',
      image: 'https://images.unsplash.com/photo-1643386165206-d1be6dcc76c2?w=800&q=80',
    },
  ],
};

export const blogLeftPageConfig: BlogLeftPageConfig = {
  pageTitle: 'Blog',
  breadcrumbBlog: 'Blog',
  breadcrumbLeftSidebar: 'Left Sidebar',
  categoriesTitle: 'Categories',
  categories: [
    'Travelling',
    'Travel',
    'Adventure',
    'City',
  ],
  readMore: 'Read More',
  items: [
    {
      title: 'Things You Must Need To See While You\'re In Dubai',
      category: 'Travelling',
      date: '25 Feb 2020',
    },
    {
      title: 'Be Careful About This, When You Are In Snow',
      category: 'Travelling',
      date: '25 Feb 2020',
    },
    {
      title: '17 places you cannot ignore in Paris',
      category: 'Travelling',
      date: '25 Feb 2020',
    },
  ],
};

export const blogFullwidthPageConfig: BlogFullwidthPageConfig = {
  pageTitle: 'Blog',
  breadcrumbBlog: 'Blog',
  breadcrumbFullWidth: 'Full Width',
  readMore: 'Read More',
  items: [
    {
      title: 'Things You Must Need To See While You\'re In Dubai',
      category: 'Travelling',
      date: '25 Feb 2020',
    },
    {
      title: 'Be Careful About This, When You Are In Snow',
      category: 'Travelling',
      date: '25 Feb 2020',
    },
    {
      title: '17 places you cannot ignore in Paris',
      category: 'Travelling',
      date: '25 Feb 2020',
    },
  ],
};

export const blogSinglePageConfig: BlogSinglePageConfig = {
  breadcrumbBlog: 'Blog',
  breadcrumbSingle: 'Blog Single',
  backToBlog: 'Back to Blog',
  item: {
    title: 'Activities for Active Weekends: Hiking, Kayaking & Cycling',
    category: 'Tours',
    date: '10 March 2026',
    body1: 'Weekend getaways don\'t have to be only about relaxation. They can easily turn into active experiences that boost your energy and create unforgettable memories. A weekend is the perfect opportunity to try activities like hiking, kayaking, and cycling—especially in places where nature offers stunning landscapes and endless routes to explore.',
    body2: 'Hiking is one of the best ways to combine exercise with a deep connection to nature. From easy walking paths to more challenging trails, it allows you to discover canyons, green hills, forests, and hidden waterfalls. Cycling is ideal for those who want to cover longer distances and explore more in less time, while kayaking offers a completely different perspective from the water—exploring coastlines, lakes, and rivers in a unique and exciting way.',
    body3: 'Of course, preparation makes all the difference: comfortable clothing, proper footwear, enough water, and routes that match your experience level are essential for a safe and enjoyable trip. An active weekend is more than just exercise—it is a chance to unwind creatively, connect with friends or family, and recharge both physically and mentally. Every step, pedal, or paddle becomes part of an experience that leaves you feeling refreshed and ready for the week ahead. 🚴‍♂️🥾🚣‍♀️',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
  },
};

export const preloaderConfig: PreloaderConfig = {
  brandName: 'En-Routes',
  brandSubname: 'Transfers & Tours',
  yearText: '',
};

export const scrollToTopConfig: ScrollToTopConfig = {
  ariaLabel: 'Scroll to top',
};

export const bookingPageConfig: BookingPageConfig = {
  pageTitle: 'Online Bookings',
  breadcrumb: 'Book',
  step1: 'Travel Details',
  step2: 'Vehicle Selection',
  step3: 'Contact Details',
  step4: 'Confirm Booking',
  pickupLabel: 'Pickup Location',
  destinationLabel: 'Destination',
  dateLabel: 'Pickup Date',
  timeLabel: 'Pickup Time',
  returnTripLabel: 'Return Trip',
  returnSectionTitle: 'Return Trip – Travel Details',
  returnPickupLabel: 'Return Pickup Location',
  returnDestinationLabel: 'Return Destination',
  returnDateLabel: 'Return Date',
  returnTimeLabel: 'Return Time',
  pickupPlaceholder: 'Select pickup location first',
  destinationPlaceholder: 'Select destination first',
  adultsLabel: 'Adults',
  childrenLabel: 'Children (under 12)',
  passengersLabel: 'Passengers',
  fullNameLabel: 'Full Name',
  emailLabel: 'Email',
  phoneLabel: 'Phone',
  notesLabel: 'Additional Notes',
  loadingVehicles: 'Loading available vehicles...',
  noVehiclesFound: 'No suitable vehicles found for your requirements.',
  priceLabel: 'Price',
  priceOnRequest: 'On request',
  nextStep: 'Next Step',
  prevStep: 'Previous Step',
  submitBooking: 'Submit Booking',
  successTitle: 'Your booking was submitted successfully!',
  successMessage: 'Thank you for choosing our services. We will contact you shortly to confirm.',
  bookingNumberLabel: 'Booking number',
  tryAgain: 'Try Again',
  newBooking: 'New Booking',
};

export const digitalProductsConfig: DigitalProductsConfig = {
  enabled: false,
  products: [],
};

export const innerPageHeroImages = {
  services: 'https://images.unsplash.com/photo-1694608344824-eec4f8dc3cb8?w=1920&q=80',
  blog: 'https://images.unsplash.com/photo-1753441034632-50d3137f0799?w=1920&q=80',
  contact: 'https://images.unsplash.com/photo-1688680292966-a8ba3a39d0ab?w=1920&q=80',
  about: 'https://images.unsplash.com/photo-1596199567658-0b13465b0a80?w=1920&q=80',
  socialResponsibility: 'https://images.unsplash.com/photo-1704472546450-2fd83176d216?w=1920&q=80',
  booking: 'https://images.unsplash.com/photo-1694608344824-eec4f8dc3cb8?w=1920&q=80',
};

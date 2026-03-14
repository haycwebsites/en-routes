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

export interface LocaleString {
  el: string;
  en: string;
}

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
  bookRoomButton: LocaleString;
  heroImage: string;
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
  continue: LocaleString;
  items: { title: LocaleString; category: LocaleString; date: LocaleString }[];
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
  eyebrow: LocaleString;
  title: LocaleString;
  body1: LocaleString;
  body2: LocaleString;
  exploreRoomsButton: LocaleString;
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
  items: { title: LocaleString; category: LocaleString; date: LocaleString }[];
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
  item: { title: LocaleString; category: LocaleString; date: LocaleString; body1: LocaleString; body2: LocaleString; body3: LocaleString };
}

export interface PreloaderConfig {
  brandName: LocaleString;
  brandSubname: LocaleString;
  yearText: LocaleString;
}

export interface ScrollToTopConfig {
  ariaLabel: LocaleString;
}

// =============================================================================
// CONSTANTS
// =============================================================================

export const siteConfig: SiteConfig = {
  title: { el: 'En-Routes', en: 'En-Routes' },
  description: { el: '', en: '' },
  language: 'en',
  keywords: { el: '', en: '' },
  ogImage: '',
  canonical: '',
  siteId: '',
  apiUrl: '',
};

export const navigationConfig: NavigationConfig = {
  brandName: { el: 'En-Routes', en: 'En-Routes' },
  phone: '+0123-456-789',
  searchAriaLabel: { el: 'Αναζήτηση', en: 'Search' },
  openMenuAriaLabel: { el: 'Άνοιγμα μενού', en: 'Open menu' },
  closeMenuAriaLabel: { el: 'Κλείσιμο μενού', en: 'Close menu' },
  home: { el: 'Αρχική', en: 'Home' },
  homeStyle2: { el: 'Αρχική Στυλ 2', en: 'Home Style 2' },
  homeStyle3: { el: 'Αρχική Στυλ 3', en: 'Home Style 3' },
  room: { el: 'Δωμάτια', en: 'Room' },
  roomSingle: { el: 'Δωμάτιο Single', en: 'Room Single' },
  destination: { el: 'Προορισμός', en: 'Destination' },
  pages: { el: 'Σελίδες', en: 'Pages' },
  about: { el: 'Σχετικά', en: 'About' },
  faq: { el: 'Συχνές Ερωτήσεις', en: 'FAQ' },
  page404: { el: '404', en: '404' },
  service: { el: 'Υπηρεσίες', en: 'Service' },
  serviceSingle: { el: 'Υπηρεσία Single', en: 'Service Single' },
  blog: { el: 'Blog', en: 'Blog' },
  blogLeftSidebar: { el: 'Blog Left Sidebar', en: 'Blog Left Sidebar' },
  blogFullWidth: { el: 'Blog Full Width', en: 'Blog Full Width' },
  blogSingle: { el: 'Blog Single', en: 'Blog Single' },
  blogSingleLeft: { el: 'Blog Single Left', en: 'Blog Single Left' },
  blogSingleFullwidth: { el: 'Blog Single Fullwidth', en: 'Blog Single Fullwidth' },
  contact: { el: 'Επικοινωνία', en: 'Contact' },
};

export const footerConfig: FooterConfig = {
  contactTitle: { el: 'Επικοινωνία', en: 'Contact' },
  contactDesc: { el: 'Online store with lots of cool and exclusive features', en: 'Online store with lots of cool and exclusive features' },
  address: { el: '28 Street, New York City, USA', en: '28 Street, New York City, USA' },
  phone: '+000123456789',
  email: 'Hastium@gmail.com',
  destinationTitle: { el: 'Προορισμός', en: 'Destination' },
  destination1Name: { el: 'Paris, France', en: 'Paris, France' },
  destination1Date: { el: '11 Jun 2020 - 22 Jun 2020', en: '11 Jun 2020 - 22 Jun 2020' },
  destination1Price: '$835',
  destination2Name: { el: 'San Francisco', en: 'San Francisco' },
  destination2Date: { el: '11 Jun 2020 - 22 Jun 2020', en: '11 Jun 2020 - 22 Jun 2020' },
  destination2Price: '$835',
  usefulLinksTitle: { el: 'Useful Links', en: 'Useful Links' },
  aboutUs: { el: 'About Us', en: 'About Us' },
  ourOffers: { el: 'Our Offers', en: 'Our Offers' },
  howSpread: { el: 'How Spread', en: 'How Spread' },
  contactUs: { el: 'Contact Us', en: 'Contact Us' },
  ourEvent: { el: 'Our Event', en: 'Our Event' },
  newsletterTitle: { el: 'Newsletter', en: 'Newsletter' },
  emailPlaceholder: { el: 'Email Address *', en: 'Email Address *' },
  subscribeButton: { el: 'Subscribe', en: 'Subscribe' },
  facebookAriaLabel: { el: 'Facebook', en: 'Facebook' },
  twitterAriaLabel: { el: 'Twitter', en: 'Twitter' },
  instagramAriaLabel: { el: 'Instagram', en: 'Instagram' },
  privacyPolicy: { el: 'Privacy Policy', en: 'Privacy Policy' },
  termsConditions: { el: 'Terms & Conditions', en: 'Terms & Conditions' },
  cookies: { el: 'Cookies', en: 'Cookies' },
  copyright: { el: 'En-Routes. All rights reserved', en: 'En-Routes. All rights reserved' },
};

export const pageHeroConfig: PageHeroConfig = {
  homeBreadcrumb: { el: 'Αρχική', en: 'Home' },
};

export const heroConfig: HeroConfig = {
  mainTitle: { el: 'The Varaus Hotel & Resort', en: 'The Varaus Hotel & Resort' },
  subtitle: { el: 'Make Your Life Better and Bright! You must trip with Us!', en: 'Make Your Life Better and Bright! You must trip with Us!' },
  bookRoomButton: { el: 'Book A Room', en: 'Book A Room' },
  heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920',
};

export const searchConfig: SearchConfig = {
  checkIn: { el: 'Check-in', en: 'Check-in' },
  checkOut: { el: 'Check-out', en: 'Check-out' },
  guests: { el: 'Guests', en: 'Guests' },
  children: { el: 'Children', en: 'Children' },
  checkAvailability: { el: 'Check Availability', en: 'Check Availability' },
};

export const homeAboutConfig: HomeAboutConfig = {
  eyebrow: { el: 'About Us', en: 'About Us' },
  title: { el: 'A Best Place to Enjoy', en: 'A Best Place to Enjoy' },
  body: { el: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.', en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.' },
  moreButton: { el: 'More About Us', en: 'More About Us' },
};

export const homeDestinationsConfig: HomeDestinationsConfig = {
  eyebrow: { el: 'Popular Destination', en: 'Popular Destination' },
  title: { el: 'Choose Your Country', en: 'Choose Your Country' },
  body: { el: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.', en: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.' },
  discoverButton: { el: 'Discover More', en: 'Discover More' },
  perDay: { el: 'Per Day', en: 'Per Day' },
  items: [
    { name: { el: 'Paris, France', en: 'Paris, France' }, date: { el: '11 Jun 2020 - 22 Jun 2020', en: '11 Jun 2020 - 22 Jun 2020' }, price: '$835' },
    { name: { el: 'San Francisco', en: 'San Francisco' }, date: { el: '11 Jun 2020 - 22 Jun 2020', en: '11 Jun 2020 - 22 Jun 2020' }, price: '$750' },
    { name: { el: 'United Arab', en: 'United Arab' }, date: { el: '11 Jun 2020 - 22 Jun 2020', en: '11 Jun 2020 - 22 Jun 2020' }, price: '$750' },
    { name: { el: 'Singapore', en: 'Singapore' }, date: { el: '11 Jun 2020 - 22 Jun 2020', en: '11 Jun 2020 - 22 Jun 2020' }, price: '$550' },
  ],
};

export const homeRoomsConfig: HomeRoomsConfig = {
  eyebrow: { el: 'Our Rooms', en: 'Our Rooms' },
  title: { el: 'Discover Our Rooms', en: 'Discover Our Rooms' },
  categories: [
    { el: 'Classic', en: 'Classic' },
    { el: 'Budget', en: 'Budget' },
    { el: 'Luxury', en: 'Luxury' },
    { el: 'Double', en: 'Double' },
    { el: 'Single', en: 'Single' },
  ],
  roomDescription: { el: 'If you are going to use a passage Lorem Ipsum...', en: 'If you are going to use a passage Lorem Ipsum...' },
  fromPerNight: { el: 'From: $142 / Night', en: 'From: $142 / Night' },
  checkAvailability: { el: 'Check Availability', en: 'Check Availability' },
  items: [
    { name: { el: 'Lake view Room', en: 'Lake view Room' }, type: { el: 'Twin Room', en: 'Twin Room' }, price: 142 },
    { name: { el: 'Queen Room Balcony', en: 'Queen Room Balcony' }, type: { el: 'Twin Room', en: 'Twin Room' }, price: 142 },
    { name: { el: 'Apartment', en: 'Apartment' }, type: { el: 'Twin Room', en: 'Twin Room' }, price: 142 },
  ],
};

export const homeTestimonialsConfig: HomeTestimonialsConfig = {
  eyebrow: { el: 'What Say Clients', en: 'What Say Clients' },
  title: { el: 'Our Clients are Important to Us', en: 'Our Clients are Important to Us' },
  items: [
    { quote: { el: "The trip was incredible. I got to see so many places I wouldn't have by myself, me and my husband really enjoyed a lot.", en: "The trip was incredible. I got to see so many places I wouldn't have by myself, me and my husband really enjoyed a lot." }, name: { el: 'Benjir Walton', en: 'Benjir Walton' }, location: { el: 'Singapore', en: 'Singapore' } },
    { quote: { el: "The trip was incredible. I got to see so many places I wouldn't have by myself, me and my husband really enjoyed a lot.", en: "The trip was incredible. I got to see so many places I wouldn't have by myself, me and my husband really enjoyed a lot." }, name: { el: 'Jenefar Meera', en: 'Jenefar Meera' }, location: { el: 'Canada', en: 'Canada' } },
    { quote: { el: "The trip was incredible. I got to see so many places I wouldn't have by myself, me and my husband really enjoyed a lot.", en: "The trip was incredible. I got to see so many places I wouldn't have by myself, me and my husband really enjoyed a lot." }, name: { el: 'Lily monalisa', en: 'Lily monalisa' }, location: { el: 'Singapore', en: 'Singapore' } },
  ],
};

export const homeBlogConfig: HomeBlogConfig = {
  eyebrow: { el: 'Blog Post', en: 'Blog Post' },
  title: { el: 'Our Latest News', en: 'Our Latest News' },
  continue: { el: 'Continue', en: 'Continue' },
  items: [
    { title: { el: "Things You Must Need To See While You're In Dubai", en: "Things You Must Need To See While You're In Dubai" }, category: { el: 'Travelling', en: 'Travelling' }, date: { el: '25 Feb 2020', en: '25 Feb 2020' } },
    { title: { el: 'Be Careful About This, When You Are In Snow', en: 'Be Careful About This, When You Are In Snow' }, category: { el: 'Travelling', en: 'Travelling' }, date: { el: '25 Feb 2020', en: '25 Feb 2020' } },
    { title: { el: '17 places you cannot ignore in Paris', en: '17 places you cannot ignore in Paris' }, category: { el: 'Travelling', en: 'Travelling' }, date: { el: '25 Feb 2020', en: '25 Feb 2020' } },
  ],
};

export const contactFormConfig: ContactFormConfig = {
  nameLabel: { el: 'Όνομα', en: 'Name' },
  emailLabel: { el: 'Email', en: 'Email' },
  messageLabel: { el: 'Μήνυμα', en: 'Message' },
  submitButton: { el: 'Αποστολή', en: 'Send Message' },
  submitting: { el: 'Αποστολή...', en: 'Sending...' },
  successTitle: { el: 'Το μήνυμά σας στάλθηκε!', en: 'Message sent!' },
  successText: { el: 'Θα επικοινωνήσουμε μαζί σας σύντομα.', en: 'We will get back to you shortly.' },
  errorText: { el: 'Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.', en: 'Something went wrong. Please try again.' },
  nameRequired: { el: 'Το όνομα είναι υποχρεωτικό.', en: 'Name is required.' },
  emailInvalid: { el: 'Εισάγετε έγκυρο email.', en: 'Please enter a valid email.' },
  messageRequired: { el: 'Το μήνυμα είναι υποχρεωτικό.', en: 'Message is required.' },
};

export const contactPageConfig: ContactPageConfig = {
  pageTitle: { el: 'Contact Us', en: 'Contact Us' },
  breadcrumb: { el: 'Contact', en: 'Contact' },
  getInTouch: { el: 'Get in Touch', en: 'Get in Touch' },
  intro: { el: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.', en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' },
  address: { el: 'Address', en: 'Address' },
  phone: { el: 'Phone', en: 'Phone' },
  email: { el: 'Email', en: 'Email' },
  sendMessage: { el: 'Send a Message', en: 'Send a Message' },
  addressValue: { el: '28 Street, New York City, USA', en: '28 Street, New York City, USA' },
  phoneValue: '+0123-456-789',
  emailValue: 'info@varaus.com',
};

export const aboutPageConfig: AboutPageConfig = {
  pageTitle: { el: 'About Us', en: 'About Us' },
  breadcrumb: { el: 'About', en: 'About' },
  eyebrow: { el: 'About Us', en: 'About Us' },
  title: { el: 'A Best Place to Enjoy', en: 'A Best Place to Enjoy' },
  body1: { el: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.', en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.' },
  body2: { el: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.", en: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." },
  exploreRoomsButton: { el: 'Explore Rooms', en: 'Explore Rooms' },
};

export const faqConfig: FaqConfig = {
  pageTitle: { el: 'Συχνές Ερωτήσεις', en: 'FAQ' },
  breadcrumb: { el: 'FAQ', en: 'FAQ' },
  items: [
    { question: { el: 'How do I make a reservation?', en: 'How do I make a reservation?' }, answer: { el: 'You can make a reservation through our website, by phone, or by visiting our front desk. Online booking is available 24/7.', en: 'You can make a reservation through our website, by phone, or by visiting our front desk. Online booking is available 24/7.' } },
    { question: { el: 'What is your cancellation policy?', en: 'What is your cancellation policy?' }, answer: { el: 'Cancellations made 48 hours before check-in receive a full refund. Cancellations within 48 hours may incur a one-night charge.', en: 'Cancellations made 48 hours before check-in receive a full refund. Cancellations within 48 hours may incur a one-night charge.' } },
    { question: { el: 'What time is check-in and check-out?', en: 'What time is check-in and check-out?' }, answer: { el: 'Check-in is from 3:00 PM and check-out is by 11:00 AM. Early check-in or late check-out may be available upon request.', en: 'Check-in is from 3:00 PM and check-out is by 11:00 AM. Early check-in or late check-out may be available upon request.' } },
    { question: { el: 'Do you offer breakfast?', en: 'Do you offer breakfast?' }, answer: { el: 'Yes, we offer a complimentary breakfast buffet from 7:00 AM to 10:00 AM daily for all registered guests.', en: 'Yes, we offer a complimentary breakfast buffet from 7:00 AM to 10:00 AM daily for all registered guests.' } },
    { question: { el: 'Is parking available?', en: 'Is parking available?' }, answer: { el: 'Yes, we offer complimentary parking for all guests. Valet parking is also available for an additional fee.', en: 'Yes, we offer complimentary parking for all guests. Valet parking is also available for an additional fee.' } },
  ],
};

export const notFoundConfig: NotFoundConfig = {
  code: { el: '404', en: '404' },
  title: { el: 'Η σελίδα δεν βρέθηκε', en: 'Page Not Found' },
  description: { el: 'Η σελίδα που αναζητάτε ενδέχεται να έχει αφαιρεθεί, να άλλαξε το όνομά της ή να μην είναι προσωρινά διαθέσιμη.', en: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.' },
  backButton: { el: 'Επιστροφή στην Αρχική Σελίδα', en: 'Back to Home Page' },
};

export const roomPageConfig: RoomPageConfig = {
  pageTitle: { el: 'Our Rooms', en: 'Our Rooms' },
  breadcrumb: { el: 'Room', en: 'Room' },
  categories: [
    { el: 'Classic', en: 'Classic' },
    { el: 'Budget', en: 'Budget' },
    { el: 'Luxury', en: 'Luxury' },
    { el: 'Double', en: 'Double' },
    { el: 'Single', en: 'Single' },
  ],
  fromPerNight: { el: 'From: $142 / Night', en: 'From: $142 / Night' },
  checkAvailability: { el: 'Check Availability', en: 'Check Availability' },
  items: [
    { name: { el: 'Lake view Room', en: 'Lake view Room' }, type: { el: 'Twin Room', en: 'Twin Room' }, price: 142 },
    { name: { el: 'Queen Room Balcony', en: 'Queen Room Balcony' }, type: { el: 'Twin Room', en: 'Twin Room' }, price: 142 },
    { name: { el: 'Apartment', en: 'Apartment' }, type: { el: 'Twin Room', en: 'Twin Room' }, price: 142 },
  ],
};

export const roomSinglePageConfig: RoomSinglePageConfig = {
  pageTitle: { el: 'Lake View Room', en: 'Lake View Room' },
  breadcrumbRoom: { el: 'Room', en: 'Room' },
  breadcrumbRoomSingle: { el: 'Room Single', en: 'Room Single' },
  roomDetails: { el: 'Room Details', en: 'Room Details' },
  body1: { el: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.', en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.' },
  body2: { el: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.', en: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.' },
  amenities: [
    { el: 'WiFi', en: 'WiFi' },
    { el: 'TV', en: 'TV' },
    { el: 'AC', en: 'AC' },
    { el: 'Minibar', en: 'Minibar' },
    { el: 'Safe', en: 'Safe' },
    { el: 'Balcony', en: 'Balcony' },
  ],
  bookRoom: { el: 'Book This Room', en: 'Book This Room' },
  fromPerNight: { el: 'From $142 / Night', en: 'From $142 / Night' },
  checkIn: { el: 'Check-in', en: 'Check-in' },
  checkOut: { el: 'Check-out', en: 'Check-out' },
  guests: { el: 'Guests', en: 'Guests' },
  checkAvailability: { el: 'Check Availability', en: 'Check Availability' },
  allServices: { el: 'All Services', en: 'All Services' },
};

export const destinationPageConfig: DestinationPageConfig = {
  pageTitle: { el: 'Destination', en: 'Destination' },
  breadcrumb: { el: 'Destination', en: 'Destination' },
  items: [
    { name: { el: 'Paris, France', en: 'Paris, France' }, date: { el: '11 Jun 2020 - 22 Jun 2020', en: '11 Jun 2020 - 22 Jun 2020' }, price: '$835' },
    { name: { el: 'San Francisco', en: 'San Francisco' }, date: { el: '11 Jun 2020 - 22 Jun 2020', en: '11 Jun 2020 - 22 Jun 2020' }, price: '$750' },
    { name: { el: 'United Arab', en: 'United Arab' }, date: { el: '11 Jun 2020 - 22 Jun 2020', en: '11 Jun 2020 - 22 Jun 2020' }, price: '$750' },
    { name: { el: 'Singapore', en: 'Singapore' }, date: { el: '11 Jun 2020 - 22 Jun 2020', en: '11 Jun 2020 - 22 Jun 2020' }, price: '$550' },
  ],
};

export const servicePageConfig: ServicePageConfig = {
  pageTitle: { el: 'Our Services', en: 'Our Services' },
  breadcrumb: { el: 'Service', en: 'Service' },
  items: [
    { title: { el: 'Restaurant', en: 'Restaurant' }, description: { el: 'Fine dining experience with local and international cuisine.', en: 'Fine dining experience with local and international cuisine.' } },
    { title: { el: 'Spa & Wellness', en: 'Spa & Wellness' }, description: { el: 'Relax and rejuvenate with our spa treatments.', en: 'Relax and rejuvenate with our spa treatments.' } },
    { title: { el: 'Airport Transfer', en: 'Airport Transfer' }, description: { el: 'Complimentary airport pickup and drop-off.', en: 'Complimentary airport pickup and drop-off.' } },
    { title: { el: '24/7 Concierge', en: '24/7 Concierge' }, description: { el: 'Our staff is always ready to assist you.', en: 'Our staff is always ready to assist you.' } },
  ],
};

export const serviceSinglePageConfig: ServiceSinglePageConfig = {
  pageTitle: { el: 'Restaurant & Dining', en: 'Restaurant & Dining' },
  breadcrumbService: { el: 'Service', en: 'Service' },
  breadcrumbServiceSingle: { el: 'Service Single', en: 'Service Single' },
  title: { el: 'Restaurant & Dining', en: 'Restaurant & Dining' },
  body1: { el: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.', en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.' },
  body2: { el: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.", en: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." },
  allServices: { el: 'All Services', en: 'All Services' },
  serviceItems: [
    { el: 'Restaurant', en: 'Restaurant' },
    { el: 'Spa & Wellness', en: 'Spa & Wellness' },
    { el: 'Airport Transfer', en: 'Airport Transfer' },
    { el: 'Concierge', en: 'Concierge' },
    { el: 'Room Service', en: 'Room Service' },
    { el: 'Pool', en: 'Pool' },
  ],
};

export const blogPageConfig: BlogPageConfig = {
  pageTitle: { el: 'Blog', en: 'Blog' },
  breadcrumb: { el: 'Blog', en: 'Blog' },
  readMore: { el: 'Read More', en: 'Read More' },
  items: [
    { title: { el: "Things You Must Need To See While You're In Dubai", en: "Things You Must Need To See While You're In Dubai" }, category: { el: 'Travelling', en: 'Travelling' }, date: { el: '25 Feb 2020', en: '25 Feb 2020' } },
    { title: { el: 'Be Careful About This, When You Are In Snow', en: 'Be Careful About This, When You Are In Snow' }, category: { el: 'Travelling', en: 'Travelling' }, date: { el: '25 Feb 2020', en: '25 Feb 2020' } },
    { title: { el: '17 places you cannot ignore in Paris', en: '17 places you cannot ignore in Paris' }, category: { el: 'Travelling', en: 'Travelling' }, date: { el: '25 Feb 2020', en: '25 Feb 2020' } },
    { title: { el: 'Best Beaches to Visit This Summer', en: 'Best Beaches to Visit This Summer' }, category: { el: 'Travel', en: 'Travel' }, date: { el: '20 Feb 2020', en: '20 Feb 2020' } },
    { title: { el: 'Top 10 Mountain Destinations', en: 'Top 10 Mountain Destinations' }, category: { el: 'Adventure', en: 'Adventure' }, date: { el: '15 Feb 2020', en: '15 Feb 2020' } },
    { title: { el: 'City Guide: New York', en: 'City Guide: New York' }, category: { el: 'City', en: 'City' }, date: { el: '10 Feb 2020', en: '10 Feb 2020' } },
  ],
};

export const blogLeftPageConfig: BlogLeftPageConfig = {
  pageTitle: { el: 'Blog', en: 'Blog' },
  breadcrumbBlog: { el: 'Blog', en: 'Blog' },
  breadcrumbLeftSidebar: { el: 'Left Sidebar', en: 'Left Sidebar' },
  categoriesTitle: { el: 'Categories', en: 'Categories' },
  categories: [
    { el: 'Travelling', en: 'Travelling' },
    { el: 'Travel', en: 'Travel' },
    { el: 'Adventure', en: 'Adventure' },
    { el: 'City', en: 'City' },
  ],
  readMore: { el: 'Read More', en: 'Read More' },
  items: [
    { title: { el: "Things You Must Need To See While You're In Dubai", en: "Things You Must Need To See While You're In Dubai" }, category: { el: 'Travelling', en: 'Travelling' }, date: { el: '25 Feb 2020', en: '25 Feb 2020' } },
    { title: { el: 'Be Careful About This, When You Are In Snow', en: 'Be Careful About This, When You Are In Snow' }, category: { el: 'Travelling', en: 'Travelling' }, date: { el: '25 Feb 2020', en: '25 Feb 2020' } },
    { title: { el: '17 places you cannot ignore in Paris', en: '17 places you cannot ignore in Paris' }, category: { el: 'Travelling', en: 'Travelling' }, date: { el: '25 Feb 2020', en: '25 Feb 2020' } },
  ],
};

export const blogFullwidthPageConfig: BlogFullwidthPageConfig = {
  pageTitle: { el: 'Blog', en: 'Blog' },
  breadcrumbBlog: { el: 'Blog', en: 'Blog' },
  breadcrumbFullWidth: { el: 'Full Width', en: 'Full Width' },
  readMore: { el: 'Read More', en: 'Read More' },
  items: [
    { title: { el: "Things You Must Need To See While You're In Dubai", en: "Things You Must Need To See While You're In Dubai" }, category: { el: 'Travelling', en: 'Travelling' }, date: { el: '25 Feb 2020', en: '25 Feb 2020' } },
    { title: { el: 'Be Careful About This, When You Are In Snow', en: 'Be Careful About This, When You Are In Snow' }, category: { el: 'Travelling', en: 'Travelling' }, date: { el: '25 Feb 2020', en: '25 Feb 2020' } },
    { title: { el: '17 places you cannot ignore in Paris', en: '17 places you cannot ignore in Paris' }, category: { el: 'Travelling', en: 'Travelling' }, date: { el: '25 Feb 2020', en: '25 Feb 2020' } },
  ],
};

export const blogSinglePageConfig: BlogSinglePageConfig = {
  breadcrumbBlog: { el: 'Blog', en: 'Blog' },
  breadcrumbSingle: { el: 'Blog Single', en: 'Blog Single' },
  backToBlog: { el: 'Back to Blog', en: 'Back to Blog' },
  item: {
    title: { el: "Things You Must Need To See While You're In Dubai", en: "Things You Must Need To See While You're In Dubai" },
    category: { el: 'Travelling', en: 'Travelling' },
    date: { el: '25 Feb 2020', en: '25 Feb 2020' },
    body1: { el: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.', en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.' },
    body2: { el: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.", en: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text." },
    body3: { el: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.', en: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.' },
  },
};

export const preloaderConfig: PreloaderConfig = {
  brandName: { el: 'En-Routes', en: 'En-Routes' },
  brandSubname: { el: 'Hotel & Resort', en: 'Hotel & Resort' },
  yearText: { el: '2025', en: '2025' },
};

export const scrollToTopConfig: ScrollToTopConfig = {
  ariaLabel: { el: 'Μετάβαση στην κορυφή', en: 'Scroll to top' },
};

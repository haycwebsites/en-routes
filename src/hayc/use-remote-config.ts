import {
  siteConfig,
  navigationConfig,
  footerConfig,
  pageHeroConfig,
  heroConfig,
  homeHeroCardsConfig,
  homeServicesSectionConfig,
  searchConfig,
  homeAboutConfig,
  homeDestinationsConfig,
  homeRoomsConfig,
  homeTestimonialsConfig,
  homeFeaturedConfig,
  homeBlogConfig,
  contactFormConfig,
  contactPageConfig,
  aboutPageConfig,
  socialResponsibilityPageConfig,
  faqConfig,
  notFoundConfig,
  roomPageConfig,
  roomSinglePageConfig,
  destinationPageConfig,
  servicePageConfig,
  serviceSinglePageConfig,
  blogPageConfig,
  blogLeftPageConfig,
  blogFullwidthPageConfig,
  blogSinglePageConfig,
  preloaderConfig,
  scrollToTopConfig,
  bookingPageConfig,
  digitalProductsConfig,
  type DigitalProductsConfig,
} from '../config';

export interface RemoteConfig {
  version: number;
  exportedAt: string;
  siteConfig: typeof siteConfig;
  navigationConfig: typeof navigationConfig;
  footerConfig: typeof footerConfig;
  pageHeroConfig: typeof pageHeroConfig;
  heroConfig: typeof heroConfig;
  homeHeroCardsConfig: typeof homeHeroCardsConfig;
  homeServicesSectionConfig: typeof homeServicesSectionConfig;
  searchConfig: typeof searchConfig;
  homeAboutConfig: typeof homeAboutConfig;
  homeDestinationsConfig: typeof homeDestinationsConfig;
  homeRoomsConfig: typeof homeRoomsConfig;
  homeTestimonialsConfig: typeof homeTestimonialsConfig;
  homeFeaturedConfig: typeof homeFeaturedConfig;
  homeBlogConfig: typeof homeBlogConfig;
  contactFormConfig: typeof contactFormConfig;
  contactPageConfig: typeof contactPageConfig;
  aboutPageConfig: typeof aboutPageConfig;
  socialResponsibilityPageConfig: typeof socialResponsibilityPageConfig;
  faqConfig: typeof faqConfig;
  notFoundConfig: typeof notFoundConfig;
  roomPageConfig: typeof roomPageConfig;
  roomSinglePageConfig: typeof roomSinglePageConfig;
  destinationPageConfig: typeof destinationPageConfig;
  servicePageConfig: typeof servicePageConfig;
  serviceSinglePageConfig: typeof serviceSinglePageConfig;
  blogPageConfig: typeof blogPageConfig;
  blogLeftPageConfig: typeof blogLeftPageConfig;
  blogFullwidthPageConfig: typeof blogFullwidthPageConfig;
  blogSinglePageConfig: typeof blogSinglePageConfig;
  preloaderConfig: typeof preloaderConfig;
  scrollToTopConfig: typeof scrollToTopConfig;
  bookingPageConfig: typeof bookingPageConfig;
  digitalProductsConfig?: DigitalProductsConfig;
}

export const defaultConfig: RemoteConfig = {
  version: 1,
  exportedAt: '',
  siteConfig,
  navigationConfig,
  footerConfig,
  pageHeroConfig,
  heroConfig,
  homeHeroCardsConfig,
  homeServicesSectionConfig,
  searchConfig,
  homeAboutConfig,
  homeDestinationsConfig,
  homeRoomsConfig,
  homeTestimonialsConfig,
  homeFeaturedConfig,
  homeBlogConfig,
  contactFormConfig,
  contactPageConfig,
  aboutPageConfig,
  socialResponsibilityPageConfig,
  faqConfig,
  notFoundConfig,
  roomPageConfig,
  roomSinglePageConfig,
  destinationPageConfig,
  servicePageConfig,
  serviceSinglePageConfig,
  blogPageConfig,
  blogLeftPageConfig,
  blogFullwidthPageConfig,
  blogSinglePageConfig,
  preloaderConfig,
  scrollToTopConfig,
  bookingPageConfig,
  digitalProductsConfig,
};

export async function fetchRemoteConfig(): Promise<RemoteConfig> {
  if (import.meta.env.DEV) {
    return defaultConfig;
  }
  try {
    const res = await fetch('/hayc/config.json');
    if (!res.ok) throw new Error('Failed to fetch config: ' + res.status);
    const data = await res.json();
    return data as RemoteConfig;
  } catch (err) {
    console.warn('[HAYC] Remote config fetch failed, using default config.', err);
    return defaultConfig;
  }
}

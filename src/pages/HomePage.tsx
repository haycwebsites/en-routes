import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useHayc } from '@/hayc/config-context';
import { Plane, Users, Briefcase, GraduationCap } from 'lucide-react';

const serviceIcons = [Plane, Briefcase, Users, GraduationCap];

export function HomePage() {
  const { t, img, config, cp } = useHayc();
  const hero = config.heroConfig;
  const cards = config.homeHeroCardsConfig;
  const about = config.homeAboutConfig;
  const servicesSection = config.homeServicesSectionConfig;
  const services = config.servicePageConfig;
  const featured = config.homeFeaturedConfig;
  const homeBlog = config.homeBlogConfig;
  const blogPage = config.blogPageConfig;

  return (
    <>
      {/* Hero – full-width Greece image, title, single CTA */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center bg-gray-900 overflow-hidden">
        <img
          src={img(hero.heroImage)}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center hero-kenburns"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="container-custom relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-3" {...cp('heroConfig.mainTitle')}>
            {t(hero.mainTitle)}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto" {...cp('heroConfig.subtitle')}>
            {t(hero.subtitle)}
          </p>
          <Button asChild size="lg" className="btn-primary min-w-[200px]">
            <Link to="/book" {...cp('heroConfig.cta')}>{t(hero.cta)}</Link>
          </Button>
        </div>
      </section>

      {/* Three image cards – Vayo-style blocks (Transfers, Tours, Your journey) */}
      <section className="section-padding bg-[#141414]">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <Link
                key={i}
                to="/book"
                className="group relative block aspect-[4/5] md:aspect-[3/4] rounded-xl overflow-hidden border border-white/10 hover:border-[var(--gold-500)]/40 transition-all duration-300"
              >
                <img
                  src={img(card.image)}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <h2 className="font-serif text-2xl md:text-3xl text-white mb-2" {...cp(`homeHeroCardsConfig.${i}.title`)}>
                    {t(card.title)}
                  </h2>
                  <p className="text-white/90 text-sm mb-4" {...cp(`homeHeroCardsConfig.${i}.tagline`)}>{t(card.tagline)}</p>
                  <span className="text-[var(--gold-400)] text-sm font-medium inline-flex items-center gap-1 group-hover:underline">
                    {t(card.learnMore)} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Intro paragraph + Online Bookings CTA – Vayo-style */}
      <section className="section-padding bg-gray-900/40 border-y border-white/5">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-6" {...cp('homeAboutConfig.title')}>
            {t(about.title)}
          </h2>
          <p className="text-white/85 text-lg leading-relaxed" {...cp('homeAboutConfig.body')}>
            {t(about.body)}
          </p>
          <Button asChild size="lg" className="btn-primary mt-8">
            <Link to="/book" {...cp('homeAboutConfig.moreButton')}>{t(about.moreButton)}</Link>
          </Button>
        </div>
      </section>

      {/* Discover our services – Vayo-style grid + Online Bookings */}
      <section className="section-padding bg-[#141414]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-[var(--gold-400)] text-sm tracking-wider uppercase" {...cp('homeServicesSectionConfig.eyebrow')}>{t(servicesSection.eyebrow)}</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white mt-2 mb-4" {...cp('homeServicesSectionConfig.title')}>{t(servicesSection.title)}</h2>
            <p className="text-white/70 max-w-2xl mx-auto" {...cp('homeServicesSectionConfig.subtitle')}>{t(servicesSection.subtitle)}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.items.map((s, i) => {
              const Icon = serviceIcons[i] ?? Plane;
              return (
                <Link
                  key={i}
                  to="/book"
                  className="group flex gap-6 p-6 md:p-8 rounded-xl border border-white/10 bg-gray-900/50 hover:border-[var(--gold-500)]/30 hover:bg-gray-900/70 transition-all"
                >
                  <div className="size-14 shrink-0 rounded-xl bg-[var(--gold-500)]/20 flex items-center justify-center text-[var(--gold-400)] group-hover:bg-[var(--gold-500)]/30 transition-colors">
                    <Icon className="size-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-xl text-white mb-2 group-hover:text-[var(--gold-400)]" {...cp(`servicePageConfig.items.${i}.title`)}>{t(s.title)}</h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-2" {...cp(`servicePageConfig.items.${i}.description`)}>{t(s.description)}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--gold-400)]" {...cp('homeServicesSectionConfig.onlineBooking')}>
                      {t(servicesSection.onlineBooking)} →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured block – Vayo Wine Tours style (Tours in Greece) */}
      <section className="section-padding bg-gray-900/40 border-y border-white/5">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src={img(featured.image)}
              alt=""
              className="relative aspect-[4/3] w-full rounded-xl object-cover object-center border border-white/10 bg-gray-800"
            />
            <div>
              <span className="text-[var(--gold-400)] text-sm tracking-wider uppercase" {...cp('homeFeaturedConfig.eyebrow')}>{t(featured.eyebrow)}</span>
              <h2 className="font-serif text-3xl md:text-4xl text-white mt-2 mb-3" {...cp('homeFeaturedConfig.title')}>{t(featured.title)}</h2>
              <p className="text-[var(--gold-400)]/90 text-sm font-medium mb-4" {...cp('homeFeaturedConfig.subtitle')}>{t(featured.subtitle)}</p>
              <p className="text-white/80 text-sm leading-relaxed mb-8" {...cp('homeFeaturedConfig.body')}>{t(featured.body)}</p>
              <Button asChild variant="outline" className="btn-dark">
                <Link to={featured.ctaLink} {...cp('homeFeaturedConfig.cta')}>{t(featured.cta)}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our latest news and articles – Vayo-style (first three from Blog) */}
      <section className="section-padding bg-gray-900/40 border-t border-white/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-[var(--gold-400)] text-sm tracking-wider uppercase" {...cp('homeBlogConfig.eyebrow')}>{t(homeBlog.eyebrow)}</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white mt-2 mb-4" {...cp('homeBlogConfig.title')}>{t(homeBlog.title)}</h2>
            <p className="text-white/70 max-w-2xl mx-auto" {...cp('homeBlogConfig.subtitle')}>{t(homeBlog.subtitle)}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPage.items.slice(0, 3).map((post, i) => {
              const to =
                i === 0
                  ? '/blog/single'
                  : i === 1
                  ? '/blog/budget-weekend'
                  : i === 2
                  ? '/blog/best-sunset-peloponnese'
                  : '/blog';
              return (
                <Link
                  key={i}
                  to={to}
                  className="group block rounded-xl overflow-hidden bg-gray-900 border border-white/5 hover:border-[var(--gold-500)]/30 transition-all"
                >
                  <img
                    src={img(
                      post.image ??
                        'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80'
                    )}
                    alt=""
                    className="aspect-video w-full object-cover object-center bg-gray-700"
                  />
                  <div className="p-6">
                    <div className="flex gap-4 text-sm text-white/60 mb-2">
                      <span {...cp(`blogPageConfig.items.${i}.category`)}>{t(post.category)}</span>
                      <span {...cp(`blogPageConfig.items.${i}.date`)}>{t(post.date)}</span>
                    </div>
                    <h3
                      className="font-serif text-lg text-white group-hover:text-[var(--gold-400)] transition-colors line-clamp-2"
                      {...cp(`blogPageConfig.items.${i}.title`)}
                    >
                      {t(post.title)}
                    </h3>
                    <span
                      className="inline-block mt-3 text-sm text-[var(--gold-400)]"
                      {...cp('homeBlogConfig.continue')}
                    >
                      {t(homeBlog.continue)} →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="btn-dark">
              <Link to="/blog" {...cp('homeBlogConfig.continue')}>{t(homeBlog.continue)}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

import { PageHero } from '@/components/PageHero';
import { Link } from 'react-router-dom';
import { useHayc } from '@/hayc/config-context';
import { innerPageHeroImages } from '@/config';

const FALLBACK_GREECE_IMAGE = 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80';

export function BlogPage() {
  const { t, img, config, cp } = useHayc();
  const c = config.blogPageConfig;

  return (
    <>
      <PageHero title={t(c.pageTitle)} titleConfigPath="blogPageConfig.pageTitle" breadcrumbs={[{ label: t(c.breadcrumb), configPath: 'blogPageConfig.breadcrumb' }]} backgroundImage={innerPageHeroImages.blog} />
      <section className="section-padding section-reveal">
        <div className="container-custom">
          <div className="space-y-8 max-w-3xl">
            {c.items.map((post, i) => {
              const to =
                i === 0
                  ? '/blog/single'
                  : i === 1
                  ? '/blog/budget-weekend'
                  : i === 2
                  ? '/blog/best-sunset-peloponnese'
                  : i === 3
                  ? '/blog/best-picnic-spots'
                  : i === 4
                  ? '/blog/relaxed-trip-friends-family'
                  : i === 5
                  ? '/blog/hiking-trails-peloponnese'
                  : '/blog';
              return (
                <article
                  key={i}
                  className="card-hover flex flex-col sm:flex-row gap-6 rounded-lg overflow-hidden bg-gray-900 border border-white/5 hover:border-[var(--gold-500)]/30"
                >
                  <Link
                    to={to}
                    className="block shrink-0 w-full sm:w-64 aspect-video sm:aspect-square overflow-hidden bg-gray-700"
                  >
                    <img
                      src={img(post.image ?? FALLBACK_GREECE_IMAGE)}
                      alt=""
                      className="w-full h-full object-cover object-center"
                    />
                  </Link>
                  <div className="flex-1 p-6 sm:p-4 flex flex-col">
                    <div className="flex gap-4 text-sm text-white/60 mb-2">
                      <span {...cp(`blogPageConfig.items.${i}.category`)}>{t(post.category)}</span>
                      <span {...cp(`blogPageConfig.items.${i}.date`)}>{t(post.date)}</span>
                    </div>
                    <h2
                      className="font-serif text-xl text-white mb-3 group-hover:text-[var(--gold-400)]"
                      {...cp(`blogPageConfig.items.${i}.title`)}
                    >
                      <Link
                        to={to}
                        className="hover:text-[var(--gold-400)] transition-colors"
                      >
                        {t(post.title)}
                      </Link>
                    </h2>
                    <p
                      className="text-white/70 text-sm flex-1 mb-4"
                      {...cp(`blogPageConfig.items.${i}.excerpt`)}
                    >
                      {t(post.excerpt)}
                    </p>
                    <Link
                      to={to}
                      className="text-sm text-[var(--gold-400)] hover:underline inline-flex items-center gap-1"
                      {...cp('blogPageConfig.readMore')}
                    >
                      {t(c.readMore)}...
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

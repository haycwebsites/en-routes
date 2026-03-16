import { PageHero } from '@/components/PageHero';
import { Link } from 'react-router-dom';
import { useHayc } from '@/hayc/config-context';

const FALLBACK_GREECE_IMAGE = 'https://images.unsplash.com/photo-1767907573610-6f1d6c501d6f?w=1200&q=80';

export function BlogActiveWeekendsPage() {
  const { t, img, config, cp } = useHayc();
  const c = config.blogSinglePageConfig;
  const item = c.item;

  const heroImage = img(item.image ?? FALLBACK_GREECE_IMAGE);

  return (
    <>
      <PageHero
        title={t(item.title)}
        titleConfigPath="blogSinglePageConfig.item.title"
        breadcrumbs={[
          { label: t(c.breadcrumbBlog), to: '/blog', configPath: 'blogSinglePageConfig.breadcrumbBlog' },
          { label: t(item.title) },
        ]}
        backgroundImage={heroImage}
      />
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="flex gap-4 text-sm text-white/60 mb-8">
            <span {...cp('blogSinglePageConfig.item.category')}>{t(item.category)}</span>
            <span {...cp('blogSinglePageConfig.item.date')}>{t(item.date)}</span>
          </div>
          <img
            src={heroImage}
            alt=""
            className="aspect-video w-full rounded-lg object-cover object-center bg-gray-700 mb-8"
          />
          <div className="prose prose-invert max-w-none">
            <p className="text-white/70 mb-4" {...cp('blogSinglePageConfig.item.body1')}>
              {t(item.body1)}
            </p>
            <p className="text-white/70 mb-4" {...cp('blogSinglePageConfig.item.body2')}>
              {t(item.body2)}
            </p>
            <p className="text-white/70 mb-8" {...cp('blogSinglePageConfig.item.body3')}>
              {t(item.body3)}
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[var(--gold-400)] hover:underline"
            {...cp('blogSinglePageConfig.backToBlog')}
          >
            ← {t(c.backToBlog)}
          </Link>
        </div>
      </section>
    </>
  );
}


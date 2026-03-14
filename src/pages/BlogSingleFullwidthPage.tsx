import { PageHero } from '@/components/PageHero';
import { Link } from 'react-router-dom';
import { useHayc } from '@/hayc/config-context';

export function BlogSingleFullwidthPage() {
  const { t, config, cp } = useHayc();
  const c = config.blogSinglePageConfig;
  const item = c.item;

  return (
    <>
      <PageHero
        title={t(item.title)}
        titleConfigPath="blogSinglePageConfig.item.title"
        breadcrumbs={[{ label: t(c.breadcrumbBlog), to: '/blog', configPath: 'blogSinglePageConfig.breadcrumbBlog' }, { label: 'Fullwidth', configPath: 'blogSinglePageConfig.breadcrumbSingle' }]}
      />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 text-sm text-white/60 mb-8">
              <span {...cp('blogSinglePageConfig.item.category')}>{t(item.category)}</span>
              <span {...cp('blogSinglePageConfig.item.date')}>{t(item.date)}</span>
            </div>
            <div className="aspect-[21/9] rounded-lg bg-gray-700 mb-8" />
            <p className="text-white/70 mb-4" {...cp('blogSinglePageConfig.item.body1')}>{t(item.body1)}</p>
            <p className="text-white/70 mb-8" {...cp('blogSinglePageConfig.item.body2')}>{t(item.body2)}</p>
            <Link to="/blog" className="inline-flex items-center gap-2 text-[var(--gold-400)] hover:underline" {...cp('blogSinglePageConfig.backToBlog')}>
              ← {t(c.backToBlog)}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { PageHero } from '@/components/PageHero';
import { Link } from 'react-router-dom';
import { useHayc } from '@/hayc/config-context';

export function BlogSingleLeftPage() {
  const { t, config, cp } = useHayc();
  const c = config.blogSinglePageConfig;
  const item = c.item;

  return (
    <>
      <PageHero
        title={t(item.title)}
        titleConfigPath="blogSinglePageConfig.item.title"
        breadcrumbs={[{ label: t(c.breadcrumbBlog), to: '/blog', configPath: 'blogSinglePageConfig.breadcrumbBlog' }, { label: t(c.breadcrumbSingle), configPath: 'blogSinglePageConfig.breadcrumbSingle' }]}
      />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <aside className="lg:order-2 lg:col-span-1">
              <div className="rounded-lg border border-white/10 bg-gray-900/50 p-6 sticky top-24">
                <h3 className="font-serif text-lg text-white mb-4">{t(config.blogLeftPageConfig.categoriesTitle)}</h3>
                <ul className="space-y-2">
                  {config.blogLeftPageConfig.categories.map((cat, i) => (
                    <li key={i}>
                      <Link to="/blog" className="text-white/70 hover:text-[var(--gold-400)]">{t(cat)}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
            <div className="lg:order-1 lg:col-span-2">
              <div className="flex gap-4 text-sm text-white/60 mb-8">
                <span {...cp('blogSinglePageConfig.item.category')}>{t(item.category)}</span>
                <span {...cp('blogSinglePageConfig.item.date')}>{t(item.date)}</span>
              </div>
              <div className="aspect-video rounded-lg bg-gray-700 mb-8" />
              <p className="text-white/70 mb-4" {...cp('blogSinglePageConfig.item.body1')}>{t(item.body1)}</p>
              <p className="text-white/70 mb-8" {...cp('blogSinglePageConfig.item.body2')}>{t(item.body2)}</p>
              <Link to="/blog" className="inline-flex items-center gap-2 text-[var(--gold-400)] hover:underline" {...cp('blogSinglePageConfig.backToBlog')}>
                ← {t(c.backToBlog)}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

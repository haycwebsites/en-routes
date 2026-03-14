import { PageHero } from '@/components/PageHero';
import { Link } from 'react-router-dom';
import { useHayc } from '@/hayc/config-context';

export function BlogLeftPage() {
  const { t, config, cp } = useHayc();
  const c = config.blogLeftPageConfig;

  return (
    <>
      <PageHero
        title={t(c.pageTitle)}
        titleConfigPath="blogLeftPageConfig.pageTitle"
        breadcrumbs={[{ label: t(c.breadcrumbBlog), to: '/blog', configPath: 'blogLeftPageConfig.breadcrumbBlog' }, { label: t(c.breadcrumbLeftSidebar), configPath: 'blogLeftPageConfig.breadcrumbLeftSidebar' }]}
      />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <aside className="lg:order-2 lg:col-span-1">
              <div className="rounded-lg border border-white/10 bg-gray-900/50 p-6 sticky top-24">
                <h3 className="font-serif text-lg text-white mb-4" {...cp('blogLeftPageConfig.categoriesTitle')}>{t(c.categoriesTitle)}</h3>
                <ul className="space-y-2">
                  {c.categories.map((cat, i) => (
                    <li key={i}>
                      <Link to="/blog" className="text-white/70 hover:text-[var(--gold-400)]" {...cp(`blogLeftPageConfig.categories.${i}`)}>{t(cat)}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
            <div className="lg:order-1 lg:col-span-2 space-y-8">
              {c.items.map((post, i) => (
                <Link key={i} to="/blog-single" className="group flex gap-6 rounded-lg overflow-hidden bg-gray-900 border border-white/5 hover:border-[var(--gold-500)]/30 transition-colors">
                  <div className="w-48 shrink-0 aspect-square bg-gray-700" />
                  <div className="p-6 flex-1">
                    <div className="flex gap-4 text-sm text-white/60 mb-2">
                      <span {...cp(`blogLeftPageConfig.items.${i}.category`)}>{t(post.category)}</span>
                      <span {...cp(`blogLeftPageConfig.items.${i}.date`)}>{t(post.date)}</span>
                    </div>
                    <h3 className="font-serif text-lg text-white group-hover:text-[var(--gold-400)]" {...cp(`blogLeftPageConfig.items.${i}.title`)}>{t(post.title)}</h3>
                    <span className="inline-block mt-2 text-sm text-[var(--gold-400)]" {...cp('blogLeftPageConfig.readMore')}>{t(c.readMore)} →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

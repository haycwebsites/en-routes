import { PageHero } from '@/components/PageHero';
import { Link } from 'react-router-dom';
import { useHayc } from '@/hayc/config-context';

export function BlogFullwidthPage() {
  const { t, config, cp } = useHayc();
  const c = config.blogFullwidthPageConfig;

  return (
    <>
      <PageHero
        title={t(c.pageTitle)}
        titleConfigPath="blogFullwidthPageConfig.pageTitle"
        breadcrumbs={[{ label: t(c.breadcrumbBlog), to: '/blog', configPath: 'blogFullwidthPageConfig.breadcrumbBlog' }, { label: t(c.breadcrumbFullWidth), configPath: 'blogFullwidthPageConfig.breadcrumbFullWidth' }]}
      />
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-12 max-w-4xl mx-auto">
            {c.items.map((post, i) => (
              <Link key={i} to="/blog-single" className="group block rounded-lg overflow-hidden bg-gray-900 border border-white/5 hover:border-[var(--gold-500)]/30 transition-colors">
                <div className="aspect-[21/9] bg-gray-700" />
                <div className="p-8">
                  <div className="flex gap-4 text-sm text-white/60 mb-2">
                    <span {...cp(`blogFullwidthPageConfig.items.${i}.category`)}>{t(post.category)}</span>
                    <span {...cp(`blogFullwidthPageConfig.items.${i}.date`)}>{t(post.date)}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-white group-hover:text-[var(--gold-400)]" {...cp(`blogFullwidthPageConfig.items.${i}.title`)}>{t(post.title)}</h3>
                  <span className="inline-block mt-4 text-sm text-[var(--gold-400)]" {...cp('blogFullwidthPageConfig.readMore')}>{t(c.readMore)} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

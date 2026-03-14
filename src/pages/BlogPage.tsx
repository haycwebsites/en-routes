import { PageHero } from '@/components/PageHero';
import { Link } from 'react-router-dom';
import { useHayc } from '@/hayc/config-context';

export function BlogPage() {
  const { t, config, cp } = useHayc();
  const c = config.blogPageConfig;

  return (
    <>
      <PageHero title={t(c.pageTitle)} titleConfigPath="blogPageConfig.pageTitle" breadcrumbs={[{ label: t(c.breadcrumb), configPath: 'blogPageConfig.breadcrumb' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {c.items.map((post, i) => (
              <Link key={i} to="/blog-single" className="group block rounded-lg overflow-hidden bg-gray-900 border border-white/5 hover:border-[var(--gold-500)]/30 transition-colors">
                <div className="aspect-video bg-gray-700" />
                <div className="p-6">
                  <div className="flex gap-4 text-sm text-white/60 mb-2">
                    <span {...cp(`blogPageConfig.items.${i}.category`)}>{t(post.category)}</span>
                    <span {...cp(`blogPageConfig.items.${i}.date`)}>{t(post.date)}</span>
                  </div>
                  <h3 className="font-serif text-lg text-white group-hover:text-[var(--gold-400)] transition-colors" {...cp(`blogPageConfig.items.${i}.title`)}>{t(post.title)}</h3>
                  <span className="inline-block mt-2 text-sm text-[var(--gold-400)]" {...cp('blogPageConfig.readMore')}>{t(c.readMore)} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

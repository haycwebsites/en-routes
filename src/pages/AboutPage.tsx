import { PageHero } from '@/components/PageHero';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useHayc } from '@/hayc/config-context';

export function AboutPage() {
  const { t, config, cp } = useHayc();
  const c = config.aboutPageConfig;

  return (
    <>
      <PageHero title={t(c.pageTitle)} titleConfigPath="aboutPageConfig.pageTitle" breadcrumbs={[{ label: t(c.breadcrumb), configPath: 'aboutPageConfig.breadcrumb' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-lg bg-gray-700 overflow-hidden" />
            <div>
              <span className="text-[var(--gold-400)] text-sm tracking-wider uppercase" {...cp('aboutPageConfig.eyebrow')}>{t(c.eyebrow)}</span>
              <h2 className="font-serif text-3xl md:text-4xl text-white mt-2 mb-4" {...cp('aboutPageConfig.title')}>
                {t(c.title)}
              </h2>
              <p className="text-white/70 mb-4" {...cp('aboutPageConfig.body1')}>{t(c.body1)}</p>
              <p className="text-white/70 mb-6" {...cp('aboutPageConfig.body2')}>{t(c.body2)}</p>
              <Button asChild variant="outline" className="btn-dark">
                <Link to="/room" {...cp('aboutPageConfig.exploreRoomsButton')}>{t(c.exploreRoomsButton)}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

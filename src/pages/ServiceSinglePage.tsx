import { PageHero } from '@/components/PageHero';
import { Link } from 'react-router-dom';
import { UtensilsCrossed } from 'lucide-react';
import { useHayc } from '@/hayc/config-context';

export function ServiceSinglePage() {
  const { t, config, cp } = useHayc();
  const c = config.serviceSinglePageConfig;

  return (
    <>
      <PageHero
        title={t(c.pageTitle)}
        titleConfigPath="serviceSinglePageConfig.pageTitle"
        breadcrumbs={[{ label: t(c.breadcrumbService), to: '/service', configPath: 'serviceSinglePageConfig.breadcrumbService' }, { label: t(c.breadcrumbServiceSingle), configPath: 'serviceSinglePageConfig.breadcrumbServiceSingle' }]}
      />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="aspect-video rounded-lg bg-gray-700 mb-8" />
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-lg bg-[var(--gold-500)]/20 flex items-center justify-center text-[var(--gold-400)]">
                  <UtensilsCrossed className="size-6" />
                </div>
                <h2 className="font-serif text-2xl text-white" {...cp('serviceSinglePageConfig.title')}>{t(c.title)}</h2>
              </div>
              <p className="text-white/70 mb-4" {...cp('serviceSinglePageConfig.body1')}>{t(c.body1)}</p>
              <p className="text-white/70" {...cp('serviceSinglePageConfig.body2')}>{t(c.body2)}</p>
            </div>
            <div>
              <div className="rounded-lg border border-white/10 bg-gray-900/50 p-6">
                <h3 className="font-serif text-lg text-white mb-4" {...cp('serviceSinglePageConfig.allServices')}>{t(c.allServices)}</h3>
                <ul className="space-y-2">
                  {c.serviceItems.map((s, i) => (
                    <li key={i}>
                      <Link to="/service-single" className="text-white/70 hover:text-[var(--gold-400)] transition-colors" {...cp(`serviceSinglePageConfig.serviceItems.${i}`)}>
                        {t(s)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

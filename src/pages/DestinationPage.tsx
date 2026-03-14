import { PageHero } from '@/components/PageHero';
import { Link } from 'react-router-dom';
import { useHayc } from '@/hayc/config-context';

export function DestinationPage() {
  const { t, config, cp } = useHayc();
  const c = config.destinationPageConfig;

  return (
    <>
      <PageHero title={t(c.pageTitle)} titleConfigPath="destinationPageConfig.pageTitle" breadcrumbs={[{ label: t(c.breadcrumb), configPath: 'destinationPageConfig.breadcrumb' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.items.map((d, i) => (
              <Link
                key={i}
                to="/room"
                className="group rounded-lg overflow-hidden bg-gray-900 border border-white/5 hover:border-[var(--gold-500)]/30 transition-all"
              >
                <div className="aspect-[4/3] bg-gray-700" />
                <div className="p-5 flex justify-between items-center">
                  <div>
                    <h5 className="font-medium text-white group-hover:text-[var(--gold-400)]" {...cp(`destinationPageConfig.items.${i}.name`)}>{t(d.name)}</h5>
                    <small className="text-white/60" {...cp(`destinationPageConfig.items.${i}.date`)}>{t(d.date)}</small>
                  </div>
                  <p className="text-[var(--gold-400)] font-semibold">{d.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

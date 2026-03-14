import { PageHero } from '@/components/PageHero';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Waves, Car, ConciergeBell } from 'lucide-react';
import { useHayc } from '@/hayc/config-context';

const icons = [UtensilsCrossed, Waves, Car, ConciergeBell];

export function ServicePage() {
  const { t, config, cp } = useHayc();
  const c = config.servicePageConfig;

  return (
    <>
      <PageHero title={t(c.pageTitle)} titleConfigPath="servicePageConfig.pageTitle" breadcrumbs={[{ label: t(c.breadcrumb), configPath: 'servicePageConfig.breadcrumb' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {c.items.map((s, i) => {
              const Icon = icons[i] ?? UtensilsCrossed;
              return (
                <Link
                  key={i}
                  to="/service-single"
                  className="group flex gap-6 p-8 rounded-lg border border-white/10 bg-gray-900/50 hover:border-[var(--gold-500)]/30 transition-all"
                >
                  <div className="size-14 shrink-0 rounded-lg bg-[var(--gold-500)]/20 flex items-center justify-center text-[var(--gold-400)] group-hover:bg-[var(--gold-500)]/30 transition-colors">
                    <Icon className="size-7" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-white mb-2 group-hover:text-[var(--gold-400)]" {...cp(`servicePageConfig.items.${i}.title`)}>{t(s.title)}</h3>
                    <p className="text-white/70" {...cp(`servicePageConfig.items.${i}.description`)}>{t(s.description)}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

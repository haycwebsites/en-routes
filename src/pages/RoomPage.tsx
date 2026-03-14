import { PageHero } from '@/components/PageHero';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useHayc } from '@/hayc/config-context';

export function RoomPage() {
  const { t, config, cp } = useHayc();
  const c = config.roomPageConfig;

  return (
    <>
      <PageHero title={t(c.pageTitle)} titleConfigPath="roomPageConfig.pageTitle" breadcrumbs={[{ label: t(c.breadcrumb), configPath: 'roomPageConfig.breadcrumb' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {c.categories.map((cat, i) => (
              <button key={i} className="px-4 py-2 rounded-md text-sm border border-white/20 hover:border-[var(--gold-500)] hover:text-[var(--gold-400)] transition-colors" {...cp(`roomPageConfig.categories.${i}`)}>
                {t(cat)}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {c.items.map((room, i) => (
              <div key={i} className="group rounded-lg overflow-hidden bg-gray-900 border border-white/5 hover:border-[var(--gold-500)]/30 transition-all">
                <div className="aspect-[4/3] bg-gray-700" />
                <div className="p-6">
                  <h3 className="font-serif text-xl text-white mb-2" {...cp(`roomPageConfig.items.${i}.name`)}>{t(room.name)}</h3>
                  <p className="text-sm text-white/60 mb-4" {...cp(`roomPageConfig.items.${i}.type`)}>{t(room.type)}</p>
                  <p className="text-[var(--gold-400)] font-semibold mb-4" {...cp('roomPageConfig.fromPerNight')}>{t(c.fromPerNight).replace('142', String(room.price))}</p>
                  <Button asChild size="sm" className="btn-primary">
                    <Link to="/room-single" {...cp('roomPageConfig.checkAvailability')}>{t(c.checkAvailability)}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

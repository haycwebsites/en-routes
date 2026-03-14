import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Calendar, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useHayc } from '@/hayc/config-context';

export function RoomSinglePage() {
  const { t, config, cp } = useHayc();
  const c = config.roomSinglePageConfig;

  return (
    <>
      <PageHero
        title={t(c.pageTitle)}
        titleConfigPath="roomSinglePageConfig.pageTitle"
        breadcrumbs={[{ label: t(c.breadcrumbRoom), to: '/room', configPath: 'roomSinglePageConfig.breadcrumbRoom' }, { label: t(c.breadcrumbRoomSingle), configPath: 'roomSinglePageConfig.breadcrumbRoomSingle' }]}
      />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="aspect-video rounded-lg bg-gray-700 mb-8" />
              <h2 className="font-serif text-2xl text-white mb-4" {...cp('roomSinglePageConfig.roomDetails')}>{t(c.roomDetails)}</h2>
              <p className="text-white/70 mb-4" {...cp('roomSinglePageConfig.body1')}>{t(c.body1)}</p>
              <p className="text-white/70" {...cp('roomSinglePageConfig.body2')}>{t(c.body2)}</p>
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                {c.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="size-2 rounded-full bg-[var(--gold-500)]" />
                    <span className="text-white/80" {...cp(`roomSinglePageConfig.amenities.${i}`)}>{t(amenity)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="sticky top-24 rounded-lg border border-white/10 bg-gray-900/80 p-6 backdrop-blur">
                <h3 className="font-serif text-xl text-white mb-6" {...cp('roomSinglePageConfig.bookRoom')}>{t(c.bookRoom)}</h3>
                <p className="text-[var(--gold-400)] text-2xl font-semibold mb-6" {...cp('roomSinglePageConfig.fromPerNight')}>{t(c.fromPerNight)}</p>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm text-white/70 mb-2"><Calendar className="inline size-4 mr-1" /> {t(c.checkIn)}</label>
                    <Input type="date" className="bg-white/5 border-white/10" />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-2"><Calendar className="inline size-4 mr-1" /> {t(c.checkOut)}</label>
                    <Input type="date" className="bg-white/5 border-white/10" />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-2"><Users className="inline size-4 mr-1" /> {t(c.guests)}</label>
                    <Select defaultValue="2">
                      <SelectTrigger className="bg-white/5 border-white/10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((n) => (
                          <SelectItem key={n} value={String(n)}>{n}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="btn-primary w-full" {...cp('roomSinglePageConfig.checkAvailability')}>{t(c.checkAvailability)}</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Link } from 'react-router-dom';
import { Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useHayc } from '@/hayc/config-context';

export function HomePage() {
  const { t, img, config, cp } = useHayc();
  const hero = config.heroConfig;
  const search = config.searchConfig;
  const about = config.homeAboutConfig;
  const dest = config.homeDestinationsConfig;
  const rooms = config.homeRoomsConfig;
  const testimonials = config.homeTestimonialsConfig;
  const blog = config.homeBlogConfig;

  return (
    <>
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center hero-kenburns" style={{ backgroundImage: `url(${img(hero.heroImage)})` }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4" {...cp('heroConfig.mainTitle')}>
            {t(hero.mainTitle)}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto" {...cp('heroConfig.subtitle')}>
            {t(hero.subtitle)}
          </p>
          <Button asChild size="lg" className="btn-primary">
            <Link to="/room" {...cp('heroConfig.bookRoomButton')}>{t(hero.bookRoomButton)}</Link>
          </Button>
        </div>
      </section>

      <div className="container-custom -mt-16 relative z-20">
        <div className="bg-gray-900 border border-white/10 rounded-lg p-6 shadow-xl">
          <form className="flex flex-col md:flex-row gap-4 flex-wrap">
            <div className="flex-1 min-w-[180px]">
              <label className="block text-sm text-white/70 mb-2">
                <Calendar className="inline size-4 mr-1" /> {t(search.checkIn)}
              </label>
              <Input type="date" className="bg-white/5 border-white/10" />
            </div>
            <div className="flex-1 min-w-[180px]">
              <label className="block text-sm text-white/70 mb-2">
                <Calendar className="inline size-4 mr-1" /> {t(search.checkOut)}
              </label>
              <Input type="date" className="bg-white/5 border-white/10" />
            </div>
            <div className="min-w-[120px]">
              <label className="block text-sm text-white/70 mb-2">
                <Users className="inline size-4 mr-1" /> {t(search.guests)}
              </label>
              <Select defaultValue="2">
                <SelectTrigger className="bg-white/5 border-white/10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <SelectItem key={n} value={String(n)}>{n}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="min-w-[120px]">
              <label className="block text-sm text-white/70 mb-2">{t(search.children)}</label>
              <Select defaultValue="1">
                <SelectTrigger className="bg-white/5 border-white/10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                    <SelectItem key={n} value={String(n)}>{n}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button type="submit" className="btn-primary w-full md:w-auto" {...cp('searchConfig.checkAvailability')}>
                {t(search.checkAvailability)}
              </Button>
            </div>
          </form>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-lg bg-gray-700 overflow-hidden" />
            <div>
              <span className="text-[var(--gold-400)] text-sm tracking-wider uppercase" {...cp('homeAboutConfig.eyebrow')}>{t(about.eyebrow)}</span>
              <h2 className="font-serif text-3xl md:text-4xl text-white mt-2 mb-4" {...cp('homeAboutConfig.title')}>
                {t(about.title)}
              </h2>
              <p className="text-white/70 mb-6" {...cp('homeAboutConfig.body')}>{t(about.body)}</p>
              <Button asChild variant="outline" className="btn-dark">
                <Link to="/about" {...cp('homeAboutConfig.moreButton')}>{t(about.moreButton)}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-900/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <span className="text-[var(--gold-400)] text-sm tracking-wider uppercase" {...cp('homeDestinationsConfig.eyebrow')}>{t(dest.eyebrow)}</span>
              <h2 className="font-serif text-3xl md:text-4xl text-white mt-2 mb-4" {...cp('homeDestinationsConfig.title')}>{t(dest.title)}</h2>
              <p className="text-white/70 mb-6" {...cp('homeDestinationsConfig.body')}>{t(dest.body)}</p>
              <Button asChild variant="outline" className="btn-dark">
                <Link to="/about" {...cp('homeDestinationsConfig.discoverButton')}>{t(dest.discoverButton)}</Link>
              </Button>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {dest.items.map((d, i) => (
                <div key={i} className="group rounded-lg overflow-hidden bg-gray-800 border border-white/5 hover:border-[var(--gold-500)]/30 transition-colors">
                  <div className="aspect-[4/3] bg-gray-700" />
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h5 className="font-medium text-white" {...cp(`homeDestinationsConfig.items.${i}.name`)}>{t(d.name)}</h5>
                      <small className="text-white/60" {...cp(`homeDestinationsConfig.items.${i}.date`)}>{t(d.date)}</small>
                    </div>
                    <div className="text-right">
                      <p className="text-[var(--gold-400)] font-semibold">{d.price}</p>
                      <span className="text-xs text-white/60" {...cp('homeDestinationsConfig.perDay')}>{t(dest.perDay)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-[var(--gold-400)] text-sm tracking-wider uppercase" {...cp('homeRoomsConfig.eyebrow')}>{t(rooms.eyebrow)}</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white mt-2" {...cp('homeRoomsConfig.title')}>{t(rooms.title)}</h2>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {rooms.categories.map((cat, i) => (
              <button key={i} className="px-4 py-2 rounded-md text-sm border border-white/20 hover:border-[var(--gold-500)] hover:text-[var(--gold-400)] transition-colors" {...cp(`homeRoomsConfig.categories.${i}`)}>
                {t(cat)}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {rooms.items.map((room, i) => (
              <div key={i} className="group rounded-lg overflow-hidden bg-gray-900 border border-white/5 hover:border-[var(--gold-500)]/30 transition-all">
                <div className="aspect-[4/3] bg-gray-700 relative">
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-6 text-center">
                    <h3 className="font-serif text-xl text-white mb-1" {...cp(`homeRoomsConfig.items.${i}.name`)}>{t(room.name)}</h3>
                    <p className="text-sm text-white/80 mb-2" {...cp(`homeRoomsConfig.items.${i}.type`)}>{t(room.type)}</p>
                    <p className="text-white/70 text-sm mb-4" {...cp('homeRoomsConfig.roomDescription')}>{t(rooms.roomDescription)}</p>
                    <p className="text-[var(--gold-400)] mb-4">From: ${room.price} / Night</p>
                    <Button size="sm" className="btn-primary" {...cp('homeRoomsConfig.checkAvailability')}>{t(rooms.checkAvailability)}</Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg text-white" {...cp(`homeRoomsConfig.items.${i}.name`)}>{t(room.name)}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="aspect-video rounded-lg bg-gray-800 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gray-700" />
            <button type="button" className="relative z-10 size-20 rounded-full border-4 border-white flex items-center justify-center text-white hover:border-[var(--gold-500)] hover:text-[var(--gold-500)] transition-colors" aria-label="Play video">
              <span className="ml-1 w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white" />
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-900/50">
        <div className="container-custom text-center">
          <span className="text-[var(--gold-400)] text-sm tracking-wider uppercase" {...cp('homeTestimonialsConfig.eyebrow')}>{t(testimonials.eyebrow)}</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mt-2 mb-12" {...cp('homeTestimonialsConfig.title')}>{t(testimonials.title)}</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {testimonials.items.map((item, i) => (
              <div key={i} className="max-w-md p-8 rounded-lg bg-gray-900 border border-white/5">
                <div className="flex justify-center gap-1 text-[var(--gold-400)] mb-4">★★★★★</div>
                <p className="text-white/90 italic mb-6" {...cp(`homeTestimonialsConfig.items.${i}.quote`)}>&quot;{t(item.quote)}&quot;</p>
                <div className="flex items-center justify-center gap-4">
                  <div className="size-12 rounded-full bg-gray-700" />
                  <div className="text-left">
                    <p className="font-medium text-white" {...cp(`homeTestimonialsConfig.items.${i}.name`)}>{t(item.name)}</p>
                    <p className="text-sm text-white/60" {...cp(`homeTestimonialsConfig.items.${i}.location`)}>{t(item.location)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-[var(--gold-400)] text-sm tracking-wider uppercase" {...cp('homeBlogConfig.eyebrow')}>{t(blog.eyebrow)}</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white mt-2" {...cp('homeBlogConfig.title')}>{t(blog.title)}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blog.items.map((post, i) => (
              <Link key={i} to="/blog-single" className="group block rounded-lg overflow-hidden bg-gray-900 border border-white/5 hover:border-[var(--gold-500)]/30 transition-colors">
                <div className="aspect-video bg-gray-700" />
                <div className="p-6">
                  <div className="flex gap-4 text-sm text-white/60 mb-2">
                    <span {...cp(`homeBlogConfig.items.${i}.category`)}>{t(post.category)}</span>
                    <span {...cp(`homeBlogConfig.items.${i}.date`)}>{t(post.date)}</span>
                  </div>
                  <h3 className="font-serif text-lg text-white group-hover:text-[var(--gold-400)] transition-colors" {...cp(`homeBlogConfig.items.${i}.title`)}>{t(post.title)}</h3>
                  <span className="inline-block mt-2 text-sm text-[var(--gold-400)]" {...cp('homeBlogConfig.continue')}>{t(blog.continue)} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

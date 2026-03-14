import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useHayc } from '@/hayc/config-context';

export function Footer() {
  const { t, config, cp } = useHayc();
  const fc = config.footerConfig;

  return (
    <footer className="border-t border-white/10 bg-gray-900/50">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-serif text-lg text-white mb-4" {...cp('footerConfig.contactTitle')}>{t(fc.contactTitle)}</h3>
            <p className="text-white/70 text-sm mb-4" {...cp('footerConfig.contactDesc')}>{t(fc.contactDesc)}</p>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-3">
                <MapPin className="size-4 shrink-0 text-[var(--gold-500)]" />
                <span {...cp('footerConfig.address')}>{t(fc.address)}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-[var(--gold-500)]" />
                {fc.phone}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-[var(--gold-500)]" />
                {fc.email}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg text-white mb-4" {...cp('footerConfig.destinationTitle')}>{t(fc.destinationTitle)}</h3>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="size-14 shrink-0 rounded bg-gray-700" />
                <div>
                  <h4 className="font-medium text-white" {...cp('footerConfig.destination1Name')}>{t(fc.destination1Name)}</h4>
                  <p className="text-xs text-white/60" {...cp('footerConfig.destination1Date')}>{t(fc.destination1Date)}</p>
                  <p className="text-[var(--gold-400)] font-medium">{fc.destination1Price}</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="size-14 shrink-0 rounded bg-gray-700" />
                <div>
                  <h4 className="font-medium text-white" {...cp('footerConfig.destination2Name')}>{t(fc.destination2Name)}</h4>
                  <p className="text-xs text-white/60" {...cp('footerConfig.destination2Date')}>{t(fc.destination2Date)}</p>
                  <p className="text-[var(--gold-400)] font-medium">{fc.destination2Price}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg text-white mb-4" {...cp('footerConfig.usefulLinksTitle')}>{t(fc.usefulLinksTitle)}</h3>
            <ul className="space-y-2">
              {[
                { to: '/about', label: fc.aboutUs, path: 'footerConfig.aboutUs' },
                { to: '/room', label: fc.ourOffers, path: 'footerConfig.ourOffers' },
                { to: '/service', label: fc.howSpread, path: 'footerConfig.howSpread' },
                { to: '/contact', label: fc.contactUs, path: 'footerConfig.contactUs' },
                { to: '/service-single', label: fc.ourEvent, path: 'footerConfig.ourEvent' },
              ].map(({ to, label, path }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-white/70 hover:text-[var(--gold-400)] transition-colors" {...cp(path)}>
                    {t(label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg text-white mb-4" {...cp('footerConfig.newsletterTitle')}>{t(fc.newsletterTitle)}</h3>
            <form className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder={t(fc.emailPlaceholder)}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
              />
              <Button type="submit" className="btn-primary w-full justify-center" {...cp('footerConfig.subscribeButton')}>
                {t(fc.subscribeButton)}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-4">
            <a href="#" className="size-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-[var(--gold-500)] text-white/80 hover:text-white transition-colors" aria-label={t(fc.facebookAriaLabel)}>
              <Facebook className="size-4" />
            </a>
            <a href="#" className="size-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-[var(--gold-500)] text-white/80 hover:text-white transition-colors" aria-label={t(fc.twitterAriaLabel)}>
              <Twitter className="size-4" />
            </a>
            <a href="#" className="size-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-[var(--gold-500)] text-white/80 hover:text-white transition-colors" aria-label={t(fc.instagramAriaLabel)}>
              <Instagram className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div className="flex gap-6">
            <Link to="#" className="hover:text-[var(--gold-400)] transition-colors" {...cp('footerConfig.privacyPolicy')}>{t(fc.privacyPolicy)}</Link>
            <Link to="#" className="hover:text-[var(--gold-400)] transition-colors" {...cp('footerConfig.termsConditions')}>{t(fc.termsConditions)}</Link>
            <Link to="#" className="hover:text-[var(--gold-400)] transition-colors" {...cp('footerConfig.cookies')}>{t(fc.cookies)}</Link>
          </div>
          <p {...cp('footerConfig.copyright')}>© {new Date().getFullYear()} {t(fc.copyright)}</p>
        </div>
      </div>
    </footer>
  );
}

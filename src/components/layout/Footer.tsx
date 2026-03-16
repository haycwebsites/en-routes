import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useHayc } from '@/hayc/config-context';

export function Footer() {
  const { t, config, cp } = useHayc();
  const fc = config.footerConfig;

  return (
    <footer className="border-t border-white/10 bg-gray-900">
      <div className="container-custom py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
                <a href={`tel:${fc.phone.replace(/\s/g, '')}`} className="hover:text-[var(--gold-400)]">{fc.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-[var(--gold-500)]" />
                <a href={`mailto:${fc.email}`} className="hover:text-[var(--gold-400)]">{fc.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg text-white mb-4" {...cp('footerConfig.usefulLinksTitle')}>{t(fc.usefulLinksTitle)}</h3>
            <ul className="space-y-2">
              {[
                { to: '/about', label: fc.aboutUs, path: 'footerConfig.aboutUs' },
                { to: '/services', label: fc.ourOffers, path: 'footerConfig.ourOffers' },
                { to: '/social-responsibility', label: fc.howSpread, path: 'footerConfig.howSpread' },
                { to: '/contact', label: fc.contactUs, path: 'footerConfig.contactUs' },
                { to: '/blog', label: fc.ourEvent, path: 'footerConfig.ourEvent' },
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

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
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

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
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

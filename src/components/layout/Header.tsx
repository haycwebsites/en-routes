import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useHayc } from '@/hayc/config-context';

const navPaths: { path: string; configKey: string }[] = [
  { path: '/', configKey: 'home' },
  { path: '/services', configKey: 'service' },
  { path: '/about', configKey: 'about' },
  { path: '/blog', configKey: 'blog' },
  { path: '/contact', configKey: 'contact' },
  { path: '/social-responsibility', configKey: 'socialResponsibility' },
];

export function Header() {
  const { t, config, cp } = useHayc();
  const nc = config.navigationConfig;
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path || (path === '/' && location.pathname === '/');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-white/5">
      <nav className="container-custom flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0" {...cp('navigationConfig.brandName')}>
          <span className="font-serif text-xl md:text-2xl text-[var(--gold-400)]">{t(nc.brandName)}</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navPaths.map(({ path, configKey }) => (
            <Link
              key={path}
              to={path}
              className={cn(
                'px-4 py-2 rounded-md text-sm hover:bg-white/5 transition-colors',
                isActive(path) ? 'text-[var(--gold-400)]' : 'text-white/90 hover:text-white'
              )}
              onClick={() => setMobileOpen(false)}
              {...cp(`navigationConfig.${configKey}`)}
            >
              {t(nc[configKey as keyof typeof nc])}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Button asChild size="sm" className="btn-primary shrink-0">
            <Link to="/book" {...cp('navigationConfig.bookButton')}>{t(nc.bookButton)}</Link>
          </Button>
          <a href={`tel:${nc.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-white/80 hover:text-[var(--gold-400)] transition-colors">
            <Phone className="size-4" />
            <span>{nc.phone}</span>
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <Button asChild size="sm" className="btn-primary">
            <Link to="/book" {...cp('navigationConfig.bookButton')}>{t(nc.bookButton)}</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? t(nc.closeMenuAriaLabel) : t(nc.openMenuAriaLabel)}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/5 bg-gray-900">
          <div className="container-custom py-4 flex flex-col gap-2 max-h-[70vh] overflow-y-auto">
            <Link to="/book" className="btn-primary text-center py-2 rounded-md text-sm" onClick={() => setMobileOpen(false)} {...cp('navigationConfig.bookButton')}>
              {t(nc.bookButton)}
            </Link>
            {navPaths.map(({ path, configKey }) => (
              <Link
                key={path}
                to={path}
                className={cn(
                  'px-3 py-2 rounded-md text-sm',
                  isActive(path) ? 'text-[var(--gold-400)] bg-white/5' : 'text-white/90 hover:bg-white/5'
                )}
                onClick={() => setMobileOpen(false)}
                {...cp(`navigationConfig.${configKey}`)}
              >
                {t(nc[configKey as keyof typeof nc])}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

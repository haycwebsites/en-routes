import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useHayc } from '@/hayc/config-context';
import type { LocaleString } from '@/config';

export function Header() {
  const { t, config, cp } = useHayc();
  const nc = config.navigationConfig;
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks: { label: LocaleString; labelPath: string; items?: { to: string; label: LocaleString }[]; to?: string }[] = [
    { label: nc.home, labelPath: 'navigationConfig.home', items: [{ to: '/', label: nc.home }, { to: '/home-style-2', label: nc.homeStyle2 }, { to: '/home-style-3', label: nc.homeStyle3 }] },
    { label: nc.room, labelPath: 'navigationConfig.room', items: [{ to: '/room', label: nc.room }, { to: '/room-single', label: nc.roomSingle }] },
    { to: '/destination', label: nc.destination, labelPath: 'navigationConfig.destination' },
    { label: nc.pages, labelPath: 'navigationConfig.pages', items: [{ to: '/about', label: nc.about }, { to: '/faq', label: nc.faq }, { to: '/404', label: nc.page404 }] },
    { label: nc.service, labelPath: 'navigationConfig.service', items: [{ to: '/service', label: nc.service }, { to: '/service-single', label: nc.serviceSingle }] },
    { label: nc.blog, labelPath: 'navigationConfig.blog', items: [{ to: '/blog', label: nc.blog }, { to: '/blog-left', label: nc.blogLeftSidebar }, { to: '/blog-fullwidth', label: nc.blogFullWidth }, { to: '/blog-single', label: nc.blogSingle }, { to: '/blog-single-left', label: nc.blogSingleLeft }, { to: '/blog-single-fullwidth', label: nc.blogSingleFullwidth }] },
    { to: '/contact', label: nc.contact, labelPath: 'navigationConfig.contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-white/5">
      <nav className="container-custom flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0" {...cp('navigationConfig.brandName')}>
          <span className="font-serif text-xl md:text-2xl text-[var(--gold-400)]">{t(nc.brandName)}</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu className="max-w-none">
            <NavigationMenuList className="flex gap-1">
              {navLinks.map((item, idx) =>
                item.items ? (
                  <NavigationMenuItem key={idx}>
                    <NavigationMenuTrigger
                      className={cn(
                        'bg-transparent hover:bg-white/5 text-white/90 hover:text-white',
                        item.items.some((i) => isActive(i.to)) && 'text-[var(--gold-400)]'
                      )}
                      {...cp(item.labelPath)}
                    >
                      {t(item.label)}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-48 gap-1 p-2 bg-gray-900 border border-white/10 rounded-lg">
                        {item.items.map((sub, sidx) => (
                          <li key={sub.to}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={sub.to}
                                className={cn(
                                  'block px-3 py-2 rounded-md text-sm hover:bg-white/10 transition-colors',
                                  isActive(sub.to) ? 'text-[var(--gold-400)]' : 'text-white/90'
                                )}
                                onClick={() => setMobileOpen(false)}
                              >
                                {t(sub.label)}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={idx}>
                    <Link to={item.to!}>
                      <NavigationMenuLink
                        className={cn(
                          'px-4 py-2 rounded-md text-sm hover:bg-white/5 transition-colors',
                          isActive(item.to!) ? 'text-[var(--gold-400)]' : 'text-white/90 hover:text-white'
                        )}
                        {...cp(item.labelPath)}
                      >
                        {t(item.label)}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href={`tel:${nc.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-white/80 hover:text-[var(--gold-400)] transition-colors">
            <Phone className="size-4" />
            <span>{nc.phone}</span>
          </a>
          <button type="button" aria-label={t(nc.searchAriaLabel)} className="p-2 text-white/80 hover:text-[var(--gold-400)] transition-colors" {...cp('navigationConfig.searchAriaLabel')}>
            <Search className="size-4" />
          </button>
          <LanguageSwitcher />
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <LanguageSwitcher />
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
            {navLinks.map((item, idx) =>
              item.items ? (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="px-3 py-2 text-sm font-medium text-white/70">{t(item.label)}</span>
                  {item.items.map((sub) => (
                    <Link
                      key={sub.to}
                      to={sub.to}
                      className={cn(
                        'px-3 py-2 rounded-md text-sm',
                        isActive(sub.to) ? 'text-[var(--gold-400)] bg-white/5' : 'text-white/90 hover:bg-white/5'
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {t(sub.label)}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={idx}
                  to={item.to!}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm',
                    isActive(item.to!) ? 'text-[var(--gold-400)] bg-white/5' : 'text-white/90 hover:bg-white/5'
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {t(item.label)}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}

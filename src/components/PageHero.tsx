import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useHayc } from '../hayc/config-context';

interface PageHeroProps {
  title: string;
  titleConfigPath: string;
  breadcrumbs?: { label: string; to?: string; configPath?: string }[];
}

export function PageHero({ title, titleConfigPath, breadcrumbs = [] }: PageHeroProps) {
  const { t, config, cp } = useHayc();
  const nc = config.navigationConfig;
  const phc = config.pageHeroConfig;

  return (
    <section className="relative py-24 md:py-32 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--gold-900)]/30 to-transparent" />
      <div className="container-custom relative z-10">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4" {...cp(titleConfigPath)}>{title}</h1>
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-white/70" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[var(--gold-400)] transition-colors" {...cp('pageHeroConfig.homeBreadcrumb')}>
              {t(phc.homeBreadcrumb)}
            </Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight className="size-4" />
                {b.to ? (
                  <Link to={b.to} className="hover:text-[var(--gold-400)] transition-colors" {...(b.configPath ? cp(b.configPath) : {})}>
                    {b.label}
                  </Link>
                ) : (
                  <span {...(b.configPath ? cp(b.configPath) : {})}>{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}

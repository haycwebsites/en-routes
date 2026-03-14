import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useHayc } from '@/hayc/config-context';

export function NotFoundPage() {
  const { t, config, cp } = useHayc();
  const c = config.notFoundConfig;

  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="container-custom text-center">
        <h1 className="font-serif text-8xl md:text-9xl text-[var(--gold-500)]/20 mb-4" {...cp('notFoundConfig.code')}>{t(c.code)}</h1>
        <h2 className="font-serif text-2xl md:text-3xl text-white mb-4" {...cp('notFoundConfig.title')}>{t(c.title)}</h2>
        <p className="text-white/70 mb-8 max-w-md mx-auto" {...cp('notFoundConfig.description')}>
          {t(c.description)}
        </p>
        <Button asChild className="btn-primary">
          <Link to="/" {...cp('notFoundConfig.backButton')}>{t(c.backButton)}</Link>
        </Button>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { Plane } from 'lucide-react';
import { useHayc } from '../hayc/config-context';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const { t, config, cp } = useHayc();
  const preloaderConfig = config.preloaderConfig;
  const [phase, setPhase] = useState<'loading' | 'fading'>('loading');
  const skipPreloader = !preloaderConfig?.brandName;

  useEffect(() => {
    if (skipPreloader) {
      onComplete();
      return;
    }
    const fadeTimer = setTimeout(() => setPhase('fading'), 2200);
    const completeTimer = setTimeout(() => onComplete(), 2800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete, skipPreloader]);

  if (skipPreloader) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center transition-opacity duration-600 ${
        phase === 'fading' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="preloader-text mb-6">
        <Plane className="w-12 h-12 text-gold-500" />
      </div>
      <div className="preloader-text text-center" style={{ animationDelay: '0.2s' }}>
        <h1 className="font-serif text-3xl md:text-4xl text-white tracking-wide mb-2" {...cp('preloaderConfig.brandName')}>
          {t(preloaderConfig!.brandName!)}
        </h1>
        <p className="font-script text-2xl text-gold-400" {...cp('preloaderConfig.brandSubname')}>
          {preloaderConfig!.brandSubname ? t(preloaderConfig!.brandSubname) : 'En-Routes'}
        </p>
      </div>
      <div className="mt-8 w-48 h-px bg-white/10 overflow-hidden">
        <div className="preloader-line h-full bg-gradient-to-r from-gold-500/50 via-gold-500 to-gold-500/50" />
      </div>
      {preloaderConfig!.yearText && (
        <p
          className="preloader-text mt-4 text-xs text-white/40 uppercase tracking-[0.3em]"
          style={{ animationDelay: '0.4s' }}
          {...cp('preloaderConfig.yearText')}
        >
          {t(preloaderConfig!.yearText!)}
        </p>
      )}
    </div>
  );
}

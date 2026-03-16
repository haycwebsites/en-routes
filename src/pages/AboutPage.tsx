import { Link } from 'react-router-dom';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { useHayc } from '@/hayc/config-context';
import { innerPageHeroImages } from '@/config';
import { Car, MapPin, Shield, Zap, Heart, CircleCheck, Leaf, Sparkles, Users } from 'lucide-react';

// Values: Safety, Courtesy, Reliability, Sustainability, Innovation
const valueIcons = [Shield, Heart, CircleCheck, Leaf, Sparkles];

export function AboutPage() {
  const { t, config, cp } = useHayc();
  const c = config.aboutPageConfig;
  const features = [
    { title: c.luxuryTitle, desc: c.luxuryDesc, Icon: Car },
    { title: c.customizedTitle, desc: c.customizedDesc, Icon: MapPin },
    { title: c.comfortTitle, desc: c.comfortDesc, Icon: Shield },
    { title: c.detailTitle, desc: c.detailDesc, Icon: Zap },
  ];
  const values: { text: typeof c.valueSafety; path: string }[] = [
    { text: c.valueSafety, path: 'aboutPageConfig.valueSafety' },
    { text: c.valueCourtesy, path: 'aboutPageConfig.valueCourtesy' },
    { text: c.valueReliability, path: 'aboutPageConfig.valueReliability' },
    { text: c.valueSustainability, path: 'aboutPageConfig.valueSustainability' },
    { text: c.valueInnovation, path: 'aboutPageConfig.valueInnovation' },
  ];

  return (
    <>
      <PageHero title={t(c.pageTitle)} titleConfigPath="aboutPageConfig.pageTitle" breadcrumbs={[{ label: t(c.breadcrumb), configPath: 'aboutPageConfig.breadcrumb' }]} backgroundImage={innerPageHeroImages.about} />
      <section className="section-padding section-reveal">
        <div className="container-custom">
          <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-4" {...cp('aboutPageConfig.welcomeTitle')}>{t(c.welcomeTitle)}</h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto mb-16" {...cp('aboutPageConfig.welcomeSubtitle')}>{t(c.welcomeSubtitle)}</p>

          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {features.map((f, i) => (
              <div key={i} className="card-hover flex gap-6 p-6 rounded-lg border border-white/10 bg-gray-900/30 hover:border-[var(--gold-500)]/30">
                <div className="size-12 shrink-0 rounded-lg bg-[var(--gold-500)]/20 flex items-center justify-center text-[var(--gold-400)] icon-float">
                  <f.Icon className="size-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-white mb-2" {...cp(`aboutPageConfig.${['luxuryTitle', 'customizedTitle', 'comfortTitle', 'detailTitle'][i]}`)}>{t(f.title)}</h3>
                  <p className="text-white/70 text-sm" {...cp(`aboutPageConfig.${['luxuryDesc', 'customizedDesc', 'comfortDesc', 'detailDesc'][i]}`)}>{t(f.desc)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="font-serif text-3xl text-white mb-6" {...cp('aboutPageConfig.philosophyTitle')}>{t(c.philosophyTitle)}</h2>
            <p className="text-white/80 max-w-3xl" {...cp('aboutPageConfig.philosophyBody')}>{t(c.philosophyBody)}</p>
          </div>

          <div className="mb-20">
            <h2 className="font-serif text-3xl text-white mb-8" {...cp('aboutPageConfig.valuesTitle')}>{t(c.valuesTitle)}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((val, i) => {
                const Icon = valueIcons[i] ?? Shield;
                return (
                  <div key={i} className="card-hover flex gap-4 p-6 rounded-lg border border-white/10 bg-gray-900/30 hover:border-[var(--gold-500)]/30">
                    <div className="size-10 shrink-0 rounded-lg bg-[var(--gold-500)]/20 flex items-center justify-center text-[var(--gold-400)] icon-float">
                      <Icon className="size-5" />
                    </div>
                    <p className="text-white/80 text-sm" {...cp(val.path)}>{t(val.text)}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card-hover rounded-lg border border-white/10 bg-gray-900/30 p-8 md:p-12 text-center hover:border-[var(--gold-500)]/30">
            <div className="inline-flex items-center justify-center size-14 rounded-full bg-[var(--gold-500)]/20 text-[var(--gold-400)] mb-6 icon-float">
              <Users className="size-7" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-4" {...cp('aboutPageConfig.peopleTitle')}>{t(c.peopleTitle)}</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8" {...cp('aboutPageConfig.peopleBody')}>{t(c.peopleBody)}</p>
            <Button asChild variant="outline" className="btn-dark">
              <Link to="/services" {...cp('aboutPageConfig.exploreServicesButton')}>{t(c.exploreServicesButton)}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

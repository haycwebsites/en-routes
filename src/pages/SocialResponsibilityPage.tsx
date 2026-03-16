import { PageHero } from '@/components/PageHero';
import { useHayc } from '@/hayc/config-context';
import { innerPageHeroImages } from '@/config';
import { Heart, Users, UserCheck, Leaf, Car, Route, HelpCircle } from 'lucide-react';

const offerIcons = [Heart, Leaf, Car, Route];

export function SocialResponsibilityPage() {
  const { t, config, cp } = useHayc();
  const c = config.socialResponsibilityPageConfig;

  const offerItems = [
    { title: c.solidarityTitle, body: c.solidarityBody },
    { title: c.environmentTitle, body: c.environmentBody },
    { title: c.hybridTitle, body: c.hybridBody },
    { title: c.routesTitle, body: c.routesBody },
  ];

  return (
    <>
      <PageHero title={t(c.pageTitle)} titleConfigPath="socialResponsibilityPageConfig.pageTitle" breadcrumbs={[{ label: t(c.breadcrumb), configPath: 'socialResponsibilityPageConfig.breadcrumb' }]} backgroundImage={innerPageHeroImages.socialResponsibility} />
      <section className="section-padding section-reveal">
        <div className="container-custom max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl text-white text-center mb-4" {...cp('socialResponsibilityPageConfig.subtitle')}>{t(c.subtitle)}</h2>
          <h3 className="font-serif text-xl text-[var(--gold-400)] mb-6" {...cp('socialResponsibilityPageConfig.meaningTitle')}>{t(c.meaningTitle)}</h3>
          <p className="text-white/80 mb-12" {...cp('socialResponsibilityPageConfig.meaningBody')}>{t(c.meaningBody)}</p>

          <h3 className="font-serif text-xl text-white mb-4" {...cp('socialResponsibilityPageConfig.achieveTitle')}>{t(c.achieveTitle)}</h3>
          <p className="text-white/80 mb-16" {...cp('socialResponsibilityPageConfig.achieveBody')}>{t(c.achieveBody)}</p>

          <h3 className="font-serif text-xl text-white mb-4" {...cp('socialResponsibilityPageConfig.peopleTitle')}>{t(c.peopleTitle)}</h3>
          <p className="text-white/80 mb-8" {...cp('socialResponsibilityPageConfig.peopleBody')}>{t(c.peopleBody)}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="card-hover p-6 rounded-lg border border-white/10 bg-gray-900/30 hover:border-[var(--gold-500)]/30">
              <div className="inline-flex items-center justify-center size-12 rounded-lg bg-[var(--gold-500)]/20 text-[var(--gold-400)] mb-4">
                <Users className="size-6" />
              </div>
              <h4 className="font-serif text-lg text-white mb-2" {...cp('socialResponsibilityPageConfig.teamTitle')}>{t(c.teamTitle)}</h4>
              <p className="text-white/70 text-sm" {...cp('socialResponsibilityPageConfig.teamBody')}>{t(c.teamBody)}</p>
            </div>
            <div className="card-hover p-6 rounded-lg border border-white/10 bg-gray-900/30 hover:border-[var(--gold-500)]/30">
              <div className="inline-flex items-center justify-center size-12 rounded-lg bg-[var(--gold-500)]/20 text-[var(--gold-400)] mb-4">
                <UserCheck className="size-6" />
              </div>
              <h4 className="font-serif text-lg text-white mb-2" {...cp('socialResponsibilityPageConfig.customersTitle')}>{t(c.customersTitle)}</h4>
              <p className="text-white/70 text-sm mb-4" {...cp('socialResponsibilityPageConfig.customersBody')}>{t(c.customersBody)}</p>
              <p className="text-white/70 text-sm" {...cp('socialResponsibilityPageConfig.accessibilityBody')}>{t(c.accessibilityBody)}</p>
            </div>
          </div>

          <h3 className="font-serif text-xl text-white mb-6" {...cp('socialResponsibilityPageConfig.offerTitle')}>{t(c.offerTitle)}</h3>
          <div className="space-y-6 mb-16">
            {offerItems.map((item, i) => {
              const Icon = offerIcons[i] ?? Heart;
              return (
                <div key={i} className="flex gap-4 p-6 rounded-lg border border-white/10 bg-gray-900/30">
                  <div className="size-10 shrink-0 rounded-lg bg-[var(--gold-500)]/20 flex items-center justify-center text-[var(--gold-400)]">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-white mb-2">{t(item.title)}</h4>
                    <p className="text-white/70 text-sm">{t(item.body)}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="card-hover rounded-lg border border-[var(--gold-500)]/20 bg-gray-900/30 p-8 text-center hover:border-[var(--gold-500)]/40">
            <div className="inline-flex items-center justify-center size-12 rounded-full bg-[var(--gold-500)]/20 text-[var(--gold-400)] mb-4">
              <HelpCircle className="size-6" />
            </div>
            <h3 className="font-serif text-xl text-white mb-4" {...cp('socialResponsibilityPageConfig.whyTitle')}>{t(c.whyTitle)}</h3>
            <p className="text-white/80 max-w-xl mx-auto" {...cp('socialResponsibilityPageConfig.whyBody')}>{t(c.whyBody)}</p>
          </div>
        </div>
      </section>
    </>
  );
}

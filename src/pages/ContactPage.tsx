import { PageHero } from '@/components/PageHero';
import { ContactForm } from '@/components/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useHayc } from '@/hayc/config-context';

export function ContactPage() {
  const { t, config, cp } = useHayc();
  const c = config.contactPageConfig;

  return (
    <>
      <PageHero title={t(c.pageTitle)} titleConfigPath="contactPageConfig.pageTitle" breadcrumbs={[{ label: t(c.breadcrumb), configPath: 'contactPageConfig.breadcrumb' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl text-white mb-6" {...cp('contactPageConfig.getInTouch')}>{t(c.getInTouch)}</h2>
              <p className="text-white/70 mb-8" {...cp('contactPageConfig.intro')}>{t(c.intro)}</p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin className="size-5 shrink-0 text-[var(--gold-500)] mt-0.5" />
                  <div>
                    <p className="font-medium text-white" {...cp('contactPageConfig.address')}>{t(c.address)}</p>
                    <p className="text-white/70" {...cp('contactPageConfig.addressValue')}>{t(c.addressValue)}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="size-5 shrink-0 text-[var(--gold-500)] mt-0.5" />
                  <div>
                    <p className="font-medium text-white" {...cp('contactPageConfig.phone')}>{t(c.phone)}</p>
                    <p className="text-white/70">{c.phoneValue}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="size-5 shrink-0 text-[var(--gold-500)] mt-0.5" />
                  <div>
                    <p className="font-medium text-white" {...cp('contactPageConfig.email')}>{t(c.email)}</p>
                    <p className="text-white/70">{c.emailValue}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-white/10 p-8 bg-gray-900/50">
              <h3 className="font-serif text-xl text-white mb-6" {...cp('contactPageConfig.sendMessage')}>{t(c.sendMessage)}</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

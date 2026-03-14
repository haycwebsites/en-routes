import { PageHero } from '@/components/PageHero';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useHayc } from '@/hayc/config-context';

export function FaqPage() {
  const { t, config, cp } = useHayc();
  const c = config.faqConfig;

  return (
    <>
      <PageHero title={t(c.pageTitle)} titleConfigPath="faqConfig.pageTitle" breadcrumbs={[{ label: t(c.breadcrumb), configPath: 'faqConfig.breadcrumb' }]} />
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <Accordion type="single" collapsible className="space-y-2">
            {c.items.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-white/10 rounded-lg px-4 bg-gray-900/50"
              >
                <AccordionTrigger className="text-left text-white hover:text-[var(--gold-400)] hover:no-underline py-6" {...cp(`faqConfig.items.${i}.question`)}>
                  {t(faq.question)}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-6" {...cp(`faqConfig.items.${i}.answer`)}>
                  {t(faq.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}

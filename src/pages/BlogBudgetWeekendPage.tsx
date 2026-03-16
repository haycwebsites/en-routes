import { PageHero } from '@/components/PageHero';
import { Link } from 'react-router-dom';
import { useHayc } from '@/hayc/config-context';

const FALLBACK_BUDGET_IMAGE =
  'https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1200&q=80';

export function BlogBudgetWeekendPage() {
  const { img, config, cp } = useHayc();
  const blogConfig = config.blogPageConfig;
  const post = blogConfig.items[1];

  const heroImage = img(post.image ?? FALLBACK_BUDGET_IMAGE);

  return (
    <>
      <PageHero
        title={post.title}
        titleConfigPath="blogPageConfig.items.1.title"
        breadcrumbs={[
          { label: blogConfig.pageTitle, to: '/blog', configPath: 'blogPageConfig.pageTitle' },
          { label: post.title },
        ]}
        backgroundImage={heroImage}
      />
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="flex gap-4 text-sm text-white/60 mb-8">
            <span {...cp('blogPageConfig.items.1.category')}>{post.category}</span>
            <span {...cp('blogPageConfig.items.1.date')}>{post.date}</span>
          </div>
          <img
            src={heroImage}
            alt=""
            className="aspect-video w-full rounded-lg object-cover object-center bg-gray-700 mb-8"
          />
          <div className="prose prose-invert max-w-none text-white/70">
            <p className="mb-4">
              Weekend getaways are the perfect opportunity to escape the routine and recharge. However, the
              cost of traveling can sometimes make us hesitate. The good news is that with a little planning,
              you can enjoy a memorable weekend trip without spending too much.
            </p>
            <p className="mb-4">
              The first step is proper planning. Choosing destinations close to your city or places that are
              easy and quick to reach can significantly reduce transportation costs. When it comes to
              accommodation, there are many options that combine comfort and affordability, such as small
              hotels, guesthouses, or budget-friendly stays that still offer a pleasant experience.
            </p>
            <p className="mb-4">
              Food is another area where you can easily save money. Organizing a simple picnic or preparing a
              few easy meals can help keep your expenses under control. At the same time, try to focus on
              activities that are free or low-cost. Nature walks, hiking trails, exploring traditional
              villages, or visiting historical landmarks can be just as enjoyable as more expensive
              attractions.
            </p>
            <p className="mb-4">
              Another useful tip is to avoid peak travel periods. Traveling during less busy days or hours
              often means lower prices and a more relaxed atmosphere. You’ll also get to experience
              destinations without large crowds, which can make your trip even more enjoyable.
            </p>
            <p className="mb-8">
              Finally, keep your schedule flexible. Leave room for spontaneous stops and small discoveries
              along the way. Sometimes the best moments of a trip are the ones you didn’t plan. With the right
              approach, a budget-friendly weekend can turn into a rich and memorable experience—without
              putting pressure on your wallet. ✈️🌿
            </p>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-[var(--gold-400)] hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </section>
    </>
  );
}


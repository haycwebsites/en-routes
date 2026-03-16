import { PageHero } from '@/components/PageHero';
import { Link } from 'react-router-dom';
import { useHayc } from '@/hayc/config-context';

const FALLBACK_RELAXED_IMAGE =
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80';

export function BlogRelaxedTripPage() {
  const { img, config, cp } = useHayc();
  const blogConfig = config.blogPageConfig;
  const post = blogConfig.items[4];

  const heroImage = img(post.image ?? FALLBACK_RELAXED_IMAGE);

  return (
    <>
      <PageHero
        title={post.title}
        titleConfigPath="blogPageConfig.items.4.title"
        breadcrumbs={[
          { label: blogConfig.pageTitle, to: '/blog', configPath: 'blogPageConfig.pageTitle' },
          { label: post.title },
        ]}
        backgroundImage={heroImage}
      />
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="flex gap-4 text-sm text-white/60 mb-8">
            <span {...cp('blogPageConfig.items.4.category')}>{post.category}</span>
            <span {...cp('blogPageConfig.items.4.date')}>{post.date}</span>
          </div>
          <img
            src={heroImage}
            alt=""
            className="aspect-video w-full rounded-lg object-cover object-center bg-gray-700 mb-8"
          />
          <div className="prose prose-invert max-w-none text-white/70">
            <p className="mb-4">
              Spending time with friends or family on a short trip is one of the best ways to recharge and
              create lasting memories. A relaxed getaway doesn’t need a strict schedule or complicated
              planning. Instead, it’s about enjoying simple activities, good company, and a comfortable
              environment that allows everyone to unwind.
            </p>
            <p className="mb-4">
              One great idea is to plan a countryside escape. Staying in a quiet village or a
              nature-surrounded location gives everyone the chance to disconnect from daily stress. Morning
              walks, slow breakfasts, and peaceful afternoons outdoors can create the perfect rhythm for a
              relaxing weekend.
            </p>
            <p className="mb-4">
              Another enjoyable option is visiting a coastal destination. Beaches and seaside towns naturally
              encourage a slower pace. You can spend the day swimming, walking along the shore, or simply
              sitting at a seaside café while watching the waves. Even a short coastal trip can feel like a
              refreshing break.
            </p>
            <p className="mb-4">
              Food can also be a central part of the experience. Exploring local restaurants, cooking together,
              or organizing a simple picnic outdoors can turn meals into memorable moments. Sharing food and
              conversation often becomes one of the highlights of a relaxed trip.
            </p>
            <p className="mb-4">
              For those who enjoy light activities, gentle outdoor experiences such as short hikes, cycling
              through scenic routes, or visiting small villages can add variety without making the trip feel
              rushed. The key is to keep the schedule flexible and enjoyable for everyone.
            </p>
            <p className="mb-8">
              Ultimately, a relaxed trip is about quality time rather than busy itineraries. It’s the laughter
              during a shared meal, the quiet moments in nature, and the spontaneous discoveries along the way
              that make the experience truly special. Taking time to slow down together can make even a short
              trip feel meaningful and refreshing. 🌿✨
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


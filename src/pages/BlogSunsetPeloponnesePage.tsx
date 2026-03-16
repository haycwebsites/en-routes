import { PageHero } from '@/components/PageHero';
import { Link } from 'react-router-dom';
import { useHayc } from '@/hayc/config-context';

const FALLBACK_SUNSET_IMAGE =
  'https://images.unsplash.com/photo-1501975558162-0be7b8ca95ea?w=1200&q=80';

export function BlogSunsetPeloponnesePage() {
  const { img, config, cp } = useHayc();
  const blogConfig = config.blogPageConfig;
  const post = blogConfig.items[2];

  const heroImage = img(post.image ?? FALLBACK_SUNSET_IMAGE);

  return (
    <>
      <PageHero
        title={post.title}
        titleConfigPath="blogPageConfig.items.2.title"
        breadcrumbs={[
          { label: blogConfig.pageTitle, to: '/blog', configPath: 'blogPageConfig.pageTitle' },
          { label: post.title },
        ]}
        backgroundImage={heroImage}
      />
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="flex gap-4 text-sm text-white/60 mb-8">
            <span {...cp('blogPageConfig.items.2.category')}>{post.category}</span>
            <span {...cp('blogPageConfig.items.2.date')}>{post.date}</span>
          </div>
          <img
            src={heroImage}
            alt=""
            className="aspect-video w-full rounded-lg object-cover object-center bg-gray-700 mb-8"
          />
          <div className="prose prose-invert max-w-none text-white/70">
            <p className="mb-4">
              Watching the sunset is one of the simplest yet most magical travel experiences. In the
              Peloponnese, the landscape offers countless places where the sky transforms into a palette of
              warm colors as the sun slowly disappears behind the horizon. From coastal viewpoints to historic
              castles and quiet beaches, the region provides unforgettable spots to end the day.
            </p>
            <p className="mb-4">
              One of the most memorable places to enjoy the sunset is along the western coastline. The view
              over the Ionian Sea creates the perfect setting as the sun reflects on the water and paints the
              sky in shades of orange, pink, and gold. Beaches and seaside towns offer relaxed atmospheres
              where visitors can sit by the shore and watch the light fade into the sea.
            </p>
            <p className="mb-4">
              Hilltop villages and historic castles are also among the most beautiful sunset locations.
              Standing above the surrounding landscape, they offer panoramic views that stretch across
              mountains, valleys, and the coastline. As the sunlight softens, the scenery becomes even more
              dramatic, creating a peaceful and romantic atmosphere.
            </p>
            <p className="mb-4">
              Nature lovers can also find incredible sunset moments in quieter locations such as cliffs, hidden
              coves, or scenic hiking paths. These places often provide a more intimate experience, where the
              only sounds are the wind and the waves below.
            </p>
            <p className="mb-4">
              To fully enjoy the moment, it’s best to arrive a little before sunset. This gives you time to
              relax, take in the surroundings, and watch the gradual change of light across the landscape. A
              camera can capture the colors of the sky, but the real beauty is in experiencing the moment
              itself.
            </p>
            <p className="mb-8">
              In the Peloponnese, sunsets are more than just a daily event. They are a reminder to slow down,
              appreciate nature, and end the day with a view that stays with you long after the sun has set. 🌅
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


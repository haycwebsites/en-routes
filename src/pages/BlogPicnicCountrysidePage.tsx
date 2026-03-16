import { PageHero } from '@/components/PageHero';
import { Link } from 'react-router-dom';
import { useHayc } from '@/hayc/config-context';

const FALLBACK_PICNIC_IMAGE =
  'https://images.unsplash.com/photo-1598966734799-cab5c1c9720c?w=1200&q=80';

export function BlogPicnicCountrysidePage() {
  const { img, config, cp } = useHayc();
  const blogConfig = config.blogPageConfig;
  const post = blogConfig.items[3];

  const heroImage = img(post.image ?? FALLBACK_PICNIC_IMAGE);

  return (
    <>
      <PageHero
        title={post.title}
        titleConfigPath="blogPageConfig.items.3.title"
        breadcrumbs={[
          { label: blogConfig.pageTitle, to: '/blog', configPath: 'blogPageConfig.pageTitle' },
          { label: post.title },
        ]}
        backgroundImage={heroImage}
      />
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="flex gap-4 text-sm text-white/60 mb-8">
            <span {...cp('blogPageConfig.items.3.category')}>{post.category}</span>
            <span {...cp('blogPageConfig.items.3.date')}>{post.date}</span>
          </div>
          <img
            src={heroImage}
            alt=""
            className="aspect-video w-full rounded-lg object-cover object-center bg-gray-700 mb-8"
          />
          <div className="prose prose-invert max-w-none text-white/70">
            <p className="mb-4">
              A picnic in the Greek countryside is one of the simplest and most enjoyable ways to experience
              nature. Surrounded by scenic landscapes, fresh air, and peaceful surroundings, it offers the
              perfect escape from busy city life. Whether you are traveling with friends, family, or as a
              couple, a well-chosen picnic spot can turn a simple meal into a memorable outdoor experience.
            </p>
            <p className="mb-4">
              One of the most popular places for a picnic is near rivers or lakes. The gentle sound of flowing
              water creates a relaxing atmosphere, while the surrounding greenery provides shade and cool
              temperatures—especially during warm summer days. These locations are ideal for long, leisurely
              meals and quiet moments in nature.
            </p>
            <p className="mb-4">
              Mountain areas and forest clearings are also wonderful picnic destinations. Tall trees offer
              natural shade, and the fresh mountain air makes the experience even more refreshing. Many hiking
              routes in the countryside lead to open viewpoints where you can stop, rest, and enjoy a meal
              while admiring the landscape stretching out below.
            </p>
            <p className="mb-4">
              Olive groves and rural fields provide another unique setting. These traditional landscapes reflect
              the authentic character of the Greek countryside and offer a peaceful environment far from
              crowded tourist areas. Sitting under an olive tree while enjoying simple local foods can feel
              like a truly authentic Greek experience.
            </p>
            <p className="mb-4">
              Of course, preparation is key to a successful picnic. Bring a comfortable blanket, enough water,
              and easy-to-carry foods such as sandwiches, fresh fruits, salads, and local snacks. Choosing
              reusable containers and keeping the area clean also helps preserve the beauty of these natural
              places.
            </p>
            <p className="mb-8">
              A countryside picnic is more than just eating outdoors. It is a chance to slow down, connect with
              nature, and share simple moments with the people around you. In Greece, where nature and
              tradition meet so beautifully, a picnic can easily become one of the most relaxing highlights of
              any trip. 🌿🧺
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


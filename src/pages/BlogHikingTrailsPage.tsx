import { PageHero } from '@/components/PageHero';
import { Link } from 'react-router-dom';
import { useHayc } from '@/hayc/config-context';

const FALLBACK_HIKING_IMAGE =
  'https://images.unsplash.com/photo-1526481280695-3c687fd543c0?w=1200&q=80';

export function BlogHikingTrailsPage() {
  const { img, config, cp } = useHayc();
  const blogConfig = config.blogPageConfig;
  const post = blogConfig.items[5];

  const heroImage = img(post.image ?? FALLBACK_HIKING_IMAGE);

  return (
    <>
      <PageHero
        title={post.title}
        titleConfigPath="blogPageConfig.items.5.title"
        breadcrumbs={[
          { label: blogConfig.pageTitle, to: '/blog', configPath: 'blogPageConfig.pageTitle' },
          { label: post.title },
        ]}
        backgroundImage={heroImage}
      />
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="flex gap-4 text-sm text-white/60 mb-8">
            <span {...cp('blogPageConfig.items.5.category')}>{post.category}</span>
            <span {...cp('blogPageConfig.items.5.date')}>{post.date}</span>
          </div>
          <img
            src={heroImage}
            alt=""
            className="aspect-video w-full rounded-lg object-cover object-center bg-gray-700 mb-8"
          />
          <div className="prose prose-invert max-w-none text-white/70">
            <p className="mb-4">
              The Peloponnese is one of the most rewarding regions in Greece for hiking. With dramatic
              mountains, deep gorges, traditional villages, and ancient historical sites, the peninsula offers
              trails for every type of explorer. Whether you’re looking for an easy nature walk or a multi-day
              adventure, these unique hiking routes reveal the wild beauty and rich history of the area.
            </p>
            <p className="mb-2 font-semibold">1. Menalon Trail (Arcadia)</p>
            <p className="mb-4">
              The Menalon Trail is one of the most famous hiking routes in Greece. Stretching about 75 km
              through the Arcadian mountains, it connects historic villages such as Stemnitsa, Dimitsana, and
              Lagkadia while passing through forests, river valleys, and the impressive Lousios Gorge.
            </p>
            <p className="mb-2 font-semibold">2. Lousios Gorge Trail</p>
            <p className="mb-4">
              Often considered one of the most beautiful hikes in the Peloponnese, this trail runs through a
              dramatic gorge carved by the Lousios River. Along the route, hikers encounter old monasteries
              built into cliffs and breathtaking views of the surrounding mountains.
            </p>
            <p className="mb-2 font-semibold">3. Vyros Gorge Trail (Taygetus Mountains)</p>
            <p className="mb-4">
              Located on the Mani Peninsula, the Vyros Gorge trail follows an ancient route from Mount Taygetus
              down toward the seaside town of Kardamyli. The deep gorge landscape and nearby monasteries make
              this hike both scenic and culturally interesting.
            </p>
            <p className="mb-2 font-semibold">4. Abeliona to the Temple of Apollo Epicurius</p>
            <p className="mb-4">
              This historic trail connects the village of Abeliona with the UNESCO-listed Temple of Apollo
              Epicurius. The path winds through chestnut forests and mountain landscapes, offering a journey
              through both nature and ancient history.
            </p>
            <p className="mb-2 font-semibold">5. Lepida Gorge and Waterfalls (Arcadia)</p>
            <p className="mb-4">
              A shorter but spectacular hike leads through Lepida Gorge, known for its impressive waterfalls and
              natural pools. The area sits on Mount Parnon and is especially beautiful during spring when water
              flows strongly through the gorge.
            </p>
            <p className="mb-2 font-semibold">6. Path of Persephone (Argolida)</p>
            <p className="mb-4">
              Inspired by Greek mythology, this trail runs through picturesque landscapes in the Argolida
              region. It passes through the impressive Katafiki Gorge and charming villages, creating a route
              that blends nature with local culture.
            </p>
            <p className="mb-2 font-semibold">7. Kastor Gorge Trail (North Taygetus)</p>
            <p className="mb-4">
              This gentle trail follows the Kastora River through a lush green gorge. It’s ideal for beginners
              or families who want a short but beautiful hike surrounded by forests and streams.
            </p>
            <p className="mb-2 font-semibold">8. Lake Doxa and Mount Cyllene Trails</p>
            <p className="mb-4">
              Around Lake Doxa in Corinthia, hikers can explore alpine landscapes, forests, and panoramic
              viewpoints of Mount Cyllene. The combination of mountain scenery and the picturesque lake makes it
              one of the most photogenic hiking areas in the Peloponnese.
            </p>
            <p className="mb-2 font-semibold">9. Foloi Oak Forest Trails</p>
            <p className="mb-4">
              One of the most unique landscapes in Greece, the Foloi Forest is a rare oak forest that feels
              almost magical. The trails here are relatively easy and perfect for peaceful walks through shaded
              woodland.
            </p>
            <p className="mb-2 font-semibold">10. Ancient Asini to Profitis Ilias Trail</p>
            <p className="mb-4">
              This coastal hike combines archaeology and stunning sea views. Starting near the ruins of Ancient
              Asini, the trail climbs toward the chapel of Profitis Ilias, offering spectacular views of the
              Argolic Gulf along the way.
            </p>
            <p className="mb-8">
              The Peloponnese is a paradise for hikers who want variety. From ancient footpaths and deep gorges
              to coastal trails and mountain adventures, every route reveals a different side of the region.
              Whether you explore a short scenic walk or a multi-day trail, hiking here offers a powerful
              connection to both nature and Greece’s rich history. 🥾🌄
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


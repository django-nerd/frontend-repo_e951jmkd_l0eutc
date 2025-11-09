export default function BehindScenes() {
  const items = [
    {
      id: 'b1',
      title: 'Maura — Dari Brief ke Walk Cycle',
      cover: '/project1_proc_1.webp',
      points: [
        'Brief: karakter remaja dengan kepribadian ceria, langkah ringan.',
        'Tantangan: menjaga weight shift agar terasa natural.',
        'Solusi: reference video + breakdown pose key dan in-between terukur.',
      ],
      techniques: ['Timing chart', 'Ease in-out', 'Arc & overlap', 'Onion skin'],
      gallery: ['/project1_proc_1.webp', '/project1_proc_2.webp', '/project1_thumb.webp'],
    },
    {
      id: 'b2',
      title: 'Logo Ident — Tempo & Readibility',
      cover: '/project2_proc_1.webp',
      points: [
        'Brief: bumper 8 detik untuk channel teknologi.',
        'Tantangan: menjaga logo tetap terbaca saat transisi cepat.',
        'Solusi: gunakan hold strategis dan motion blur halus.',
      ],
      techniques: ['Graph editor', 'Motion blur', 'Hold tactic', 'Anticipation'],
      gallery: ['/project2_proc_1.webp', '/project2_thumb.webp', '/project2_thumb.webp'],
    },
    {
      id: 'b3',
      title: 'Silent Scene — Emosi Tanpa Dialog',
      cover: '/project3_proc_1.webp',
      points: [
        'Brief: adegan pendek menyampaikan rindu tanpa kata-kata.',
        'Tantangan: menyampaikan emosi lewat gesture & staging.',
        'Solusi: storyboard ketat, pose kuat, dan ritme napas karakter.',
      ],
      techniques: ['Staging', 'Silhouette clarity', 'Acting beats', 'Cinematic timing'],
      gallery: ['/project3_proc_1.webp', '/project3_thumb.webp', '/project3_thumb.webp'],
    },
  ];

  return (
    <section id="bts" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B2545]">Behind the Scenes</h2>
          <p className="text-[#0D1321] opacity-80 mt-2 max-w-2xl">
            Cuplikan proses: dari brief, tantangan, hingga solusi dan teknik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <article key={item.id} className="bg-[#F7F8FA] rounded-lg overflow-hidden shadow-sm">
              <img
                src={item.cover}
                alt={`Gambar proses: ${item.title}`}
                loading="lazy"
                className="w-full aspect-video object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-[#0D1321]">{item.title}</h3>
                <ul className="mt-3 list-disc pl-5 text-sm text-[#0D1321]/90 space-y-1">
                  {item.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
                <div className="mt-3">
                  <p className="text-xs uppercase tracking-wide text-[#0B2545] font-semibold">Teknik</p>
                  <ul className="mt-1 flex flex-wrap gap-2">
                    {item.techniques.map((t) => (
                      <li key={t} className="text-xs px-2 py-1 rounded bg-white border border-[#0B2545]/10 text-[#0B2545]">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3 flex gap-2 overflow-x-auto">
                  {item.gallery.map((g, i) => (
                    <img key={`${g}-${i}`} src={g} alt={`Proses ${i + 1}`} loading="lazy" className="h-20 rounded object-cover" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

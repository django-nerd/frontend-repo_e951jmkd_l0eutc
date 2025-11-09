export default function BehindTheScenes() {
  const posts = [
    {
      id: 'b1',
      title: 'Maura: Dari Sketsa ke Walk Cycle',
      images: ['/project1_proc_1.webp', '/project1_proc_2.webp', '/project1_thumb.webp'],
      points: [
        'Brief: buat loop 12 frame yang menonjolkan weight dan timing.',
        'Tantangan: menjaga konsistensi proporsi dan offset tangan-kaki.',
        'Solusi: breakdown key poses → in-between dengan arc yang jelas.',
        'Teknik: onion-skin, spacing chart, dan ease in/out halus.',
      ],
    },
    {
      id: 'b2',
      title: 'Logo Ident: Ritme & Tipografi',
      images: ['/project2_proc_1.webp', '/project2_thumb.webp', '/project2_thumb.webp'],
      points: [
        'Brief: ident cepat < 10 detik untuk brand fiktif.',
        'Tantangan: sinkronisasi tipografi dengan motion grid.',
        'Solusi: gunakan graph editor untuk mengunci ritme.',
        'Teknik: motion blur, track matte, dan value graph easing.',
      ],
    },
    {
      id: 'b3',
      title: 'Short Story: Storyboard ke Final Cut',
      images: ['/project3_proc_1.webp', '/project3_thumb.webp', '/project3_thumb.webp'],
      points: [
        'Brief: cerita slice-of-life berdurasi < 30 detik.',
        'Tantangan: pacing antar adegan agar emosi terbaca.',
        'Solusi: buat animatic dengan temp music sebagai panduan.',
        'Teknik: staging, squash & stretch subtil, dan match cut.',
      ],
    },
  ];

  return (
    <section id="bts" className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B2545]">Behind the Scenes</h2>
        <p className="text-sm md:text-base text-[#0D1321]/70 mt-2">Proses singkat: dari brief, tantangan, hingga solusi dan teknik.</p>

        <div className="mt-8 grid gap-6 md:gap-6 grid-cols-1 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.id} className="bg-[#F7F8FA] border border-slate-200 rounded-xl overflow-hidden">
              <div className="grid grid-cols-3 gap-0">
                {p.images.map((img, i) => (
                  <img key={i} src={img} alt={`${p.title} gambar proses ${i + 1}`} loading="lazy" className="w-full h-24 object-cover" />
                ))}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#0B2545]">{p.title}</h3>
                <ul className="mt-3 list-disc list-inside text-sm text-[#0D1321]/80 space-y-1">
                  {p.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

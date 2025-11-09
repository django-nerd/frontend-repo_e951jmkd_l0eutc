import { useEffect, useRef, useState } from 'react';

function ProgressiveImage({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className || ''}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition duration-500 ${loaded ? 'blur-0' : 'blur-sm'}`}
      />
    </div>
  );
}

function Modal({ open, onClose, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    if (open) {
      const prev = document.activeElement;
      dialogRef.current?.focus();
      return () => prev?.focus();
    }
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute inset-x-0 bottom-0 md:inset-0 md:mx-auto md:my-10 max-w-4xl bg-white rounded-t-2xl md:rounded-2xl shadow-xl transform transition-all duration-300 ease-out md:flex md:flex-col overflow-hidden">
        <button
          ref={dialogRef}
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/90 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B6B]"
          aria-label="Tutup modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="max-h-[85vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

function BeforeAfter({ before, after, altBefore, altAfter }) {
  const [pos, setPos] = useState(50);
  const trackRef = useRef(null);

  const onMove = (e) => {
    const rect = trackRef.current.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    setPos(Math.max(0, Math.min(100, (x / rect.width) * 100)));
  };

  return (
    <div
      ref={trackRef}
      className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-200 select-none"
      onMouseMove={onMove}
      onTouchMove={onMove}
    >
      <img src={after} alt={altAfter} className="absolute inset-0 w-full h-full object-cover" />
      <img src={before} alt={altBefore} className="absolute inset-0 w-full h-full object-cover" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="w-0.5 h-full bg-white shadow" />
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow border border-slate-300" />
      </div>
    </div>
  );
}

export default function Projects({ onOpenContact }) {
  const [active, setActive] = useState(null);

  const projects = [
    {
      id: 'p1',
      title: 'Maura — Walk Cycle Study',
      tag: ['character'],
      duration: '00:12',
      thumb: '/project1_thumb.webp',
      video: '/project1_maura_reel.mp4',
      role: 'Animator',
      tools: 'Toon Boom Harmony, Photoshop',
      summary:
        'Studi walk cycle 2D untuk karakter Maura. Fokus pada weight, timing, dan personality agar gerak terasa hidup dan ekspresif.',
      process: ['/project1_proc_1.webp', '/project1_proc_2.webp'],
      beforeAfter: {
        before: '/project1_proc_1.webp',
        after: '/project1_thumb.webp',
      },
      reel: null,
    },
    {
      id: 'p2',
      title: 'Logo Motion Ident',
      tag: ['logo', 'motion'],
      duration: '00:08',
      thumb: '/project2_thumb.webp',
      video: '/project2_logo_motion.mp4',
      role: 'Animator',
      tools: 'After Effects, Illustrator',
      summary:
        'Eksplorasi ident opening untuk brand fiktif. Fokus pada timing tipografi, easing, dan ritme gerak yang clean.',
      process: ['/project2_proc_1.webp'],
      reel: null,
    },
    {
      id: 'p3',
      title: 'Short Story — "Morning Rush"',
      tag: ['character', 'motion'],
      duration: '00:28',
      thumb: '/project3_thumb.webp',
      video: '/project3_short_story.mp4',
      role: 'Animator / Storyboarder',
      tools: 'Adobe Animate, After Effects, Photoshop',
      summary:
        'Kisah pendek tentang rutinitas pagi yang kacau. Eksperimen staging, acting, dan transisi cut untuk memperkuat storytelling.',
      process: ['/project3_proc_1.webp'],
      reel: null,
    },
  ];

  return (
    <section id="projects" className="bg-[#F7F8FA] py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B2545]">Projects</h2>
            <p className="text-sm md:text-base text-[#0D1321]/70 mt-2">Tiga karya terpilih dengan fokus pada gerak dan cerita.</p>
          </div>
          <button onClick={onOpenContact} className="hidden md:inline-flex px-4 py-2 rounded-md bg-[#FF6B6B] text-white font-medium shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]">Request Commission</button>
        </div>

        <div className="mt-8 grid gap-6 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p)}
              className="text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B6B] rounded-lg overflow-hidden bg-white border border-slate-200 hover:shadow-lg transition"
              aria-label={`Buka detail proyek ${p.title}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <ProgressiveImage src={p.thumb} alt={`Thumbnail ${p.title}`} className="h-full" />
                <div className="absolute inset-0 rounded-none transform scale-100 group-hover:scale-[1.02] transition will-change-transform" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base md:text-lg font-semibold text-[#0B2545]">{p.title}</h3>
                  <span className="text-xs text-[#0D1321]/60">{p.duration}</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tag.map((t) => (
                    <span key={t} className="text-[11px] tracking-wide uppercase bg-[#0B2545]/5 text-[#0B2545] px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)}>
        {active && (
          <div className="p-5 md:p-6">
            <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
              <video
                className="w-full h-full object-contain bg-black"
                src={active.video}
                poster={active.thumb}
                controls
                preload="metadata"
                aria-label={`Video proyek ${active.title}`}
              />
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-[#0B2545]">{active.title}</h3>
                <p className="mt-2 text-[#0D1321]/80 text-sm md:text-base">{active.summary}</p>

                {active.beforeAfter && (
                  <div className="mt-5">
                    <p className="text-sm font-medium text-[#0B2545] mb-2">Before / After</p>
                    <BeforeAfter
                      before={active.beforeAfter.before}
                      after={active.beforeAfter.after}
                      altBefore={`Sketsa awal ${active.title}`}
                      altAfter={`Final render ${active.title}`}
                    />
                  </div>
                )}

                <div className="mt-5">
                  <p className="text-sm font-medium text-[#0B2545] mb-2">Galeri Proses</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {active.process?.map((img, i) => (
                      <img key={i} src={img} alt={`Proses ${active.title} #${i + 1}`} loading="lazy" className="w-full h-28 md:h-32 object-cover rounded" />
                    ))}
                  </div>
                </div>
              </div>

              <aside className="md:col-span-1 bg-[#F7F8FA] rounded-lg p-4 border border-slate-200">
                <dl className="text-sm">
                  <div className="flex justify-between py-1"><dt className="text-[#0D1321]/70">Peran</dt><dd className="font-medium text-[#0B2545]">{active.role}</dd></div>
                  <div className="flex justify-between py-1"><dt className="text-[#0D1321]/70">Tools</dt><dd className="font-medium text-[#0B2545]">{active.tools}</dd></div>
                </dl>
                <div className="mt-4 grid gap-2">
                  {active.reel && (
                    <a href={active.reel} className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-white border border-slate-300 text-[#0B2545] hover:bg-slate-50">Download Reel (PDF)</a>
                  )}
                  <button onClick={onOpenContact} className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#FF6B6B] text-white shadow hover:shadow-md">Pesan Komisi</button>
                </div>
              </aside>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

/* Hero section with autoplay muted looping video background */
export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full flex items-center justify-center bg-[#F7F8FA] overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero_loop.mp4"
        poster="/hero_poster.webp"
        autoPlay
        muted
        loop
        playsInline
        aria-label="Loop animasi hero sebagai latar"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/70 via-[#0B2545]/40 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">Gerak & Cerita — Animasi oleh Dafa</h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl opacity-95">
          Saya Dafa — animator & storyteller. Lihat bagaimana gerak menyampaikan emosi.
        </p>
        <p className="mt-1 text-sm sm:text-base opacity-90">
          Character animation, motion design, dan storytelling visual.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="bg-[#FF6B6B] text-white px-5 py-3 rounded-md shadow hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B6B]"
          >
            Lihat Proyek
          </a>
          <a
            href="#contact"
            className="bg-white/90 text-[#0B2545] px-5 py-3 rounded-md shadow hover:bg-white transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Pesan Komisi
          </a>
        </div>
      </div>
    </section>
  );
}

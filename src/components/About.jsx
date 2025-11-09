export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 bg-[#F7F8FA]">
      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3 items-start">
        <div className="md:col-span-1">
          <img src="/portrait.webp" alt="Potret Dafa Khadafi" className="w-40 h-40 rounded-full object-cover ring-4 ring-white shadow" loading="lazy" />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B2545]">About</h2>
          <p className="mt-3 text-[#0D1321]/80 leading-relaxed text-sm md:text-base max-w-3xl">
            Saya Dafa Khadafi, siswa jurusan Animasi yang gemar mengeksplorasi gerak, karakter, dan ritme visual. 
            Bagi saya, animasi adalah cara bercerita yang paling jujur: setiap frame menyimpan keputusan tentang emosi. 
            Di waktu luang, saya membuat studi kecil seperti walk cycle, logo ident, dan potongan cerita pendek untuk 
            menguji timing, spacing, dan staging. Saya terbuka untuk komisi, kolaborasi, dan kesempatan magang—
            tujuan saya sederhana: terus berkembang sambil membantu brand dan kreator menyampaikan cerita mereka.
          </p>

          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-[#0B2545]">Keahlian</h3>
              <ul className="mt-2 text-sm text-[#0D1321]/80 space-y-1">
                <li>Animating</li>
                <li>Storyboarding</li>
                <li>2D Rigging</li>
                <li>Motion Graphics</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#0B2545]">Software</h3>
              <ul className="mt-2 text-sm text-[#0D1321]/80 space-y-1">
                <li>Adobe Animate</li>
                <li>After Effects</li>
                <li>Photoshop</li>
                <li>Toon Boom Harmony</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

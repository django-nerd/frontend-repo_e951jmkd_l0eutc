export default function AboutContact() {
  return (
    <section id="about" className="bg-[#F7F8FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* About */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B2545]">Tentang Dafa</h2>
          <div className="mt-6 flex items-start gap-4">
            <img
              src="/portrait.webp"
              alt="Potret Dafa Khadafi"
              loading="lazy"
              className="w-24 h-24 rounded-full object-cover shadow"
            />
            <p className="text-[#0D1321] leading-relaxed">
              Saya Dafa Khadafi, siswa jurusan Animasi yang mencintai gerak, karakter, dan cerita. 
              Dalam setiap proyek, saya mengeksplorasi bagaimana timing, pose, dan staging bekerja 
              untuk menyampaikan emosi secara jujur. Ketika tidak mengutak-atik graph editor, saya 
              mengamati gesture manusia dan mempelajari film untuk memperkaya storytelling. 
              Fokus saya adalah karakter animation, motion design, dan scene building yang bersih 
              serta komunikatif. Saya terbuka untuk komisi, kolaborasi, dan kesempatan magang.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-[#0B2545]">Keahlian</p>
              <ul className="mt-2 space-y-1 text-[#0D1321]">
                <li>Animating</li>
                <li>Storyboarding</li>
                <li>2D Rigging</li>
                <li>Motion Graphics</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[#0B2545]">Software</p>
              <ul className="mt-2 space-y-1 text-[#0D1321]">
                <li>Toon Boom Harmony</li>
                <li>Adobe Animate</li>
                <li>After Effects</li>
                <li>Photoshop</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div id="contact">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B2545]">Kontak & Komisi</h2>
          <p className="mt-2 text-[#0D1321] opacity-80">
            Ingin memesan komisi atau berkolaborasi? Isi formulir di bawah atau kirim email langsung ke
            <a href="mailto:dafa@example.com" className="text-[#FF6B6B] underline ml-1">dafa@example.com</a>.
          </p>
          <form
            className="mt-6 bg-white p-4 sm:p-6 rounded-lg shadow space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const params = new URLSearchParams(data);
              window.location.href = `mailto:dafa@example.com?subject=${encodeURIComponent('New Inquiry — Dafa Khadafi')}&body=${encodeURIComponent(params.toString())}`;
            }}
          >
            <div>
              <label className="block text-sm font-medium text-[#0D1321]">Nama</label>
              <input name="nama" required className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0D1321]">Email</label>
              <input name="email" type="email" required className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0D1321]">Jenis Layanan</label>
              <select name="jenis" className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]">
                <option>Commission</option>
                <option>Collaboration</option>
                <option>Hire</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0D1321]">Pesan</label>
              <textarea name="pesan" rows="4" className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]" />
            </div>
            <div className="flex items-center gap-3">
              <button type="submit" className="bg-[#FF6B6B] text-white px-4 py-2 rounded-md shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]">
                Kirim
              </button>
              <a href="mailto:dafa@example.com" className="text-[#0B2545] underline">Mailto fallback</a>
            </div>
            <div className="pt-2 text-sm text-[#0D1321]/70">
              Ikuti saya: <a className="text-[#0B2545] underline" href="#" aria-label="Instagram Dafa">Instagram</a> ·{' '}
              <a className="text-[#0B2545] underline" href="#" aria-label="LinkedIn Dafa">LinkedIn</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

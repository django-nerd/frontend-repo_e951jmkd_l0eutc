import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    setStatus(`Terima kasih, ${name}! Pesan kamu sudah dicatat. Saya akan membalas secepatnya.`);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B2545]">Contact</h2>
            <p className="text-sm md:text-base text-[#0D1321]/70 mt-2">Form komisi dan kolaborasi. Atau kirim email ke <a href="mailto:dafa@example.com" className="underline decoration-[#FF6B6B] underline-offset-2">dafa@example.com</a>.</p>
          </div>
          <a href="mailto:dafa@example.com" className="hidden md:inline-flex px-4 py-2 rounded-md bg-[#FF6B6B] text-white font-medium shadow hover:shadow-md">Request Commission</a>
        </div>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2 bg-[#F7F8FA] p-6 rounded-xl border border-slate-200">
          <div className="grid gap-1">
            <label htmlFor="name" className="text-sm font-medium text-[#0B2545]">Nama</label>
            <input id="name" name="name" type="text" required className="px-3 py-2 rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]" placeholder="Nama lengkap" />
          </div>
          <div className="grid gap-1">
            <label htmlFor="email" className="text-sm font-medium text-[#0B2545]">Email</label>
            <input id="email" name="email" type="email" required className="px-3 py-2 rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]" placeholder="nama@domain.com" />
          </div>
          <div className="grid gap-1 md:col-span-2">
            <label htmlFor="service" className="text-sm font-medium text-[#0B2545]">Jenis Layanan</label>
            <select id="service" name="service" className="px-3 py-2 rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]">
              <option>Commission</option>
              <option>Collaboration</option>
              <option>Hire</option>
            </select>
          </div>
          <div className="grid gap-1 md:col-span-2">
            <label htmlFor="message" className="text-sm font-medium text-[#0B2545]">Pesan</label>
            <textarea id="message" name="message" rows="5" required className="px-3 py-2 rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]" placeholder="Ceritakan kebutuhan proyekmu..." />
          </div>
          <div className="md:col-span-2 flex items-center justify-between">
            <button type="submit" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-[#0B2545] text-white font-medium shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B6B]">Kirim</button>
            <div className="text-sm text-[#0D1321]/70">Follow: <a href="https://instagram.com" target="_blank" rel="noreferrer" className="underline decoration-[#FF6B6B] underline-offset-2">Instagram</a> · <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="underline decoration-[#FF6B6B] underline-offset-2">LinkedIn</a></div>
          </div>
        </form>

        {status && (
          <div role="status" className="mt-4 text-sm text-[#0D1321] bg-green-50 border border-green-200 px-4 py-3 rounded">{status}</div>
        )}
      </div>
    </section>
  );
}

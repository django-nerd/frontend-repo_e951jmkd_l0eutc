import { useEffect, useState } from 'react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Behind the Scenes', href: '#bts' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function HeaderNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onClickNav = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? 'bg-white/90 backdrop-blur shadow-sm' : 'bg-transparent'
      }`}
      aria-label="Navigasi utama"
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => onClickNav(e, '#home')}
          className="text-[#0B2545] font-semibold tracking-tight text-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] rounded"
          aria-label="Kembali ke bagian atas"
        >
          Dafa Khadafi
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm text-[#0D1321]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => onClickNav(e, l.href)}
                className="hover:text-[#0B2545] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] rounded px-1 py-1"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <a
            href="#contact"
            onClick={(e) => onClickNav(e, '#contact')}
            className="inline-flex items-center gap-2 bg-[#FF6B6B] text-white px-3 py-1.5 rounded-md shadow hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B6B]"
          >
            Komisi
          </a>
        </div>
      </nav>
    </header>
  );
}

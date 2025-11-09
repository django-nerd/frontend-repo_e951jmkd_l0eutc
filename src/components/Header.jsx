import { useEffect, useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItem = (href, label) => (
    <a
      key={href}
      href={href}
      className="px-3 py-2 text-sm font-medium text-[#0D1321] hover:text-[#0B2545] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B6B] rounded"
    >
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F7F8FA]/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B6B] rounded">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B]" aria-hidden />
          <span className="text-lg font-bold tracking-tight text-[#0B2545]">Dafa Khadafi</span>
        </a>

        <nav className="hidden lg:flex items-center" aria-label="Primary navigation">
          {navItem('#home', 'Home')}
          {navItem('#projects', 'Projects')}
          {navItem('#bts', 'Behind the Scenes')}
          {navItem('#about', 'About')}
          {navItem('#contact', 'Contact')}
        </nav>

        <button
          aria-label="Toggle navigation menu"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-300 text-[#0D1321] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B6B]"
          onClick={() => setOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-[#F7F8FA]">
          <nav className="mx-auto max-w-6xl px-4 py-2 grid gap-1" aria-label="Mobile navigation">
            <a href="#home" onClick={() => setOpen(false)} className="py-2 text-[#0D1321]">Home</a>
            <a href="#projects" onClick={() => setOpen(false)} className="py-2 text-[#0D1321]">Projects</a>
            <a href="#bts" onClick={() => setOpen(false)} className="py-2 text-[#0D1321]">Behind the Scenes</a>
            <a href="#about" onClick={() => setOpen(false)} className="py-2 text-[#0D1321]">About</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-2 text-[#0D1321]">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}

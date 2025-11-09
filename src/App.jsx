import { useEffect } from 'react';
import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import BehindScenes from './components/BehindScenes';
import AboutContact from './components/AboutContact';

function SEOEffect() {
  useEffect(() => {
    const title = 'Dafa Khadafi — Animation Showcase';
    const description = 'Portfolio animasi Dafa Khadafi — character animation, motion design, dan studi proses pembuatan karya.';
    const ogImage = `${window.location.origin}/hero_poster.webp`;

    document.title = title;

    const ensureMeta = (name, attr, value) => {
      let el = document.querySelector(`meta[${attr}='${name}']`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    ensureMeta('description', 'name', description);
    ensureMeta('og:title', 'property', title);
    ensureMeta('og:description', 'property', description);
    ensureMeta('og:image', 'property', ogImage);

    // Google Analytics slot (optional)
    const GA_ID = '{GA_MEASUREMENT_ID}';
    if (GA_ID && GA_ID !== '{GA_MEASUREMENT_ID}') {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script1);
      const script2 = document.createElement('script');
      script2.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_ID}');`;
      document.head.appendChild(script2);
    }
  }, []);
  return null;
}

function FooterBar() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2">
      <a
        href="#projects"
        className="bg-[#0B2545] text-white px-4 py-2 rounded-md shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
      >
        Lihat Proyek
      </a>
      <button
        onClick={() => alert('Preview siap. Klik tombol share browser untuk membagikan. Publikasi ke domain kustom akan diaktifkan saat Anda siap: {CUSTOM_DOMAIN}.')}
        className="bg-[#FF6B6B] text-white px-4 py-2 rounded-md shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Publish Preview
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-white text-[#0D1321]">
      <SEOEffect />
      <HeaderNav />
      <main>
        <Hero />
        <Projects />
        <BehindScenes />
        <AboutContact />
      </main>
      <FooterBar />
    </div>
  );
}

import { useEffect, useRef } from 'react';

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    function setHeight() {
      const h = headerRef.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty('--header-height', `${h}px`);
    }

    setHeight();
    window.addEventListener('resize', setHeight);

    const imgs = headerRef.current?.querySelectorAll('img') ?? [];
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener('load', setHeight);
    });

    const mo = new MutationObserver(setHeight);
    if (headerRef.current)
      mo.observe(headerRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
      });

    return () => {
      window.removeEventListener('resize', setHeight);
      imgs.forEach((img) => img.removeEventListener('load', setHeight));
      mo.disconnect();
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className='site-header fixed top-0 left-0 right-0 z-30 bg-white/80 backdrop-blur-sm border-b'
    >
      <div className='wrap mx-auto px-4 py-3 max-w-5xl flex items-center justify-between'>
        <div className='brand-row flex items-center'>
          <img
            src='/logo_1.png'
            alt='Rooted Homely Stays logo'
            className='logo rounded mx-2'
          />
          <div className='brand-block'>
            <h3 className='brand ml-3 text-lg font-semibold text-slate-800'>
              Rooted Homely Stays
            </h3>
            <div className='tagline text-xs text-slate-500'>
              Comfortable rental homes
            </div>
          </div>
        </div>

        <nav className='hidden sm:flex items-center space-x-6'>
          <a
            href='#services'
            className='text-sm text-slate-700 hover:text-teal-600 transition'
          >
            Services
          </a>
          <a
            href='#contact'
            className='text-sm text-slate-700 hover:text-teal-600 transition'
          >
            Contact
          </a>
          <a
            href='#book'
            className='ml-2 inline-block rounded-md bg-teal-600 text-white text-sm px-3 py-1 hover:bg-teal-700 transition'
          >
            Book
          </a>
        </nav>
      </div>

      <style jsx>{`
        .wrap {
          max-width: 900px;
        }
        .logo {
          width: 52px;
          height: 52px;
          object-fit: contain;
        }
        .brand {
          margin: 0;
        }
        .tagline {
          margin-top: 2px;
        }
        @media (max-width: 639px) {
          .site-header {
            position: sticky;
          }
        }
      `}</style>
    </header>
  );
}

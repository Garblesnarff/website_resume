import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/projects', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/creative', label: 'Creative' },
  { to: '/contact', label: 'Contact' },
];

export const Wordmark = ({ className = '' }: { className?: string }) => (
  <span className={`flex items-center gap-2.5 ${className}`}>
    <span aria-hidden="true" className="h-6 w-1.5 bg-sodium" />
    <span className="font-display text-[1.6rem] font-extrabold leading-none tracking-[0.01em]">Rob Hanson</span>
  </span>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overStory, setOverStory] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const story = document.getElementById('story');
      setOverStory(Boolean(story) && window.scrollY < (story?.offsetHeight ?? 0) - window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative font-ui text-[1.1rem] font-bold tracking-wide transition-colors ${
      isActive ? 'text-birch' : 'text-fog hover:text-birch'
    } after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:bg-sodium after:transition-all ${
      isActive ? 'after:w-full' : 'after:w-0'
    }`;

  return (
    <header
      className={`top-0 z-50 text-birch transition-[background-color,box-shadow] duration-500 ${
        isHome ? 'fixed inset-x-0' : 'grain sticky'
      } ${
        open
          ? 'bg-night'
          : isHome && overStory
            ? 'bg-gradient-to-b from-night/70 to-transparent'
            : scrolled || isHome
              ? 'bg-night/95 shadow-[0_1px_0_rgb(var(--night-line))] backdrop-blur'
              : 'bg-night'
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <Link to="/" aria-label="Rob Hanson, home">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className={linkClass}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 text-birch md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-night-line md:hidden">
          <ul className="wrap flex flex-col py-3">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `block py-3 font-display text-3xl font-extrabold ${isActive ? 'text-sodium' : 'text-birch'}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

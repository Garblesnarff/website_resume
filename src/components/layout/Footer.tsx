import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, Youtube } from 'lucide-react';
import { CONTACT } from '../../config';
import { Wordmark } from './Navbar';
import XLogo from '../icons/XLogo';

const socials = [
  { href: CONTACT.github, label: 'GitHub', icon: <Github size={20} aria-hidden="true" /> },
  { href: CONTACT.linkedin, label: 'LinkedIn', icon: <Linkedin size={20} aria-hidden="true" /> },
  { href: CONTACT.x, label: 'X', icon: <XLogo /> },
  { href: CONTACT.youtube, label: 'YouTube', icon: <Youtube size={20} aria-hidden="true" /> },
];

const Footer = () => {
  const { pathname } = useLocation();
  const year = new Date().getFullYear();
  const onContact = pathname === '/contact';

  return (
    <footer className="relative on-night grain bg-night text-birch">
      {!onContact && (
        <div className="wrap border-b border-night-line py-20 md:py-28">
          <h2 className="max-w-4xl text-5xl text-birch md:text-7xl">
            Need someone who can direct AI to ship real systems?
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href={`mailto:${CONTACT.email}`} className="btn btn-solid">
              <Mail size={18} aria-hidden="true" /> {CONTACT.email}
            </a>
            <Link to="/contact" className="font-ui text-lg font-bold text-fog underline-offset-4 hover:text-birch hover:underline">
              Other ways to reach me
            </Link>
          </div>
        </div>
      )}

      <div className="wrap flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <Link to="/" aria-label="Rob Hanson, home">
            <Wordmark />
          </Link>
          <p className="mt-3 text-[0.95rem] text-fog">Building the future, one prompt at a time.</p>
        </div>

        <ul className="flex items-center gap-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-[3px] text-fog transition-colors hover:bg-night-raised hover:text-sodium"
              >
                {s.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="wrap pb-10 text-sm text-fog/70">
        <p>&copy; {year} Rob Hanson. Built with AI agents, directed by a human.</p>
      </div>
    </footer>
  );
};

export default Footer;

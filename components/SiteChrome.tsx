'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

const primaryNav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact-us', label: 'Contact Us' }
] as const;

function isCurrent(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header className="site-header" data-scrolled={scrolled ? 'true' : 'false'}>
      <Link className="brand" href="/" aria-label={`${site.name} home`}>
        <Image src="/logo.svg" alt="" width={42} height={42} priority />
        <span>{site.name}</span>
      </Link>
      <nav aria-label="Primary navigation">
        {primaryNav.map((item) => {
          const active = isCurrent(pathname, item.href);
          return <Link key={item.href} href={item.href} className={active ? 'active' : undefined} aria-current={active ? 'page' : undefined}>{item.label}</Link>;
        })}
      </nav>
      <p className="header-attribution">Powered by StealthAgents</p>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div>
        <Link className="brand inverse" href="/">
          <Image src="/logo.svg" alt="" width={44} height={44} />
          <span>{site.name}</span>
        </Link>
        <p>Specialist remote staff for {site.audience}.</p>
        <p className="footer-attribution">Powered by StealthAgents</p>
      </div>
      <div className="footer-links">
        {primaryNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </div>
      <p className="copyright">© {new Date().getFullYear()} {site.name}</p>
    </footer>
  );
}

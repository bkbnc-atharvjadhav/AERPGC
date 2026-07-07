import { Link } from 'react-router-dom';
import { Zap, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'Platform', href: '/platform' },
    { label: 'Features', href: '/features' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Security', href: '/security' },
    { label: 'Roadmap', href: '/roadmap' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Leadership', href: '/team' },
    { label: 'Partners', href: '/partners' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press & Media', href: '/press' },
  ],
  Resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Brand Assets', href: '/brand' },
    { label: 'Media Kit', href: '/press' },
    { label: 'Accessibility', href: '/accessibility' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Disclaimer', href: '/terms' },
    { label: 'Sitemap', href: '/sitemap' },
  ],
};

const socialLinks = [
  { label: 'LinkedIn', href: '#', short: 'Li' },
  { label: 'Instagram', href: '#', short: 'Ig' },
  { label: 'YouTube', href: '#', short: 'Yt' },
  { label: 'GitHub', href: '#', short: 'Gh' },
  { label: 'X', href: '#', short: 'X' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-white relative overflow-hidden" role="contentinfo">
      {/* Subtle mesh gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-indigo-600/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-[17px] text-white">
                Campus<span className="text-blue-400">Connect</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-5">
              India's Digital Campus Experience Platform — connecting students, faculty, and administration on one intelligent platform.
            </p>

            <div className="space-y-2 mb-5">
              <a href="mailto:hello@campusconnect.in" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-400" />
                hello@campusconnect.in
              </a>
              <a href="tel:+918888888888" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-400" />
                +91 88888 88888
              </a>
              <div className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                Kalyan, Maharashtra, India
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ label, href, short }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all text-xs font-bold"
                >
                  {short}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © 2025 Campus Connect. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm text-center">
            Designed & Developed by{' '}
            <span className="text-slate-300">Department of Computer Science,</span>{' '}
            <span className="text-blue-400">B. K. Birla Night College</span>{' '}
            <span className="text-red-400">❤</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

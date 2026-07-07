import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import AnnouncementBar from './components/AnnouncementBar';

import HomePage from './pages/HomePage';
import PlatformPage from './pages/PlatformPage';
import SolutionsPage from './pages/SolutionsPage';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import BookDemoPage from './pages/BookDemoPage';
import SecurityPage from './pages/SecurityPage';
import PartnersPage from './pages/PartnersPage';
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FAQPage';
import RoadmapPage from './pages/RoadmapPage';
import PressPage from './pages/PressPage';
import BrandPage from './pages/BrandPage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/platform" element={<Layout><PlatformPage /></Layout>} />
        <Route path="/solutions" element={<Layout><SolutionsPage /></Layout>} />
        <Route path="/features" element={<Layout><FeaturesPage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/team" element={<Layout><TeamPage /></Layout>} />
        <Route path="/careers" element={<Layout><CareersPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/book-demo" element={<Layout><BookDemoPage /></Layout>} />
        <Route path="/security" element={<Layout><SecurityPage /></Layout>} />
        <Route path="/partners" element={<Layout><PartnersPage /></Layout>} />
        <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
        <Route path="/faq" element={<Layout><FAQPage /></Layout>} />
        <Route path="/roadmap" element={<Layout><RoadmapPage /></Layout>} />
        <Route path="/press" element={<Layout><PressPage /></Layout>} />
        <Route path="/brand" element={<Layout><BrandPage /></Layout>} />
        <Route path="/privacy" element={<Layout><LegalPage type="privacy" /></Layout>} />
        <Route path="/terms" element={<Layout><LegalPage type="terms" /></Layout>} />
        <Route path="/cookies" element={<Layout><LegalPage type="cookies" /></Layout>} />
        <Route path="/sitemap" element={<Layout><SitemapPage /></Layout>} />
        <Route path="/accessibility" element={<Layout><AccessibilityPage /></Layout>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// Simple inline pages for sitemap and accessibility
function SitemapPage() {
  const pages = [
    { section: 'Main', links: [{ label: 'Home', href: '/' }, { label: 'Platform', href: '/platform' }, { label: 'Features', href: '/features' }, { label: 'Solutions', href: '/solutions' }] },
    { section: 'Company', links: [{ label: 'About', href: '/about' }, { label: 'Team', href: '/team' }, { label: 'Careers', href: '/careers' }, { label: 'Partners', href: '/partners' }] },
    { section: 'Resources', links: [{ label: 'Blog', href: '/blog' }, { label: 'FAQ', href: '/faq' }, { label: 'Roadmap', href: '/roadmap' }, { label: 'Press & Media', href: '/press' }, { label: 'Brand Assets', href: '/brand' }] },
    { section: 'Legal', links: [{ label: 'Privacy Policy', href: '/privacy' }, { label: 'Terms of Service', href: '/terms' }, { label: 'Cookie Policy', href: '/cookies' }, { label: 'Accessibility', href: '/accessibility' }] },
    { section: 'Contact', links: [{ label: 'Contact Us', href: '/contact' }, { label: 'Book a Demo', href: '/book-demo' }, { label: 'Security', href: '/security' }] },
  ];

  return (
    <div className="pt-16 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-display text-4xl font-bold text-slate-900 mb-12">Sitemap</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {pages.map(({ section, links }) => (
            <div key={section}>
              <h2 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-widest text-slate-400">{section}</h2>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-blue-600 hover:text-blue-700 text-sm transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AccessibilityPage() {
  return (
    <div className="pt-16 py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-display text-4xl font-bold text-slate-900 mb-6">Accessibility Statement</h1>
        <p className="text-slate-400 text-sm mb-12">Last updated: January 2025</p>

        <div className="space-y-10">
          {[
            { title: 'Our Commitment', text: 'Campus Connect is committed to ensuring digital accessibility for people of all abilities. We continuously improve the user experience for everyone and apply relevant accessibility standards.' },
            { title: 'Conformance Status', text: 'We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible to people with disabilities.' },
            { title: 'Supported Technologies', text: 'Campus Connect is designed to be compatible with assistive technologies including screen readers (NVDA, JAWS, VoiceOver), keyboard navigation, and browser zoom. We use semantic HTML, ARIA labels, and focus management throughout the platform.' },
            { title: 'Known Limitations', text: 'We are actively working to improve accessibility across all pages. Some complex interactive components may have limited screen reader support. We are continuously testing and improving.' },
            { title: 'Feedback & Contact', text: 'We welcome feedback on accessibility. If you experience any barriers, please contact us at accessibility@campusconnect.in. We aim to respond within 2 business days.' },
          ].map(({ title, text }) => (
            <div key={title}>
              <h2 className="font-display text-xl font-bold text-slate-900 mb-3">{title}</h2>
              <p className="text-slate-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

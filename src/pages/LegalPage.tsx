import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'cookies';
}

const content = {
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'January 2025',
    sections: [
      { id: 'overview', title: 'Overview', content: 'Campus Connect ("we," "our," "us") is committed to protecting the privacy of students, faculty, staff, and all users of our platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Campus Connect platform.' },
      { id: 'data-collected', title: 'Information We Collect', content: 'We collect information you provide directly: name, email address, institution, role, and profile information. We also collect usage data such as pages visited, features used, and actions taken within the platform. Technical data includes IP address, browser type, device information, and access timestamps. We do not collect sensitive personal information beyond what is necessary for platform functionality.' },
      { id: 'usage', title: 'How We Use Your Information', content: 'We use collected information to: provide and improve the Campus Connect platform; send announcements, notifications, and updates relevant to your role; generate analytics and reports for institutional administrators; ensure platform security and prevent abuse; and communicate with you about your account and our services.' },
      { id: 'sharing', title: 'Information Sharing', content: 'We do not sell your personal information. We share information only with: your institution\'s authorized administrators; service providers who help us operate the platform (Supabase, Cloudflare) under strict data processing agreements; and legal authorities when required by law. We do not share data between institutions.' },
      { id: 'security', title: 'Data Security', content: 'We protect your data using: AES-256 encryption at rest; TLS 1.3 encryption in transit; Cloudflare edge security and DDoS protection; row-level security on our database; and role-based access controls. While we employ industry-standard security measures, no system is completely secure. We encourage users to use strong passwords and report any security concerns.' },
      { id: 'rights', title: 'Your Rights', content: 'You have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your account and associated data; export your data in a portable format; and opt out of non-essential communications. Contact us at privacy@campusconnect.in to exercise these rights.' },
      { id: 'cookies', title: 'Cookies', content: 'We use essential cookies for platform functionality (session management, authentication). We use analytics cookies to understand how the platform is used. You can control cookie preferences through your browser settings. See our Cookie Policy for full details.' },
      { id: 'contact', title: 'Contact', content: 'For privacy-related questions or to exercise your rights, contact us at: privacy@campusconnect.in. For general inquiries: hello@campusconnect.in.' },
    ],
  },
  terms: {
    title: 'Terms of Service',
    lastUpdated: 'January 2025',
    sections: [
      { id: 'acceptance', title: 'Acceptance of Terms', content: 'By accessing or using Campus Connect, you agree to be bound by these Terms of Service. If you are using Campus Connect on behalf of an institution, you represent that you have authority to bind that institution to these terms.' },
      { id: 'service', title: 'Description of Service', content: 'Campus Connect provides a Digital Campus Experience Platform that enables communication, collaboration, and information management for educational institutions. The platform includes modules for announcements, events, placements, attendance, clubs, and more.' },
      { id: 'accounts', title: 'User Accounts', content: 'Users must provide accurate information when creating accounts. Account access is granted based on institutional role assignments. You are responsible for maintaining the confidentiality of your credentials. Campus Connect may suspend accounts that violate these terms or institutional policies.' },
      { id: 'acceptable-use', title: 'Acceptable Use', content: 'You agree not to: post content that is false, misleading, offensive, or inappropriate; attempt to access accounts or data that is not yours; reverse engineer, copy, or distribute the platform; use the platform for commercial solicitation without permission; or violate applicable laws or regulations.' },
      { id: 'content', title: 'User Content', content: 'You retain ownership of content you post on Campus Connect. By posting content, you grant Campus Connect a license to display and distribute that content within the platform. Campus Connect may remove content that violates these terms or is inappropriate for the campus community.' },
      { id: 'institutional', title: 'Institutional Use', content: 'Institutions that subscribe to Campus Connect are responsible for managing user access and ensuring appropriate use within their campus. Institutional administrators have authority to moderate content and manage users within their institution.' },
      { id: 'termination', title: 'Termination', content: 'Campus Connect may terminate or suspend access for violations of these terms. Institutions may terminate their subscription with appropriate notice as specified in their service agreement. Upon termination, institutions may export their data for a defined period.' },
      { id: 'limitation', title: 'Limitation of Liability', content: 'Campus Connect is provided "as is." We are not liable for any indirect, incidental, or consequential damages arising from use of the platform. Our total liability is limited to the amount paid for the service in the preceding 12 months.' },
      { id: 'governing', title: 'Governing Law', content: 'These terms are governed by the laws of Maharashtra, India. Any disputes shall be resolved in courts located in Maharashtra, India.' },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    lastUpdated: 'January 2025',
    sections: [
      { id: 'what', title: 'What Are Cookies', content: 'Cookies are small text files placed on your device when you visit Campus Connect. They help us provide a better experience by remembering your preferences and understanding how you use the platform.' },
      { id: 'essential', title: 'Essential Cookies', content: 'These cookies are necessary for Campus Connect to function. They include: session cookies for maintaining your login; CSRF protection tokens; and security cookies. You cannot disable essential cookies without affecting platform functionality.' },
      { id: 'analytics', title: 'Analytics Cookies', content: 'We use analytics cookies to understand how users interact with Campus Connect. This helps us improve the platform. Analytics data is aggregated and anonymized. You can opt out of analytics cookies through your account settings.' },
      { id: 'preferences', title: 'Preference Cookies', content: 'These cookies remember your preferences such as language settings, dashboard layout, and notification preferences. They help personalize your Campus Connect experience.' },
      { id: 'control', title: 'Managing Cookies', content: 'You can control cookies through your browser settings. Most browsers allow you to block, delete, or restrict cookies. Note that blocking essential cookies will prevent access to Campus Connect.' },
      { id: 'contact', title: 'Questions', content: 'For questions about our cookie practices, contact us at privacy@campusconnect.in.' },
    ],
  },
};

export default function LegalPage({ type }: LegalPageProps) {
  const page = content[type];
  const [activeSection, setActiveSection] = useState(page.sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const sections = page.sections.map(s => document.getElementById(s.id));
      const scrollY = window.scrollY + 120;
      for (const section of sections.reverse()) {
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page.sections]);

  return (
    <div className="overflow-hidden pt-16">
      {/* Hero */}
      <section className="py-16 mesh-gradient border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-sm text-slate-400 font-medium">Last updated: {page.lastUpdated}</span>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-slate-900 mt-4 mb-4">{page.title}</h1>
            <p className="text-slate-500 text-lg">Campus Connect · campusconnect.in</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* TOC - Sticky */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Contents</h3>
                <nav className="space-y-1">
                  {page.sections.map(({ id, title }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className={`block px-3 py-2 rounded-lg text-sm transition-all ${
                        activeSection === id
                          ? 'bg-blue-50 text-blue-700 font-medium'
                          : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-3 space-y-12">
              {page.sections.map(({ id, title, content: text }) => (
                <section key={id} id={id} className="scroll-mt-24">
                  <h2 className="font-display text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">{title}</h2>
                  <p className="text-slate-500 leading-relaxed text-base">{text}</p>
                </section>
              ))}

              <div className="pt-8 border-t border-slate-100">
                <p className="text-sm text-slate-400">
                  Questions about this policy? Contact us at{' '}
                  <a href="mailto:legal@campusconnect.in" className="text-blue-600">legal@campusconnect.in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Search } from 'lucide-react';
import { fadeUp, stagger, viewportConfig } from '../utils/animations';

const faqCategories = [
  {
    category: 'General',
    faqs: [
      { q: 'What is Campus Connect?', a: 'Campus Connect is a Digital Campus Experience Platform — an AI-powered system that connects students, faculty, departments, clubs, alumni, placement cell, and administration on one unified platform.' },
      { q: 'Is Campus Connect an ERP system?', a: 'No. Campus Connect is not an ERP. It is a campus experience and communication platform. It sits on top of your existing systems and enhances them — not replaces them.' },
      { q: 'Is Campus Connect available for all types of institutions?', a: 'Campus Connect is designed for colleges, universities, and technical institutes. It works for small institutions of 200 students as well as large campuses of 10,000+.' },
      { q: 'In which language is the platform available?', a: 'Currently Campus Connect is available in English. Multi-language support including Marathi and Hindi is on our roadmap.' },
    ],
  },
  {
    category: 'Platform',
    faqs: [
      { q: 'What modules does Campus Connect include?', a: 'Campus Connect includes 12 core modules: Announcements, Events, Communities, Analytics, Placements, Attendance, Campus Feed, Notice Board, Achievements, Lost & Found, Reports, and Club Management.' },
      { q: 'Is there a mobile app?', a: 'Campus Connect is a responsive web application that works on all mobile devices. A dedicated mobile app is on our roadmap.' },
      { q: 'How does role-based access work?', a: 'Every user is assigned a role — Student, Faculty, HOD, Principal, Placement Officer, Admin, or Parent. Each role sees a different dashboard with different permissions and features.' },
      { q: 'Can we customize the platform for our institution?', a: 'Yes. During onboarding, we configure the platform for your institution\'s specific structure, departments, clubs, and requirements.' },
    ],
  },
  {
    category: 'Security',
    faqs: [
      { q: 'Is campus data safe with Campus Connect?', a: 'Absolutely. We use Cloudflare for edge security, Supabase with row-level security for data isolation, AES-256 encryption at rest, and TLS 1.3 in transit.' },
      { q: 'Who can see student data?', a: 'Student data is only accessible to users with the appropriate role-based permissions. Students see their own data, faculty see their students, and admins can configure all access policies.' },
      { q: 'Is our institution\'s data isolated from other institutions?', a: 'Yes. Every institution\'s data is logically isolated. There is no data sharing between institutions on the platform.' },
    ],
  },
  {
    category: 'Pricing & Implementation',
    faqs: [
      { q: 'How much does Campus Connect cost?', a: 'We are currently in early access and pricing is discussed during the demo process. Contact us to get a quote tailored to your institution\'s size and requirements.' },
      { q: 'How long does implementation take?', a: 'Most institutions are fully onboarded within 5-10 business days of signing up. The process includes platform configuration, data import, and staff training.' },
      { q: 'Is there a free trial?', a: 'Yes. We offer a demonstration and a pilot period for interested institutions. Contact us to discuss options.' },
      { q: 'What support do you provide during setup?', a: 'We provide dedicated onboarding support including platform configuration, admin training, faculty onboarding sessions, and student communication templates.' },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border-b border-slate-100 last:border-0`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-start justify-between gap-4 py-5 hover:text-blue-700 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-900 text-base leading-snug">{q}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 mt-0.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="pb-5"
        >
          <p className="text-slate-500 leading-relaxed">{a}</p>
        </motion.div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="overflow-hidden pt-16">
      {/* Hero */}
      <section className="relative py-24 mesh-gradient">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Frequently Asked
              <br />
              <span className="gradient-text">Questions.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-500 max-w-xl mx-auto mb-8">
              Everything you need to know about Campus Connect.
            </motion.p>
            <motion.div variants={fadeUp} className="max-w-lg mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="search"
                placeholder="Search questions..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-sm"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          {faqCategories.map(({ category, faqs }) => (
            <motion.div key={category} initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger}>
              <motion.h2 variants={fadeUp} className="font-display text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100">
                {category}
              </motion.h2>
              <motion.div variants={fadeUp} className="bg-white rounded-2xl border border-slate-100 px-6">
                {faqs.map(({ q, a }) => (
                  <FAQItem key={q} q={q} a={a} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-bg">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-slate-900 mb-4">
              Didn't find your answer?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 mb-8">
              Our team is happy to answer any specific questions about Campus Connect for your institution.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/book-demo" className="btn-secondary">
                Book a Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

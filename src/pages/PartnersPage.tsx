import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Globe, Shield, CheckCircle, Users } from 'lucide-react';
import { fadeUp, stagger, viewportConfig } from '../utils/animations';

const partnerCategories = [
  {
    category: 'Founding Institutional Partner',
    color: 'blue',
    partners: [
      {
        name: 'B. K. Birla Night College, Kalyan',
        desc: 'Our founding institutional partner — where Campus Connect was built, tested, and first deployed. The Department of Computer Science at B. K. Birla Night College was the incubator for the entire platform.',
        location: 'Kalyan, Maharashtra, India',
        role: 'Founding Partner',
        icon: Building2,
      },
    ],
  },
  {
    category: 'Technology Partners',
    color: 'indigo',
    partners: [
      {
        name: 'Cloudflare',
        desc: 'Our edge security and CDN partner. Cloudflare protects Campus Connect with DDoS protection, WAF, and rate limiting at every point of contact.',
        location: 'San Francisco, CA, USA',
        role: 'Security & CDN Partner',
        icon: Shield,
      },
      {
        name: 'Supabase',
        desc: 'Our backend-as-a-service partner. Supabase provides the database, authentication, and real-time capabilities that power Campus Connect.',
        location: 'San Francisco, CA, USA',
        role: 'Backend Infrastructure Partner',
        icon: Globe,
      },
      {
        name: 'DigitalPlat',
        desc: 'Our hosting partner. DigitalPlat provides the infrastructure reliability and uptime guarantees that institutions depend on.',
        location: 'India',
        role: 'Hosting Partner',
        icon: Globe,
      },
    ],
  },
];

const futurePartners = [
  { category: 'Educational Institutions', desc: 'Colleges and universities across Maharashtra and India who will join as institutional partners.', status: 'Opening Soon' },
  { category: 'Technology Ecosystem', desc: 'LMS providers, HRMS systems, and educational technology companies for deep integrations.', status: 'In Discussion' },
  { category: 'Government Bodies', desc: 'NAAC, AICTE, and state education boards for compliance and recognition frameworks.', status: 'Planned' },
  { category: 'Industry & Placement', desc: 'Companies and recruiters who want access to Campus Connect\'s placement infrastructure.', status: 'Planned' },
];

export default function PartnersPage() {
  return (
    <div className="overflow-hidden pt-16">
      {/* Hero */}
      <section className="relative py-24 mesh-gradient">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                <Users className="w-3.5 h-3.5" />
                Partners & Ecosystem
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Building together.
              <br />
              <span className="gradient-text">Growing together.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Campus Connect is built on a foundation of trusted partnerships — from our founding institution to our technology backbone. Together, we're creating India's campus platform.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Partner Sections */}
      {partnerCategories.map(({ category, color, partners }) => (
        <section key={category} className="py-24 bg-white border-b border-slate-100 last:border-0">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-12">
                <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">{category}</span>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partners.map(({ name, desc, location, role, icon: Icon }) => (
                  <motion.div key={name} variants={fadeUp} className="group p-7 rounded-2xl bg-white border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className={`w-12 h-12 rounded-2xl bg-${color}-50 border border-${color}-100 flex items-center justify-center mb-5`}>
                      <Icon className={`w-6 h-6 text-${color}-600`} />
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full bg-${color}-50 border border-${color}-100 text-${color}-700 text-xs font-semibold mb-3`}>
                      {role}
                    </span>
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{desc}</p>
                    <p className="text-xs text-slate-400 flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5" />
                      {location}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Ecosystem Diagram */}
      <section className="py-24 section-bg">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">Ecosystem</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl font-bold text-slate-900 mt-4 mb-6">
              The Campus Connect
              <br />
              ecosystem.
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp} className="relative">
            {/* Center */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-xl shadow-blue-500/20 z-10 relative">
                <Globe className="w-12 h-12 text-white" />
              </div>
              <div className="text-center mt-3 mb-8">
                <p className="font-display font-bold text-slate-900">Campus Connect</p>
                <p className="text-xs text-slate-400">Platform Core</p>
              </div>

              {/* Spokes */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                {[
                  { name: 'Cloudflare', role: 'Security', color: 'orange' },
                  { name: 'Supabase', role: 'Database', color: 'emerald' },
                  { name: 'OpenAI', role: 'AI Layer', color: 'slate' },
                  { name: 'React', role: 'Frontend', color: 'blue' },
                  { name: 'GitHub', role: 'DevOps', color: 'slate' },
                  { name: 'DigitalPlat', role: 'Hosting', color: 'indigo' },
                  { name: 'B.K. Birla', role: 'Founding Partner', color: 'blue' },
                  { name: 'Future Partners', role: 'Growing', color: 'slate' },
                ].map(({ name, role }) => (
                  <div key={name} className={`p-4 rounded-2xl bg-white border border-slate-100 text-center hover:shadow-md hover:-translate-y-0.5 transition-all`}>
                    <div className="font-semibold text-slate-900 text-sm">{name}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{role}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Partners */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">Coming Soon</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl font-bold text-slate-900 mt-4 mb-6">
              Expanding the ecosystem.
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid md:grid-cols-2 gap-5">
            {futurePartners.map(({ category, desc, status }) => (
              <motion.div key={category} variants={fadeUp} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-lg font-bold text-slate-900">{category}</h3>
                  <span className="px-2.5 py-1 rounded-full bg-slate-200 text-slate-500 text-xs font-semibold shrink-0">{status}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Become a partner.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-blue-100 mb-10 max-w-xl mx-auto">
              Whether you're an institution, a technology company, or an educational organization — let's explore how we can build together.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all shadow-lg inline-flex items-center gap-2">
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

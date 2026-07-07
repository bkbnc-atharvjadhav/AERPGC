import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield, Lock, Database, Server, Users, CheckCircle,
  ArrowRight, Eye, Key, Globe, AlertTriangle
} from 'lucide-react';
import { fadeUp, stagger, viewportConfig } from '../utils/animations';

const sections = [
  {
    icon: Server,
    title: 'Infrastructure Security',
    color: 'blue',
    items: [
      { title: 'Cloudflare DDoS Protection', desc: 'All traffic is routed through Cloudflare\'s global network, providing DDoS protection up to 100 Tbps.' },
      { title: 'Web Application Firewall (WAF)', desc: 'Cloudflare WAF protects against OWASP Top 10 vulnerabilities, SQL injection, XSS, and common attack patterns.' },
      { title: 'Rate Limiting', desc: 'Automated rate limiting prevents brute-force attacks, API abuse, and bot traffic at the edge.' },
      { title: 'Content Delivery Network', desc: 'Static assets are served from Cloudflare\'s global CDN with zero-trust architecture at every edge node.' },
    ],
  },
  {
    icon: Lock,
    title: 'Encryption',
    color: 'indigo',
    items: [
      { title: 'TLS 1.3 in Transit', desc: 'All data transmitted between clients and servers is encrypted with TLS 1.3, the industry standard.' },
      { title: 'AES-256 at Rest', desc: 'All data stored in our Supabase PostgreSQL database is encrypted using AES-256 encryption.' },
      { title: 'Encrypted Backups', desc: 'Database backups are encrypted before storage and stored in multiple geographic locations.' },
      { title: 'Secure Key Management', desc: 'Encryption keys are managed through a dedicated key management system with rotation policies.' },
    ],
  },
  {
    icon: Key,
    title: 'Authentication & Access',
    color: 'violet',
    items: [
      { title: 'Role-Based Access Control (RBAC)', desc: 'Every user has a role — student, faculty, admin, principal — with scoped permissions. You only see what you should see.' },
      { title: 'Row-Level Security (RLS)', desc: 'Supabase\'s row-level security ensures database queries automatically filter to the correct data scope per user.' },
      { title: 'JWT Authentication', desc: 'Secure JSON Web Tokens for session management with configurable expiry and refresh policies.' },
      { title: 'MFA Ready', desc: 'Multi-factor authentication support is part of our roadmap for enterprise deployments.' },
    ],
  },
  {
    icon: Database,
    title: 'Data & Privacy',
    color: 'emerald',
    items: [
      { title: 'Data Isolation', desc: 'Each institution\'s data is logically isolated within the platform. No cross-contamination between institutions.' },
      { title: 'Supabase Security Model', desc: 'Built on Supabase\'s enterprise-grade PostgreSQL with built-in security policies, audit trails, and row-level security.' },
      { title: 'Data Retention Policies', desc: 'Clear data retention policies. You own your data. Export or delete at any time.' },
      { title: 'GDPR-Aligned Practices', desc: 'Our data handling practices align with modern privacy principles including data minimization and purpose limitation.' },
    ],
  },
  {
    icon: Eye,
    title: 'Monitoring & Auditing',
    color: 'cyan',
    items: [
      { title: 'Real-Time Monitoring', desc: 'Continuous monitoring of platform health, unusual access patterns, and potential security events.' },
      { title: 'Audit Logs', desc: 'Every significant action on the platform is logged: logins, data access, configuration changes, and administrative actions.' },
      { title: 'Incident Response', desc: 'We have an incident response plan in place. Security events are triaged and communicated within defined SLAs.' },
      { title: 'Uptime Monitoring', desc: 'External uptime monitoring with alerts and transparent status communication to institutions.' },
    ],
  },
];

export default function SecurityPage() {
  return (
    <div className="overflow-hidden pt-16">
      {/* Hero */}
      <section className="relative py-24 mesh-gradient">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                <Shield className="w-3.5 h-3.5" />
                Security & Trust
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Security isn't a feature.
              <br />
              <span className="gradient-text">It's our foundation.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Campus data is sensitive. Student records, faculty information, and institutional data deserve enterprise-grade protection. That's exactly what we provide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Security Status */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'SSL/TLS 1.3', status: 'Active', color: 'emerald' },
              { label: 'DDoS Protection', status: 'Active', color: 'emerald' },
              { label: 'Data Encryption', status: 'AES-256', color: 'blue' },
              { label: 'System Status', status: 'All Green', color: 'emerald' },
            ].map(({ label, status, color }) => (
              <motion.div key={label} variants={fadeUp} className={`p-5 rounded-2xl border ${color === 'emerald' ? 'bg-emerald-50 border-emerald-100' : 'bg-blue-50 border-blue-100'}`}>
                <div className={`text-xs font-semibold ${color === 'emerald' ? 'text-emerald-600' : 'text-blue-600'} mb-1`}>{status}</div>
                <div className="font-semibold text-slate-900 text-sm">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {sections.map(({ icon: Icon, title, color, items }, idx) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={stagger}
              className={`grid lg:grid-cols-2 gap-16 items-start ${idx % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              <motion.div variants={fadeUp}>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-${color}-50 border border-${color}-100 text-${color}-700 text-sm font-semibold mb-4`}>
                  <Icon className="w-4 h-4" />
                  {title}
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {title}
                </h2>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Every aspect of our {title.toLowerCase()} has been designed to meet the standards that educational institutions require — and exceed them.
                </p>
                <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                  <CheckCircle className="w-4 h-4" />
                  Enterprise-grade by default
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
                {items.map(({ title: t, desc }) => (
                  <div key={t} className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <h4 className="font-semibold text-slate-900 text-sm mb-2">{t}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Responsible Disclosure */}
      <section className="py-24 section-bg">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger}>
            <motion.div variants={fadeUp} className="p-8 rounded-2xl bg-white border border-slate-100">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-slate-900 mb-3">Responsible Disclosure</h2>
                  <p className="text-slate-500 leading-relaxed mb-4">
                    We take security vulnerabilities seriously. If you discover a security issue in Campus Connect, we ask that you report it to us responsibly before public disclosure. We commit to acknowledging your report within 48 hours and working with you to resolve any confirmed vulnerability.
                  </p>
                  <a href="mailto:security@campusconnect.in" className="btn-secondary inline-flex">
                    Report a Vulnerability
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Roadmap */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-12">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">Roadmap</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-slate-900 mt-4">
              Compliance Roadmap
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid md:grid-cols-3 gap-6">
            {[
              { phase: 'Current', items: ['TLS 1.3 encryption', 'Cloudflare WAF', 'RBAC & RLS', 'Audit logging', 'Encrypted backups'], color: 'blue' },
              { phase: 'In Progress', items: ['MFA for all roles', 'IP whitelisting', 'Advanced audit trails', 'VAPT assessment', 'Privacy impact assessments'], color: 'indigo' },
              { phase: 'Planned', items: ['ISO 27001 alignment', 'SOC 2 Type II prep', 'DPDP Act compliance', 'SSO/SAML support', 'Data residency options'], color: 'violet' },
            ].map(({ phase, items, color }) => (
              <motion.div key={phase} variants={fadeUp} className={`p-6 rounded-2xl bg-${color}-50 border border-${color}-100`}>
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-${color}-100 text-${color}-700 text-xs font-bold mb-4`}>
                  {phase}
                </span>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className={`w-4 h-4 text-${color}-500 shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-4xl font-bold text-white mb-6">
              Security questions? We're here.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-blue-100 mb-8">
              Talk to our team about your institution's specific security requirements.
            </motion.p>
            <motion.div variants={fadeUp} className="flex justify-center gap-4">
              <Link to="/contact" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all shadow-lg inline-flex items-center gap-2">
                Contact Security Team
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

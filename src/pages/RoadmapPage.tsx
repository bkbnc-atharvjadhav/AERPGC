import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Zap, GitBranch } from 'lucide-react';
import { fadeUp, stagger, viewportConfig } from '../utils/animations';

const roadmapItems = [
  {
    phase: 'Live Now',
    status: 'current',
    icon: CheckCircle,
    color: 'emerald',
    items: [
      { name: 'Announcements Module', desc: 'Role-based campus announcements with push notifications.' },
      { name: 'Events Management', desc: 'Campus event creation, registration, and attendance.' },
      { name: 'Student & Faculty Dashboards', desc: 'Role-specific dashboards with personalized content.' },
      { name: 'Club Management', desc: 'Digital clubs with membership, events, and communication.' },
      { name: 'Notice Board', desc: 'Digital replacement for physical campus notice boards.' },
      { name: 'Placement Drive Management', desc: 'End-to-end drive creation, applications, and tracking.' },
      { name: 'Basic Analytics', desc: 'Engagement metrics for admins and HODs.' },
      { name: 'Campus Feed', desc: 'Campus-exclusive social feed for students.' },
    ],
  },
  {
    phase: 'Coming Soon',
    status: 'upcoming',
    icon: Clock,
    color: 'blue',
    items: [
      { name: 'Digital Attendance', desc: 'One-tap attendance marking with automatic reporting.' },
      { name: 'AI Smart Notifications', desc: 'AI-driven notification timing and relevance scoring.' },
      { name: 'Advanced Analytics Dashboard', desc: 'Deeper engagement, outcome, and performance analytics.' },
      { name: 'Parent Portal', desc: 'Curated information flow for parents and guardians.' },
      { name: 'Achievements Showcase', desc: 'Student and faculty achievement recognition platform.' },
      { name: 'Lost & Found', desc: 'Campus lost-and-found management system.' },
      { name: 'Mobile App (iOS & Android)', desc: 'Dedicated mobile applications for all roles.' },
    ],
  },
  {
    phase: 'In Development',
    status: 'indev',
    icon: Zap,
    color: 'indigo',
    items: [
      { name: 'AI Campus Assistant', desc: 'Conversational AI assistant for students and faculty.' },
      { name: 'Alumni Network', desc: 'Connect current students with institution alumni.' },
      { name: 'Placement Intelligence', desc: 'AI-powered placement predictions and student matching.' },
      { name: 'Reports Engine', desc: 'Automated, scheduled reports for all stakeholders.' },
      { name: 'ERP Integration Layer', desc: 'Connect with existing ERP and HRMS systems.' },
    ],
  },
  {
    phase: 'Future Vision',
    status: 'future',
    icon: GitBranch,
    color: 'violet',
    items: [
      { name: 'API Platform', desc: 'Open API for third-party integrations and campus-built apps.' },
      { name: 'Marketplace', desc: 'Campus marketplace for student services and products.' },
      { name: 'Multi-Institution Network', desc: 'Connect students and faculty across partner institutions.' },
      { name: 'Government Integration', desc: 'NAAC, AICTE, and state education board compliance tools.' },
      { name: 'Predictive Campus Intelligence', desc: 'Campus-wide predictive insights for proactive action.' },
    ],
  },
];

const statusConfig = {
  current: { bg: 'bg-emerald-50', border: 'border-emerald-100', badge: 'bg-emerald-100 text-emerald-700', dot: 'bg-emerald-500' },
  upcoming: { bg: 'bg-blue-50', border: 'border-blue-100', badge: 'bg-blue-100 text-blue-700', dot: 'bg-blue-500' },
  indev: { bg: 'bg-indigo-50', border: 'border-indigo-100', badge: 'bg-indigo-100 text-indigo-700', dot: 'bg-indigo-500' },
  future: { bg: 'bg-violet-50', border: 'border-violet-100', badge: 'bg-violet-100 text-violet-700', dot: 'bg-violet-400' },
};

export default function RoadmapPage() {
  return (
    <div className="overflow-hidden pt-16">
      {/* Hero */}
      <section className="relative py-24 mesh-gradient">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                <GitBranch className="w-3.5 h-3.5" />
                Product Roadmap
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Where we are.
              <br />
              <span className="gradient-text">Where we're going.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Campus Connect is actively being built. This roadmap reflects our current state and our plans — updated as we ship.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {roadmapItems.map(({ phase, status, icon: Icon, items }) => {
            const cfg = statusConfig[status as keyof typeof statusConfig];
            return (
              <motion.div key={phase} initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger}>
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                  <div className={`w-10 h-10 rounded-xl ${cfg.bg} ${cfg.border} border flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${cfg.dot === 'bg-emerald-500' ? 'text-emerald-600' : cfg.dot === 'bg-blue-500' ? 'text-blue-600' : cfg.dot === 'bg-indigo-500' ? 'text-indigo-600' : 'text-violet-600'}`} />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-slate-900">{phase}</h2>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${cfg.badge}`}>{phase}</span>
                </motion.div>

                <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
                  {items.map(({ name, desc }) => (
                    <div key={name} className={`p-5 rounded-2xl ${cfg.bg} ${cfg.border} border`}>
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full ${cfg.dot} mt-2 shrink-0`} />
                        <div>
                          <h4 className="font-semibold text-slate-900 text-sm mb-1">{name}</h4>
                          <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Note */}
      <section className="py-16 section-bg">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger}>
            <motion.p variants={fadeUp} className="text-slate-500 leading-relaxed mb-6">
              This roadmap is a living document. We prioritize features based on feedback from our partner institutions and users. If there's a feature you need, let us know — it could be our next priority.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Request a Feature
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

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Zap, Shield, BarChart3, Bell, Users, Briefcase,
  BookOpen, Calendar, Award, Globe, Database, Cpu, Lock,
  Layers, GitBranch, Cloud, Server, CheckCircle, ChevronRight
} from 'lucide-react';
import { fadeUp, stagger, viewportConfig } from '../utils/animations';

const dashboards = [
  {
    role: 'Student',
    color: 'blue',
    features: ['Campus Feed & Announcements', 'Event Registrations', 'Attendance View', 'Placement Applications', 'Club Memberships', 'Achievement Showcase'],
    desc: 'A personalized campus home for every student. Everything relevant, nothing noisy.',
  },
  {
    role: 'Faculty',
    color: 'indigo',
    features: ['Digital Attendance', 'Department Announcements', 'Student Analytics', 'Event Management', 'Communication Hub', 'Report Generation'],
    desc: 'Tools that reduce administrative burden and give faculty more time for what matters.',
  },
  {
    role: 'Principal',
    color: 'violet',
    features: ['Institutional Dashboard', 'Department Performance', 'Engagement Metrics', 'Placement Overview', 'Faculty Reports', 'Campus Health Score'],
    desc: 'Complete institutional visibility — from a single, executive-grade dashboard.',
  },
  {
    role: 'Admin',
    color: 'cyan',
    features: ['User Management', 'Role Assignments', 'Content Moderation', 'System Configuration', 'Audit Logs', 'Integration Settings'],
    desc: 'Full control over the platform — users, permissions, content, and configuration.',
  },
  {
    role: 'Placement Cell',
    color: 'emerald',
    features: ['Drive Management', 'Student Shortlisting', 'Company Communication', 'Offer Tracking', 'Placement Analytics', 'Alumni Network'],
    desc: 'End-to-end placement operations — from drive posting to offer confirmation.',
  },
  {
    role: 'Parent',
    color: 'rose',
    features: ['Attendance Notifications', 'Event Alerts', 'Achievement Updates', 'Placement News', 'Direct Communication', 'Progress Reports'],
    desc: 'Keep parents informed and engaged without compromising student privacy.',
  },
];

const aiFeatures = [
  { icon: Cpu, title: 'Smart Notifications', desc: 'AI determines the right time, channel, and priority for every notification — reducing noise and increasing action.' },
  { icon: BarChart3, title: 'Predictive Analytics', desc: 'Surface trends before they become problems: attendance dips, engagement drops, placement readiness scores.' },
  { icon: Bell, title: 'Automated Summaries', desc: 'Weekly digest emails for faculty and management — automatically generated from platform activity.' },
  { icon: Globe, title: 'Content Intelligence', desc: 'Smart categorization, duplicate detection, and relevance scoring for every post and announcement.' },
];

const techStack = [
  { name: 'React', role: 'Frontend Framework', color: 'blue' },
  { name: 'TypeScript', role: 'Type-Safe Development', color: 'blue' },
  { name: 'Supabase', role: 'Backend & Database', color: 'emerald' },
  { name: 'PostgreSQL', role: 'Relational Database', color: 'indigo' },
  { name: 'Cloudflare', role: 'Edge Security & CDN', color: 'orange' },
  { name: 'OpenAI', role: 'AI Intelligence Layer', color: 'slate' },
  { name: 'Tailwind CSS', role: 'Design System', color: 'cyan' },
  { name: 'Framer Motion', role: 'Motion Design', color: 'violet' },
];

export default function PlatformPage() {
  return (
    <div className="overflow-hidden pt-16">
      {/* Hero */}
      <section className="relative py-24 mesh-gradient">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-500/6 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-indigo-500/8 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                <Layers className="w-3.5 h-3.5" />
                Platform Overview
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              One platform.
              <br />
              <span className="gradient-text">Every campus need.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Campus Connect is not a feature checklist. It's a thoughtfully designed system where every module connects to every other — creating a living, breathing campus digital experience.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book-demo" className="btn-primary text-base px-7 py-3.5">
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/features" className="btn-secondary text-base px-7 py-3.5">
                Explore Features
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Platform Architecture */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">Architecture</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Built on modern infrastructure.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-slate-500 max-w-2xl mx-auto">
              Every layer of Campus Connect is chosen for reliability, security, and scale — from the edge network to the database row.
            </motion.p>
          </motion.div>

          {/* Architecture Diagram */}
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp} className="relative max-w-4xl mx-auto">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 overflow-hidden">
              {/* Layer stack */}
              <div className="space-y-3">
                {[
                  { layer: 'Edge & Security', detail: 'Cloudflare CDN, WAF, DDoS Protection, Rate Limiting', icon: Shield, color: 'from-orange-500/10 to-orange-500/5', border: 'border-orange-200', text: 'text-orange-700', badge: 'bg-orange-100' },
                  { layer: 'Application Layer', detail: 'React + TypeScript Frontend, Framer Motion, Tailwind CSS', icon: Layers, color: 'from-blue-500/10 to-blue-500/5', border: 'border-blue-200', text: 'text-blue-700', badge: 'bg-blue-100' },
                  { layer: 'AI Intelligence', detail: 'OpenAI Integration, Smart Analytics, Predictive Insights', icon: Cpu, color: 'from-violet-500/10 to-violet-500/5', border: 'border-violet-200', text: 'text-violet-700', badge: 'bg-violet-100' },
                  { layer: 'Backend & API', detail: 'Supabase Edge Functions, REST & Realtime APIs', icon: Server, color: 'from-emerald-500/10 to-emerald-500/5', border: 'border-emerald-200', text: 'text-emerald-700', badge: 'bg-emerald-100' },
                  { layer: 'Database', detail: 'PostgreSQL with Row-Level Security, Encrypted Storage', icon: Database, color: 'from-indigo-500/10 to-indigo-500/5', border: 'border-indigo-200', text: 'text-indigo-700', badge: 'bg-indigo-100' },
                ].map(({ layer, detail, icon: Icon, color, border, text, badge }) => (
                  <div key={layer} className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${color} border ${border}`}>
                    <div className={`w-10 h-10 rounded-lg ${badge} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-5 h-5 ${text}`} />
                    </div>
                    <div className="flex-1">
                      <div className={`font-semibold text-sm ${text}`}>{layer}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{detail}</div>
                    </div>
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Role-Based Dashboards */}
      <section className="py-24 section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">Role-Based Dashboards</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Every role gets their
              <br />
              <span className="gradient-text">perfect experience.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-slate-500 max-w-2xl mx-auto">
              Campus Connect adapts to each user's role. Students, faculty, principals, admins, placement officers, and parents all see exactly what they need — nothing more, nothing less.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboards.map(({ role, color, features, desc }) => (
              <motion.div key={role} variants={fadeUp} className="group p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-${color}-50 border border-${color}-100 text-${color}-700 text-xs font-semibold mb-4`}>
                  {role} Dashboard
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp}>
              <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">AI Intelligence</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
                Not just software.
                <br />
                <span className="gradient-text">An intelligent campus brain.</span>
              </h2>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                Campus Connect uses AI to surface insights, reduce noise, automate routine tasks, and help institutions make data-driven decisions — in real time.
              </p>

              <div className="space-y-6">
                {aiFeatures.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center">
                    <Cpu className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-white font-semibold text-sm">AI Insights Engine</span>
                  <span className="ml-auto flex items-center gap-1 text-xs text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { type: 'Alert', msg: 'CS-3rd attendance dropped below 75% threshold', severity: 'High', color: 'red' },
                    { type: 'Insight', msg: 'Event engagement up 34% after scheduling change', severity: 'Positive', color: 'emerald' },
                    { type: 'Suggestion', msg: 'Send placement reminder to 47 eligible students', severity: 'Action', color: 'blue' },
                    { type: 'Trend', msg: 'Club activity peaks on Wednesdays 4–6 PM', severity: 'Insight', color: 'violet' },
                  ].map(({ type, msg, severity, color }) => (
                    <div key={msg} className="p-3 rounded-xl bg-white/5 border border-white/8">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-slate-400 font-medium">{type}</span>
                        <span className={`text-xs font-semibold text-${color}-400`}>{severity}</span>
                      </div>
                      <p className="text-sm text-white">{msg}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-24 section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">Integrated Modules</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              12 modules. One ecosystem.
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: Bell, name: 'Announcements', color: 'blue' },
              { icon: Calendar, name: 'Events', color: 'indigo' },
              { icon: Users, name: 'Communities', color: 'violet' },
              { icon: BarChart3, name: 'Analytics', color: 'cyan' },
              { icon: Briefcase, name: 'Placements', color: 'emerald' },
              { icon: BookOpen, name: 'Attendance', color: 'blue' },
              { icon: Globe, name: 'Campus Feed', color: 'indigo' },
              { icon: Bell, name: 'Notice Board', color: 'violet' },
              { icon: Award, name: 'Achievements', color: 'amber' },
              { icon: Globe, name: 'Lost & Found', color: 'rose' },
              { icon: BarChart3, name: 'Reports', color: 'cyan' },
              { icon: Users, name: 'Club Management', color: 'emerald' },
            ].map(({ icon: Icon, name, color }) => (
              <motion.div key={name} variants={fadeUp} className="group flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-blue-100 hover:shadow-sm transition-all">
                <div className={`w-9 h-9 rounded-lg bg-${color}-50 border border-${color}-100 flex items-center justify-center shrink-0`}>
                  <Icon className={`w-4.5 h-4.5 text-${color}-600`} />
                </div>
                <span className="text-sm font-semibold text-slate-700">{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cloud & Security */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">Infrastructure</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Cloud-native. Security-first.
              <br />
              <span className="gradient-text">Built to scale.</span>
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Cloud,
                title: 'Cloud Infrastructure',
                items: ['Global CDN via Cloudflare', 'Multi-region availability', 'Auto-scaling architecture', '99.9% uptime SLA target', 'Zero-downtime deployments'],
                color: 'blue',
              },
              {
                icon: Lock,
                title: 'Security Layer',
                items: ['AES-256 encryption at rest', 'TLS 1.3 in transit', 'DDoS protection', 'WAF rules', 'Rate limiting & bot protection'],
                color: 'indigo',
              },
              {
                icon: GitBranch,
                title: 'Access Control',
                items: ['Role-based permissions', 'Row-level security (RLS)', 'Audit logging', 'Session management', 'Multi-factor auth ready'],
                color: 'violet',
              },
            ].map(({ icon: Icon, title, items, color }) => (
              <motion.div key={title} variants={fadeUp} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className={`w-10 h-10 rounded-xl bg-${color}-50 border border-${color}-100 flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 text-${color}-600`} />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-4">{title}</h3>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">Technology</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl font-bold text-slate-900 mt-4 mb-6">
              Built with the best tools
              <br />
              in modern software.
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {techStack.map(({ name, role }) => (
              <motion.div key={name} variants={fadeUp} className="p-4 rounded-2xl bg-white border border-slate-100 text-center hover:-translate-y-1 hover:shadow-md transition-all">
                <div className="font-display font-bold text-slate-900 text-lg mb-1">{name}</div>
                <div className="text-xs text-slate-400">{role}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              See the platform in action.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-blue-100 mb-10 max-w-xl mx-auto">
              Book a 30-minute personalized demo and we'll walk you through the exact features your institution needs.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book-demo" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2">
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/security" className="text-white border border-white/30 font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all inline-flex items-center gap-2">
                View Security
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

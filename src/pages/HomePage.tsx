import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Zap, Users, BookOpen, BarChart3, Shield,
  Bell, MessageSquare, Award, Calendar, Search, TrendingUp,
  Building2, GraduationCap, Briefcase, ChevronRight, Star,
  CheckCircle, Globe, Lock, Cpu, Database, Play
} from 'lucide-react';
import { fadeUp, stagger, viewportConfig } from '../utils/animations';

const modules = [
  { icon: Bell, title: 'Announcements', desc: 'Real-time notices from departments, clubs, and administration — all in one feed.', color: 'blue' },
  { icon: Calendar, title: 'Events', desc: 'Campus events, workshops, seminars, and cultural programs — organized and discoverable.', color: 'indigo' },
  { icon: Users, title: 'Communities', desc: 'Student clubs, interest groups, and department communities with built-in management tools.', color: 'violet' },
  { icon: BarChart3, title: 'Analytics', desc: 'Institutional dashboards with engagement metrics, attendance trends, and performance insights.', color: 'cyan' },
  { icon: Briefcase, title: 'Placements', desc: 'End-to-end placement management: drives, applications, shortlists, and offer tracking.', color: 'emerald' },
  { icon: BookOpen, title: 'Attendance', desc: 'Digital attendance marking for faculty with student-facing real-time visibility.', color: 'blue' },
  { icon: MessageSquare, title: 'Campus Feed', desc: 'A structured social feed for students — posts, polls, and peer engagement within campus walls.', color: 'indigo' },
  { icon: Globe, title: 'Notice Board', desc: 'Digital replacement for physical notice boards — searchable, categorized, and time-stamped.', color: 'violet' },
  { icon: Award, title: 'Achievements', desc: 'A dedicated space to recognize and showcase student and faculty accomplishments.', color: 'amber' },
  { icon: Search, title: 'Lost & Found', desc: 'Campus lost-and-found management — post, search, and claim items digitally.', color: 'rose' },
  { icon: TrendingUp, title: 'Reports', desc: 'Automated reports for departments, placement cells, and management — exportable and shareable.', color: 'cyan' },
  { icon: Building2, title: 'Club Management', desc: 'Full lifecycle club management: membership, events, treasury, and communication tools.', color: 'emerald' },
];

const roles = [
  { icon: GraduationCap, label: 'Students', color: 'blue' },
  { icon: BookOpen, label: 'Faculty', color: 'indigo' },
  { icon: Building2, label: 'Management', color: 'violet' },
  { icon: Briefcase, label: 'Placement Cell', color: 'cyan' },
  { icon: Users, label: 'Clubs & Councils', color: 'emerald' },
  { icon: Shield, label: 'Administration', color: 'rose' },
];

const comparisons = [
  { feature: 'Unified Campus Feed', cc: true, erp: false, portal: false },
  { feature: 'AI-Powered Insights', cc: true, erp: false, portal: false },
  { feature: 'Club & Community Management', cc: true, erp: false, portal: false },
  { feature: 'Real-time Announcements', cc: true, erp: true, portal: false },
  { feature: 'Placement Drive Management', cc: true, erp: true, portal: false },
  { feature: 'Student Achievement Showcase', cc: true, erp: false, portal: false },
  { feature: 'Parent Communication', cc: true, erp: false, portal: false },
  { feature: 'Mobile-First Design', cc: true, erp: false, portal: false },
  { feature: 'Role-Based Dashboards', cc: true, erp: true, portal: true },
  { feature: 'Analytics & Reports', cc: true, erp: true, portal: false },
];

const faqs = [
  { q: 'What is Campus Connect?', a: 'Campus Connect is a Digital Campus Experience Platform — an AI-powered system that connects students, faculty, departments, clubs, alumni, placement cell, and administration on one unified platform.' },
  { q: 'Is Campus Connect an ERP system?', a: 'No. Campus Connect is not an ERP. It is a campus experience and communication platform built on top of your existing systems, not a replacement for them.' },
  { q: 'Who is Campus Connect for?', a: 'Campus Connect is designed for educational institutions of all sizes — colleges, universities, and technical institutes. It serves students, faculty, HODs, principals, placement officers, and administration.' },
  { q: 'How is Campus Connect different from a student portal?', a: 'Traditional student portals are one-directional information systems. Campus Connect is a two-way engagement platform — it connects every role on campus in real-time with structured, intelligent communication.' },
  { q: 'Is our data secure?', a: 'Absolutely. Campus Connect uses Cloudflare for DDoS protection and edge security, Supabase for encrypted data storage, and role-based access control to ensure data privacy at every level.' },
  { q: 'How do we get started?', a: 'Request a demo through our contact page. Our team will walk you through the platform, understand your campus requirements, and design an implementation plan tailored to your institution.' },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-600 border-blue-100',
  indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  violet: 'bg-violet-50 text-violet-600 border-violet-100',
  cyan: 'bg-cyan-50 text-cyan-600 border-cyan-100',
  emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  amber: 'bg-amber-50 text-amber-600 border-amber-100',
  rose: 'bg-rose-50 text-rose-600 border-rose-100',
};

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center mesh-gradient pt-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/6 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/8 blur-3xl" />
          <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                <Zap className="w-3.5 h-3.5" />
                AI-Powered Campus Experience Platform
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-slate-900 leading-[1.08] mb-6 tracking-tight">
              The Operating System
              <br />
              <span className="gradient-text">for Modern Campuses</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Campus Connect unifies every stakeholder — students, faculty, clubs, placement cell, and administration — on one intelligent platform designed for India's educational future.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book-demo" className="btn-primary text-base px-7 py-3.5">
                Book a Free Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/platform" className="btn-secondary text-base px-7 py-3.5">
                <Play className="w-4 h-4" />
                See the Platform
              </Link>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-6 text-sm text-slate-400">
              No setup fees. No long-term lock-in. Built for educational institutions.
            </motion.p>

            {/* Hero Platform Mockup */}
            <motion.div variants={fadeUp} className="mt-16 relative max-w-5xl mx-auto">
              <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-1 shadow-2xl shadow-slate-900/20">
                <div className="rounded-xl bg-slate-800 overflow-hidden">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-700/50 border-b border-slate-600/30">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                      <div className="w-3 h-3 rounded-full bg-green-400/70" />
                    </div>
                    <div className="flex-1 mx-4 bg-slate-600/50 rounded-md px-3 py-1 text-xs text-slate-400">
                      app.campusconnect.in
                    </div>
                  </div>

                  {/* Dashboard mockup */}
                  <div className="p-4 grid grid-cols-12 gap-3 min-h-[300px] md:min-h-[380px]">
                    {/* Sidebar */}
                    <div className="col-span-2 space-y-1.5">
                      {['Dashboard', 'Feed', 'Events', 'Placements', 'Clubs', 'Reports'].map((item, i) => (
                        <div key={item} className={`px-2.5 py-1.5 rounded-lg text-xs font-medium ${i === 0 ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* Main content */}
                    <div className="col-span-7 space-y-3">
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { label: 'Active Students', value: '2,847', col: 'text-blue-400' },
                          { label: "Today's Events", value: '12', col: 'text-violet-400' },
                          { label: 'Placements', value: '94%', col: 'text-emerald-400' },
                        ].map(({ label, value, col }) => (
                          <div key={label} className="bg-slate-700/50 rounded-lg p-2.5">
                            <div className={`text-lg font-bold ${col}`}>{value}</div>
                            <div className="text-xs text-slate-400">{label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-slate-700/30 rounded-lg p-3 space-y-2">
                        <div className="text-xs text-slate-300 font-semibold">Recent Announcements</div>
                        {['Exam schedule released for Semester V', 'Placement drive: Infosys on 15th Jan', 'Cultural fest registrations open'].map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs text-slate-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>

                      <div className="bg-slate-700/30 rounded-lg p-3">
                        <div className="text-xs text-slate-300 font-semibold mb-2">Attendance Overview</div>
                        <div className="flex items-end gap-1 h-14">
                          {[70, 85, 60, 90, 75, 88, 95].map((h, i) => (
                            <div key={i} className="flex-1 bg-blue-600/50 rounded-t-sm" style={{ height: `${h}%` }} />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right panel */}
                    <div className="col-span-3 space-y-3">
                      <div className="bg-slate-700/30 rounded-lg p-3">
                        <div className="text-xs text-slate-300 font-semibold mb-2">Upcoming Events</div>
                        <div className="space-y-2">
                          {['Hackathon 2025', 'Alumni Meet', 'Sports Day'].map((e) => (
                            <div key={e} className="text-xs text-slate-400 flex items-center gap-1.5">
                              <Calendar className="w-3 h-3 text-violet-400 shrink-0" />
                              {e}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-lg p-3 border border-blue-500/20">
                        <div className="text-xs text-blue-300 font-semibold">AI Insight</div>
                        <div className="text-xs text-slate-300 mt-1 leading-relaxed">
                          Attendance dropped 12% this week. Consider sending automated reminders.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-8 top-1/3 hidden lg:flex items-center gap-2 bg-white rounded-xl px-3 py-2 shadow-lg border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900">Student Enrolled</div>
                  <div className="text-xs text-slate-400">Just now</div>
                </div>
              </div>

              <div className="absolute -right-8 top-1/4 hidden lg:flex items-center gap-2 bg-white rounded-xl px-3 py-2 shadow-lg border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900">Placement Rate</div>
                  <div className="text-xs text-blue-600">+23% this year</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-slate-400 font-medium mb-8 uppercase tracking-widest">
            Trusted Partners & Technology
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {['Cloudflare', 'Supabase', 'OpenAI', 'React', 'GitHub', 'B. K. Birla Night College'].map((name) => (
              <div key={name} className="text-slate-300 font-display font-bold text-sm md:text-base tracking-tight hover:text-slate-500 transition-colors">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">The Problem</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Campus communication is broken.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-slate-500 max-w-2xl mx-auto">
              Most educational institutions run on WhatsApp groups, paper notices, scattered Excel sheets, and disconnected portals. Students miss important updates. Faculty waste time on administrative overhead. Management has zero visibility.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Students are disconnected', desc: 'Critical announcements buried in WhatsApp groups. Events missed. Opportunities lost. No single source of truth.', icon: Users },
              { title: 'Faculty are overwhelmed', desc: 'Attendance on paper. Multiple channels to manage. No data. No analytics. Administrative burden leaves little time for teaching.', icon: BookOpen },
              { title: 'Management is flying blind', desc: 'No real-time visibility into campus activity. Decisions made on gut feel. No engagement data. No outcome metrics.', icon: BarChart3 },
            ].map(({ title, desc, icon: Icon }) => (
              <motion.div key={title} variants={fadeUp} className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-red-100 hover:shadow-lg hover:shadow-red-50/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5 group-hover:bg-red-100 transition-colors">
                  <Icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-sm font-medium text-blue-600 uppercase tracking-widest">The Solution</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              One platform. Every role. Every need.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-slate-500 max-w-2xl mx-auto">
              Campus Connect brings every stakeholder together on a unified, intelligent platform — designed to feel as intuitive as consumer apps, and as powerful as enterprise software.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {roles.map(({ icon: Icon, label, color }) => (
              <motion.div key={label} variants={fadeUp} className="group p-5 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-200 text-center cursor-default">
                <div className={`w-12 h-12 rounded-xl ${colorMap[color]} border mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-slate-700">{label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} className="space-y-6">
              {[
                { icon: Cpu, title: 'AI-Powered Intelligence', desc: 'Intelligent insights, automated summaries, smart notifications, and predictive analytics built into every layer.' },
                { icon: Shield, title: 'Enterprise Security', desc: 'Cloudflare-protected, Supabase-encrypted, role-based access control. Every data point is safe.' },
                { icon: Globe, title: 'Unified Communication', desc: 'One platform for announcements, events, clubs, placements, and direct messaging — no more scattered channels.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900 mb-1">{title}</h3>
                    <p className="text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
              <Link to="/platform" className="btn-primary inline-flex mt-2">
                Explore the Platform
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-display font-semibold">Campus Activity</span>
                    <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  </div>
                  {[
                    { type: 'Announcement', msg: 'Semester exams: Dec 15–22', dept: 'Academic Office', time: '2m ago', color: 'blue' },
                    { type: 'Event', msg: 'Tech Fest 2025 registrations open', dept: 'CS Department', time: '15m ago', color: 'violet' },
                    { type: 'Placement', msg: 'Tata Consultancy drive confirmed', dept: 'Placement Cell', time: '1h ago', color: 'emerald' },
                    { type: 'Club', msg: 'Coding Club workshop this Friday', dept: 'Code Warriors', time: '3h ago', color: 'cyan' },
                  ].map(({ type, msg, dept, time, color }) => (
                    <div key={msg} className={`p-3.5 rounded-xl bg-white/5 border border-white/8`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-xs font-semibold text-${color}-400`}>{type}</span>
                        <span className="text-xs text-slate-500">{time}</span>
                      </div>
                      <p className="text-sm text-white mb-0.5">{msg}</p>
                      <p className="text-xs text-slate-400">{dept}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">Platform Modules</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Everything your campus needs,
              <br />
              <span className="gradient-text">in one place.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-slate-500 max-w-2xl mx-auto">
              12 integrated modules that cover every aspect of campus life — from announcements to analytics, clubs to career placements.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {modules.map(({ icon: Icon, title, desc, color }) => (
              <motion.div key={title} variants={fadeUp} className="group p-6 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-250 cursor-default">
                <div className={`w-10 h-10 rounded-xl ${colorMap[color]} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp} className="text-center mt-10">
            <Link to="/features" className="btn-secondary">
              View All Features
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 section-bg">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">Why Campus Connect</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Not an ERP. Not a portal.
              <br />
              <span className="gradient-text">Something better.</span>
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp} className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-4 bg-slate-50 border-b border-slate-200">
              <div className="p-4 text-sm font-semibold text-slate-500 col-span-1">Feature</div>
              <div className="p-4 text-center">
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600">
                  <Zap className="w-4 h-4" /> Campus Connect
                </span>
              </div>
              <div className="p-4 text-center text-sm font-semibold text-slate-400">Traditional ERP</div>
              <div className="p-4 text-center text-sm font-semibold text-slate-400">Student Portal</div>
            </div>

            {comparisons.map(({ feature, cc, erp, portal }, i) => (
              <div key={feature} className={`grid grid-cols-4 border-b border-slate-100 last:border-0 ${i % 2 === 0 ? '' : 'bg-slate-50/50'}`}>
                <div className="p-4 text-sm text-slate-700 font-medium">{feature}</div>
                <div className="p-4 flex justify-center">
                  {cc ? <CheckCircle className="w-5 h-5 text-emerald-500" /> : <span className="text-slate-200">—</span>}
                </div>
                <div className="p-4 flex justify-center">
                  {erp ? <CheckCircle className="w-5 h-5 text-slate-300" /> : <span className="text-slate-200">—</span>}
                </div>
                <div className="p-4 flex justify-center">
                  {portal ? <CheckCircle className="w-5 h-5 text-slate-300" /> : <span className="text-slate-200">—</span>}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp}>
              <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">Security</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
                Built for institutions
                <br />
                that demand <span className="gradient-text">trust.</span>
              </h2>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                Campus Connect is built with security at its foundation — not as an afterthought. Every layer of the platform is protected with enterprise-grade infrastructure.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Shield, title: 'Cloudflare Protection', desc: 'DDoS protection, WAF, and edge security powered by Cloudflare.' },
                  { icon: Lock, title: 'End-to-End Encryption', desc: 'All data encrypted in transit and at rest using AES-256 encryption.' },
                  { icon: Database, title: 'Supabase Infrastructure', desc: 'Powered by Supabase — PostgreSQL-based, with row-level security built in.' },
                  { icon: Users, title: 'Role-Based Access Control', desc: 'Granular permissions ensure every user sees only what they should.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-0.5">{title}</h4>
                      <p className="text-sm text-slate-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/security" className="btn-secondary mt-8 inline-flex">
                View Security Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="relative">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'SSL/TLS', status: 'Active', color: 'emerald' },
                    { label: 'DDoS Protection', status: 'Active', color: 'emerald' },
                    { label: 'WAF', status: 'Active', color: 'emerald' },
                    { label: 'Rate Limiting', status: 'Active', color: 'emerald' },
                    { label: 'Row-Level Security', status: 'Enabled', color: 'blue' },
                    { label: 'Data Encryption', status: 'AES-256', color: 'blue' },
                  ].map(({ label, status, color }) => (
                    <div key={label} className={`p-4 rounded-xl bg-white border ${color === 'emerald' ? 'border-emerald-100' : 'border-blue-100'}`}>
                      <div className={`text-xs font-semibold ${color === 'emerald' ? 'text-emerald-600' : 'text-blue-600'} mb-1`}>{status}</div>
                      <div className="text-sm font-semibold text-slate-800">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm font-semibold text-emerald-700">All systems operational</span>
                  </div>
                  <p className="text-xs text-emerald-600 mt-1">99.9% uptime SLA target</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">Early Access</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Institutions are taking notice.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-slate-500 max-w-xl mx-auto">
              Campus Connect launched with our founding partner — B. K. Birla Night College, Kalyan. More institutions are being onboarded in 2025.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid md:grid-cols-3 gap-6">
            {[
              { role: 'Principal', inst: 'B. K. Birla Night College', quote: 'Campus Connect has transformed how we communicate with students. What used to take days now happens instantly.' },
              { role: 'HOD, Computer Science', inst: 'B. K. Birla Night College', quote: 'The analytics dashboard gives me insights I never had before. I can see exactly how engaged students are with our department activities.' },
              { role: 'Placement Officer', inst: 'B. K. Birla Night College', quote: 'Managing placement drives used to be a nightmare of spreadsheets and WhatsApp. Campus Connect made it actually manageable.' },
            ].map(({ role, inst, quote }) => (
              <motion.div key={role} variants={fadeUp} className="group p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 italic">"{quote}"</p>
                <div>
                  <div className="font-semibold text-slate-900">{role}</div>
                  <div className="text-sm text-slate-400">{inst}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">FAQ</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Common questions.
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="space-y-4">
            {faqs.map(({ q, a }) => (
              <motion.div key={q} variants={fadeUp} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h3 className="font-display font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">Q</span>
                  {q}
                </h3>
                <p className="text-slate-500 leading-relaxed pl-9">{a}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp} className="text-center mt-8">
            <Link to="/faq" className="btn-secondary">
              View All FAQs
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to transform
              <br />
              your campus?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join the institutions building the future of campus experience. Book a personalized demo — no commitment required.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book-demo" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2 text-base">
                Book Your Free Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="text-white border border-white/30 font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all inline-flex items-center gap-2 text-base">
                Contact Sales
              </Link>
            </motion.div>
            <motion.p variants={fadeUp} className="mt-6 text-blue-200 text-sm">
              Free demo • No credit card • Setup in days
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Heart, Target, Lightbulb, Users, Shield,
  TrendingUp, CheckCircle, Zap, Globe, Award, GitBranch
} from 'lucide-react';
import { fadeUp, stagger, viewportConfig } from '../utils/animations';

const timeline = [
  { year: '2024', phase: 'The Problem', desc: 'Observed firsthand how campus communication was fragmented — WhatsApp groups, paper notices, zero digital infrastructure for student engagement.', status: 'done' },
  { year: '2024', phase: 'Research', desc: 'Interviewed students, faculty, and management across multiple institutions. Mapped every pain point. Defined what a true campus operating system should look like.', status: 'done' },
  { year: '2024', phase: 'Development', desc: 'Built the first version of Campus Connect with a focus on simplicity, speed, and role-based experiences. Chose React, Supabase, and Cloudflare as core infrastructure.', status: 'done' },
  { year: '2025', phase: 'Launch', desc: 'Launched with B. K. Birla Night College, Kalyan as our founding institutional partner. First real users. First real feedback. First real impact.', status: 'current' },
  { year: '2025', phase: 'Growth', desc: 'Expanding to more institutions across Maharashtra. Building AI intelligence features, deeper analytics, and richer role-based experiences.', status: 'upcoming' },
];

const values = [
  { icon: Heart, title: 'Student First', desc: 'Every feature we build starts with one question: does this make student life better? Not easier for administrators. Not prettier for investors. Better for students.' },
  { icon: Target, title: 'Radical Simplicity', desc: 'The best campus software should feel as simple as a consumer app. No training required. No manual needed. Open it and understand it.' },
  { icon: Shield, title: 'Trusted by Default', desc: 'Campus data is sensitive. Every architectural decision, every third-party integration, every feature is evaluated through the lens of trust and data safety.' },
  { icon: TrendingUp, title: 'Outcomes Over Features', desc: 'We measure our success by placement rates, event attendance, communication efficiency, and student satisfaction — not by feature count.' },
  { icon: Lightbulb, title: 'Built to Evolve', desc: "India's educational landscape is changing fast. Our platform is architected to grow with that change — not fight against it." },
  { icon: Globe, title: 'Open to Feedback', desc: 'Our best ideas come from the institutions we serve. We listen, iterate fast, and ship improvements continuously.' },
];

const techStack = [
  { name: 'React', desc: 'Frontend Framework' },
  { name: 'TypeScript', desc: 'Type Safety' },
  { name: 'Supabase', desc: 'Backend & DB' },
  { name: 'Cloudflare', desc: 'Edge & Security' },
  { name: 'OpenAI', desc: 'AI Intelligence' },
  { name: 'GitHub', desc: 'Version Control' },
  { name: 'Tailwind CSS', desc: 'Design System' },
  { name: 'Framer Motion', desc: 'Animations' },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden pt-16">
      {/* Hero */}
      <section className="relative py-24 mesh-gradient">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-500/6 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-indigo-500/8 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl">
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                <Heart className="w-3.5 h-3.5" />
                Our Story
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              We built what
              <br />
              <span className="gradient-text">campuses deserved.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-500 max-w-2xl leading-relaxed">
              Campus Connect was born from a simple frustration: educational institutions had incredible people but terrible tools. We set out to change that.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why We Built This */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp}>
              <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">Origin Story</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
                Why Campus Connect
                <br />
                was built.
              </h2>
              <div className="space-y-5 text-slate-500 leading-relaxed">
                <p>
                  The Department of Computer Science at B. K. Birla Night College, Kalyan, saw it every day: students missing placement opportunities because announcements were buried in WhatsApp groups. Faculty spending hours on attendance management that could be automated in seconds. Management making decisions without any real data.
                </p>
                <p>
                  The tools that existed were either too expensive for most colleges, too complicated to adopt, or designed for foreign institutions with very different contexts. There was nothing built specifically for India's educational reality.
                </p>
                <p>
                  So we built Campus Connect. Not as a project. Not as an assignment. As a genuine product — designed to be the operating system that India's campuses deserve.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              {[
                { num: '1', title: 'Observed the problem', desc: 'Watched institutions struggle with fragmented communication, paper-based processes, and zero digital infrastructure.' },
                { num: '2', title: 'Listened deeply', desc: 'Interviewed students, faculty, HODs, principals, and placement officers. Mapped every friction point.' },
                { num: '3', title: 'Designed from scratch', desc: 'Built a platform that feels like a consumer app but works like enterprise software. Role-based. Intelligent. Connected.' },
                { num: '4', title: 'Launched with integrity', desc: 'Launched with real users at our founding partner institution. Real feedback. Continuous improvement.' },
              ].map(({ num, title, desc }) => (
                <div key={num} className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {num}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{title}</h4>
                    <p className="text-sm text-slate-500">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} className="p-10 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 blur-2xl" />
              <div className="relative">
                <Target className="w-10 h-10 mb-6 text-blue-200" />
                <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-blue-100 leading-relaxed text-lg">
                  To make every campus in India a connected, informed, and engaged community — where no student misses an opportunity, no faculty wastes time on administration, and every decision is backed by data.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="p-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl" />
              <div className="relative">
                <Lightbulb className="w-10 h-10 mb-6 text-blue-400" />
                <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  To become India's leading Campus Experience Platform — the digital backbone of educational institutions nationwide, powering smarter campuses, better outcomes, and stronger connections between institutions and their communities.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">Timeline</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              How we got here.
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200" />
            <div className="space-y-8">
              {timeline.map(({ year, phase, desc, status }) => (
                <motion.div key={phase} variants={fadeUp} className="flex gap-6 relative">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 z-10 border-2 ${
                    status === 'done' ? 'bg-blue-600 border-blue-600 text-white' :
                    status === 'current' ? 'bg-white border-blue-600 text-blue-600' :
                    'bg-white border-slate-200 text-slate-400'
                  }`}>
                    {status === 'done' ? <CheckCircle className="w-6 h-6" /> : status === 'current' ? <Zap className="w-6 h-6" /> : <GitBranch className="w-6 h-6" />}
                  </div>
                  <div className={`flex-1 p-6 rounded-2xl border ${
                    status === 'current' ? 'bg-blue-50 border-blue-100' : 'bg-slate-50 border-slate-100'
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-slate-400">{year}</span>
                      <h3 className={`font-display font-bold ${status === 'current' ? 'text-blue-700' : 'text-slate-900'}`}>{phase}</h3>
                      {status === 'current' && (
                        <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">Current</span>
                      )}
                      {status === 'upcoming' && (
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold">Coming</span>
                      )}
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">Our Values</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              What we believe in.
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp} className="group p-7 rounded-2xl bg-white border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">Founder</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Meet the founder.
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 max-w-xl mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mx-auto mb-5 flex items-center justify-center">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">Atharv Amol Jadhav</h3>
            <p className="text-blue-600 font-medium mb-4">Founder, Campus Connect</p>
            <p className="text-slate-500 leading-relaxed text-sm mb-5">
              A computer science student and developer who saw the disconnect between technology and education institutions firsthand. Built Campus Connect to solve a real problem he experienced — and turned it into India's next-generation campus operating system.
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="text-sm text-slate-400">Department of Computer Science</span>
              <span className="text-slate-200">•</span>
              <span className="text-sm text-slate-400">B. K. Birla Night College</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">Technology</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl font-bold text-slate-900 mt-4 mb-6">
              Built with the tools
              <br />
              the best companies use.
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {techStack.map(({ name, desc }) => (
              <motion.div key={name} variants={fadeUp} className="p-5 rounded-2xl bg-white border border-slate-100 text-center hover:-translate-y-1 hover:shadow-md transition-all">
                <div className="font-display font-bold text-slate-900 text-lg mb-1">{name}</div>
                <div className="text-xs text-slate-400">{desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Roadmap Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">Future Vision</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Where we're going.
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid md:grid-cols-3 gap-6">
            {[
              { phase: 'Now', items: ['Core platform live', 'Founding partner onboarded', 'Student & faculty dashboards', 'Announcements & events', 'Basic analytics'], color: 'blue' },
              { phase: 'Coming Soon', items: ['AI Assistant', 'Advanced analytics', 'Parent portal', 'Alumni network', 'Attendance integration'], color: 'indigo' },
              { phase: 'Future Vision', items: ['ERP integration', 'Marketplace', 'API platform', 'Multi-institution', 'National presence'], color: 'violet' },
            ].map(({ phase, items, color }) => (
              <motion.div key={phase} variants={fadeUp} className={`p-6 rounded-2xl border ${color === 'blue' ? 'bg-blue-50 border-blue-100' : color === 'indigo' ? 'bg-indigo-50 border-indigo-100' : 'bg-violet-50 border-violet-100'}`}>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-5 ${color === 'blue' ? 'bg-blue-100 text-blue-700' : color === 'indigo' ? 'bg-indigo-100 text-indigo-700' : 'bg-violet-100 text-violet-700'}`}>
                  {phase}
                </span>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className={`w-4 h-4 shrink-0 ${color === 'blue' ? 'text-blue-500' : color === 'indigo' ? 'text-indigo-500' : 'text-violet-500'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp} className="text-center mt-8">
            <Link to="/roadmap" className="btn-secondary">
              View Full Roadmap
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Be part of the story.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-blue-100 mb-10 max-w-xl mx-auto">
              Whether you're an institution looking to modernize, or a person who wants to contribute — we'd love to connect.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book-demo" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2">
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/careers" className="text-white border border-white/30 font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all">
                Join Our Team
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

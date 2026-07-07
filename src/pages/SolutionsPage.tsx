import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, GraduationCap, BookOpen, Building2,
  Briefcase, Users, Shield, ChevronRight, TrendingUp, Bell, BarChart3
} from 'lucide-react';
import { fadeUp, stagger, viewportConfig } from '../utils/animations';

const audiences = [
  {
    id: 'institutions',
    icon: Building2,
    title: 'For Institutions & Management',
    tagline: 'Complete institutional visibility and control.',
    color: 'blue',
    painPoints: [
      'No real-time view of campus operations',
      'Decisions based on lagging reports',
      'Communication gaps between departments',
      'No way to measure engagement or outcomes',
    ],
    solutions: [
      'Executive dashboard with live campus metrics',
      'Department-level performance analytics',
      'Unified communication across all stakeholders',
      'Outcome tracking: placements, events, engagement',
    ],
    benefits: ['Data-driven decision making', 'Reduced administrative overhead', 'Improved institutional reputation', 'Higher student satisfaction'],
    modules: ['Analytics Dashboard', 'Reports', 'Announcements', 'Department Management'],
  },
  {
    id: 'principals',
    icon: Shield,
    title: 'For Principals & HODs',
    tagline: 'Lead with clarity, not chaos.',
    color: 'indigo',
    painPoints: [
      'Overwhelmed with communication requests',
      'No consolidated view of campus health',
      'Manual approval processes slow everything down',
      'Cannot track faculty or student engagement',
    ],
    solutions: [
      'Priority-filtered feed of what matters most',
      'Campus health score updated in real time',
      'Digital approval workflows for events and notices',
      'Faculty and student engagement analytics',
    ],
    benefits: ['Faster decisions', 'Less email overload', 'Clear chain of communication', 'Measurable outcomes'],
    modules: ['Principal Dashboard', 'Analytics', 'Approval Workflows', 'Notice Board'],
  },
  {
    id: 'faculty',
    icon: BookOpen,
    title: 'For Faculty',
    tagline: 'Less paperwork. More teaching.',
    color: 'violet',
    painPoints: [
      'Attendance on paper is time-consuming and error-prone',
      'Scattered communication channels for students',
      'No tools to measure student engagement',
      'Event and notice management is manual',
    ],
    solutions: [
      'One-tap digital attendance with instant reports',
      'Department-wide announcements in seconds',
      'Student engagement data at a glance',
      'Event creation and management tools',
    ],
    benefits: ['Save 2+ hours per week', 'Better student communication', 'Reduced admin burden', 'Data to support decisions'],
    modules: ['Digital Attendance', 'Announcements', 'Faculty Dashboard', 'Reports'],
  },
  {
    id: 'students',
    icon: GraduationCap,
    title: 'For Students',
    tagline: 'Your campus. Organized.',
    color: 'cyan',
    painPoints: [
      'Important announcements lost in WhatsApp groups',
      'No centralized view of campus events',
      'Placement opportunities arrive too late',
      'No platform to showcase achievements',
    ],
    solutions: [
      'Personalized campus feed with everything relevant',
      'Event calendar with instant registration',
      'Placement drive alerts and direct applications',
      'Achievement showcase visible to faculty and alumni',
    ],
    benefits: ['Never miss an opportunity', 'Stay ahead on placements', 'Build a campus profile', 'Engage with clubs easily'],
    modules: ['Student Feed', 'Events', 'Placements', 'Achievements', 'Clubs'],
  },
  {
    id: 'placement',
    icon: Briefcase,
    title: 'For Placement Cell',
    tagline: 'Run placement operations like a pro.',
    color: 'emerald',
    painPoints: [
      'Drive management via spreadsheets and WhatsApp',
      'Student shortlisting is manual and error-prone',
      'No centralized record of placement history',
      'Company communication is fragmented',
    ],
    solutions: [
      'Digital placement drive management end-to-end',
      'Automated eligibility filtering and shortlisting',
      'Placement history, trends, and analytics dashboard',
      'Structured communication with companies',
    ],
    benefits: ['Higher placement efficiency', 'Fewer errors', 'Better student outcomes', 'Professional presentation to companies'],
    modules: ['Placement Drives', 'Student Shortlisting', 'Offer Tracking', 'Placement Analytics'],
  },
  {
    id: 'clubs',
    icon: Users,
    title: 'For Clubs & Student Council',
    tagline: 'Organize. Engage. Thrive.',
    color: 'rose',
    painPoints: [
      'No proper platform to manage club activities',
      'Event announcements reach very few students',
      'Membership tracking is done manually',
      'No visibility into club performance',
    ],
    solutions: [
      'Dedicated club management dashboard',
      'Campus-wide event promotions and registrations',
      'Digital membership management and roles',
      'Club analytics: engagement, growth, events',
    ],
    benefits: ['Larger audience reach', 'Better organized events', 'Transparent governance', 'Data to present to management'],
    modules: ['Club Management', 'Events', 'Communities', 'Announcements'],
  },
  {
    id: 'parents',
    icon: Shield,
    title: 'For Parents',
    tagline: 'Stay informed. Stay connected.',
    color: 'amber',
    painPoints: [
      'No reliable channel to receive campus updates',
      'Unaware of student achievements and events',
      'Cannot monitor attendance easily',
      'Communication with faculty is limited',
    ],
    solutions: [
      'Curated notification feed for parents',
      'Attendance alerts and academic updates',
      'Student achievement notifications',
      'Event and placement updates',
    ],
    benefits: ['Peace of mind', 'Celebrate student milestones', 'Stay campus-connected', 'Informed decision making'],
    modules: ['Parent Dashboard', 'Notifications', 'Attendance Alerts', 'Placement News'],
  },
];

const colorConfig: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', badge: 'bg-blue-100 text-blue-700' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100', badge: 'bg-indigo-100 text-indigo-700' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-100', badge: 'bg-violet-100 text-violet-700' },
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-100', badge: 'bg-cyan-100 text-cyan-700' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100', badge: 'bg-emerald-100 text-emerald-700' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-100', badge: 'bg-rose-100 text-rose-700' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100', badge: 'bg-amber-100 text-amber-700' },
};

export default function SolutionsPage() {
  return (
    <div className="overflow-hidden pt-16">
      {/* Hero */}
      <section className="relative py-24 mesh-gradient">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-500/6 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-indigo-500/8 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                <TrendingUp className="w-3.5 h-3.5" />
                Solutions by Role
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Built for everyone
              <br />
              <span className="gradient-text">on campus.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Campus Connect doesn't give everyone the same experience. It gives everyone the right experience — tailored to their role, responsibilities, and goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who is it for - quick nav */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {audiences.map(({ id, title, icon: Icon, color }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${colorConfig[color].bg} ${colorConfig[color].border} border ${colorConfig[color].text} text-sm font-medium hover:shadow-sm transition-all`}
              >
                <Icon className="w-4 h-4" />
                {title.replace('For ', '')}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Audience sections */}
      {audiences.map(({ id, icon: Icon, title, tagline, color, painPoints, solutions, benefits, modules }, idx) => {
        const cfg = colorConfig[color];
        const isEven = idx % 2 === 0;
        return (
          <section
            key={id}
            id={id}
            className={`py-24 ${isEven ? 'bg-white' : 'section-bg'}`}
          >
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={stagger}
                className={`grid lg:grid-cols-2 gap-16 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <motion.div variants={fadeUp}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${cfg.badge} text-xs font-semibold mb-4`}>
                    <Icon className="w-3.5 h-3.5" />
                    {title}
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                    {tagline}
                  </h2>

                  {/* Pain points */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-3">The Challenges</h4>
                    <ul className="space-y-2">
                      {painPoints.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-slate-500 text-sm">
                          <span className="w-4 h-4 rounded-full bg-red-100 text-red-500 text-xs flex items-center justify-center mt-0.5 shrink-0 font-bold">✕</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-3">Key Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {benefits.map((b) => (
                        <span key={b} className={`px-3 py-1 rounded-full ${cfg.bg} ${cfg.border} border ${cfg.text} text-xs font-medium`}>
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link to="/book-demo" className="btn-primary mt-8 inline-flex">
                    See It In Action
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                <motion.div variants={fadeUp}>
                  {/* Solutions */}
                  <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm mb-4">
                    <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      How Campus Connect Solves It
                    </h4>
                    <ul className="space-y-3">
                      {solutions.map((s) => (
                        <li key={s} className="flex items-start gap-3 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Relevant modules */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Relevant Modules</h4>
                    <div className="flex flex-wrap gap-2">
                      {modules.map((m) => (
                        <span key={m} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Find the right solution
              <br />
              for your campus.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-blue-100 mb-10 max-w-xl mx-auto">
              Talk to our team and we'll design the perfect Campus Connect configuration for your institution's unique needs.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book-demo" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2">
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="text-white border border-white/30 font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all inline-flex items-center gap-2">
                Contact Us
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

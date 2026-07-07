import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Bell, Calendar, Users, BarChart3, Briefcase,
  BookOpen, MessageSquare, Globe, Award, Search, TrendingUp, CheckCircle
} from 'lucide-react';
import { fadeUp, stagger, viewportConfig } from '../utils/animations';

const features = [
  {
    icon: Bell,
    name: 'Announcements',
    tagline: 'From noise to signal.',
    problem: 'Critical announcements get buried in WhatsApp groups. Students miss exam schedules. Faculty miss department circulars.',
    solution: 'A structured, role-based announcement system. Every notice reaches the right people, at the right time, with the right priority.',
    benefits: ['Role-targeted delivery', 'Priority levels & categories', 'Read receipts for admins', 'Searchable archive'],
    workflow: ['Admin or Faculty creates announcement', 'System routes to relevant roles', 'Push notification sent', 'Engagement tracked in dashboard'],
    color: 'blue',
  },
  {
    icon: Calendar,
    name: 'Events',
    tagline: 'Campus life, organized.',
    problem: 'Events are announced last minute. Registrations are done via Google Forms. Attendance tracking is manual. No post-event data.',
    solution: 'End-to-end event management: create, announce, register, track attendance, and measure engagement — all in one place.',
    benefits: ['Online registration & RSVP', 'QR code attendance', 'Capacity management', 'Post-event analytics'],
    workflow: ['Organizer creates event', 'Campus-wide promotion', 'Students register online', 'Attendance tracked digitally'],
    color: 'indigo',
  },
  {
    icon: Users,
    name: 'Communities & Clubs',
    tagline: 'Belonging, built digitally.',
    problem: 'Clubs struggle with visibility, membership management, and communication. Most operate on fragmented WhatsApp groups.',
    solution: 'A dedicated community platform for every club, department group, and interest circle on campus.',
    benefits: ['Club profiles & membership', 'Role-based club management', 'Club announcements', 'Event management tools'],
    workflow: ['Club admin creates community', 'Students join and engage', 'Events and notices posted', 'Analytics visible to advisor'],
    color: 'violet',
  },
  {
    icon: BarChart3,
    name: 'Analytics Dashboard',
    tagline: 'Data that drives decisions.',
    problem: 'Management makes decisions without data. No one knows which departments are thriving, which events work, or how engaged students are.',
    solution: 'A real-time analytics dashboard that surfaces the metrics that matter — broken down by department, role, time period, and more.',
    benefits: ['Engagement metrics', 'Department comparisons', 'Event performance', 'Placement analytics'],
    workflow: ['Platform collects behavioral data', 'AI processes and surfaces insights', 'Dashboard updated in real-time', 'Reports generated automatically'],
    color: 'cyan',
  },
  {
    icon: Briefcase,
    name: 'Placements',
    tagline: 'Every student. Every opportunity.',
    problem: 'Placement drives are managed via spreadsheets. Students miss deadlines. Companies receive disorganized data. Placement officers are overwhelmed.',
    solution: 'A complete placement management system: drive creation, student applications, shortlisting, company communication, and offer tracking.',
    benefits: ['Drive creation & management', 'Eligibility auto-filter', 'Application tracking', 'Placement analytics'],
    workflow: ['Officer creates placement drive', 'Students apply within platform', 'System filters eligible candidates', 'Shortlists and offers tracked'],
    color: 'emerald',
  },
  {
    icon: BookOpen,
    name: 'Attendance',
    tagline: 'Paper-free. Error-free.',
    problem: 'Attendance on paper is time-consuming, error-prone, and produces no usable data. Students have no visibility into their own attendance.',
    solution: 'Digital attendance marking for faculty with automatic calculations, student-facing real-time views, and alert systems for low attendance.',
    benefits: ['One-tap marking', 'Real-time student view', 'Low attendance alerts', 'Exportable reports'],
    workflow: ['Faculty marks attendance digitally', 'Student notified of status', 'Alerts sent below threshold', 'Reports available instantly'],
    color: 'blue',
  },
  {
    icon: MessageSquare,
    name: 'Campus Feed',
    tagline: 'The campus heartbeat.',
    problem: 'There\'s no structured social space for campus. Students rely on external social media which creates distraction and privacy concerns.',
    solution: 'A campus-exclusive social feed: posts, polls, peer engagement, and campus conversations in a safe, moderated environment.',
    benefits: ['Moderated & safe', 'Polls and reactions', 'Campus-only access', 'Admin oversight'],
    workflow: ['Students create posts', 'Content moderated by system', 'Peers engage and react', 'Trends surface in analytics'],
    color: 'indigo',
  },
  {
    icon: Globe,
    name: 'Notice Board',
    tagline: 'No more paper. No more guesswork.',
    problem: 'Physical notice boards are missed, defaced, or outdated. Digital alternatives are scattered and un-searchable.',
    solution: 'A digital notice board with categorization, timestamps, search, and priority levels — accessible from anywhere.',
    benefits: ['Searchable & categorized', 'Time-stamped and archived', 'Department-filtered', 'Mobile accessible'],
    workflow: ['Admin posts notice', 'Auto-categorized by system', 'Pushed to relevant users', 'Archived after expiry'],
    color: 'violet',
  },
  {
    icon: Award,
    name: 'Achievements',
    tagline: 'Recognize. Celebrate. Inspire.',
    problem: 'Student and faculty achievements happen but rarely get proper recognition. There\'s no campus-wide visibility.',
    solution: 'A dedicated achievement showcase — certifications, competition wins, research publications, sports achievements — visible campus-wide.',
    benefits: ['Student profiles', 'Faculty showcases', 'Department leaderboards', 'Shareable achievements'],
    workflow: ['Student/Faculty submits achievement', 'Admin verifies and publishes', 'Campus feed notification', 'Profile updated automatically'],
    color: 'amber',
  },
  {
    icon: Search,
    name: 'Lost & Found',
    tagline: 'Reunite. Without the chaos.',
    problem: 'Campus lost and found is chaotic — physical boards, WhatsApp broadcasts, and no organized tracking system.',
    solution: 'A digital lost and found platform. Post lost items, browse found items, filter by category and date, and claim directly.',
    benefits: ['Photo uploads', 'Category filtering', 'Claim management', 'Auto-expiry'],
    workflow: ['User posts lost/found item', 'Campus-wide visibility', 'Claimant contacts finder', 'Case resolved & archived'],
    color: 'rose',
  },
  {
    icon: TrendingUp,
    name: 'Reports',
    tagline: 'From data to decisions.',
    problem: 'Reports are generated manually, take days to compile, and are often outdated by the time they\'re reviewed.',
    solution: 'Automated, exportable reports for every stakeholder — from department engagement summaries to placement outcome reports.',
    benefits: ['Auto-generated reports', 'PDF & Excel export', 'Role-specific views', 'Scheduled delivery'],
    workflow: ['System collects platform data', 'Reports generated on schedule', 'Stakeholders receive email', 'Export and archive available'],
    color: 'cyan',
  },
  {
    icon: Users,
    name: 'Club Management',
    tagline: 'Run your club like a pro.',
    problem: 'Club management is fragmented: membership lists in Excel, events on WhatsApp, accounts in a notebook.',
    solution: 'Full lifecycle club management: digital membership, role assignments, event tools, communication, and financial tracking.',
    benefits: ['Membership management', 'Role assignments', 'Event tools', 'Club analytics'],
    workflow: ['Club admin configures club', 'Students apply/join', 'Events and notices managed', 'Advisor sees full dashboard'],
    color: 'emerald',
  },
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

export default function FeaturesPage() {
  return (
    <div className="overflow-hidden pt-16">
      {/* Hero */}
      <section className="relative py-24 mesh-gradient">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                <BarChart3 className="w-3.5 h-3.5" />
                Platform Features
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Features built for
              <br />
              <span className="gradient-text">real campus problems.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Every feature in Campus Connect was designed to solve a specific, real problem observed in Indian educational institutions. No bloat. No unnecessary complexity.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Feature Quick Nav */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {features.map(({ name, color }) => (
              <a
                key={name}
                href={`#${name.toLowerCase().replace(/[^a-z]/g, '-')}`}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${colorMap[color]} border text-xs font-medium hover:opacity-80 transition-opacity whitespace-nowrap`}
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <div>
        {features.map(({ icon: Icon, name, tagline, problem, solution, benefits, workflow, color }, idx) => (
          <section
            key={name}
            id={name.toLowerCase().replace(/[^a-z]/g, '-')}
            className={`py-24 ${idx % 2 === 0 ? 'bg-white' : 'section-bg'}`}
          >
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={stagger}
                className="grid lg:grid-cols-2 gap-16 items-start"
              >
                <motion.div variants={fadeUp} className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center gap-2 w-12 h-12 rounded-2xl ${colorMap[color]} border justify-center mb-5`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-4xl font-bold text-slate-900 mb-2">{name}</h2>
                  <p className="text-xl font-medium text-slate-500 mb-6 italic">{tagline}</p>

                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">The Problem</h4>
                    <p className="text-slate-500 leading-relaxed text-sm p-4 rounded-xl bg-red-50 border border-red-100">{problem}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Our Solution</h4>
                    <p className="text-slate-600 leading-relaxed text-sm p-4 rounded-xl bg-blue-50 border border-blue-100">{solution}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Key Benefits</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {benefits.map((b) => (
                        <div key={b} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                  {/* Workflow */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                    <div className="flex items-center gap-2 mb-5">
                      <Icon className="w-5 h-5 text-blue-400" />
                      <span className="font-semibold text-sm">{name} Workflow</span>
                    </div>
                    <div className="space-y-3">
                      {workflow.map((step, i) => (
                        <div key={step} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-600/30 border border-blue-500/30 text-blue-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {i + 1}
                          </div>
                          <p className="text-sm text-slate-300 leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <Link to="/book-demo" className="btn-primary w-full justify-center">
                      See {name} Live
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Want to see all features live?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-blue-100 mb-10 max-w-xl mx-auto">
              Book a 30-minute demo and we'll walk through every feature relevant to your institution.
            </motion.p>
            <motion.div variants={fadeUp} className="flex justify-center gap-4">
              <Link to="/book-demo" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all shadow-lg inline-flex items-center gap-2">
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

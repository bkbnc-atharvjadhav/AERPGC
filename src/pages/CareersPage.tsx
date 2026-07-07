import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Zap, Users, Globe, Heart, Lightbulb,
  Code2, BarChart3, Briefcase, BookOpen, CheckCircle, ChevronRight
} from 'lucide-react';
import { fadeUp, stagger, viewportConfig } from '../utils/animations';

const openRoles = [
  { title: 'Frontend Developer (React)', type: 'Internship', location: 'Remote', dept: 'Engineering', desc: 'Build beautiful, performant UI components and features for the Campus Connect platform using React and TypeScript.' },
  { title: 'UI/UX Designer', type: 'Internship', location: 'Remote', dept: 'Design', desc: 'Design user experiences for students, faculty, and administrators. Shape the visual language of India\'s campus platform.' },
  { title: 'Backend Developer (Supabase)', type: 'Internship', location: 'Remote', dept: 'Engineering', desc: 'Design and build scalable API services, database schemas, and Supabase edge functions for the platform backend.' },
  { title: 'Campus Relations Manager', type: 'Part-Time', location: 'Hybrid', dept: 'Growth', desc: 'Build relationships with educational institutions. Demonstrate value, onboard institutions, and gather feedback.' },
  { title: 'AI/ML Developer', type: 'Internship', location: 'Remote', dept: 'Engineering', desc: 'Integrate AI capabilities — smart notifications, analytics insights, content intelligence — into the platform.' },
  { title: 'Content & Documentation', type: 'Internship', location: 'Remote', dept: 'Marketing', desc: 'Create blog posts, help documentation, case studies, and product announcements that reflect the Campus Connect brand.' },
];

const benefits = [
  { icon: Globe, title: 'Fully Remote', desc: 'Work from anywhere. We care about output and impact, not where you sit.' },
  { icon: Lightbulb, title: 'Real Responsibility', desc: 'No busy work. You\'ll own features, make decisions, and see your work used by real institutions.' },
  { icon: Code2, title: 'Modern Tech Stack', desc: 'React, TypeScript, Supabase, Cloudflare, OpenAI. The best tools in modern software.' },
  { icon: Users, title: 'Mission-Driven Team', desc: 'Work on something that genuinely improves education. Not just another SaaS company.' },
  { icon: Heart, title: 'Flexible Hours', desc: 'We care about deep work, not meetings. Build your best work on your own schedule.' },
  { icon: BarChart3, title: 'Grow Fast', desc: 'Early team members grow into leadership roles. Build your career alongside the product.' },
];

const hiringProcess = [
  { step: '01', title: 'Apply', desc: 'Send us a brief application — no long forms. Tell us who you are and what you want to build.' },
  { step: '02', title: 'Intro Call', desc: 'A casual 20-minute conversation to understand your background and share what we\'re building.' },
  { step: '03', title: 'Take-Home Task', desc: 'A short, paid task that simulates the kind of work you\'d do on the team.' },
  { step: '04', title: 'Team Interview', desc: 'Meet the team. Ask anything. See the codebase. Understand the full picture.' },
  { step: '05', title: 'Offer', desc: 'Fast decision. Clear offer. Onboard in days, not weeks.' },
];

export default function CareersPage() {
  return (
    <div className="overflow-hidden pt-16">
      {/* Hero */}
      <section className="relative py-24 mesh-gradient">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-500/6 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl">
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                <Zap className="w-3.5 h-3.5" />
                Join the Team
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Build the future
              <br />
              <span className="gradient-text">of campus life.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-500 max-w-2xl leading-relaxed mb-10">
              Campus Connect is at the beginning of something big. We're looking for passionate builders who want to create technology that genuinely improves education in India.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-6">
              {[
                { label: 'Remote-first', icon: Globe },
                { label: 'Internship & Part-time', icon: Briefcase },
                { label: 'Mission-driven', icon: Heart },
              ].map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-2 text-slate-600 font-medium">
                  <Icon className="w-4 h-4 text-blue-600" />
                  {label}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">Why Campus Connect</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Work on something
              <br />
              <span className="gradient-text">that actually matters.</span>
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp} className="group p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 section-bg">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">Open Positions</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Find your role.
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="space-y-4">
            {openRoles.map(({ title, type, location, dept, desc }) => (
              <motion.div key={title} variants={fadeUp} className="group p-6 rounded-2xl bg-white border border-slate-100 hover:border-blue-100 hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">{dept}</span>
                      <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">{type}</span>
                      <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">{location}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                  <Link
                    to="/contact"
                    className="shrink-0 btn-secondary text-sm py-2 px-4 self-start"
                  >
                    Apply Now
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp} className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <p className="text-slate-500 mb-4">Don't see a role that fits? We always welcome exceptional people.</p>
            <Link to="/contact" className="btn-secondary">
              Send an Open Application
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">Hiring Process</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Simple. Fast. Human.
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid sm:grid-cols-5 gap-4">
            {hiringProcess.map(({ step, title, desc }) => (
              <motion.div key={step} variants={fadeUp} className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-sm flex items-center justify-center mx-auto mb-3">
                  {step}
                </div>
                <h4 className="font-semibold text-slate-900 mb-2 text-sm">{title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp}>
              <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">Culture</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
                Life at
                <br />
                <span className="gradient-text">Campus Connect.</span>
              </h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>We are a small, focused team with a big mission. Every person who joins Campus Connect directly shapes the product, the culture, and the direction of the company.</p>
                <p>We work asynchronously, communicate clearly, and trust each other completely. We don't care where you work. We care about what you build.</p>
                <p>Most of us are students or recent graduates. We understand the urgency of impact. We move fast, ship often, and learn from everything.</p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  'Work on real features used by real institutions',
                  'Your GitHub contributions will matter',
                  'Fast-track growth for performers',
                  'Internship certificates and Letters of Recommendation',
                  'Be part of building something historic',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              {[
                { q: 'Do I need prior experience?', a: 'Not necessarily. We value passion, learning ability, and genuine interest more than years of experience. If you can demonstrate skill and drive, apply.' },
                { q: 'Is it paid?', a: 'Most internship roles are unpaid initially but come with fast-track paths to paid roles as the platform grows. Performance-based transitions happen within 3-6 months.' },
                { q: 'How much time commitment?', a: 'Roughly 15-25 hours per week for internships. We work asynchronously so your schedule is flexible.' },
                { q: 'Will I get a certificate?', a: 'Yes. All contributors receive certificates, LinkedIn recommendations, and detailed Letters of Recommendation for their academic or career applications.' },
              ].map(({ q, a }) => (
                <div key={q} className="p-5 rounded-2xl bg-white border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm">{q}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to build
              <br />
              the future of campuses?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-blue-100 mb-10 max-w-xl mx-auto">
              Join a team that is building India's next-generation campus platform — and making a real difference in education.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2">
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

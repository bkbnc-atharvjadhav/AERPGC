import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, Calendar, Users, Shield,
  BarChart3, Zap, Clock, Building2
} from 'lucide-react';
import { fadeUp, stagger, viewportConfig } from '../utils/animations';

export default function BookDemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', institution: '', role: '', size: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="overflow-hidden pt-16">
      {/* Hero */}
      <section className="relative py-20 mesh-gradient">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                <Calendar className="w-3.5 h-3.5" />
                Book a Demo
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              See Campus Connect
              <br />
              <span className="gradient-text">live in 30 minutes.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              No slides. No generic walkthrough. A personalized demo built around your institution's specific needs and challenges.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { icon: Clock, label: '30-minute session' },
              { icon: Users, label: 'Personalized to your institution' },
              { icon: Zap, label: 'No commitment required' },
              { icon: Shield, label: 'Zero sales pressure' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                <Icon className="w-4 h-4 text-blue-600" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp} className="lg:col-span-3">
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-2">Request your demo</h2>
              <p className="text-slate-500 mb-8">Fill in the form and we'll schedule a session at your convenience.</p>

              {submitted ? (
                <div className="p-10 rounded-2xl bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-100 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">Demo requested!</h3>
                  <p className="text-slate-500 mb-6 max-w-sm mx-auto">
                    We'll reach out within 24 hours to confirm your demo time. Looking forward to meeting you!
                  </p>
                  <Link to="/" className="btn-secondary inline-flex">
                    Back to Home
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                        placeholder="you@institution.edu.in"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Institution Name *</label>
                    <input
                      type="text"
                      required
                      value={form.institution}
                      onChange={(e) => setForm(p => ({ ...p, institution: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                      placeholder="College or University name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Your Role *</label>
                      <select
                        required
                        value={form.role}
                        onChange={(e) => setForm(p => ({ ...p, role: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm bg-white"
                      >
                        <option value="">Select your role</option>
                        <option>Principal / Director</option>
                        <option>HOD / Dean</option>
                        <option>Faculty</option>
                        <option>Placement Officer</option>
                        <option>IT Administrator</option>
                        <option>Management / Trustee</option>
                        <option>Student</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Institution Size</label>
                      <select
                        value={form.size}
                        onChange={(e) => setForm(p => ({ ...p, size: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm bg-white"
                      >
                        <option value="">Select size</option>
                        <option>Under 500 students</option>
                        <option>500 – 1,000 students</option>
                        <option>1,000 – 3,000 students</option>
                        <option>3,000 – 10,000 students</option>
                        <option>Over 10,000 students</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm(p => ({ ...p, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
                    Request My Demo
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    By submitting, you agree to our <Link to="/privacy" className="text-blue-600">Privacy Policy</Link>. We will never share your data.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp} className="lg:col-span-2 space-y-6">
              {/* What you'll see */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-4">What you'll see in the demo</h3>
                <ul className="space-y-3">
                  {[
                    'Live platform walkthrough tailored to your role',
                    'Role-based dashboard for your institution type',
                    'How announcements, events and clubs work',
                    'Placement management features',
                    'AI insights and analytics dashboard',
                    'Security and data privacy overview',
                    'Implementation and onboarding process',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: '30 min', label: 'Demo Duration', icon: Clock },
                  { value: '1 day', label: 'Response Time', icon: Zap },
                  { value: '0', label: 'Commitments', icon: Shield },
                  { value: '100%', label: 'Personalized', icon: Users },
                ].map(({ value, label, icon: Icon }) => (
                  <div key={label} className="p-4 rounded-xl bg-white border border-slate-100 text-center">
                    <Icon className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                    <div className="font-display font-bold text-slate-900 text-lg">{value}</div>
                    <div className="text-xs text-slate-400">{label}</div>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <div className="p-6 rounded-2xl bg-white border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-4 text-sm">Common Questions</h3>
                <div className="space-y-4">
                  {[
                    { q: 'How long does it take to get started?', a: 'Most institutions are up and running within 2-5 business days after the demo.' },
                    { q: 'Is there a contract or minimum term?', a: 'No long-term contracts. We believe in earning your trust month by month.' },
                    { q: 'Can multiple people join the demo?', a: 'Yes! We encourage bringing your team — principal, HOD, placement officer, IT admin.' },
                  ].map(({ q, a }) => (
                    <div key={q}>
                      <p className="text-sm font-semibold text-slate-800 mb-1">{q}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Process */}
      <section className="py-24 section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">The Process</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl font-bold text-slate-900 mt-4">
              From request to live — in days.
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid sm:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Submit Request', desc: 'Fill in the form above with your institution details and role.' },
              { step: '2', title: 'Confirmation', desc: 'We confirm your demo slot within 24 hours via email.' },
              { step: '3', title: 'Live Demo', desc: 'A personalized 30-minute walkthrough of the platform with your team.' },
              { step: '4', title: 'Get Started', desc: 'We design your implementation plan and onboard your institution.' },
            ].map(({ step, title, desc }) => (
              <motion.div key={step} variants={fadeUp} className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center mx-auto mb-4">
                  {step}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Institutions */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm text-slate-400 uppercase tracking-widest font-medium mb-8">
              Founding Partner
            </motion.p>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-slate-200 bg-slate-50">
              <Building2 className="w-6 h-6 text-blue-500" />
              <span className="font-semibold text-slate-700">B. K. Birla Night College, Kalyan</span>
              <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">Founding Partner</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

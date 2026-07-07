import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle,
  Building2, Users, Zap, MessageSquare, Calendar
} from 'lucide-react';
import { fadeUp, stagger, viewportConfig } from '../utils/animations';

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', institution: '', role: '', message: '', submitted: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, submitted: true }));
  };

  return (
    <div className="overflow-hidden pt-16">
      {/* Hero */}
      <section className="relative py-24 mesh-gradient">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-500/6 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                <MessageSquare className="w-3.5 h-3.5" />
                Get In Touch
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Let's start a
              <br />
              <span className="gradient-text">conversation.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Whether you want to see a demo, have a question about the platform, or want to explore a partnership — we're here.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Mail, label: 'Email Us', value: 'hello@campusconnect.in', sub: 'We reply within 24 hours', href: 'mailto:hello@campusconnect.in' },
              { icon: Phone, label: 'Call Us', value: '+91 88888 88888', sub: 'Mon–Sat, 10AM–6PM IST', href: 'tel:+918888888888' },
              { icon: MapPin, label: 'Location', value: 'Kalyan, Maharashtra', sub: 'B. K. Birla Night College', href: '#map' },
              { icon: Clock, label: 'Support Hours', value: '10AM – 6PM', sub: 'Monday to Saturday IST', href: '#' },
            ].map(({ icon: Icon, label, value, sub, href }) => (
              <motion.a
                key={label}
                href={href}
                variants={fadeUp}
                className="group p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:shadow-md transition-all block"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-xs text-slate-400 font-medium mb-1">{label}</div>
                <div className="font-semibold text-slate-900 text-sm mb-0.5">{value}</div>
                <div className="text-xs text-slate-400">{sub}</div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp} className="lg:col-span-3">
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-2">Send us a message</h2>
              <p className="text-slate-500 mb-8">Tell us about your institution and what you're looking to achieve.</p>

              {formState.submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-100 text-center">
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Message received!</h3>
                  <p className="text-slate-500">We'll be in touch within 24 hours. In the meantime, feel free to <Link to="/book-demo" className="text-blue-600 font-medium">book a demo</Link> directly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                        placeholder="you@institution.edu.in"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="institution" className="block text-sm font-medium text-slate-700 mb-1.5">Institution Name</label>
                    <input
                      id="institution"
                      type="text"
                      value={formState.institution}
                      onChange={(e) => setFormState(prev => ({ ...prev, institution: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                      placeholder="College or University name"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-1.5">Your Role</label>
                    <select
                      id="role"
                      value={formState.role}
                      onChange={(e) => setFormState(prev => ({ ...prev, role: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm bg-white"
                    >
                      <option value="">Select your role</option>
                      <option>Principal / Director</option>
                      <option>HOD / Dean</option>
                      <option>Faculty / Lecturer</option>
                      <option>Placement Officer</option>
                      <option>Student</option>
                      <option>Management / Trustee</option>
                      <option>IT Administrator</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Message *</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm resize-none"
                      placeholder="Tell us about your campus, your challenges, and what you hope Campus Connect can help with..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center py-3.5">
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-slate-400 text-center">By submitting, you agree to our <Link to="/privacy" className="text-blue-600">Privacy Policy</Link>.</p>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp} className="lg:col-span-2 space-y-6">
              {/* Book Demo CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                <Calendar className="w-8 h-8 text-blue-200 mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">Prefer a demo?</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-4">
                  Book a 30-minute personalized walkthrough and see Campus Connect in action for your institution.
                </p>
                <Link to="/book-demo" className="bg-white text-blue-600 font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-all inline-flex items-center gap-2 text-sm">
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* What happens next */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-4">What happens next?</h3>
                <div className="space-y-4">
                  {[
                    { step: '1', text: 'We review your message within 24 hours' },
                    { step: '2', text: 'Our team reaches out to understand your needs' },
                    { step: '3', text: 'We schedule a personalized demo' },
                    { step: '4', text: 'We design an implementation plan for your campus' },
                  ].map(({ step, text }) => (
                    <div key={step} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {step}
                      </div>
                      <p className="text-sm text-slate-600">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* For Roles */}
              <div className="p-6 rounded-2xl bg-white border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-4 text-sm">Who should contact us?</h3>
                <div className="space-y-2.5">
                  {[
                    { icon: Building2, label: 'Principals & Management' },
                    { icon: Users, label: 'HODs & Department Coordinators' },
                    { icon: Zap, label: 'Placement Officers' },
                    { icon: MessageSquare, label: 'IT Administrators' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 text-sm text-slate-600">
                      <Icon className="w-4 h-4 text-blue-400" />
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp} id="map" className="rounded-2xl bg-slate-200 overflow-hidden" style={{ height: '300px' }}>
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
              <MapPin className="w-10 h-10 text-blue-400 mb-3" />
              <p className="font-semibold text-slate-700">B. K. Birla Night College</p>
              <p className="text-slate-400 text-sm">Kalyan, Maharashtra, India</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-12">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">FAQ</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-slate-900 mt-4">
              Quick answers.
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="space-y-4">
            {[
              { q: 'How quickly do you respond?', a: 'We aim to respond to all inquiries within 24 business hours. For demo requests, we typically respond within a few hours.' },
              { q: 'Is there a cost to book a demo?', a: 'Absolutely not. The demo is completely free, with no commitment or pressure. We just want to show you what Campus Connect can do.' },
              { q: 'Can you customize the platform for our institution?', a: 'Yes. Campus Connect is designed to be configured for different institutions. During onboarding, we set up your institution-specific modules, roles, and branding.' },
              { q: 'Do you offer training for faculty and staff?', a: 'Yes. All implementations include an onboarding session for administrators, and training materials for faculty and students. The platform is designed to be self-explanatory, but we support every step.' },
            ].map(({ q, a }) => (
              <motion.div key={q} variants={fadeUp} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-2 flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-xs flex items-center justify-center shrink-0 mt-0.5">Q</span>
                  {q}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed pl-7">{a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

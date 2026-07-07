import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Building2, ExternalLink } from 'lucide-react';
import { fadeUp, stagger, viewportConfig } from '../utils/animations';

export default function TeamPage() {
  return (
    <div className="overflow-hidden pt-16">
      {/* Hero */}
      <section className="relative py-24 mesh-gradient">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                <Users className="w-3.5 h-3.5" />
                Our Team
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Built by people who
              <br />
              <span className="gradient-text">lived the problem.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Campus Connect was built by students and developers from B. K. Birla Night College who experienced firsthand how broken campus communication was.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-12">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">Founder & Builder</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl font-bold text-slate-900 mt-4">
              Meet the founder.
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp} className="grid md:grid-cols-5 gap-10 items-center max-w-4xl mx-auto">
            {/* Avatar placeholder */}
            <div className="md:col-span-2 flex justify-center">
              <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-blue-500/20">
                <Users className="w-20 h-20 text-white/80" />
              </div>
            </div>

            <div className="md:col-span-3">
              <h3 className="font-display text-3xl font-bold text-slate-900 mb-2">Atharv Amol Jadhav</h3>
              <p className="text-blue-600 font-semibold text-lg mb-1">Founder & Lead Developer</p>
              <p className="text-slate-400 text-sm mb-5">Department of Computer Science, B. K. Birla Night College</p>

              <div className="space-y-3 text-slate-500 leading-relaxed text-sm mb-6">
                <p>
                  Atharv is a computer science student who built Campus Connect to solve a problem he experienced firsthand — campus communication was completely broken and no tool existed that was designed for Indian educational institutions.
                </p>
                <p>
                  He designed and built the entire platform from the ground up, choosing modern tools like React, Supabase, and Cloudflare to create something that feels as polished as products from top tech companies — but built specifically for Indian campuses.
                </p>
                <p>
                  His vision is for Campus Connect to become the operating system of every campus in India — connecting students, faculty, and administration on a single, intelligent platform.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium">React</span>
                <span className="px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium">Supabase</span>
                <span className="px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-medium">Cloudflare</span>
                <span className="px-3 py-1.5 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-xs font-medium">TypeScript</span>
                <span className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium">OpenAI</span>
              </div>

              <div className="mt-5">
                <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Team */}
      <section className="py-24 section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">Growing Team</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Building the team.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-slate-500 max-w-xl mx-auto">
              We're actively hiring passionate builders. The roles below will be filled by exceptional people who want to build India's campus platform.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { role: 'Frontend Engineer', dept: 'Engineering', status: 'Hiring' },
              { role: 'UI/UX Designer', dept: 'Design', status: 'Hiring' },
              { role: 'Backend Developer', dept: 'Engineering', status: 'Hiring' },
              { role: 'Product Manager', dept: 'Product', status: 'Future' },
              { role: 'Campus Relations Lead', dept: 'Growth', status: 'Hiring' },
              { role: 'AI/ML Engineer', dept: 'Engineering', status: 'Future' },
              { role: 'Content Creator', dept: 'Marketing', status: 'Hiring' },
              { role: 'Advisor — Education', dept: 'Advisory', status: 'Future' },
              { role: 'Advisor — Technology', dept: 'Advisory', status: 'Future' },
            ].map(({ role, dept, status }) => (
              <motion.div key={role} variants={fadeUp} className="group p-5 rounded-2xl bg-white border border-slate-100 hover:border-blue-100 hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-3 border-2 border-dashed border-slate-200">
                  <Users className="w-5 h-5 text-slate-300" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-slate-900 text-sm">{role}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${status === 'Hiring' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                    {status}
                  </span>
                </div>
                <p className="text-xs text-slate-400">{dept}</p>
                {status === 'Hiring' && (
                  <Link to="/careers" className="mt-3 text-xs text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center gap-1">
                    Apply Now <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founding Institution */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-12">
            <motion.span variants={fadeUp} className="text-sm font-medium text-slate-400 uppercase tracking-widest">Founding Partner</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl font-bold text-slate-900 mt-4">
              Where Campus Connect was born.
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <Building2 className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">B. K. Birla Night College, Kalyan</h3>
            <p className="text-slate-500 mb-4">Kalyan, Maharashtra, India</p>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold">
              Founding Institutional Partner
            </span>
            <p className="text-slate-400 text-sm mt-4 max-w-lg mx-auto">
              Campus Connect was conceptualized, designed, and built from within the Department of Computer Science at B. K. Birla Night College — our founding partner and the institution where every feature has been tested with real users.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Want to join the team?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-blue-100 mb-10 max-w-xl mx-auto">
              We're looking for passionate builders who want to make a difference in Indian education.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/careers" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all shadow-lg inline-flex items-center gap-2">
                View Open Roles
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

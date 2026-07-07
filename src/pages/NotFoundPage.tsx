import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Search } from 'lucide-react';
import { fadeUp, stagger } from '../utils/animations';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen mesh-gradient flex items-center justify-center pt-16">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          {/* Animated 404 */}
          <motion.div variants={fadeUp} className="mb-8">
            <div className="relative inline-block">
              <div className="text-[180px] md:text-[240px] font-display font-extrabold leading-none select-none">
                <span className="gradient-text">4</span>
                <span className="text-slate-100">0</span>
                <span className="gradient-text">4</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-2xl shadow-blue-500/30 rotate-12 animate-pulse">
                  <Search className="w-12 h-12 md:w-16 md:h-16 text-white" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Page not found.
          </motion.h1>

          <motion.p variants={fadeUp} className="text-xl text-slate-500 mb-10 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back to campus.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="btn-primary text-base px-7 py-3.5">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link to="/contact" className="btn-secondary text-base px-7 py-3.5">
              Contact Support
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 grid sm:grid-cols-3 gap-4 text-left">
            {[
              { label: 'Platform', href: '/platform', desc: 'Explore our platform' },
              { label: 'Features', href: '/features', desc: 'See all features' },
              { label: 'Book Demo', href: '/book-demo', desc: 'Get a walkthrough' },
            ].map(({ label, href, desc }) => (
              <Link key={label} to={href} className="p-4 rounded-2xl bg-white border border-slate-100 hover:border-blue-100 hover:shadow-sm transition-all group">
                <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors text-sm mb-0.5">{label}</div>
                <div className="text-xs text-slate-400">{desc}</div>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

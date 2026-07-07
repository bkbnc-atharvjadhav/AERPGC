import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { fadeUp, stagger, viewportConfig } from '../utils/animations';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title = 'Ready to transform your campus?',
  subtitle = 'Join the institutions building the future of campus experience. Book a personalized demo — no commitment required.',
  primaryLabel = 'Book a Free Demo',
  primaryHref = '/book-demo',
  secondaryLabel = 'Contact Sales',
  secondaryHref = '/contact',
}: CTASectionProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger}>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={primaryHref}
              className="bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2 text-base"
            >
              {primaryLabel}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to={secondaryHref}
              className="text-white border border-white/30 font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all inline-flex items-center gap-2 text-base"
            >
              {secondaryLabel}
            </Link>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-6 text-blue-200 text-sm">
            Free demo • No credit card • Setup in days
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

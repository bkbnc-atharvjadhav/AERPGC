import { motion } from 'framer-motion';
import { Zap, CheckCircle } from 'lucide-react';
import { fadeUp, stagger, viewportConfig } from '../utils/animations';

const brandColors = [
  { name: 'Primary', hex: '#2563EB', tailwind: 'blue-600' },
  { name: 'Secondary', hex: '#4F46E5', tailwind: 'indigo-600' },
  { name: 'Accent', hex: '#06B6D4', tailwind: 'cyan-500' },
  { name: 'Dark', hex: '#0B1120', tailwind: 'slate-950' },
  { name: 'Heading', hex: '#0F172A', tailwind: 'slate-900' },
  { name: 'Body', hex: '#475569', tailwind: 'slate-600' },
  { name: 'Muted', hex: '#94A3B8', tailwind: 'slate-400' },
  { name: 'Border', hex: '#E2E8F0', tailwind: 'slate-200' },
];

const dosList = [
  'Use the official logo files only',
  'Maintain the gradient direction in the logo',
  'Ensure proper contrast on all backgrounds',
  'Use Inter for body text and Manrope for headings',
  'Keep adequate whitespace around the logo',
  'Use approved color combinations only',
];

const dontsList = [
  'Do not stretch, distort or rotate the logo',
  'Do not use unofficial colors',
  'Do not add shadows or effects to the logo',
  'Do not recreate the logo in other fonts',
  'Do not place the logo on busy backgrounds',
  'Do not use Campus Connect as one word',
];

export default function BrandPage() {
  return (
    <div className="overflow-hidden pt-16">
      {/* Hero */}
      <section className="relative py-24 mesh-gradient">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Brand Assets &
              <br />
              <span className="gradient-text">Guidelines.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-500 max-w-xl mx-auto">
              Use these assets to represent Campus Connect accurately and consistently.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Logo */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-slate-900">The Logo</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { bg: 'bg-white border border-slate-200', textColor: 'text-slate-900', accentColor: 'text-blue-600', iconBg: 'from-blue-600 to-indigo-600', label: 'Light Mode' },
              { bg: 'bg-slate-900', textColor: 'text-white', accentColor: 'text-blue-400', iconBg: 'from-blue-500 to-indigo-500', label: 'Dark Mode' },
              { bg: 'bg-gradient-to-br from-blue-600 to-indigo-700', textColor: 'text-white', accentColor: 'text-blue-200', iconBg: 'from-white/20 to-white/10', label: 'Gradient' },
            ].map(({ bg, textColor, accentColor, iconBg, label }) => (
              <motion.div key={label} variants={fadeUp} className={`${bg} rounded-2xl p-10 flex flex-col items-center gap-6`}>
                <div className="flex items-center gap-2.5">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${iconBg} flex items-center justify-center`}>
                    <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <span className={`font-display font-bold text-xl ${textColor}`}>
                    Campus<span className={accentColor}>Connect</span>
                  </span>
                </div>
                <span className={`text-xs opacity-60 ${textColor}`}>{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Colors */}
      <section className="py-24 section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-slate-900">Color Palette</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brandColors.map(({ name, hex, tailwind }) => (
              <motion.div key={name} variants={fadeUp} className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
                <div className="h-24" style={{ backgroundColor: hex }} />
                <div className="p-4">
                  <p className="font-semibold text-slate-900 text-sm">{name}</p>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">{hex}</p>
                  <p className="text-xs text-slate-300 font-mono">{tailwind}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-slate-900">Typography</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-xs text-slate-400 font-medium uppercase tracking-widest mb-4">Display Font</div>
              <div className="font-display text-5xl font-bold text-slate-900 mb-2">Manrope</div>
              <p className="text-slate-500 text-sm">Used for headings, hero text, and display copy. Weights: 700, 800, 900.</p>
              <div className="mt-4 space-y-2">
                <div className="font-display font-extrabold text-3xl text-slate-900">Hero Heading</div>
                <div className="font-display font-bold text-2xl text-slate-900">Section Heading</div>
                <div className="font-display font-semibold text-xl text-slate-900">Card Heading</div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-xs text-slate-400 font-medium uppercase tracking-widest mb-4">Body Font</div>
              <div className="font-sans text-5xl font-bold text-slate-900 mb-2">Inter</div>
              <p className="text-slate-500 text-sm">Used for body text, UI elements, and all secondary typography. Weights: 400, 500, 600.</p>
              <div className="mt-4 space-y-2">
                <div className="text-base text-slate-700 leading-relaxed">Body text — readable and clear.</div>
                <div className="text-sm text-slate-500">Secondary text — supporting information.</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest">Label Text — categories and tags.</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Dos & Don'ts */}
      <section className="py-24 section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-slate-900">Usage Guidelines</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} className="p-8 rounded-2xl bg-emerald-50 border border-emerald-100">
              <h3 className="font-display text-xl font-bold text-emerald-800 mb-5">Do</h3>
              <ul className="space-y-3">
                {dosList.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="p-8 rounded-2xl bg-red-50 border border-red-100">
              <h3 className="font-display text-xl font-bold text-red-800 mb-5">Don't</h3>
              <ul className="space-y-3">
                {dontsList.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="w-4 h-4 rounded-full bg-red-200 text-red-600 text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

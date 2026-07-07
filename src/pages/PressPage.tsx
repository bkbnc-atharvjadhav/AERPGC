import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail, Users, Globe, Building2 } from 'lucide-react';
import { fadeUp, stagger, viewportConfig } from '../utils/animations';

const brandColors = [
  { name: 'Primary Blue', hex: '#2563EB', usage: 'Main brand color, CTAs, links' },
  { name: 'Secondary Indigo', hex: '#4F46E5', usage: 'Gradients, accents, hover states' },
  { name: 'Accent Cyan', hex: '#06B6D4', usage: 'Highlights, feature accents' },
  { name: 'Dark', hex: '#0B1120', usage: 'Dark mode, footer background' },
  { name: 'Heading', hex: '#0F172A', usage: 'All headings and titles' },
  { name: 'Body Text', hex: '#475569', usage: 'Body copy and descriptions' },
];

const companyFacts = [
  { label: 'Founded', value: '2024' },
  { label: 'Headquarters', value: 'Kalyan, Maharashtra, India' },
  { label: 'Category', value: 'EdTech / SaaS' },
  { label: 'Platform Type', value: 'Digital Campus Experience Platform' },
  { label: 'Founding Partner', value: 'B. K. Birla Night College' },
  { label: 'Technology Stack', value: 'React, Supabase, Cloudflare, OpenAI' },
];

export default function PressPage() {
  return (
    <div className="overflow-hidden pt-16">
      {/* Hero */}
      <section className="relative py-24 mesh-gradient">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                <Globe className="w-3.5 h-3.5" />
                Press & Media Kit
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Press &
              <br />
              <span className="gradient-text">Media Kit.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-500 max-w-xl mx-auto leading-relaxed">
              Everything journalists, bloggers, and media outlets need to cover Campus Connect accurately.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid lg:grid-cols-2 gap-16">
            <motion.div variants={fadeUp}>
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">Company Overview</h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>
                  Campus Connect is a Digital Campus Experience Platform built for Indian educational institutions. It connects students, faculty, departments, clubs, alumni, placement cell, and administration on a single, intelligent platform.
                </p>
                <p>
                  Founded in 2024 by a team from the Department of Computer Science at B. K. Birla Night College, Kalyan, Campus Connect was built to solve a real problem observed firsthand: campus communication was completely fragmented.
                </p>
                <p>
                  The platform is built on modern technology — React, Supabase, Cloudflare, and OpenAI — and is designed to feel like a premium consumer application while delivering enterprise-grade security and reliability.
                </p>
                <p>
                  Campus Connect's mission is to make every campus in India a connected, informed, and engaged community — where no student misses an opportunity and every decision is backed by data.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-4">Key Facts</h3>
              <div className="grid grid-cols-2 gap-3">
                {companyFacts.map(({ label, value }) => (
                  <div key={label} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-xs text-slate-400 font-medium mb-1">{label}</div>
                    <div className="text-sm font-semibold text-slate-900">{value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-24 section-bg">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-slate-900">Founder</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp} className="grid md:grid-cols-3 gap-8 items-start">
            <div className="flex justify-center">
              <div className="w-36 h-36 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <Users className="w-16 h-16 text-white/70" />
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">Atharv Amol Jadhav</h3>
              <p className="text-blue-600 font-medium mb-4">Founder & Lead Developer, Campus Connect</p>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Atharv Amol Jadhav is a computer science student and developer from B. K. Birla Night College, Kalyan, who built Campus Connect to solve a problem he experienced firsthand. Observing how campus communication was completely fragmented — WhatsApp groups, paper notices, disconnected portals — he designed and built a unified platform that puts every campus stakeholder on one intelligent system.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                His vision is for Campus Connect to become India's leading Digital Campus Experience Platform — the operating system that every college and university uses to connect their entire community.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Colors */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-slate-900">Brand Colors</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {brandColors.map(({ name, hex, usage }) => (
              <motion.div key={name} variants={fadeUp} className="overflow-hidden rounded-2xl border border-slate-100">
                <div className="h-20" style={{ backgroundColor: hex }} />
                <div className="p-4 bg-white">
                  <div className="font-semibold text-slate-900 text-sm mb-0.5">{name}</div>
                  <div className="text-xs text-slate-400 font-mono mb-1">{hex}</div>
                  <div className="text-xs text-slate-400">{usage}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Logo Assets */}
      <section className="py-24 section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-slate-900 mb-4">Logo</motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500">Please use only approved logo variants. Do not alter colors, proportions, or spacing.</motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Light Background', bg: 'bg-white border border-slate-200' },
              { name: 'Dark Background', bg: 'bg-slate-900' },
              { name: 'Gradient Background', bg: 'bg-gradient-to-br from-blue-600 to-indigo-700' },
            ].map(({ name, bg }) => (
              <motion.div key={name} variants={fadeUp} className={`rounded-2xl ${bg} p-10 flex flex-col items-center gap-4`}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-white" />
                  </div>
                  <span className={`font-display font-bold text-lg ${name !== 'Light Background' ? 'text-white' : 'text-slate-900'}`}>
                    Campus<span className={name !== 'Light Background' ? 'text-blue-300' : 'text-blue-600'}>Connect</span>
                  </span>
                </div>
                <span className={`text-xs ${name !== 'Light Background' ? 'text-white/60' : 'text-slate-400'}`}>{name}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp} className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
              <Download className="w-4 h-4" />
              Logo downloads available upon request — contact press@campusconnect.in
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-slate-900 mb-4">Press Contact</motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 mb-8">
              For media inquiries, interview requests, and press coverage — reach out directly.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:press@campusconnect.in" className="btn-primary">
                <Mail className="w-4 h-4" />
                press@campusconnect.in
              </a>
              <Link to="/contact" className="btn-secondary">
                Contact Form
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

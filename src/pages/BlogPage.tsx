import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar, Clock } from 'lucide-react';
import { fadeUp, stagger, viewportConfig } from '../utils/animations';

const categories = ['All', 'Campus Digital Transformation', 'Higher Education', 'Student Engagement', 'Product Updates', 'Technology'];

const posts = [
  {
    title: 'Why Campus Communication is Failing Students in India',
    excerpt: 'Most college students rely on WhatsApp groups for critical information. This is broken. Here\'s why — and what a better system looks like.',
    category: 'Campus Digital Transformation',
    date: 'January 2025',
    readTime: '5 min read',
    featured: true,
  },
  {
    title: 'The Campus Operating System: What It Is and Why Every Institution Needs One',
    excerpt: 'Beyond portals and ERP systems — the concept of a Campus OS, and how it changes the way institutions function.',
    category: 'Higher Education',
    date: 'January 2025',
    readTime: '7 min read',
    featured: false,
  },
  {
    title: 'How Placement Cells Can Use Technology to Increase Placement Rates',
    excerpt: 'Data-driven placement management isn\'t just for IITs. Here\'s how any college placement cell can operate like a professional recruitment team.',
    category: 'Student Engagement',
    date: 'December 2024',
    readTime: '6 min read',
    featured: false,
  },
  {
    title: 'Digital Attendance: The Case Against Paper Registers',
    excerpt: 'Paper-based attendance is costing institutions thousands of hours annually. Digital attendance isn\'t just convenient — it\'s transformative.',
    category: 'Campus Digital Transformation',
    date: 'December 2024',
    readTime: '4 min read',
    featured: false,
  },
  {
    title: 'Building Campus Connect: Technology Choices and Why We Made Them',
    excerpt: 'React, Supabase, Cloudflare, TypeScript — the technical decisions behind Campus Connect and the philosophy that guided them.',
    category: 'Technology',
    date: 'November 2024',
    readTime: '8 min read',
    featured: false,
  },
  {
    title: 'Announcing Campus Connect: A New Digital Experience for Indian Campuses',
    excerpt: 'Today we\'re sharing what we\'ve been building and why. Campus Connect is live at B. K. Birla Night College — and we\'re just getting started.',
    category: 'Product Updates',
    date: 'November 2024',
    readTime: '3 min read',
    featured: false,
  },
];

export default function BlogPage() {
  const featured = posts.find(p => p.featured);
  const rest = posts.filter(p => !p.featured);

  return (
    <div className="overflow-hidden pt-16">
      {/* Hero */}
      <section className="relative py-24 mesh-gradient">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                <BookOpen className="w-3.5 h-3.5" />
                Blog
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Insights on
              <br />
              <span className="gradient-text">campus transformation.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-500 max-w-xl mx-auto leading-relaxed">
              Thoughts on campus technology, student engagement, placement optimization, and the future of Indian higher education.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button key={cat} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp} className="group p-8 md:p-10 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-lg transition-all cursor-pointer">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-4">
                    Featured Post
                  </span>
                  <h2 className="font-display text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">{featured.title}</h2>
                  <p className="text-slate-500 leading-relaxed mb-5">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{featured.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                  </div>
                </div>
                <div className="hidden md:flex justify-end">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white/60" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Post Grid */}
      <section className="py-16 section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(({ title, excerpt, category, date, readTime }) => (
              <motion.div key={title} variants={fadeUp} className="group p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
                <div className="w-full h-32 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 mb-5 flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-slate-300" />
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">{category}</span>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">{excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span>{date}</span>
                  <span>{readTime}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp} className="text-center mt-12">
            <div className="p-8 rounded-2xl bg-white border border-slate-100">
              <p className="text-slate-500 mb-4">More articles are being published regularly. Subscribe to get notified.</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

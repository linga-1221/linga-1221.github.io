import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative pt-20 overflow-hidden bg-cream dark:bg-navy transition-colors duration-300">
      {/* Giant NK watermark - rotated */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 text-[35vw] font-display text-navy/[0.03] dark:text-cream/[0.03] leading-none select-none pointer-events-none -rotate-12">
        NK
      </div>

      {/* Decorative corner blocks */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-coral/10" />
      <div className="absolute top-0 right-0 w-20 h-20 bg-coral" />
      <div className="absolute bottom-20 right-10 w-8 h-8 border-2 border-coral rotate-45 hidden lg:block" />
      <div className="absolute top-32 left-8 w-4 h-4 bg-coral rotate-45 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative">
        <div className="max-w-5xl">
          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-4 mb-10"
          >
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-coral">Software Engineer</span>
            <span className="w-12 h-[2px] bg-coral" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-navy/30 dark:text-cream/30">B.Tech CSE (AI/ML) · 2026</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <span className="block font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem] leading-[0.82] text-navy dark:text-cream tracking-tighter">
              Kuchivaripalli
            </span>
            <span className="block font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem] leading-[0.82] text-coral italic mt-2 tracking-tighter">
              Nagalinga
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 text-base md:text-lg text-navy/50 dark:text-cream/50 max-w-lg leading-relaxed lg:ml-4"
          >
            Building scalable backend systems, AI-powered applications, automation workflows, APIs, and production-ready engineering solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4 lg:ml-4"
          >
            <a href="#projects" className="group inline-flex items-center gap-3 bg-coral text-cream px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-coral-dark transition-all">
              View Projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="https://github.com/linga-1221" target="_blank" rel="noopener noreferrer" 
               className="inline-flex items-center gap-2 border-2 border-coral text-coral px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-coral hover:text-cream transition-all">
              GitHub
            </a>
            <a href="https://linkedin.com/in/nagalinga-k" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 border-2 border-coral text-coral px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-coral hover:text-cream transition-all">
              LinkedIn
            </a>
          </motion.div>

          <div className="mt-16 lg:mt-20" />
        </div>
      </div>

      {/* Bottom right signature */}
      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-end gap-2">
        <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-navy/20 dark:text-cream/20">Est. 2026</span>
        <div className="w-16 h-[2px] bg-coral" />
      </div>
    </section>
  )
}
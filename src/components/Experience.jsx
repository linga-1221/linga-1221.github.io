import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'KARE Innovation Lab',
    period: 'Jan 2026 – Apr 2026',
    highlights: [
      'Built AI-powered internal tools using FastAPI and LangChain, reducing data processing time by 60%',
      'Designed and deployed REST APIs with automated CI/CD pipelines using Docker & GitHub Actions',
      'Collaborated on NLP-based document classification system using spaCy and scikit-learn',
    ],
  },
  {
    role: 'Open Source Contributor',
    company: 'KARE OSS Hackathon — 1st Place',
    period: 'Oct 2025',
    highlights: [
      'Led a team of 4 to build an AI-driven career recommendation platform from scratch in 48 hours',
      'Implemented semantic search with embeddings and RAG for personalized career matching',
      'Won first place among 200+ competing teams across the university',
    ],
  },
  {
    role: 'Research Assistant (Capstone)',
    company: 'Dept. of CSE — Kalasalingam University',
    period: 'Aug 2025 – Mar 2026',
    highlights: [
      'Published research on AI-powered career recommendation systems via Springer Nature (SmartCom 2026)',
      'Developed full-stack platform (FastAPI + React) with multi-database architecture',
      'Implemented ML pipelines for skill gap analysis and career path prediction using scikit-learn',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-white dark:bg-charcoal relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 lg:mb-20">
          <span className="section-tag">Experience</span>
          <h2 className="section-title">
            Where I've <span className="text-coral italic">worked</span>
          </h2>
          <div className="mt-6 w-16 h-1 bg-coral rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-navy/10 dark:bg-cream/10" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-[-5px] md:left-[19px] top-1.5 w-3 h-3 rounded-full bg-coral border-2 border-white dark:border-charcoal shadow-soft" />

                {/* Content */}
                <div className="bg-cream/50 dark:bg-navy/50 rounded-sm p-6 lg:p-8 border border-navy/10 dark:border-cream/10 hover:shadow-card transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display text-2xl lg:text-3xl text-navy dark:text-cream">{exp.role}</h3>
                      <p className="text-coral font-medium text-sm mt-1">{exp.company}</p>
                    </div>
                    <span className="text-xs font-medium text-navy/40 dark:text-cream/40 tracking-wide whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-navy/60 dark:text-cream/60 text-sm leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-coral flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
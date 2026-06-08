import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 dark:border-cream/10 py-8 bg-cream dark:bg-navy transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display text-xl text-navy dark:text-cream">
            N.K.
          </span>
          <span className="text-xs text-navy/40 dark:text-cream/40">© 2026 Kuchivaripalli Nagalinga · Aspiring Software Engineer · Andhra Pradesh, India</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/linga-1221"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-navy/40 dark:text-cream/40 hover:text-coral transition-colors tracking-wide"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/nagalinga-k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-navy/40 dark:text-cream/40 hover:text-coral transition-colors tracking-wide"
          >
            LinkedIn
          </a>
          <a
            href="mailto:nagakuchivaripalli@gmail.com"
            className="text-xs font-medium text-navy/40 dark:text-cream/40 hover:text-coral transition-colors tracking-wide"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
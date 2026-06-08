import React, { useEffect, useRef, useState } from 'react'

const contactLinks = [
  { label: 'Email', value: 'nagakuchivaripalli@gmail.com', href: 'mailto:nagakuchivaripalli@gmail.com' },
  { label: 'GitHub', value: 'github.com/linga-1221', href: 'https://github.com/linga-1221' },
  { label: 'LinkedIn', value: 'linkedin.com/in/nagalinga-k', href: 'https://linkedin.com/in/nagalinga-k' },
  { label: 'Location', value: 'Tadipatri, Andhra Pradesh — Open to Remote & Relocation', href: null },
]

export default function Contact() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-cream dark:bg-navy transition-colors duration-300" ref={ref}>
      {/* Background block */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-navy dark:bg-charcoal hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Section header */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="lg:col-span-4">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-coral">Contact</span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-navy dark:text-cream leading-[0.9] tracking-tighter">
              Open to<br /><span className="text-coral italic">Work</span>
            </h2>
            <div className="w-24 h-1 bg-coral mt-8" />
          </div>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left - Message */}
          <div className={`lg:col-span-5 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-display text-3xl lg:text-4xl text-navy dark:text-cream leading-tight mb-6">
              Looking for <span className="text-coral italic">opportunities</span> in software engineering, AI/ML, and intelligent backend systems — across India.
            </p>
            <p className="text-navy/60 dark:text-cream/60 leading-relaxed text-sm">
              Interested in backend systems, AI applications, DevOps workflows, machine learning, or scalable engineering solutions? Let's build something great. Open to remote work and relocation.
            </p>
            <div className="mt-10 inline-flex items-center gap-3 border-2 border-navy dark:border-cream/20 px-6 py-4">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-navy dark:text-cream">Available for opportunities</span>
            </div>
          </div>

          {/* Right - Links */}
          <div className={`lg:col-span-6 lg:col-start-7 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="lg:bg-navy lg:dark:bg-charcoal lg:p-12">
              {contactLinks.map((link, i) => (
                <div
                  key={link.label}
                  className={`py-6 flex items-center justify-between ${
                    i === 0 ? 'border-t-2 border-white/20' : ''
                  } border-b border-white/20`}
                >
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-coral mb-1">
                      {link.label}
                    </p>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm font-medium text-cream hover:text-coral transition-colors"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-cream">{link.value}</p>
                    )}
                  </div>
                  {link.href && (
                    <svg className="w-4 h-4 text-coral flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
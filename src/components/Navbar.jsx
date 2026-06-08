import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

function SunIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { href: '#projects', label: 'Work' },
    { href: '#skills', label: 'Stack' },
    { href: '#achievements', label: 'Press' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream/95 backdrop-blur-md border-b border-navy/10 dark:bg-navy/95 dark:border-cream/10' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          <a href="/" className="text-3xl font-display text-navy dark:text-cream tracking-tighter">
            NK<span className="text-coral">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                 className="text-sm font-medium text-navy/50 dark:text-cream/50 hover:text-navy dark:hover:text-cream transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button onClick={toggle} className="p-2 text-navy dark:text-cream hover:text-coral transition-colors" aria-label="Toggle dark mode">
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <a href="https://drive.google.com/uc?export=download&id=14cXr4hdYOsF0L9yY2yWgVCwCai_BYWCJ" target="_blank" rel="noopener noreferrer"
               className="text-sm font-medium text-coral border-2 border-coral px-5 py-2.5 hover:bg-coral hover:text-cream transition-all duration-300">
              Resume ↗
            </a>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button onClick={toggle} className="p-2 text-navy dark:text-cream hover:text-coral transition-colors" aria-label="Toggle dark mode">
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button onClick={() => setMenuOpen(true)} className="text-sm font-medium text-navy dark:text-cream border-2 border-navy dark:border-cream px-4 py-2">
              Menu
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-cream dark:bg-navy flex flex-col">
          <div className="flex items-center justify-between px-6 h-20 border-b border-navy/10 dark:border-cream/10">
            <span className="text-3xl font-display text-navy dark:text-cream tracking-tighter">
              NK<span className="text-coral">.</span>
            </span>
            <button onClick={() => setMenuOpen(false)} className="text-navy dark:text-cream p-2">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-10">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                 className="text-4xl font-display text-navy dark:text-cream hover:text-coral transition-colors"
                 onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="https://drive.google.com/uc?export=download&id=14cXr4hdYOsF0L9yY2yWgVCwCai_BYWCJ" target="_blank" rel="noopener noreferrer"
               className="mt-8 text-sm font-semibold tracking-wider uppercase text-coral border-2 border-coral px-8 py-4 hover:bg-coral hover:text-cream transition-all">
              Download Resume ↗
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
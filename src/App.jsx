import React, { lazy, Suspense } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Achievements = lazy(() => import('./components/Achievements'))
const Experience = lazy(() => import('./components/Experience'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function SectionFallback() {
  return <div className="h-64 flex items-center justify-center"><div className="w-8 h-8 border-2 border-coral border-t-transparent rounded-full animate-spin" /></div>
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-cream dark:bg-navy text-navy dark:text-cream transition-colors duration-300">
        <Navbar />
        <Hero />
        <Suspense fallback={<SectionFallback />}><Projects /></Suspense>
        <Suspense fallback={<SectionFallback />}><Skills /></Suspense>
        <Suspense fallback={<SectionFallback />}><Achievements /></Suspense>
        <Suspense fallback={<SectionFallback />}><Experience /></Suspense>
        <Suspense fallback={<SectionFallback />}><Contact /></Suspense>
        <Suspense fallback={<SectionFallback />}><Footer /></Suspense>
      </div>
    </ThemeProvider>
  )
}
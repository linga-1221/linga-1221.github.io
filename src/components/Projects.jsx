import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    id: '01',
    title: 'Skill Ladder',
    subtitle: 'AI Career Launchpad',
    description: 'Full-stack career development platform with AI-driven resume analysis (PDF parsing, ATS scoring), smart job matching from curated listings, personalized career guidance, proctored mock assessments, in-browser code compiler, and role-based dashboards for job seekers, providers, and admins. Built with multi-service architecture.',
    tags: ['FastAPI', 'React', 'Firebase', 'Python', 'REST API', 'PostgreSQL', 'Docker', 'Code Runner'],
    badge: null,
    links: {
      live: 'https://skillladder.vercel.app',
      github: 'https://github.com/linga-1221/skillladder',
    },
    color: 'bg-coral',
  },
  {
    id: '02',
    title: 'Agent Eval Lab',
    subtitle: 'Multi-Agent Eval Harness',
    description: 'A multi-agent system for automated PyTest generation with an honest evaluation harness. Three LLM agents collaborate — Generator writes tests, Reviewer critiques quality & triggers regeneration, Judge gives final semantic verdict. The harness scores outputs on syntax validity, test coverage, assertion presence, and PyTest conformance, detecting common LLM failure modes.',
    tags: ['LangChain', 'Groq API', 'Pydantic', 'PyTest', 'Python', 'LLM Agents', 'AI Safety'],
    badge: null,
    links: {
      github: 'https://github.com/linga-1221/agent-eval-lab',
    },
    color: 'bg-navy',
  },
  {
    id: '03',
    title: 'FairHire AI',
    subtitle: 'Bias Detection in Hiring',
    description: 'AI-powered web application powered by Gemini LLM that detects and reduces bias in recruitment. Analyzes job descriptions for biased language across 4 categories (Gender, Age, Personality, Exclusionary) with severity scoring, anonymizes resumes by removing PII, and promotes fair, skill-based candidate evaluation with interactive visual analytics.',
    tags: ['Gemini AI', 'Flask', 'Python', 'SQLite', 'Chart.js', 'PyPDF2', 'NLP', 'Bias Detection'],
    badge: null,
    links: {
      live: 'https://ai-for-reducing-bias-in-hiring.vercel.app',
      github: 'https://github.com/linga-1221/ai-bias-reduction-hiring',
    },
    color: 'bg-charcoal',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative bg-cream dark:bg-navy transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-4">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-coral">Work</span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-navy dark:text-cream leading-[0.9] tracking-tighter">
              Featured<br />Projects
            </h2>
            <div className="w-24 h-1 bg-coral mt-8" />
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white dark:bg-charcoal border-2 border-navy dark:border-cream/10 p-8 lg:p-12 hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Project number */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-coral flex items-center justify-center">
                <span className="text-sm font-bold text-cream">{project.id}</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left */}
                <div className="lg:col-span-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-coral mb-1">{project.subtitle}</p>
                      <h3 className="font-display text-4xl lg:text-5xl text-navy dark:text-cream group-hover:text-coral transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {project.badge && (
                    <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-coral text-cream px-3 py-1.5 mb-4">
                      {project.badge}
                    </span>
                  )}

                  <p className="text-navy/60 dark:text-cream/60 leading-relaxed text-sm max-w-2xl">
                    {project.description}
                  </p>
                </div>

                {/* Right */}
                <div className="lg:col-span-4 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-medium text-navy/50 dark:text-cream/50 bg-navy/5 dark:bg-cream/5 px-2.5 py-1.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" 
                         className="text-xs font-semibold tracking-wider uppercase text-navy dark:text-cream border-b-2 border-coral pb-0.5 hover:text-coral transition-colors">
                        Live Demo ↗
                      </a>
                    )}
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                         className="text-xs font-semibold tracking-wider uppercase text-navy/40 dark:text-cream/40 hover:text-navy dark:hover:text-cream transition-colors">
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 h-px bg-navy/10 dark:bg-cream/10 w-full" />
      </div>
    </section>
  )
}
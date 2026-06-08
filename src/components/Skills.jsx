import React, { useEffect, useRef, useState } from 'react'

const skills = [
{
category: 'Programming Languages',
items: [
'Java',
'Python',
'SQL',
'JavaScript',
],
},
{
category: 'AI & Machine Learning',
items: [
'Generative AI',
'Machine Learning',
'Deep Learning',
'NLP',
'LangChain',
'Prompt Engineering',
'RAG',
'Agentic AI',
],
},
{
category: 'Backend Engineering',
items: [
'Node.js',
'Express.js',
'FastAPI',
'Flask',
'REST APIs',
'Authentication',
'API Design',
],
},
{
category: 'Frontend Development',
items: [
'React',
'JavaScript',
'HTML',
'CSS',
'Tailwind CSS',
'Bootstrap',
],
},
{
category: 'Databases',
items: [
'MySQL',
'MongoDB',
'Firebase',
'Supabase',
],
},
{
category: 'Tools & Platforms',
items: [
'Git',
'GitHub',
'Docker',
'Postman',
'Power BI',
'Vercel',
'VS Code',
],
},
]


export default function Skills() {
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
    <section id="skills" className="py-32 relative overflow-hidden bg-cream dark:bg-navy transition-colors duration-300" ref={ref}>
      {/* Background strip */}
      <div className="absolute inset-y-0 left-0 w-1/3 bg-navy dark:bg-charcoal hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Section header */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="lg:col-span-4">
            <span className="section-tag">Capabilities</span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-navy dark:text-cream leading-[0.9] tracking-tighter">
              Engineering<br />Toolkit
            </h2>
            <div className="w-24 h-1 bg-coral mt-8" />
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((group, gi) => (
            <div
              key={group.category}
              className={`transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${gi * 0.1}s` }}
            >
              <div className="border-2 border-navy dark:border-cream/10 bg-white dark:bg-charcoal p-8 h-full transition-colors duration-300">
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-coral mb-6">
                  {String(gi + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display text-2xl text-navy dark:text-cream mb-6">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium text-navy/60 dark:text-cream/60 bg-navy/5 dark:bg-cream/5 px-3 py-2 hover:bg-coral hover:text-cream transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
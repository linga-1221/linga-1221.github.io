import React, { useEffect, useRef, useState } from 'react'

const achievements = [
{
icon: '🏆',
title: '1st Place — KARE OSS Hackathon',
description:
'Secured 1st place among 200+ competing teams by building an innovative AI-powered solution under strict time constraints and presenting it to industry mentors.',
},

{
icon: '📄',
title: 'Springer Nature Research Publication',
description:
'Published research on an AI-powered Career Recommendation System at SmartCom 2026 through Springer Nature, demonstrating expertise in AI, recommendation systems, and real-world applications.',
},

{
icon: '🤖',
title: 'Generative AI & LLM Development',
description:
'Built multiple AI products including Skill Ladder, FairHire AI, and Agent Eval Lab using LLMs, prompt engineering, AI evaluation frameworks, and modern agent architectures.',
},

{
icon: '🥇',
title: 'Oracle Certified Foundations Associate',
description:
'Earned Oracle certification demonstrating foundational knowledge in cloud technologies, databases, and modern software development practices.',
},

{
icon: '☕',
title: 'Learn Java — CodeChef',
description:
'Completed CodeChef Learn Java certification covering object-oriented programming, collections, exception handling, problem-solving, and software development using Java.',
},

{
icon: '🐍',
title: 'Python Developer Roadmap',
description:
'Successfully completed the OneRoadmap Python learning path, strengthening skills in Python programming, data structures, algorithms, backend development, and software engineering fundamentals.',
},

{
icon: '🎓',
title: 'AI for Data Analytics & Power BI — Infosys Springboard',
description:
'Certified in Artificial Intelligence and Data Analytics, covering machine learning fundamentals, predictive analytics, and data-driven decision making.',
},
]


export default function Achievements() {
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
    <section id="achievements" className="py-32 bg-white dark:bg-charcoal relative overflow-hidden transition-colors duration-300" ref={ref}>
      {/* Decorative stripe */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-coral/5 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Section header */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="lg:col-span-4">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-coral">Press</span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-navy dark:text-cream leading-[0.9] tracking-tighter">
              Achievements<br />& Certifications
            </h2>
            <div className="w-24 h-1 bg-coral mt-8" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, i) => (
            <div
              key={item.title}
              style={{ transitionDelay: `${i * 0.12}s` }}
              className={`border-2 border-navy dark:border-cream/10 bg-cream dark:bg-navy p-8 lg:p-10 transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } hover:bg-white dark:hover:bg-charcoal hover:shadow-2xl hover:-translate-y-2`}
            >
              <span className="text-3xl block mb-6">{item.icon}</span>
              <h3 className="font-display text-2xl lg:text-3xl text-navy dark:text-cream mb-4">
                {item.title}
              </h3>
              <p className="text-navy/60 dark:text-cream/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
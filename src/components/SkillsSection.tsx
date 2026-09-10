import { motion } from 'motion/react'
import { fadeUp, fadeUpTransition, premiumEase, revealViewport, sectionSequence } from '../motion'

type SkillGroup = {
  category: string
  icon: 'frontend' | 'backend' | 'cloud' | 'database'
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: 'frontend',
    skills: ['React', 'Angular', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Backend',
    icon: 'backend',
    skills: ['Node.js', 'Express', 'Java', 'Spring Boot', 'C#', 'Python'],
  },
  {
    category: 'DevOps & Cloud',
    icon: 'cloud',
    skills: ['Docker', 'Linux', 'AWS', 'Azure', 'Git', 'Bash', 'CI/CD', 'Jenkins'],
  },
  {
    category: 'Database',
    icon: 'database',
    skills: ['MongoDB', 'PostgreSQL', 'SQL', 'SQL Server', 'MySQL'],
  },
]

function CategoryIcon({ icon }: { icon: SkillGroup['icon'] }) {
  const paths = {
    frontend: <path strokeLinecap="round" strokeLinejoin="round" d="m9 7-5 5 5 5m6-10 5 5-5 5m-2-12-2 14" />,
    backend: <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v6H4V4Zm0 10h16v6H4v-6Zm3-7h.01M7 17h.01M11 7h6M11 17h6" />,
    cloud: <path strokeLinecap="round" strokeLinejoin="round" d="M7 18h10a4 4 0 0 0 .7-7.94A6 6 0 0 0 6.3 8.4 4.8 4.8 0 0 0 7 18Z" />,
    database: <path strokeLinecap="round" strokeLinejoin="round" d="M19 6c0 1.66-3.13 3-7 3S5 7.66 5 6s3.13-3 7-3 7 1.34 7 3Zm0 0v6c0 1.66-3.13 3-7 3s-7-1.34-7-3V6m14 6v6c0 1.66-3.13 3-7 3s-7-1.34-7-3v-6" />,
  }

  return (
    <svg aria-hidden="true" width="20" height="20" className="shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      {paths[icon]}
    </svg>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="viewport-section bg-hero px-[var(--page-gutter)] pt-0 pb-12 text-ink md:pb-16 lg:pb-20">
      <div className="site-container">
        <motion.header initial="hidden" whileInView="visible" viewport={revealViewport} variants={sectionSequence} className="text-center">
          <motion.p variants={fadeUp} transition={fadeUpTransition} className="flex items-center justify-center gap-3 text-[0.625rem] font-semibold tracking-[0.22em] text-accent uppercase before:h-px before:w-6 before:bg-accent/50 after:h-px after:w-6 after:bg-accent/50">My tech stack</motion.p>
          <motion.h2 variants={fadeUp} transition={fadeUpTransition} id="skills-title" className="mt-2.5 text-[2rem] leading-tight font-bold tracking-[-0.04em] md:text-[2.5rem] lg:text-[3.5rem] min-[1600px]:text-[3.75rem]">
            SKILLS
          </motion.h2>
          <span aria-hidden="true" className="mx-auto mt-3 block h-px w-12 bg-accent" />
        </motion.header>

        <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.16, delayChildren: 0.17 } } }} className="mt-8 grid grid-cols-1 gap-5 sm:mt-9 md:grid-cols-2 md:gap-6 min-[1600px]:mx-auto min-[1600px]:mt-8 min-[1600px]:w-[95%] min-[1600px]:gap-7">
          {skillGroups.map((group) => (
            <motion.article variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} whileHover={{ y: -2, transition: { duration: 0.22, ease: premiumEase } }} transition={{ duration: 0.92, ease: premiumEase }} key={group.category} className="group min-h-36 rounded-lg border border-line bg-surface/25 p-6 transition duration-200 hover:border-accent/40 hover:bg-surface/35 min-[1600px]:min-h-[12.5rem] min-[1600px]:p-7">
              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-accent/25 bg-accent/5 text-accent/80 transition-colors duration-200 group-hover:border-accent/50 group-hover:text-accent min-[1600px]:size-11">
                  <CategoryIcon icon={group.icon} />
                </span>
                <h3 className="text-sm font-semibold tracking-[0.16em] text-ink uppercase min-[1600px]:text-[1.0625rem]">{group.category}</h3>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2 min-[1600px]:mt-6 min-[1600px]:gap-2.5" aria-label={`${group.category} skills`}>
                {group.skills.map((skill) => (
                  <li key={skill} className="rounded border border-line bg-hero/55 px-2.5 py-1.5 text-[0.8125rem] font-medium text-ink/85 transition duration-200 hover:-translate-y-px hover:border-accent/55 hover:bg-surface/60 hover:text-ink min-[1600px]:px-3 min-[1600px]:py-2 min-[1600px]:text-[0.9375rem]">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

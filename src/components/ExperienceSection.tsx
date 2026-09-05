import { motion } from 'motion/react'
import { fadeUp, fadeUpTransition, premiumEase, revealViewport, sectionSequence } from '../motion'

type Experience = {
  company: string
  role: string
  description?: string
}

const experiences: Experience[] = [
  {
    company: 'Georgia Department of Transportation',
    role: 'Software Engineer',
    description:
      'Working on the TPRO application, rewriting the existing legacy system into a modern, scalable, and maintainable application. My work focuses on rebuilding core functionality, improving workflows, performance, and security, while ensuring the new system continues to support transportation project reporting needs.',
  },
  {
    company: 'Texas Tech University',
    role: 'Application Developer',
    description:
      'Worked on developing and improving a survey management application designed to create, manage, and respond to surveys. My work focused on building reusable features, improving system performance and security, and providing a reliable and user-friendly experience for administrators, survey creators, and respondents.',
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="viewport-section bg-hero px-[var(--page-gutter)] pt-0 pb-20 text-ink md:pb-24 lg:pb-40"
    >
      <div className="site-container">
        <div className="w-full">
          <motion.header initial="hidden" whileInView="visible" viewport={revealViewport} variants={sectionSequence} className="pb-[0.1875rem] text-center">
          <motion.p variants={fadeUp} transition={fadeUpTransition} className="flex items-center justify-center gap-3 text-[0.625rem] font-semibold tracking-[0.22em] text-accent uppercase before:h-px before:w-6 before:bg-accent/50 after:h-px after:w-6 after:bg-accent/50">
            WHERE I&apos;VE BEEN
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={fadeUpTransition}
            id="experience-title"
            className="mt-2.5 text-[2rem] leading-tight font-bold tracking-[-0.04em] md:text-[2.5rem] lg:text-[3.5rem] min-[1600px]:text-[3.75rem]"
          >
            PROFESSIONAL EXPERIENCE
          </motion.h2>
          <span aria-hidden="true" className="mx-auto mt-3 block h-px w-12 bg-accent" />
          </motion.header>

          <motion.ol initial="hidden" whileInView="visible" viewport={revealViewport} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18, delayChildren: 0.17 } } }} className="relative mt-10 space-y-10 sm:mt-14 sm:space-y-12 lg:mt-16 lg:space-y-14">
          <motion.span aria-hidden="true" variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1 } }} transition={{ duration: 1.2, ease: premiumEase }} className="absolute top-2 bottom-2 left-0 w-px origin-top bg-line" />
          {experiences.map((experience) => (
            <motion.li variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18 } } }} key={experience.company} className="group relative pl-6 sm:pl-8">
              <motion.span
                aria-hidden="true"
                variants={{ hidden: { opacity: 0, scale: 0.9, x: '-50%' }, visible: { opacity: 1, scale: 1, x: '-50%' } }}
                transition={{ duration: 0.6, ease: premiumEase }}
                className="absolute top-2 left-0 size-2 rounded-full border border-accent bg-surface transition-colors duration-200 group-hover:bg-accent"
              />

              <motion.article variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }} transition={{ duration: 0.95, ease: premiumEase }}>
                <h3 className="max-w-4xl text-[1.375rem] leading-tight font-semibold tracking-[-0.03em] text-ink transition-colors duration-200 group-hover:text-accent sm:text-[1.625rem] lg:text-[2rem] min-[1600px]:text-[2.125rem]">
                  {experience.company.toUpperCase()}
                </h3>
                <p className="mt-1.5 text-sm font-medium tracking-wide text-ink/75 sm:text-base">
                  {experience.role}
                </p>

                {experience.description && (
                  <p className="body-copy mt-4 max-w-[60rem] text-sm leading-[1.65] sm:text-base">
                    {experience.description}
                  </p>
                )}
              </motion.article>
            </motion.li>
          ))}
          </motion.ol>
        </div>
      </div>
    </section>
  )
}

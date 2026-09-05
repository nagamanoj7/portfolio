import flyOpsDashboard from '../assets/projects/flyops-dashboard.png'
import onePlaceDashboard from '../assets/projects/oneplace-dashboard.png'
import { motion } from 'motion/react'
import { fadeUp, fadeUpTransition, premiumEase, revealViewport, sectionSequence } from '../motion'

type Project = {
  title: string
  category: string
  description: string
  image: {
    src: string
    alt: string
  }
  technologies?: string[]
  url?: string
}

const projects: Project[] = [
  {
    title: 'FlyOps',
    category: 'Airport Operations Dashboard',
    description:
      'An Angular native enterprise-style airport operations dashboard, delivering a responsive, data-driven interface for monitoring flights, aircraft, gates, crew, weather, alerts, and operational performance.',
    image: {
      src: flyOpsDashboard,
      alt: 'FlyOps airport operations dashboard',
    },
    technologies: ['Angular', 'TypeScript', 'Chart.js', 'HTML', 'CSS'],
    url: 'https://flyops-airport.vercel.app/',
  },
  {
    title: 'OnePlace',
    category: 'Full-Stack Personal Organization App',
    description:
      'A full-stack personal organization application built with React and Spring Boot, bringing reminders, subscriptions, warranties, documents, and vehicle records together in one centralized dashboard.',
    image: {
      src: onePlaceDashboard,
      alt: 'OnePlace personal organization dashboard',
    },
    technologies: ['React', 'Spring Boot', 'Java', 'PostgreSQL', 'HTML', 'CSS'],
    url: 'https://one-place-gamma.vercel.app/',
  },
]

const cardClassName =
  'group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/45 transition duration-200'

function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <div className="aspect-[2.35/1] w-full overflow-hidden border-b border-line">
        <img
          src={project.image.src}
          alt={project.image.alt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-3xl font-semibold tracking-[-0.035em] text-ink sm:text-4xl">
          {project.title.toUpperCase()}
        </h3>
        <p className="mt-1 text-sm font-medium tracking-wide text-ink/75 sm:text-base">
          {project.category}
        </p>

        <p className="body-copy mt-2.5 max-w-xl text-sm leading-6 sm:text-[0.9375rem] sm:leading-7">
          {project.description}
        </p>

        {project.technologies && project.technologies.length > 0 && (
          <ul aria-label="Technologies" className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-accent/25 px-3 py-1 text-[0.6875rem] font-medium text-accent"
              >
                {technology}
              </li>
            ))}
          </ul>
        )}

        <span className="mt-auto flex items-center gap-2 pt-4 text-[0.625rem] font-semibold tracking-[0.2em] text-accent uppercase">
          {project.url ? 'View project' : 'Link coming soon'}
          {project.url && (
            <svg
              aria-hidden="true"
              className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
            </svg>
          )}
        </span>
      </div>
    </>
  )

  if (!project.url) {
    return (
      <article aria-disabled="true" className={cardClassName}>
        {content}
      </article>
    )
  }

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cardClassName} hover:-translate-y-1 hover:border-accent/60 focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent`}
    >
      {content}
    </a>
  )
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="viewport-section bg-hero px-[var(--page-gutter)] pt-0 pb-20 text-ink md:pb-24 lg:pb-40"
    >
      <div className="site-container">
        <motion.header initial="hidden" whileInView="visible" viewport={revealViewport} variants={sectionSequence} className="mx-auto max-w-5xl pb-7 text-center">
          <motion.p variants={fadeUp} transition={fadeUpTransition} className="flex items-center justify-center gap-3 text-[0.625rem] font-semibold tracking-[0.22em] text-accent uppercase before:h-px before:w-6 before:bg-accent/50 after:h-px after:w-6 after:bg-accent/50">
            WHAT I&apos;VE DONE
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={fadeUpTransition}
            id="projects-title"
            className="mt-2.5 text-[2rem] leading-tight font-bold tracking-[-0.04em] md:text-[2.5rem] lg:text-[3.5rem] min-[1600px]:text-[3.75rem]"
          >
            PROJECTS
          </motion.h2>
          <span aria-hidden="true" className="mx-auto mt-3 block h-px w-12 bg-accent" />
        </motion.header>

        <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } } }} className="mt-10 grid w-full grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:gap-8 min-[1600px]:gap-7">
          {projects.map((project) => (
            <motion.div key={project.title} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.68, ease: premiumEase }} className="h-full">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

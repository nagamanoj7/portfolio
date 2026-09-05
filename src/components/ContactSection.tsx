import { motion } from 'motion/react'
import { fadeUp, fadeUpTransition, premiumEase, revealViewport, sectionSequence } from '../motion'

type ContactKey = 'email' | 'phone' | 'github' | 'linkedin'

type ContactItem = {
  label: string
  display: string
  href: string
  external: boolean
  icon: ContactKey
}

const contactInfo: Record<ContactKey, ContactItem> = {
  email: {
    label: 'Email',
    display: 'nagamanoj16@gmail.com',
    href: 'mailto:nagamanoj16@gmail.com',
    external: false,
    icon: 'email',
  },
  phone: {
    label: 'Phone',
    display: '(202) 798-1795',
    href: 'tel:+12027981795',
    external: false,
    icon: 'phone',
  },
  github: {
    label: 'GitHub',
    display: 'github.com/nagamanoj7',
    href: 'https://github.com/nagamanoj7',
    external: true,
    icon: 'github',
  },
  linkedin: {
    label: 'LinkedIn',
    display: 'linkedin.com/in/nagamanoj16',
    href: 'https://www.linkedin.com/in/nagamanoj16/',
    external: true,
    icon: 'linkedin',
  },
}

const contactRows = [contactInfo.email, contactInfo.phone]

const socialLinks = [
  { ...contactInfo.linkedin, text: 'LinkedIn' },
  { ...contactInfo.github, text: 'GitHub' },
  { ...contactInfo.email, text: 'Email Me' },
]

function ContactIcon({ icon }: { icon: ContactKey }) {
  const paths = {
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
      </>
    ),
    phone: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.4 3H4.8A1.8 1.8 0 0 0 3 4.8C3 13.75 10.25 21 19.2 21a1.8 1.8 0 0 0 1.8-1.8v-2.6l-4.1-1.35-1.05 2.1a14.35 14.35 0 0 1-9.2-9.2l2.1-1.05L7.4 3Z"
      />
    ),
    github: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 22v-3.9c.04-1-.35-1.96-1.08-2.64 3.6-.4 7.38-1.77 7.38-8a6.25 6.25 0 0 0-1.67-4.34A5.82 5.82 0 0 0 19.47.5S18.15.08 15 2.16a15 15 0 0 0-6 0C5.85.08 4.53.5 4.53.5a5.82 5.82 0 0 0-1.16 2.62A6.25 6.25 0 0 0 1.7 7.46c0 6.22 3.78 7.6 7.38 8A3.77 3.77 0 0 0 8 18.1V22m0-3c-3 .92-3-1.5-4.2-2"
      />
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2.5" />
        <circle cx="8" cy="8" r="1.25" fill="currentColor" stroke="none" />
        <path fill="currentColor" stroke="none" d="M6.75 10.25h2.5V17h-2.5v-6.75Zm4.25 0h2.4v.92c.72-.8 1.57-1.17 2.63-1.17 2.1 0 3.22 1.37 3.22 3.87V17h-2.5v-2.92c0-1.35-.47-2.03-1.43-2.03-1.12 0-1.82.75-1.82 2.2V17H11v-6.75Z" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      className="size-[1.1875rem] min-[1600px]:size-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      {paths[icon]}
    </svg>
  )
}

function ContactRow({ item }: { item: ContactItem }) {
  return (
    <li className="group flex justify-center py-1.5 md:px-8 md:py-0 md:[&+li]:border-l md:[&+li]:border-line min-[1600px]:px-12">
      <a
        href={item.href}
        className="flex min-w-0 flex-col items-center text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <span className="contact-detail-icon flex size-[2.625rem] items-center justify-center rounded-lg border border-accent/25 bg-surface/35 text-accent/80 transition-colors duration-200 group-hover:border-accent/55 group-hover:text-accent sm:size-[2.875rem] lg:size-[2.625rem] min-[1600px]:size-14">
          <ContactIcon icon={item.icon} />
        </span>
        <span className="mt-2.5 text-[0.59375rem] font-semibold tracking-[0.2em] text-accent uppercase min-[1600px]:mt-3 min-[1600px]:text-xs">
          {item.label}
        </span>
        <span className="mt-0.5 break-all text-[0.84375rem] text-ink/85 transition-colors duration-200 group-hover:text-ink sm:text-[0.90625rem] min-[1600px]:mt-1 min-[1600px]:text-[1.1875rem]">
          {item.display}
        </span>
      </a>
    </li>
  )
}

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="contact-section viewport-section bg-hero px-[var(--page-gutter)] pt-0 text-ink"
    >
      <div className="site-container min-[1600px]:mx-auto min-[1600px]:flex min-[1600px]:min-h-[calc(100dvh-var(--header-height))] min-[1600px]:w-[90vw] min-[1600px]:max-w-[93.75rem] min-[1600px]:flex-col">
        <div className="contact-main min-[1600px]:grid min-[1600px]:min-h-0 min-[1600px]:flex-1 min-[1600px]:grid-rows-[auto_minmax(0,1fr)_auto_minmax(0,1fr)] min-[1600px]:pt-[clamp(1rem,1.5vh,1.5rem)]">
          <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={{ ...sectionSequence, visible: { transition: { staggerChildren: 0.18 } } }} className="mx-auto max-w-3xl text-center min-[1600px]:max-w-[62.5rem]">
            <motion.p variants={fadeUp} transition={fadeUpTransition} className="text-[0.640625rem] font-semibold tracking-[0.22em] text-accent uppercase">
              Get in touch
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={fadeUpTransition}
              id="contact-title"
              className="contact-heading mt-2.5 text-[2rem] leading-[0.94] font-bold tracking-[-0.055em] md:text-[2.5rem] lg:text-[3.5rem] min-[1600px]:text-[clamp(3.75rem,4vw,5rem)]"
            >
              LET&apos;S CONNECT
            </motion.h2>
            <span aria-hidden="true" className="mx-auto mt-[0.9375rem] block h-px w-12 bg-accent" />

            <motion.p variants={fadeUp} transition={fadeUpTransition} className="body-copy mt-[1.0625rem] text-[1.0625rem] leading-7 sm:text-[1.1875rem] min-[1600px]:mt-7 min-[1600px]:text-2xl min-[1600px]:leading-9 min-[1600px]:font-medium">
              Have a project, opportunity, or idea in mind? Let&apos;s talk.
            </motion.p>
            <motion.p variants={fadeUp} transition={fadeUpTransition} className="body-copy mx-auto mt-[0.4375rem] max-w-2xl text-[0.84375rem] leading-6 sm:text-[0.90625rem] sm:leading-6 min-[1600px]:mt-3 min-[1600px]:max-w-[62.5rem] min-[1600px]:text-[1.1875rem] min-[1600px]:leading-[1.65]">
              I&apos;m always open to discussing software engineering opportunities, interesting
              projects, and ways to build something meaningful.
            </motion.p>
          </motion.div>

          <motion.ul initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={revealViewport} transition={{ duration: 1, delay: 0.4, ease: premiumEase }} className="contact-details mx-auto mt-[1.875rem] grid max-w-2xl gap-6 sm:mt-[2.125rem] md:grid-cols-2 md:gap-0 min-[1600px]:row-start-3 min-[1600px]:mt-0 min-[1600px]:max-w-[56.25rem] min-[1600px]:self-center">
            {contactRows.map((item) => (
              <ContactRow key={item.label} item={item} />
            ))}
          </motion.ul>
        </div>

        <div className="contact-bottom min-[1600px]:mt-auto min-[1600px]:pb-8">
          <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.55 } } }} className="contact-actions mt-[3.625rem] grid gap-3 md:grid-cols-3 md:gap-4 min-[1600px]:mx-auto min-[1600px]:mt-0 min-[1600px]:max-w-[75rem] min-[1600px]:gap-5">
            {socialLinks.map((item) => (
              <motion.a
                key={item.label}
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.98, ease: premiumEase }}
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex min-h-[3.375rem] items-center justify-center gap-2.5 rounded-lg border border-accent/30 bg-surface/25 px-6 text-[0.84375rem] font-medium text-ink/90 transition duration-200 hover:-translate-y-0.5 hover:border-accent/65 hover:bg-surface/45 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent min-[1600px]:min-h-[4.5rem] min-[1600px]:px-9 min-[1600px]:text-[1.0625rem]"
              >
                <span className="text-accent/80 transition-colors duration-200 group-hover:text-accent">
                  <ContactIcon icon={item.icon} />
                </span>
                {item.text}
              </motion.a>
            ))}
          </motion.div>

          <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={revealViewport} transition={{ duration: 1.05, delay: 0.7, ease: premiumEase }} className="contact-footer relative mt-10 border-t border-line pt-[1.3125rem] pb-[0.4375rem] sm:mt-11 sm:pt-[1.5625rem] sm:pb-[0.6875rem] min-[1600px]:mx-auto min-[1600px]:mt-12 min-[1600px]:w-full min-[1600px]:max-w-[75rem] min-[1600px]:pt-7">
          <div className="text-center min-[1600px]:text-left">
            <p className="text-[0.84375rem] font-semibold tracking-[0.2em] text-ink uppercase min-[1600px]:text-[0.9375rem]">
              Naga Manoj Chittiprolu
            </p>
            <p className="mt-1.5 text-[0.65625rem] font-semibold tracking-[0.2em] text-accent uppercase min-[1600px]:text-xs">
              Software Engineer
            </p>
          </div>

          <a
            href="#home"
            className="mt-5 flex justify-center text-[0.5625rem] font-semibold tracking-[0.18em] text-accent uppercase transition-colors duration-200 hover:text-ink md:absolute md:top-1/2 md:right-0 md:mt-0 md:-translate-y-1/2"
          >
            Back to top ↑
          </a>
          </motion.footer>
        </div>
      </div>
    </section>
  )
}

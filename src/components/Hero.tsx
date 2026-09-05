import { motion } from 'motion/react'
import { premiumEase } from '../motion'

export function Hero() {
  return (
    <div id="home" className="viewport-section relative bg-hero">
      <section
        aria-labelledby="hero-title"
        className="hero-layout site-container relative min-h-svh overflow-hidden px-[var(--page-gutter)] pt-[var(--header-height)] pb-24 lg:pb-20 min-[1600px]:grid min-[1600px]:grid-cols-[minmax(0,1.1fr)_minmax(420px,0.9fr)] min-[1600px]:gap-x-12"
      >
        <div className="relative z-20 w-full">
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, delay: 0.08, ease: premiumEase }} className="text-xs font-medium tracking-[0.26em] text-accent uppercase sm:text-sm">
            Hello.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.97, delay: 0.24, ease: premiumEase }} className="mt-6 text-3xl leading-none font-semibold tracking-[-0.035em] text-ink sm:text-4xl lg:mt-7 lg:text-[2.65rem]">
            I'M
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 1.05, delay: 0.4, ease: premiumEase }}
            id="hero-title"
            className="mt-5 text-[clamp(2.6rem,4.1vw,4.1rem)] leading-[0.88] font-bold tracking-[-0.055em] text-ink lg:whitespace-nowrap"
          >
            NAGA MANOJ CHITTIPROLU
          </motion.h1>

          <motion.span aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.5, ease: premiumEase }} className="mt-9 block h-px w-12 bg-accent sm:w-16" />
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.98, delay: 0.57, ease: premiumEase }} className="mt-8 text-[0.825rem] font-medium tracking-[0.34em] text-accent uppercase sm:text-[0.9625rem]">
            Software Engineer
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.74, ease: premiumEase }} className="body-copy mt-7 max-w-[34rem] text-sm leading-7 italic sm:text-base sm:leading-8 lg:max-w-none">
            <span className="hero-description-line lg:whitespace-nowrap">
              I build scalable, efficient, and user-focused web applications that solve real problems and deliver meaningful results.
            </span>
            <span className="block">
              I care about the details—from how an application works to how it feels to use.
            </span>
          </motion.p>
        </div>

        <div className="hero-laptop relative mt-8 flex items-center justify-center lg:absolute lg:right-[4%] lg:bottom-[-2vh] lg:mt-0 lg:w-[50vw] lg:max-w-[48rem] lg:justify-end min-[1600px]:static min-[1600px]:mb-10 min-[1600px]:w-full min-[1600px]:max-w-[36rem] min-[1600px]:self-end min-[1600px]:justify-self-start">
          <motion.img
            initial={{ opacity: 0, y: 35, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.15, delay: 0.88, ease: premiumEase }}
            src="/images/laptop-hero-transparent.png"
            alt="A half-closed dark graphite laptop"
            width="1536"
            height="1024"
            className="relative z-10 h-auto w-full max-w-2xl object-contain lg:max-w-none"
          />
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.95, delay: 1.15, ease: premiumEase }} className="absolute bottom-[2.875rem] left-[var(--page-gutter)] z-10 flex items-end gap-5 text-ink/80 sm:bottom-[3.625rem]">
          <div className="flex flex-col items-center">
            <span className="h-12 w-px bg-ink/70" />
            <span className="mt-2 size-1.5 rounded-full bg-accent" />
          </div>
          <span className="pb-0.5 text-[0.5625rem] font-medium tracking-[0.28em] uppercase">
            Scroll to explore
          </span>
        </motion.div>
      </section>
    </div>
  )
}

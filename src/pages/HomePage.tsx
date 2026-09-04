import { AboutSection } from '../components/AboutSection'
import { CertificationsSection } from '../components/CertificationsSection'
import { ContactSection } from '../components/ContactSection'
import { ExperienceSection } from '../components/ExperienceSection'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { ProjectsSection } from '../components/ProjectsSection'
import { SkillsSection } from '../components/SkillsSection'

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </>
  )
}

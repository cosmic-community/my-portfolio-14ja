import Link from 'next/link'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import ProjectCard from '@/components/ProjectCard'
import SkillCard from '@/components/SkillCard'
import ExperienceCard from '@/components/ExperienceCard'
import { getFeaturedProjects, getProjects, getSkills, getWorkExperience } from '@/lib/cosmic'

export default async function HomePage() {
  let featured = await getFeaturedProjects()
  if (featured.length === 0) {
    const all = await getProjects()
    featured = all.slice(0, 3)
  } else {
    featured = featured.slice(0, 3)
  }

  const skills = await getSkills()
  const experiences = await getWorkExperience()
  const topSkills = skills.slice(0, 8)
  const recentExperiences = experiences.slice(0, 2)

  return (
    <>
      <Hero />

      {featured.length > 0 && (
        <section className="py-20">
          <div className="container-custom">
            <SectionHeader
              eyebrow="Selected Work"
              title="Featured Projects"
              description="A selection of projects I'm proud to have worked on"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/projects" className="inline-block px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors">
                View all projects →
              </Link>
            </div>
          </div>
        </section>
      )}

      {topSkills.length > 0 && (
        <section className="py-20 border-t border-white/5">
          <div className="container-custom">
            <SectionHeader
              eyebrow="Toolkit"
              title="Skills & Expertise"
              description="Technologies and tools I work with"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {topSkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
            {skills.length > 8 && (
              <div className="text-center mt-12">
                <Link href="/skills" className="inline-block px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors">
                  See all skills →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {recentExperiences.length > 0 && (
        <section className="py-20 border-t border-white/5">
          <div className="container-custom max-w-4xl">
            <SectionHeader
              eyebrow="Career"
              title="Recent Experience"
              description="Where I've been working lately"
            />
            <div className="space-y-6">
              {recentExperiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/experience" className="inline-block px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors">
                Full experience →
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 border-t border-white/5">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">build something</span> together
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Have a project in mind? I'd love to hear about it.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 rounded-full gradient-bg text-white font-semibold hover:opacity-90 transition-opacity">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}
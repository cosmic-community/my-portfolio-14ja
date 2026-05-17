import SectionHeader from '@/components/SectionHeader'
import ProjectCard from '@/components/ProjectCard'
import { getProjects } from '@/lib/cosmic'

export const metadata = {
  title: 'Projects | My Portfolio',
  description: 'Browse all my projects',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className="py-12 md:py-20">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Portfolio"
          title="All Projects"
          description="A complete collection of my work"
        />
        {projects.length === 0 ? (
          <div className="text-center text-gray-400 py-20">
            <p>No projects to show yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
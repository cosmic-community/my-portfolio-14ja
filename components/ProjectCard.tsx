import Link from 'next/link'
import { Project } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ProjectCard({ project }: { project: Project }) {
  const name = getMetafieldValue(project.metadata?.name) || project.title
  const shortDesc = getMetafieldValue(project.metadata?.short_description)
  const image = project.metadata?.featured_screenshot
  const techStack = project.metadata?.tech_stack

  let techArray: string[] = []
  if (Array.isArray(techStack)) {
    techArray = techStack.map(t => getMetafieldValue(t))
  } else if (typeof techStack === 'string') {
    techArray = techStack.split(',').map(t => t.trim())
  }

  return (
    <Link href={`/projects/${project.slug}`} className="card group block overflow-hidden">
      {image && (
        <div className="aspect-video overflow-hidden bg-black/30">
          <img
            src={`${image.imgix_url}?w=1200&h=675&fit=crop&auto=format,compress`}
            alt={name}
            width={600}
            height={338}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">{name}</h3>
        {shortDesc && <p className="text-gray-400 text-sm mb-4 line-clamp-2">{shortDesc}</p>}
        {techArray.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {techArray.slice(0, 4).map((tech, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
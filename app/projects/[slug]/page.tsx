// app/projects/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProject } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  const name = getMetafieldValue(project.metadata?.name) || project.title
  const shortDesc = getMetafieldValue(project.metadata?.short_description)
  const description = getMetafieldValue(project.metadata?.description)
  const image = project.metadata?.featured_screenshot
  const gallery = project.metadata?.gallery
  const liveUrl = getMetafieldValue(project.metadata?.live_url)
  const githubUrl = getMetafieldValue(project.metadata?.github_url)
  const techStack = project.metadata?.tech_stack

  let techArray: string[] = []
  if (Array.isArray(techStack)) {
    techArray = techStack.map(t => getMetafieldValue(t))
  } else if (typeof techStack === 'string') {
    techArray = techStack.split(',').map(t => t.trim())
  }

  return (
    <article className="py-12 md:py-20">
      <div className="container-custom max-w-5xl">
        <Link href="/projects" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors">
          ← Back to projects
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">{name}</span>
          </h1>
          {shortDesc && (
            <p className="text-xl text-gray-300 mb-6">{shortDesc}</p>
          )}
          <div className="flex flex-wrap gap-3">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full gradient-bg text-white font-medium hover:opacity-90 transition-opacity">
                View Live →
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">
                GitHub
              </a>
            )}
          </div>
        </header>

        {image && (
          <div className="rounded-2xl overflow-hidden mb-12 border border-white/10">
            <img
              src={`${image.imgix_url}?w=2000&h=1125&fit=crop&auto=format,compress`}
              alt={name}
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            {description && (
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">About this project</h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">{description}</div>
              </div>
            )}
          </div>

          {techArray.length > 0 && (
            <aside>
              <div className="card p-6 sticky top-28">
                <h3 className="text-lg font-bold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techArray.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-md bg-white/5 text-sm text-gray-300 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          )}
        </div>

        {gallery && Array.isArray(gallery) && gallery.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Gallery</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {gallery.map((img, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={`${img.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
                    alt={`${name} screenshot ${idx + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  )
}
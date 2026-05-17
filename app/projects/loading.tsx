export default function ProjectsLoading() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="card overflow-hidden">
              <div className="aspect-video bg-white/5 animate-pulse" />
              <div className="p-6 space-y-3">
                <div className="h-5 bg-white/5 rounded animate-pulse" />
                <div className="h-4 bg-white/5 rounded w-2/3 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
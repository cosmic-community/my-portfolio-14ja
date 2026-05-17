import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>
      <div className="container-custom text-center animate-fade-in">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6">
          ✨ Available for new opportunities
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Crafting <span className="gradient-text">digital experiences</span><br />
          with code & creativity
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Developer focused on building beautiful, performant web applications that solve real problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/projects" className="px-8 py-3 rounded-full gradient-bg text-white font-semibold hover:opacity-90 transition-opacity">
            View My Work
          </Link>
          <Link href="/contact" className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
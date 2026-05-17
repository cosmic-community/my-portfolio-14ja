import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 mt-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold gradient-text">My Portfolio</h3>
            <p className="text-sm text-gray-500 mt-1">Building beautiful digital experiences</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="/skills" className="hover:text-white transition-colors">Skills</Link>
            <Link href="/experience" className="hover:text-white transition-colors">Experience</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
        <div className="border-t border-white/5 mt-8 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} My Portfolio. Built with Next.js and Cosmic.
        </div>
      </div>
    </footer>
  )
}
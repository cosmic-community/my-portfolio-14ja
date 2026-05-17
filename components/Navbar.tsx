import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-black/30 border-b border-white/5">
      <div className="container-custom flex items-center justify-between h-20">
        <Link href="/" className="text-xl font-bold gradient-text">
          My Portfolio
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
          <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
          <Link href="/skills" className="text-gray-300 hover:text-white transition-colors">Skills</Link>
          <Link href="/experience" className="text-gray-300 hover:text-white transition-colors">Experience</Link>
          <Link href="/contact" className="px-5 py-2 rounded-full gradient-bg text-white font-medium hover:opacity-90 transition-opacity">
            Contact
          </Link>
        </nav>
        <nav className="md:hidden flex items-center gap-4">
          <Link href="/projects" className="text-sm text-gray-300">Work</Link>
          <Link href="/contact" className="px-3 py-1.5 rounded-full gradient-bg text-white text-sm">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
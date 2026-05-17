export const metadata = {
  title: 'Contact | My Portfolio',
  description: 'Get in touch',
}

export default function ContactPage() {
  return (
    <section className="py-12 md:py-20">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 mb-4">
            Let's Talk
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h1>
          <p className="text-xl text-gray-400">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <a href="mailto:hello@example.com" className="card p-6 group">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-bold mb-1 group-hover:gradient-text transition-all">Email</h3>
            <p className="text-gray-400 text-sm">hello@example.com</p>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="card p-6 group">
            <div className="text-3xl mb-3">💻</div>
            <h3 className="font-bold mb-1 group-hover:gradient-text transition-all">GitHub</h3>
            <p className="text-gray-400 text-sm">@username</p>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="card p-6 group">
            <div className="text-3xl mb-3">💼</div>
            <h3 className="font-bold mb-1 group-hover:gradient-text transition-all">LinkedIn</h3>
            <p className="text-gray-400 text-sm">linkedin.com/in/username</p>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="card p-6 group">
            <div className="text-3xl mb-3">🐦</div>
            <h3 className="font-bold mb-1 group-hover:gradient-text transition-all">Twitter</h3>
            <p className="text-gray-400 text-sm">@username</p>
          </a>
        </div>

        <div className="card p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to start a project?</h2>
          <p className="text-gray-400 mb-6">
            The best way to reach me is via email. I typically respond within 24 hours.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-block px-8 py-3 rounded-full gradient-bg text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Send a message
          </a>
        </div>
      </div>
    </section>
  )
}
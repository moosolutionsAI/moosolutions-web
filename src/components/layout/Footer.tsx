export default function Footer() {
  return (
    <footer className="border-t border-beige py-12 px-6 bg-cream">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-heading text-base font-medium text-charcoal">
            MooSolutions
          </span>
        </div>

        <div className="flex items-center gap-8">
          <a href="#about" className="text-sm text-warmgray hover:text-charcoal transition-colors">
            About
          </a>
          <a href="#portfolio" className="text-sm text-warmgray hover:text-charcoal transition-colors">
            Work
          </a>
          <a href="#contact" className="text-sm text-warmgray hover:text-charcoal transition-colors">
            Contact
          </a>
        </div>

        <p className="text-xs text-warmgray/60">
          &copy; {new Date().getFullYear()} MooSolutions.ai
        </p>
      </div>
    </footer>
  )
}

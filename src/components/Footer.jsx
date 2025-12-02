function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-dark-600/50 bg-dark-900/50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-cream/40">
            © {currentYear} 박병관. React와 Tailwind CSS로 제작
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/parkbj12/portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cream/40 hover:text-accent transition-colors"
            >
              깃허브
            </a>
            <a 
              href="mailto:qudrhks2968@naver.com"
              className="text-cream/40 hover:text-accent transition-colors"
            >
              이메일
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


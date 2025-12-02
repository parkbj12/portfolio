function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-32">
        <div className="space-y-8">
          {/* Greeting */}
          <p className="text-accent font-medium animate-fade-in">
            안녕하세요, 반갑습니다
          </p>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-slide-up">
            <span className="block">생산관리형 인재</span>
            <span className="block mt-2 text-cream/30">
              {"< "}
              <span className="text-cream">박병관</span>
              {" >"}
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-xl text-lg text-cream/60 leading-relaxed animate-slide-up stagger-2">
            공학적 사고와 데이터 기반 문제 분석으로
            <br />
            효율적인 생산 환경을 만들어갑니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-slide-up stagger-3">
            <a 
              href="#projects"
              className="group px-8 py-4 bg-accent text-dark-900 font-medium rounded-full hover:bg-accent-light transition-all duration-300 flex items-center gap-2"
            >
              프로젝트 보기
              <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 border border-cream/20 text-cream rounded-full hover:border-cream/40 transition-all duration-300"
            >
              연락하기
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cream/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden lg:block">
        <div className="w-72 h-72 border border-dark-600 rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-accent/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  )
}

export default Hero


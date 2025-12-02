function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-accent font-medium mb-2">01</p>
          <h2 className="text-4xl md:text-5xl font-bold">소개</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image / Visual */}
          <div className="relative">
            <div className="aspect-square bg-dark-700 rounded-2xl overflow-hidden relative group flex items-center justify-center">
              <img 
                src="/park.jpg" 
                alt="박병관 프로필"
                className="w-[85%] h-[85%] object-contain"
              />
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/30 rounded-2xl -z-10"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-cream">
              안녕하세요,
              <br />
              <span className="text-accent">박병관</span>입니다.
            </h3>
            
            <div className="space-y-4 text-cream/70 leading-relaxed">
              <p>
                공학적 사고와 데이터 기반 문제 분석 능력을 바탕으로 
                효율적인 생산 환경을 만들어가는 데 관심이 많습니다.
              </p>
              <p>
                <span className="text-cream/90">경기과학기술대학교 자동차과</span>에서 
                기계·시스템의 구조와 원리를 이해하며 공학적 기초를 다졌고, 
                <span className="text-cream/90">강남대학교 인공지능학과</span>에서 
                데이터 분석과 자동화 기술을 배우며 현장 문제를 체계적으로 개선할 수 있는 역량을 키워왔습니다.
              </p>
              <p>
                자동차 공학에서 얻은 시스템 이해 능력과 인공지능을 통해 배운 데이터 처리·분석 능력을 결합하여 
                생산성 향상, 품질 개선, 공정 최적화 등 제조 현장의 실질적인 문제 해결에 기여하고자 합니다.
              </p>
              <p>
                현장을 이해하고 데이터를 활용해 더 효율적인 프로세스를 만드는 
                <span className="text-accent">'생산관리형 인재'</span>로 성장하기 위해 
                꾸준히 배우고 경험을 쌓아가고 있습니다.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-dark-600">
              <div>
                <p className="text-sm text-cream/40 mb-1">학력</p>
                <p className="text-cream text-sm">경기과학기술대 · 강남대</p>
              </div>
              <div>
                <p className="text-sm text-cream/40 mb-1">관심 분야</p>
                <p className="text-cream text-sm">생산관리 · 데이터 분석</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


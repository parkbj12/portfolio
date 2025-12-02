function Contact() {
  return (
    <section id="contact" className="py-32 bg-dark-800/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-accent font-medium mb-2">04</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">연락하기</h2>
          <p className="text-cream/60 max-w-xl mx-auto">
            프로젝트 협업, 채용 문의, 또는 그냥 인사라도 좋습니다.
            <br />
            편하게 연락 주세요!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Phone */}
          <div 
            className="group p-8 bg-dark-700/50 rounded-2xl border border-dark-600 hover:border-accent/30 transition-all duration-500 hover:-translate-y-1 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-dark-600 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">전화번호</h3>
            <p className="text-cream/50 text-sm">010-5613-2968</p>
          </div>

          {/* Email */}
          <a 
            href="mailto:qudrhks2968@naver.com"
            className="group p-8 bg-dark-700/50 rounded-2xl border border-dark-600 hover:border-accent/30 transition-all duration-500 hover:-translate-y-1 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-dark-600 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">이메일</h3>
            <p className="text-cream/50 text-sm">qudrhks2968@naver.com</p>
          </a>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="mailto:qudrhks2968@naver.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-dark-900 font-semibold rounded-full hover:bg-accent-light transition-all duration-300 group"
          >
            연락하기
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact


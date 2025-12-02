function Projects() {
  // 나중에 실제 프로젝트로 교체
  const projects = [
    {
      id: 1,
      title: 'AI Interview - AI 기반 모의면접 서비스',
      description: '취업준비생들이 실전처럼 면접을 연습하고, AI를 통해 즉각적인 피드백을 받을 수 있는 AI 기반 모의면접 시뮬레이터입니다. 18개 IT 직무별·난이도별 맞춤 질문 생성, 텍스트/비디오 기반 실전형 면접, GPT-4o-mini를 활용한 명확성·구체성·관련성·완성도 기준의 AI 피드백 분석 기능을 제공합니다.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI GPT-4o-mini', 'Whisper'],
      image: '/AI-Home.png',
      github: 'https://github.com/parkbj12/AI-Interview',
      demo: 'https://youtu.be/_nQd0bjlGr4',
      ppt: 'https://www.canva.com/design/DAG4YRykSyU/EgkC14gjNp0OEtRLVoyomg/view',
    },
    {
      id: 2,
      title: 'FlatFootball - 풋살 매치 예약 시스템',
      description: 'JSP/Servlet 기반 풋살 매치 예약 관리 시스템입니다. 사용자는 날짜·장소 기반 매치 조회 및 예약이 가능하고, 관리자는 매치 등록·수정·삭제 및 회원 관리를 할 수 있습니다. 로그인/권한 기반 접근 제어와 ERD 기반 안정적인 DB 구조를 구현했습니다.',
      tech: ['Java', 'JSP', 'Servlet', 'Oracle', 'Tomcat'],
      image: '/Football-Home.png',
      github: '#',
      demo: null,
      ppt: 'https://www.canva.com/design/DAGyXizABkA/h0bcgBJ1h365FxvFRTw4Vw/view',
    },
    {
      id: 3,
      title: 'YOLO 기반 산불 조기 탐지 AI 모델',
      description: 'YOLOv8 딥러닝 모델을 활용한 화염·연기 탐지 시스템입니다. 47,829장의 데이터셋으로 학습하여 mAP50 0.85의 성능을 달성했습니다. 영상 기반 프레임 분석으로 초기 연기 패턴을 빠르게 포착하여 산불 조기 경보 시스템으로 활용 가능합니다.',
      tech: ['Python', 'YOLOv8', 'OpenCV', 'Ultralytics'],
      image: '/YOLO-Home.png',
      github: 'https://github.com/parkbj12/YOLO',
      demo: null,
      ppt: 'https://www.canva.com/design/DAG6V1QCeZk/wyc5o6hJvtTBY_LTRJ7TLQ/view',
    },
  ]

  return (
    <section id="projects" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-accent font-medium mb-2">03</p>
          <h2 className="text-4xl md:text-5xl font-bold">프로젝트</h2>
          <p className="mt-4 text-cream/60 max-w-2xl">
            제가 작업한 프로젝트들입니다. 각 프로젝트를 클릭하면 자세한 내용을 확인할 수 있습니다.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative group">
                  <div className="aspect-video bg-dark-700 rounded-xl overflow-hidden border border-dark-600 group-hover:border-accent/30 transition-all duration-500">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-dark-700 to-dark-800">
                        <span className="text-6xl opacity-30">🖼️</span>
                      </div>
                    )}
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Project number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent text-dark-900 rounded-full flex items-center justify-center font-bold text-lg">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-bold hover:text-accent transition-colors cursor-pointer">
                  {project.title}
                </h3>
                
                <p className="text-cream/60 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-dark-700 rounded-full text-sm text-accent/80 border border-dark-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cream/60 hover:text-accent transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      깃허브
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cream/60 hover:text-accent transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      데모 보기
                    </a>
                  )}
                  {project.ppt && (
                    <a 
                      href={project.ppt}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cream/60 hover:text-accent transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      발표자료
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Link */}
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/parkbj12" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cream/60 hover:text-accent transition-colors group"
          >
            더 많은 프로젝트 보기
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects


function Skills() {
  const skillCategories = [
    {
      title: '프론트엔드',
      icon: '🎨',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js']
    },
    {
      title: '백엔드',
      icon: '⚙️',
      skills: ['Java', 'JSP', 'Spring',]
    },
    {
      title: '데이터베이스',
      icon: '🗄️',
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: '빅데이터 & AI',
      icon: '🤖',
      skills: ['Python', '머신러닝', '딥러닝']
    }
  ]

  return (
    <section id="skills" className="py-32 bg-dark-800/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-accent font-medium mb-2">02</p>
          <h2 className="text-4xl md:text-5xl font-bold">기술 스택</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="group p-6 bg-dark-700/50 rounded-2xl border border-dark-600 hover:border-accent/30 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold mb-4 text-cream group-hover:text-accent transition-colors">
                {category.title}
              </h3>
              
              {/* Skills List */}
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li 
                    key={skill}
                    className="flex items-center gap-2 text-cream/60"
                  >
                    <span className="w-1.5 h-1.5 bg-accent/50 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Skills Bar */}
        <div className="mt-16 p-8 bg-dark-700/30 rounded-2xl border border-dark-600">
          <h3 className="text-lg font-semibold mb-6">DevOps & AI 도구</h3>
          <div className="flex flex-wrap gap-3">
            {['Git', 'GitHub', 'Docker', 'Kubernetes', 'AWS', 'ChatGPT', 'Copilot'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-dark-600/50 rounded-full text-sm text-cream/70 border border-dark-600 hover:border-accent/30 hover:text-accent transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills


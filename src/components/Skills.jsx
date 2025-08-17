import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", level: 95, color: "from-green-500 to-green-700" },
        { name: "Next.js", level: 90, color: "from-green-500 to-green-700" },
        { name: "TypeScript", level: 85, color: "from-green-500 to-green-700" },
        { name: "Tailwind CSS", level: 92, color: "from-green-500 to-green-700" },
        { name: "JavaScript", level: 88, color: "from-green-500 to-green-700" },
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 85, color: "from-green-500 to-green-700" },
        { name: "Python", level: 70, color: "from-green-500 to-green-700" },
        { name: "PostgreSQL", level: 78, color: "from-green-500 to-green-700" },
        { name: "MongoDB", level: 82, color: "from-green-500 to-green-700" },
        { name: "Rest APIs", level: 75, color: "from-green-500 to-green-700" },
      ]
    },
    {
      title: "Tools & DevOps",
      icon: "🛠️",
      skills: [
        { name: "VS Code", level: 95, color: "from-green-500 to-green-700" },
        { name: "Git", level: 90, color: "from-green-500 to-green-700" },
        { name: "Postman", level: 75, color: "from-green-500 to-green-700" },
        { name: "Redux Dev Tool", level: 70, color: "from-green-500 to-green-700" },
        { name: "Figma", level: 85, color: "from-green-500 to-green-700" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with cutting-edge technologies and creative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group relative"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 h-full transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                {/* Category Header */}
                <div className="flex items-center justify-center mb-8">
                  <div className="text-4xl mb-2 filter drop-shadow-lg">{category.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-8 group-hover:text-purple-200 transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-200 group-hover/skill:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-400 font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative h-2 bg-gray-800/50 rounded-full overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
                        </div>
                        
                        {/* Glow effect */}
                        <div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full blur-sm opacity-50 transition-all duration-1000 ease-out`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                        animationDelay: `${i * 1000}ms`,
                        animationDuration: '3s'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Ready to bring your ideas to life?</p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full transition-all duration-300 hover:from-purple-500 hover:to-blue-500 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1">
            <span className="relative z-10">Let's Work Together</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div> */}
      </div>

    </section>
  );
};

export default Skills;
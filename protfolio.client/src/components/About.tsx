import {
  Code2,
  Database,
  Globe,
  Palette,
  Smartphone,
  Cloud,
} from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: Code2,
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Next.js",
        "Vue.js",
      ],
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      category: "Backend Development",
      icon: Database,
      technologies: ["Node.js", ".NET Core", "Python", "PostgreSQL", "MongoDB"],
      color: "text-green-600 dark:text-green-400",
    },
    {
      category: "UI/UX Design",
      icon: Palette,
      technologies: [
        "Figma",
        "Adobe XD",
        "Responsive Design",
        "Design Systems",
      ],
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      category: "Mobile Development",
      icon: Smartphone,
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      color: "text-orange-600 dark:text-orange-400",
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      technologies: ["AWS", "Docker", "CI/CD", "Git", "Linux"],
      color: "text-cyan-600 dark:text-cyan-400",
    },
    {
      category: "Web Technologies",
      icon: Globe,
      technologies: ["HTML5", "CSS3", "JavaScript", "REST APIs", "GraphQL"],
      color: "text-red-600 dark:text-red-400",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            I'm a passionate full-stack developer with expertise in modern web
            technologies. I love creating intuitive, performant, and scalable
            applications that solve real-world problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* About Content */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p className="text-sm sm:text-base">
                With over 5 years of experience in web development, I've had the
                privilege of working on diverse projects ranging from startups
                to enterprise applications. My journey in tech has been driven
                by curiosity and a constant desire to learn and innovate.
              </p>
              <p className="text-sm sm:text-base">
                I specialize in building full-stack applications with a focus on
                user experience, performance, and scalability. I'm particularly
                passionate about creating responsive designs that work
                seamlessly across all devices and platforms.
              </p>
              <p className="text-sm sm:text-base">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through technical writing and mentoring.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">
                  50+ Projects
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Successfully delivered
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">
                  5+ Years
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Industry experience
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">
                  20+ Tech Stack
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Technologies mastered
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">
                  100% Client
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Satisfaction rate
                </p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            <div className="grid gap-3 sm:gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-start space-x-3">
                      <div
                        className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-700 ${skill.color} flex-shrink-0`}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                          {skill.category}
                        </h4>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {skill.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

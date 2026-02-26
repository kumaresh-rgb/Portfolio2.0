import { Github, Linkedin, Twitter, Mail, Globe } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    {
      id: 'github',
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/kumaresh-rgb',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/kumaresh-rgb',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/kumaresh_rgb',
      color: 'hover:text-sky-600 dark:hover:text-sky-400',
    },
    {
      id: 'email',
      name: 'Email',
      icon: Mail,
      url: 'mailto:kumaresh@example.com',
      color: 'hover:text-red-600 dark:hover:text-red-400',
    },
    {
      id: 'website',
      name: 'Website',
      icon: Globe,
      url: 'https://kumaresh.dev',
      color: 'hover:text-green-600 dark:hover:text-green-400',
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <div className="mb-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">K</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 px-4">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Kumaresh</span>
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 px-4">
            Full Stack Developer & UI/UX Enthusiast
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto px-4">
            Passionate about creating beautiful, functional, and user-centered digital experiences. 
            Specializing in modern web technologies and responsive design.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-8">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 dark:text-gray-400 transition-colors duration-200 ${link.color}`}
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="#projects"
              className="px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors duration-200 text-center"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

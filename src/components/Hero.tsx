
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', (!isDarkMode).toString());
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      const darkMode = savedMode === 'true';
      setIsDarkMode(darkMode);
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950 relative overflow-hidden">
      {/* Dark Mode Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <Button
          onClick={toggleDarkMode}
          variant="outline"
          size="icon"
          className="border-2 border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="scroll-reveal">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 p-1 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-2xl ring-4 ring-teal-500/20 ring-offset-4 ring-offset-gray-900 transition-all duration-300 hover:ring-teal-400/40 hover:shadow-teal-500/20 hover:scale-105">
  <img 
    src="/lovable-uploads/3b855fa9-1970-4082-8363-932ad0dc59d8.png" 
    alt="Muhammed Tallat Hassan Ahmed" 
    className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-110"
  />
</div>

            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-100 via-blue-300 to-indigo-300 bg-clip-text text-transparent mb-6">
            Muhammed Tallat Hassan Ahmed
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-medium">
            .NET Full-Stack Developer
          </p>
          
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Motivated .NET Developer with two years of experience in full-stack development. 
            Specialized in building scalable, efficient, and secure applications using ASP.NET Core, MVC, and modern web technologies.
          </p>
          
          <div className="flex justify-center gap-4 mb-10">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/muhammed-tallat-a440881b7/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={32} />
            </a>
            <a 
              href="https://github.com/MhmdTalat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition-all duration-300 transform hover:scale-110"
            >
              <Github size={32} />
            </a>
            <a 
              href="mailto:muhammedtallat4@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={32} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          size={32} 
          className="text-gray-400 cursor-pointer hover:text-blue-400 transition-colors duration-300"
          onClick={() => scrollToSection('about')}
        />
      </div>
    </section>
  );
};

export default Hero;

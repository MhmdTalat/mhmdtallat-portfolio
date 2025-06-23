
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold">
              MS
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Mahmoud Saeed
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Backend Engineer & AI Specialist
          </p>
          
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
            Passionate about building intelligent backend systems and AI-powered solutions. 
            Experienced in Node.js, Python, and cutting-edge AI technologies.
          </p>
          
          <div className="flex justify-center gap-4 mb-10">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/mahmoud-saeed-0971aa222/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="https://github.com/mahmoud6171" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={28} />
            </a>
            <a 
              href="mailto:mahmoud.saeed@example.com"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          size={32} 
          className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
          onClick={() => scrollToSection('about')}
        />
      </div>
    </section>
  );
};

export default Hero;

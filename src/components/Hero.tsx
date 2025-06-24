
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 p-1 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
              <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                {/* Replace this src with your actual image URL */}
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Mahmoud Saeed" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6">
            Mahmoud Saeed
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-medium">
            Backend Engineer & AI Specialist
          </p>
          
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Passionate about building intelligent backend systems with Django, FastAPI, and Flask. 
            Experienced in Python development and cutting-edge AI technologies including Computer Vision and LLMs.
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
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/mahmoud-saeed-0971aa222/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={32} />
            </a>
            <a 
              href="https://github.com/mahmoud6171" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
            >
              <Github size={32} />
            </a>
            <a 
              href="mailto:mahmoud.said5456@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={32} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          size={32} 
          className="text-gray-500 cursor-pointer hover:text-blue-600 transition-colors duration-300"
          onClick={() => scrollToSection('about')}
        />
      </div>
    </section>
  );
};

export default Hero;

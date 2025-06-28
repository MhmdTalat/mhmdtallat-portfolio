
import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, Server, Database } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-100 to-blue-300 bg-clip-text text-transparent mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate .NET Full-Stack Developer with two years of professional experience in building scalable web applications. 
            I specialize in creating efficient, secure solutions using the .NET ecosystem and modern web technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="scroll-reveal-scale hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-gray-700 bg-gradient-to-br from-gray-800 to-blue-900/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Backend Development</h3>
              <p className="text-gray-400">ASP.NET Core, Web API, Entity Framework, ADO.NET</p>
            </CardContent>
          </Card>
          
          <Card className="scroll-reveal-scale hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-gray-700 bg-gradient-to-br from-gray-800 to-green-900/20" style={{animationDelay: '0.1s'}}>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Frontend Development</h3>
              <p className="text-gray-400">HTML5, CSS3, JavaScript, Bootstrap, jQuery, MVC</p>
            </CardContent>
          </Card>
          
          <Card className="scroll-reveal-scale hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-gray-700 bg-gradient-to-br from-gray-800 to-purple-900/20" style={{animationDelay: '0.2s'}}>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Database Management</h3>
              <p className="text-gray-400">SQL Server, PostgreSQL, Entity Framework Core</p>
            </CardContent>
          </Card>
          
          <Card className="scroll-reveal-scale hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-gray-700 bg-gradient-to-br from-gray-800 to-orange-900/20" style={{animationDelay: '0.3s'}}>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Programming</h3>
              <p className="text-gray-400">C#, JavaScript, C++, OOP, Data Structures</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center scroll-reveal">
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Currently working as a Backend Developer at Egyptian Takaful, I have experience in building enterprise-level applications, 
            working with microservices architecture, and developing innovative solutions including Computer Vision projects. 
            I'm passionate about creating scalable, efficient solutions and staying current with the latest .NET technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

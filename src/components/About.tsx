
import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Server, Database } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate software developer with experience in full-stack web development 
            and mobile applications. I love turning complex problems into simple, beautiful solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-gray-600">React, JavaScript, TypeScript, Tailwind CSS</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Server className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-gray-600">Node.js, Express, RESTful APIs</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Smartphone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
              <p className="text-gray-600">React Native, Cross-platform apps</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Database className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Database</h3>
              <p className="text-gray-600">MySQL, MongoDB, Database Design</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            With a strong foundation in computer science and hands-on experience in various technologies, 
            I enjoy working on challenging projects that push the boundaries of what's possible. 
            I'm always eager to learn new technologies and contribute to innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

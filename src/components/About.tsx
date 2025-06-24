
import { Card, CardContent } from "@/components/ui/card";
import { Code, Brain, Server, Database } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Backend and AI Engineer with expertise in building scalable backend systems 
            using Python frameworks and implementing cutting-edge AI solutions. I love creating intelligent applications that solve real-world problems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Backend Development</h3>
              <p className="text-gray-600">Django, FastAPI, Flask, RESTful APIs, Microservices</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 bg-gradient-to-br from-green-50 to-green-100">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">AI Engineering</h3>
              <p className="text-gray-600">Machine Learning, NLP, AI Integration, LLMs, Computer Vision</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Database Design</h3>
              <p className="text-gray-600">MySQL, MongoDB, PostgreSQL, Database Architecture</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 bg-gradient-to-br from-orange-50 to-orange-100">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">API Development</h3>
              <p className="text-gray-600">REST APIs, GraphQL, Django REST Framework, API Design</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            With a strong foundation in Python backend frameworks like Django, FastAPI, and Flask, combined with artificial intelligence expertise in Computer Vision and LLMs, 
            I specialize in creating intelligent systems that leverage the power of AI to solve complex problems. 
            I'm passionate about building scalable, efficient solutions and staying at the forefront of AI innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

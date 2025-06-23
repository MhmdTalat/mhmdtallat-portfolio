
import { Card, CardContent } from "@/components/ui/card";
import { Code, Brain, Server, Database } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate Backend and AI Engineer with expertise in building scalable backend systems 
            using Python frameworks and implementing cutting-edge AI solutions. I love creating intelligent applications that solve real-world problems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Server className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-gray-600">Django, FastAPI, Flask, RESTful APIs, Microservices</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Brain className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Engineering</h3>
              <p className="text-gray-600">Machine Learning, NLP, AI Integration, LLMs</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Database className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Database Design</h3>
              <p className="text-gray-600">MySQL, MongoDB, PostgreSQL, Database Architecture</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Code className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">API Development</h3>
              <p className="text-gray-600">REST APIs, GraphQL, Django REST Framework, API Design</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            With a strong foundation in Python backend frameworks like Django, FastAPI, and Flask, combined with artificial intelligence expertise, 
            I specialize in creating intelligent systems that leverage the power of AI to solve complex problems. 
            I'm passionate about building scalable, efficient solutions and staying at the forefront of AI innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

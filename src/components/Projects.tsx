
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Tailor-Job Resume",
      description: "An AI-powered application that automatically customizes resumes for specific job descriptions using machine learning algorithms to match skills and keywords.",
      technologies: ["Python", "OpenAI API", "NLP", "Machine Learning", "FastAPI", "React"],
      githubUrl: "https://github.com/mahmoud6171",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Chat with Your PDF",
      description: "An intelligent document analysis system that allows users to chat with PDF documents using natural language processing and AI to extract insights and answer questions.",
      technologies: ["Python", "LangChain", "OpenAI API", "PDF Processing", "NLP", "Streamlit"],
      githubUrl: "https://github.com/mahmoud6171",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "AI-Powered Backend API",
      description: "A comprehensive backend system integrating multiple AI services including text analysis, sentiment detection, and automated content generation with robust authentication and rate limiting.",
      technologies: ["Node.js", "Express", "MongoDB", "OpenAI API", "JWT", "Docker"],
      githubUrl: "https://github.com/mahmoud6171",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Intelligent Data Processing Pipeline",
      description: "A scalable backend system for processing large datasets with machine learning models, featuring real-time analytics and automated reporting capabilities.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Celery", "Docker", "AWS"],
      githubUrl: "https://github.com/mahmoud6171",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured AI & Backend Projects</h2>
          <p className="text-xl text-gray-600">
            Here are some of my recent projects showcasing AI integration and backend engineering
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/mahmoud6171" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

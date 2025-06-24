
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
      title: "E-commerce Platform",
      description: "A full-featured e-commerce application built with Django, featuring user authentication, product management, shopping cart, payment integration, and order tracking.",
      technologies: ["Django", "Python", "PostgreSQL", "Django REST Framework", "HTML/CSS", "JavaScript"],
      githubUrl: "https://github.com/mahmoud6171",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Todo App with FastAPI",
      description: "A modern todo application built with FastAPI backend, featuring user authentication, task management, categories, and real-time updates with clean API design.",
      technologies: ["FastAPI", "Python", "SQLAlchemy", "PostgreSQL", "JWT", "Pydantic"],
      githubUrl: "https://github.com/mahmoud6171",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mini-RAG System",
      description: "A Retrieval-Augmented Generation (RAG) base project demonstrating how to handle PDFs and documents from upload to production, with vector database integration for intelligent document querying.",
      technologies: ["Python", "LangChain", "Vector DB", "FAISS", "OpenAI API", "PDF Processing", "RAG"],
      githubUrl: "https://github.com/mahmoud6171",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "AI-Powered Backend API",
      description: "A comprehensive backend system integrating multiple AI services including text analysis, sentiment detection, and automated content generation with robust authentication and rate limiting.",
      technologies: ["FastAPI", "Python", "MongoDB", "OpenAI API", "JWT", "Docker"],
      githubUrl: "https://github.com/mahmoud6171",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-100 to-blue-300 bg-clip-text text-transparent mb-4">Featured AI & Backend Projects</h2>
          <p className="text-xl text-gray-300">
            Here are some of my recent projects showcasing AI integration, backend engineering, and full-stack development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="scroll-reveal-scale hover:shadow-xl transition-shadow overflow-hidden border-gray-700 bg-gray-800/80 backdrop-blur-sm" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-100">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-gray-700 text-gray-200 border-gray-600">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild className="border-gray-600 text-gray-200 hover:bg-gray-700">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
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
        
        <div className="text-center mt-12 scroll-reveal">
          <Button variant="outline" size="lg" asChild className="border-gray-600 text-gray-200 hover:bg-gray-700">
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

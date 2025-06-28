
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Deep Fake Media Detection",
      description: "Graduation project: Innovative mobile application and web platform for detecting deep fake media. Achieved 89.3583 AUROC score using Convolutional Recurrent Neural Networks (CRNN). Published in IEEE MIUCC 2022.",
      technologies: ["ASP.NET", "Flutter", "Python", "CRNN", "Computer Vision", "Machine Learning"],
      githubUrl: "https://github.com/yourusername/deepfake-detection",
      liveUrl: "https://ieeexplore.ieee.org/document/your-paper",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "E-Commerce API",
      description: "Comprehensive e-commerce backend API built with ASP.NET Core. Features secure JWT authentication, product & category management, shopping cart system, and scalable architecture.",
      technologies: ["ASP.NET Core", "Entity Framework Core", "SQL Server", "JWT", "Swagger", "C#"],
      githubUrl: "https://github.com/yourusername/ecommerce-api",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "E-Commerce Website",
      description: "Full-featured e-commerce web application with JWT authentication, real-time order tracking, smart cart & wishlist functionality, and comprehensive admin dashboard.",
      technologies: ["ASP.NET MVC", "C#", "JavaScript", "Bootstrap", "Entity Framework Core", "SQL Server"],
      githubUrl: "https://github.com/yourusername/ecommerce-site",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "To-Do List Web App",
      description: "Task management web application built with ASP.NET Core MVC. Features include task organization, deadline reminders, category management, and progress tracking.",
      technologies: ["ASP.NET Core MVC", "SQL Server", "Entity Framework", "Bootstrap", "C#"],
      githubUrl: "https://github.com/yourusername/todo-app",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Egyptian National ID Field Detector (EKYC)",
      description: "Computer Vision project for automated field extraction from Egyptian ID documents. Features region-based detection, signature recognition, and intelligent classification with confidence scoring.",
      technologies: ["Python", "OpenCV", "NumPy", "Matplotlib", "PIL", "Computer Vision"],
      githubUrl: "https://github.com/yourusername/id-detector",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "QR Code PDF Generator",
      description: "Utility application for generating QR codes and embedding them into PDF documents. Supports customizable layouts, batch processing, and multiple input formats.",
      technologies: ["C#", ".NET 6", "QRCoder", "iTextSharp", "PDF Generation"],
      githubUrl: "https://github.com/yourusername/qr-pdf-generator",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1606776570468-1b23a6f4db69?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-100 to-blue-300 bg-clip-text text-transparent mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300">
            Here are some of my projects showcasing .NET development, full-stack applications, and Computer Vision solutions
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
                      {project.liveUrl.includes('ieee') ? 'IEEE Paper' : 'Live Demo'}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 scroll-reveal">
          <Button variant="outline" size="lg" asChild className="border-gray-600 text-gray-200 hover:bg-gray-700">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
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

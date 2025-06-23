
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "Express", "MySQL", "Stripe"],
      githubUrl: "https://github.com/mahmoud6171",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Task Management App",
      description: "A React Native mobile application for task management with real-time synchronization and offline capabilities.",
      technologies: ["React Native", "Redux", "Firebase", "AsyncStorage"],
      githubUrl: "https://github.com/mahmoud6171",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive web application that displays weather information with beautiful charts and forecasts using external APIs.",
      technologies: ["React", "TypeScript", "Chart.js", "Weather API"],
      githubUrl: "https://github.com/mahmoud6171",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for managing multiple social media accounts with analytics and scheduling features.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/mahmoud6171",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">
            Here are some of my recent projects that showcase my skills
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

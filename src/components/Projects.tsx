import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { motion } from "framer-motion";

import imgDeepfake from "@/assets/project-deepfake.jpg";
import imgElearning from "@/assets/project-elearning.jpg";
import imgFaceLiveness from "@/assets/project-face-liveness.jpg";
import imgDbGateway from "@/assets/project-db-gateway.jpg";
import imgEcommerceApi from "@/assets/project-ecommerce-api.jpg";
import imgFoodmart from "@/assets/project-foodmart.jpg";
import imgPharmacy from "@/assets/project-pharmacy.jpg";
import imgEmailCleaner from "@/assets/project-email-cleaner.jpg";
import imgOcrId from "@/assets/project-ocr-id.jpg";
import imgTodo from "@/assets/project-todo.jpg";

const projects = [
  {
    title: "Deep Fake Media Detection",
    description: "Graduation project: Mobile app & web platform for detecting deep fake media. 89.35 AUROC using CRNN. Published in IEEE MIUCC 2022.",
    technologies: ["ASP.NET", "Flutter", "Python", "CRNN", "Computer Vision"],
    githubUrl: "https://github.com/MhmdTalat/deepfake-detection",
    liveUrl: "https://ieeexplore.ieee.org/document/9781791",
    featured: true,
    language: "Python",
    image: imgDeepfake,
  },
  {
    title: "E-Learning Model",
    description: "Full-stack e-learning platform with .NET 8 Web API backend and Angular TypeScript frontend.",
    technologies: [".NET 8 API", "Angular", "TypeScript", "EF Core", "SQL Server"],
    githubUrl: "https://github.com/MhmdTalat/E-learning-model-",
    liveUrl: "#",
    language: "C#",
    image: imgElearning,
  },
  {
    title: "Face Liveness Detection",
    description: "Anti-spoofing web app to distinguish real faces from fake ones using live camera feed.",
    technologies: ["Python", "OpenCV", "Anti-Spoofing", "Computer Vision", "Web App"],
    githubUrl: "https://github.com/MhmdTalat/Face-Liveness-Detection-Anti-Spoofing-Web-App",
    liveUrl: "#",
    language: "Python",
    image: imgFaceLiveness,
  },
  {
    title: "Database Integration API Gateway",
    description: "API Gateway integrating Oracle Database and Microsoft SQL Server with unified data access.",
    technologies: ["Oracle", "SQL Server", "API Gateway", "C#", ".NET"],
    githubUrl: "https://github.com/MhmdTalat/Database-Integration-Using-API-Gateway-Oracle-SQL-Server-",
    liveUrl: "#",
    language: "C#",
    image: imgDbGateway,
  },
  {
    title: "E-Commerce API",
    description: "Scalable & secure e-commerce backend API with JWT auth, product management, and clean architecture.",
    technologies: ["ASP.NET Core", "EF Core", "SQL Server", "JWT", "Swagger"],
    githubUrl: "https://github.com/MhmdTalat/E-Commerce-API---Scalable-Secure-Shopping-Platform-",
    liveUrl: "#",
    stars: 1,
    forks: 1,
    language: "C#",
    image: imgEcommerceApi,
  },
  {
    title: "FoodMart E-Commerce",
    description: "Modern e-commerce grocery platform with admin dashboard, cart, wishlist, and order tracking.",
    technologies: ["ASP.NET MVC", "C#", "Bootstrap", "EF Core", "SQL Server"],
    githubUrl: "https://github.com/MhmdTalat/ECommerceProject",
    liveUrl: "#",
    language: "HTML",
    image: imgFoodmart,
  },
  {
    title: "Pharmacy Management System",
    description: "Enterprise pharmacy platform with prescription processing, inventory management, and analytics.",
    technologies: ["ASP.NET MVC", "EF Core", "SQL Server", "Oracle", "JWT"],
    githubUrl: "https://github.com/MhmdTalat/pharmacy-management-system",
    liveUrl: "#",
    stars: 1,
    language: "HTML",
    image: imgPharmacy,
  },
  {
    title: "Smart Email Cleaner",
    description: "Intelligent email cleaning tool that automates inbox organization and cleanup workflows.",
    technologies: ["JavaScript", "Automation", "Email API"],
    githubUrl: "https://github.com/MhmdTalat/Smart-Email-Cleaner",
    liveUrl: "#",
    language: "JavaScript",
    image: imgEmailCleaner,
  },
  {
    title: "Egyptian National ID OCR",
    description: "Computer Vision project for automated field extraction from Egyptian ID documents.",
    technologies: ["Python", "OpenCV", "NumPy", "PIL", "Computer Vision"],
    githubUrl: "https://github.com/MhmdTalat/OCR_Egyptian_ID",
    liveUrl: "#",
    stars: 1,
    language: "Python",
    image: imgOcrId,
  },
  {
    title: "To-Do List Web App",
    description: "Task management platform for tracking personal tasks with deadline reminders.",
    technologies: ["ASP.NET Core MVC", "SQL Server", "EF Core", "C#"],
    githubUrl: "https://github.com/MhmdTalat/To-Do-List",
    liveUrl: "#",
    language: "C#",
    image: imgTodo,
  },
];

const langColors: Record<string, string> = {
  "C#": "bg-green-500",
  Python: "bg-blue-500",
  TypeScript: "bg-blue-400",
  JavaScript: "bg-yellow-400",
  HTML: "bg-orange-500",
};

const Projects = () => (
  <section id="projects" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <span className="text-primary font-mono text-sm mb-3 block opacity-60">{"// github.repos.list()"}</span>
        <h2 className="text-4xl font-bold text-foreground mb-4">All Projects</h2>
        <p className="text-muted-foreground">
          {projects.length} repositories · Full-stack apps, APIs, AI & Computer Vision
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className={`group glass rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ${
              project.featured
                ? "border-primary/30 shadow-lg shadow-primary/5"
                : "glass-hover"
            }`}
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

              <div className="absolute top-3 right-3 flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <Github size={14} />
                </a>
                {project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/40 transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>

              {(project.stars || project.forks) && (
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  {project.stars && (
                    <span className="flex items-center gap-1 text-xs bg-background/80 backdrop-blur-sm border border-border rounded-lg px-2 py-0.5 text-yellow-400">
                      <Star size={11} /> {project.stars}
                    </span>
                  )}
                  {project.forks && (
                    <span className="flex items-center gap-1 text-xs bg-background/80 backdrop-blur-sm border border-border rounded-lg px-2 py-0.5 text-muted-foreground">
                      <GitFork size={11} /> {project.forks}
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-[11px] font-mono text-muted-foreground bg-secondary/60 px-2 py-0.5 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${langColors[project.language] || "bg-gray-500"}`} />
                  <span className="text-xs text-muted-foreground font-mono">{project.language}</span>
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={13} />
                  View Repo
                </a>
              </div>

              {project.featured && (
                <div className="mt-3 pt-2 border-t border-primary/10">
                  <span className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">★ IEEE Published</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-12"
      >
        <Button variant="outline" size="lg" asChild className="border-border text-muted-foreground hover:text-primary hover:border-primary/30 font-mono rounded-xl">
          <a href="https://github.com/MhmdTalat" target="_blank" rel="noopener noreferrer">
            <Github size={18} className="mr-2" />
            view_all_repos()
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default Projects;

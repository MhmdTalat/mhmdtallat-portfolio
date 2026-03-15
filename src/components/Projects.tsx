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
    description: "Full-stack e-learning platform with .NET 8 Web API backend and Angular TypeScript frontend. Manages departments, instructors, courses, and enrollments with repository pattern and EF Core migrations.",
    technologies: [".NET 8 API", "Angular", "TypeScript", "EF Core", "SQL Server"],
    githubUrl: "https://github.com/MhmdTalat/E-learning-model-",
    liveUrl: "#",
    language: "C#",
    image: imgElearning,
  },
  {
    title: "Face Liveness Detection",
    description: "Anti-spoofing web app to distinguish real faces from fake ones using live camera feed. Real-time face authentication system.",
    technologies: ["Python", "OpenCV", "Anti-Spoofing", "Computer Vision", "Web App"],
    githubUrl: "https://github.com/MhmdTalat/Face-Liveness-Detection-Anti-Spoofing-Web-App",
    liveUrl: "#",
    language: "Python",
    image: imgFaceLiveness,
  },
  {
    title: "Database Integration API Gateway",
    description: "API Gateway integrating Oracle Database and Microsoft SQL Server. Cross-database communication and unified data access layer.",
    technologies: ["Oracle", "SQL Server", "API Gateway", "C#", ".NET"],
    githubUrl: "https://github.com/MhmdTalat/Database-Integration-Using-API-Gateway-Oracle-SQL-Server-",
    liveUrl: "#",
    language: "C#",
    image: imgDbGateway,
  },
  {
    title: "E-Commerce API",
    description: "Scalable & secure e-commerce backend API with JWT auth, product & category management, shopping cart system, and clean architecture.",
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
    description: "Modern e-commerce grocery platform with seamless, secure shopping experience. Full-stack with admin dashboard, cart, wishlist, and order tracking.",
    technologies: ["ASP.NET MVC", "C#", "Bootstrap", "EF Core", "SQL Server"],
    githubUrl: "https://github.com/MhmdTalat/ECommerceProject",
    liveUrl: "#",
    language: "HTML",
    image: imgFoodmart,
  },
  {
    title: "Pharmacy Management System",
    description: "Enterprise pharmacy platform with prescription processing, inventory management, customer records, purchase orders, and real-time analytics dashboard.",
    technologies: ["ASP.NET MVC", "EF Core", "SQL Server", "Oracle", "JWT"],
    githubUrl: "https://github.com/MhmdTalat/pharmacy-management-system",
    liveUrl: "#",
    stars: 1,
    language: "HTML",
    image: imgPharmacy,
  },
  {
    title: "Smart Email Cleaner",
    description: "Intelligent email cleaning tool built with JavaScript. Automates inbox organization and cleanup workflows.",
    technologies: ["JavaScript", "Automation", "Email API"],
    githubUrl: "https://github.com/MhmdTalat/Smart-Email-Cleaner",
    liveUrl: "#",
    language: "JavaScript",
    image: imgEmailCleaner,
  },
  {
    title: "Egyptian National ID OCR",
    description: "Computer Vision project for automated field extraction from Egyptian ID documents with region-based detection and confidence scoring.",
    technologies: ["Python", "OpenCV", "NumPy", "PIL", "Computer Vision"],
    githubUrl: "https://github.com/MhmdTalat/OCR_Egyptian_ID",
    liveUrl: "#",
    stars: 1,
    language: "Python",
    image: imgOcrId,
  },
  {
    title: "To-Do List Web App",
    description: "Task management platform for tracking personal tasks, boosting productivity, and efficiently managing daily schedules with deadline reminders.",
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
  <section id="projects" className="py-20 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-cyan-400 font-mono text-sm mb-2 block">{"// github.repos.list()"}</span>
        <h2 className="text-4xl font-bold text-gray-100 mb-4">All Projects</h2>
        <p className="text-gray-400">
          {projects.length} repositories · Full-stack apps, APIs, AI & Computer Vision
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className={`group bg-gray-900/60 border rounded-xl overflow-hidden flex flex-col transition-all duration-300 ${
              project.featured
                ? "border-cyan-500/30 shadow-lg shadow-cyan-500/5"
                : "border-gray-800 hover:border-gray-700"
            }`}
          >
            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />

              {/* Overlay links */}
              <div className="absolute top-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-gray-950/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                >
                  <Github size={14} />
                </a>
                {project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-gray-950/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>

              {/* Stars/Forks badge */}
              {(project.stars || project.forks) && (
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  {project.stars && (
                    <span className="flex items-center gap-1 text-xs bg-gray-950/80 backdrop-blur-sm border border-gray-700 rounded-md px-2 py-0.5 text-yellow-400">
                      <Star size={11} /> {project.stars}
                    </span>
                  )}
                  {project.forks && (
                    <span className="flex items-center gap-1 text-xs bg-gray-950/80 backdrop-blur-sm border border-gray-700 rounded-md px-2 py-0.5 text-gray-400">
                      <GitFork size={11} /> {project.forks}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-[11px] font-mono text-gray-500 bg-gray-800/50 px-2 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-gray-800/50">
                <span className={`w-2.5 h-2.5 rounded-full ${langColors[project.language] || "bg-gray-500"}`} />
                <span className="text-xs text-gray-500 font-mono">{project.language}</span>
              </div>

              {project.featured && (
                <div className="mt-3 pt-2 border-t border-cyan-500/10">
                  <span className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest">★ IEEE Published</span>
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
        <Button variant="outline" size="lg" asChild className="border-gray-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 font-mono">
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

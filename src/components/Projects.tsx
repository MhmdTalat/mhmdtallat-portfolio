import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Folder } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Deep Fake Media Detection",
    description: "Graduation project: Mobile app & web platform for detecting deep fake media. 89.35 AUROC using CRNN. Published in IEEE MIUCC 2022.",
    technologies: ["ASP.NET", "Flutter", "Python", "CRNN", "Computer Vision"],
    githubUrl: "https://github.com/MhmdTalat/deepfake-detection",
    liveUrl: "https://ieeexplore.ieee.org/document/9781791",
    featured: true,
  },
  {
    title: "E-Commerce API",
    description: "Full e-commerce backend with JWT auth, product management, cart system, and scalable architecture.",
    technologies: ["ASP.NET Core", "EF Core", "SQL Server", "JWT", "Swagger"],
    githubUrl: "https://github.com/MhmdTalat/E-Commerce-API---Scalable-Secure-Shopping-Platform-",
    liveUrl: "#",
  },
  {
    title: "E-Commerce Website",
    description: "Full-stack e-commerce with JWT auth, real-time order tracking, smart cart, wishlist, and admin dashboard.",
    technologies: ["ASP.NET MVC", "C#", "Bootstrap", "EF Core", "SQL Server"],
    githubUrl: "https://github.com/MhmdTalat/ECommerceProject",
    liveUrl: "#",
  },
  {
    title: "Pharmacy Management System",
    description: "Enterprise pharmacy platform with prescription processing, inventory, customer records, and real-time analytics.",
    technologies: ["ASP.NET MVC", "EF Core", "SQL Server", "Oracle", "JWT"],
    githubUrl: "https://github.com/MhmdTalat/pharmacy-management-system",
    liveUrl: "#",
  },
  {
    title: "Egyptian National ID OCR",
    description: "Computer Vision project for automated field extraction from Egyptian ID documents with confidence scoring.",
    technologies: ["Python", "OpenCV", "NumPy", "PIL", "Computer Vision"],
    githubUrl: "https://github.com/MhmdTalat/OCR_Egyptian_ID",
    liveUrl: "#",
  },
  {
    title: "QR Code PDF Generator",
    description: "Utility for generating QR codes and embedding them into PDFs with customizable layouts and batch processing.",
    technologies: ["C#", ".NET 6", "QRCoder", "iTextSharp"],
    githubUrl: "https://github.com/MhmdTalat/qr-pdf-generator",
    liveUrl: "#",
  },
  {
    title: "To-Do List Web App",
    description: "Task management app with organization, deadline reminders, categories, and progress tracking.",
    technologies: ["ASP.NET Core MVC", "SQL Server", "EF Core", "Bootstrap"],
    githubUrl: "https://github.com/MhmdTalat/To-Do-List",
    liveUrl: "#",
  },
];

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
        <span className="text-cyan-400 font-mono text-sm mb-2 block">{"// projects.showcase()"}</span>
        <h2 className="text-4xl font-bold text-gray-100 mb-4">Featured Projects</h2>
        <p className="text-gray-400">Full-stack applications, APIs, and Computer Vision solutions</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className={`group bg-gray-900/60 border rounded-xl p-6 flex flex-col transition-all duration-300 ${
              project.featured
                ? "border-cyan-500/30 shadow-lg shadow-cyan-500/5"
                : "border-gray-800 hover:border-gray-700"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <Folder className="w-8 h-8 text-cyan-500/60" />
              <div className="flex gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-cyan-400 transition-colors"
                >
                  <Github size={18} />
                </a>
                {project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-[11px] font-mono text-gray-500">
                  {tech}
                </span>
              ))}
            </div>

            {project.featured && (
              <div className="mt-3 pt-3 border-t border-cyan-500/10">
                <span className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest">★ IEEE Published</span>
              </div>
            )}
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

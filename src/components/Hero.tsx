import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown, ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DevWorkspace3D from "./DevWorkspace3D";

const roles = [
  "Full Stack Developer",
  ".NET Backend Engineer",
  "API Architect",
  "Clean Architecture Advocate",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* 3D Workspace Scene */}
      <DevWorkspace3D />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(230,50%,4%)] via-[hsl(230,50%,4%)]/70 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(230,50%,4%)] via-transparent to-[hsl(230,50%,4%)]/50 z-[1]" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-2xl">
          {/* Terminal badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-mono backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for hire
            </span>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
            className="mb-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 p-[2px] shadow-2xl shadow-indigo-500/25">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-[hsl(230,50%,6%)]">
                <img
                  src="/lovable-uploads/3b855fa9-1970-4082-8363-932ad0dc59d8.png"
                  alt="Muhammed Tallat Hassan Ahmed"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
            style={{ lineHeight: '1.05' }}
          >
            <span className="text-gray-100">Muhammed</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              Tallat
            </span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg md:text-xl font-mono text-gray-400 mb-6 h-8"
          >
            <span className="text-indigo-400">{">"}</span> {displayed}
            <span className="animate-pulse text-indigo-400">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-400/80 mb-10 max-w-lg leading-relaxed text-sm"
          >
            3+ years building scalable .NET applications, REST APIs, and enterprise solutions.
            Skilled in payment integration, clean architecture, and modern Angular frontends.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-semibold px-6 py-3 text-sm shadow-lg shadow-indigo-600/25 transition-all duration-300 hover:shadow-indigo-500/40 active:scale-[0.97] rounded-xl"
            >
              View Projects
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-gray-700/50 text-gray-300 hover:bg-white/5 hover:text-indigo-300 hover:border-indigo-500/30 font-mono px-6 py-3 text-sm transition-all duration-300 active:scale-[0.97] backdrop-blur-sm rounded-xl"
            >
              Get in Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex gap-3"
          >
            {[
              { href: "https://www.linkedin.com/in/muhammed-tallat-a440881b7/", icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com/MhmdTalat", icon: Github, label: "GitHub" },
              { href: "mailto:muhammedtallat4@gmail.com", icon: Mail, label: "Email" },
              { href: "/Muhammed_Tallat_CV.pdf", icon: Download, label: "Download CV" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") || href.endsWith(".pdf") ? undefined : "_blank"}
                rel="noopener noreferrer"
                download={href.endsWith(".pdf") ? "Muhammed_Tallat_CV.pdf" : undefined}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-indigo-300 hover:border-indigo-500/30 hover:bg-white/10 transition-all duration-300 active:scale-95 backdrop-blur-sm"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown
          size={24}
          className="text-gray-500 cursor-pointer hover:text-indigo-400 transition-colors animate-bounce"
          onClick={() => scrollToSection("about")}
        />
      </motion.div>
    </section>
  );
};

export default Hero;

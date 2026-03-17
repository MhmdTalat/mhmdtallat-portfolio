import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CodeSnippet from "./CodeSnippet";

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 text-center relative z-10 pt-16">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
          className="mb-8"
        >
          <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-[3px] shadow-2xl shadow-cyan-500/20">
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-950">
              <img
                src="/lovable-uploads/3b855fa9-1970-4082-8363-932ad0dc59d8.png"
                alt="Muhammed Tallat Hassan Ahmed"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Terminal-style greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-mono">
            ~/portfolio $ whoami
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-gray-100 mb-4 tracking-tight"
        >
          Muhammed Tallat
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-xl md:text-2xl font-mono text-gray-400 mb-6 h-8"
        >
          <span className="text-cyan-400">{">"}</span> {displayed}
          <span className="animate-pulse text-cyan-400">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-base text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed font-mono text-sm"
        >
          3+ years building scalable .NET applications, REST APIs, and enterprise solutions.
          Skilled in payment integration (Paymob, Stripe), clean architecture, and Agile methodologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex justify-center gap-4 mb-10"
        >
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-mono font-bold px-8 py-3 text-sm shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-105"
          >
            view_projects()
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-cyan-400 hover:border-cyan-500/50 font-mono px-8 py-3 text-sm transition-all duration-300 hover:scale-105"
          >
            contact_me()
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex justify-center gap-5"
        >
          {[
            { href: "https://www.linkedin.com/in/muhammed-tallat-a440881b7/", icon: Linkedin, label: "LinkedIn" },
            { href: "https://github.com/MhmdTalat", icon: Github, label: "GitHub" },
            { href: "mailto:muhammedtallat4@gmail.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-gray-800 transition-all duration-300 hover:scale-110"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

      <CodeSnippet />


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown
          size={28}
          className="text-gray-600 cursor-pointer hover:text-cyan-400 transition-colors animate-bounce"
          onClick={() => scrollToSection("about")}
        />
      </motion.div>
    </section>
  );
};

export default Hero;

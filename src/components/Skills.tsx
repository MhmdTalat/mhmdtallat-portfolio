import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "C#", level: 92 },
  { name: "ASP.NET Core", level: 90 },
  { name: "Entity Framework Core", level: 88 },
  { name: "Web API / REST", level: 90 },
  { name: "SQL Server", level: 85 },
  { name: "Angular / TypeScript", level: 78 },
  { name: "Python", level: 75 },
  { name: "Clean Architecture", level: 85 },
  { name: "Docker / CI/CD", level: 70 },
  { name: "Git / GitHub", level: 88 },
];

const techCategories = [
  {
    label: "Languages",
    techs: ["C#", "C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    label: "Backend",
    techs: ["ASP.NET Core", "Web API", "Entity Framework Core", "ADO.NET", "LINQ", "Dependency Injection", "JWT", "RESTful APIs", "Microservices"],
  },
  {
    label: "Frontend",
    techs: ["Angular", "TypeScript", "HTML5", "CSS3", "Bootstrap", "JavaScript"],
  },
  {
    label: "Databases",
    techs: ["SQL Server", "Oracle", "PL/SQL", "Query Optimization", "Stored Procedures", "Database Design"],
  },
  {
    label: "Architecture",
    techs: ["Clean Architecture", "SOLID", "OOP", "Design Patterns", "Microservices"],
  },
  {
    label: "Payments",
    techs: ["Paymob", "Stripe API"],
  },
  {
    label: "AI & Vision",
    techs: ["OpenCV", "NumPy", "Computer Vision", "Deep Learning", "CRNN"],
  },
  {
    label: "DevOps & Tools",
    techs: ["Git", "GitHub", "Azure", "Docker", "Postman", "Swagger", "Unit Testing", "CI/CD"],
  },
];

const AnimatedBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1.5">
        <span className="text-gray-300 text-sm font-mono">{name}</span>
        <span className="text-cyan-400 text-xs font-mono">{level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
        />
      </div>
    </div>
  );
};

const Skills = () => (
  <section id="skills" className="py-20 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-cyan-400 font-mono text-sm mb-2 block">{"// skills.config"}</span>
        <h2 className="text-4xl font-bold text-gray-100 mb-4">Skills & Technologies</h2>
        <p className="text-gray-400">The stack I use to build performant, scalable applications</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-mono text-gray-200 mb-6 flex items-center gap-2">
            <span className="text-cyan-400">$</span> proficiency --list
          </h3>
          <div className="space-y-4">
            {skills.map((s, i) => (
              <AnimatedBar key={s.name} name={s.name} level={s.level} delay={i * 0.05} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-mono text-gray-200 mb-6 flex items-center gap-2">
            <span className="text-cyan-400">$</span> tech --categories
          </h3>
          <div className="space-y-5">
            {techCategories.map((cat) => (
              <div key={cat.label}>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2 block">{cat.label}</span>
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.08 }}
                      className="px-3 py-1 text-xs font-mono rounded-md bg-gray-900 border border-gray-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Skills;

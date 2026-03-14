import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Backend Developer",
    company: "Egyptian Takaful",
    period: "Present",
    description:
      "Building enterprise-level insurance applications with ASP.NET Core, microservices architecture, and SQL Server. Developing secure APIs and integrating third-party services.",
    techs: ["ASP.NET Core", "SQL Server", "Microservices", "JWT"],
  },
  {
    title: ".NET Full-Stack Developer",
    company: "Freelance & Projects",
    period: "2+ Years",
    description:
      "Developed multiple full-stack applications including e-commerce platforms, pharmacy management systems, and computer vision solutions.",
    techs: ["C#", "Entity Framework", "MVC", "Web API", "Python"],
  },
];

const Experience = () => (
  <section id="experience" className="py-20 bg-gray-950/50 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-100 to-cyan-300 bg-clip-text text-transparent mb-4">
          Experience
        </h2>
        <p className="text-lg text-gray-400 font-mono">// career.timeline()</p>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent" />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="relative pl-20 pb-12 last:pb-0"
          >
            {/* Node */}
            <div className="absolute left-[22px] top-1 w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-cyan-500/20 shadow-lg shadow-cyan-500/30" />

            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/30 transition-colors duration-300">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-gray-100">{exp.title}</h3>
                <span className="text-cyan-400 font-mono text-sm">@ {exp.company}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3 font-mono">
                <Calendar className="w-3.5 h-3.5" />
                {exp.period}
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.techs.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;

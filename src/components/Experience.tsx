import { motion } from "framer-motion";
import { Calendar, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer (.NET & Angular)",
    company: "Egyptian Takaful Insurance",
    period: "April 2025 – Present",
    description:
      "Architected and maintained 15+ RESTful endpoints using ASP.NET Core, serving 500+ daily active users across core insurance modules. Integrated Paymob payment gateway processing 200+ monthly transactions via encrypted API channels.",
    techs: ["ASP.NET Core", "Angular", "Paymob", "JWT", "SQL Server"],
  },
  {
    title: "Back-End Developer (.NET)",
    company: "EPROM",
    period: "June 2021 – September 2021",
    description:
      "Engineered 3 ASP.NET MVC applications adhering to industry best practices, serving 100+ internal users. Optimized SQL Server queries with indexing and query restructuring, reducing average response time by 40%.",
    techs: ["ASP.NET MVC", "SQL Server", "C#", "Code Review"],
  },
];

const education = {
  degree: "B.Sc. Computing and Information",
  school: "Arab Academy for Science, Technology and Maritime Transport",
  year: "2022",
};

const certifications = [
  { name: "Oracle Data Platform 2025 Certified Foundations Associate", org: "Oracle University", year: "2025" },
  { name: "IEEE Conference Paper – Deep Fake Video Detection", org: "MIUCC-22", year: "2022" },
  { name: "Front-End Development", org: "ITI", year: "2021" },
  { name: "CCNA 7 Introduction to Networks (88%)", org: "NTI", year: "2021" },
];

const Experience = () => (
  <section id="experience" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <span className="text-primary font-mono text-sm mb-3 block opacity-60">{"// career.timeline()"}</span>
        <h2 className="text-4xl font-bold text-foreground mb-4">Experience</h2>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-violet-500/30 to-transparent" />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-20 pb-12 last:pb-0"
          >
            <div className="absolute left-[22px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 shadow-lg shadow-primary/30" />

            <div className="glass glass-hover rounded-2xl p-6 transition-all duration-300">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                <span className="text-primary font-mono text-sm">@ {exp.company}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3 font-mono">
                <Calendar className="w-3.5 h-3.5" />
                {exp.period}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.techs.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 text-xs font-mono rounded-lg bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Education</h3>
          </div>
          <p className="text-foreground/80 font-semibold">{education.degree}</p>
          <p className="text-muted-foreground text-sm font-mono mt-1">{education.school}</p>
          <p className="text-primary text-xs font-mono mt-1">{education.year}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center">
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Certifications</h3>
          </div>
          <div className="space-y-3">
            {certifications.map((cert, i) => (
              <div key={i} className="border-l-2 border-border pl-3">
                <p className="text-foreground/80 text-sm">{cert.name}</p>
                <p className="text-muted-foreground text-xs font-mono">{cert.org} · {cert.year}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Experience;

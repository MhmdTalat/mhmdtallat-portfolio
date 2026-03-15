import { motion } from "framer-motion";
import { Calendar, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer (.NET & Angular)",
    company: "Egyptian Takaful Insurance",
    period: "April 2025 – Present",
    description:
      "Architected and maintained 15+ RESTful endpoints using ASP.NET Core, serving 500+ daily active users across core insurance modules. Integrated Paymob payment gateway processing 200+ monthly transactions via encrypted API channels. Enforced token-based authentication and input validation, reducing unauthorized access incidents by 95%.",
    techs: ["ASP.NET Core", "Angular", "Paymob", "JWT", "SQL Server"],
  },
  {
    title: "Back-End Developer (.NET)",
    company: "EPROM",
    period: "June 2021 – September 2021",
    description:
      "Engineered 3 ASP.NET MVC applications adhering to industry best practices, serving 100+ internal users. Optimized SQL Server queries with indexing and query restructuring, reducing average response time by 40%. Participated in 50+ code reviews and resolved 30+ bugs.",
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
  { name: "IEEE Conference Paper – Deep Fake Video Detection", org: "MIUCC-22, Misr International University", year: "2022" },
  { name: "Front-End Development", org: "Information Technology Institute (ITI)", year: "2021" },
  { name: "CCNA 7 Introduction to Networks (88%)", org: "National Telecommunication Institute (NTI)", year: "2021" },
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

      {/* Education & Certifications */}
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900/60 border border-gray-800 rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-100">Education</h3>
          </div>
          <p className="text-gray-300 font-semibold">{education.degree}</p>
          <p className="text-gray-500 text-sm font-mono mt-1">{education.school}</p>
          <p className="text-cyan-400 text-xs font-mono mt-1">{education.year}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gray-900/60 border border-gray-800 rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-100">Certifications</h3>
          </div>
          <div className="space-y-3">
            {certifications.map((cert, i) => (
              <div key={i} className="border-l-2 border-gray-700 pl-3">
                <p className="text-gray-300 text-sm">{cert.name}</p>
                <p className="text-gray-600 text-xs font-mono">{cert.org} · {cert.year}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Experience;

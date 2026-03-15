import { motion } from "framer-motion";
import { Server, Globe, Database, Code } from "lucide-react";

const cards = [
  { icon: Server, title: "Backend Dev", desc: "ASP.NET Core, Web API, EF Core, ADO.NET", color: "cyan" },
  { icon: Globe, title: "Frontend Dev", desc: "Angular, TypeScript, JavaScript, Bootstrap", color: "green" },
  { icon: Database, title: "Database", desc: "SQL Server, Oracle, PL/SQL, Query Optimization", color: "purple" },
  { icon: Code, title: "Architecture", desc: "Clean Architecture, SOLID, Design Patterns", color: "amber" },
];

const colorMap: Record<string, string> = {
  cyan: "from-cyan-500 to-cyan-600 shadow-cyan-500/20",
  green: "from-emerald-500 to-emerald-600 shadow-emerald-500/20",
  purple: "from-violet-500 to-violet-600 shadow-violet-500/20",
  amber: "from-amber-500 to-amber-600 shadow-amber-500/20",
};

const borderMap: Record<string, string> = {
  cyan: "hover:border-cyan-500/30",
  green: "hover:border-emerald-500/30",
  purple: "hover:border-violet-500/30",
  amber: "hover:border-amber-500/30",
};

const About = () => (
  <section id="about" className="py-20 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-cyan-400 font-mono text-sm mb-2 block">{"// about.me"}</span>
        <h2 className="text-4xl font-bold text-gray-100 mb-4">About Me</h2>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Passionate .NET Full-Stack Developer with 2+ years building scalable web apps.
          I specialize in clean architecture, secure APIs, and enterprise solutions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className={`bg-gray-900/60 border border-gray-800 rounded-xl p-6 text-center transition-colors duration-300 ${borderMap[card.color]}`}
          >
            <div className={`w-14 h-14 bg-gradient-to-br ${colorMap[card.color]} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
              <card.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-100 mb-1">{card.title}</h3>
            <p className="text-gray-500 text-sm font-mono">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-14 max-w-3xl mx-auto bg-gray-900/40 border border-gray-800 rounded-xl p-6"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-gray-600 text-xs font-mono">about.md</span>
        </div>
        <p className="text-gray-400 leading-relaxed text-sm font-mono">
          <span className="text-cyan-400">currently:</span> Backend Developer @ Egyptian Takaful<br />
          <span className="text-cyan-400">building:</span> Enterprise insurance applications & microservices<br />
          <span className="text-cyan-400">exploring:</span> Computer Vision, ML/DL, and Cloud Architecture<br />
          <span className="text-cyan-400">published:</span> IEEE MIUCC 2022 — Deep Fake Media Detection
        </p>
      </motion.div>
    </div>
  </section>
);

export default About;

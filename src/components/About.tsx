import { motion } from "framer-motion";
import { Server, Globe, Database, Code } from "lucide-react";

const cards = [
  { icon: Server, title: "Backend Dev", desc: "ASP.NET Core, Web API, EF Core, ADO.NET" },
  { icon: Globe, title: "Frontend Dev", desc: "Angular, TypeScript, JavaScript, Bootstrap" },
  { icon: Database, title: "Database", desc: "SQL Server, Oracle, PL/SQL, Query Optimization" },
  { icon: Code, title: "Architecture", desc: "Clean Architecture, SOLID, Design Patterns" },
];

const About = () => (
  <section id="about" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        
        <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Full Stack Developer with a strong back-end focus using .NET technologies.
          3+ years of expertise in building scalable web services, microservices, and data-driven applications.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="glass glass-hover rounded-2xl p-6 text-center transition-all duration-300 group cursor-default"
          >
            <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
              <card.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">{card.title}</h3>
            <p className="text-muted-foreground text-sm font-mono">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-14 max-w-3xl mx-auto glass rounded-2xl p-6"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-2 text-muted-foreground text-xs font-mono">about.md</span>
        </div>
        <p className="text-muted-foreground leading-relaxed text-sm font-mono">
          <span className="text-primary">currently:</span> Full Stack Developer (.NET & Angular) @ Egyptian Takaful Insurance<br />
          <span className="text-primary">building:</span> Enterprise insurance apps, 15+ RESTful endpoints, Paymob integration<br />
          <span className="text-primary">education:</span> B.Sc. Computing & Information — Arab Academy for Science & Technology (2022)<br />
          <span className="text-primary">certified:</span> Oracle Data Platform 2025 · IEEE MIUCC 2022 · ITI Front-End · CCNA (88%)
        </p>
      </motion.div>
    </div>
  </section>
);

export default About;

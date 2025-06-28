
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
    { name: "C#", level: 90 },
    { name: "ASP.NET Core", level: 85 },
    { name: "Entity Framework", level: 85 },
    { name: "SQL Server", level: 80 },
    { name: "JavaScript", level: 80 },
    { name: "Web API", level: 85 },
    { name: "MVC", level: 80 },
    { name: "HTML5/CSS3", level: 85 },
    { name: "Bootstrap", level: 75 },
    { name: "jQuery", level: 75 },
    { name: "LINQ", level: 80 },
    { name: "Git/GitHub", level: 85 }
  ];

  const technologies = [
    "C#", "ASP.NET Core", "ASP.NET MVC", "Web API", ".NET Framework", ".NET Core",
    "Entity Framework Core", "ADO.NET", "LINQ", "SQL Server", "PostgreSQL",
    "HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery", "JSON", "XML",
    "Visual Studio", "Git", "GitHub", "Swagger", "JWT Authentication",
    "OOP", "Data Structures", "Algorithms", "Microservices", "REST APIs",
    "Computer Vision", "OpenCV", "Python", "NumPy", "Matplotlib", "PIL",
    "QRCoder", "iTextSharp", "EPPlus", "Open XML SDK", "Odoo ERP",
    "Machine Learning", "TensorFlow", "Deep Learning", "Neural Networks"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-100 to-blue-300 bg-clip-text text-transparent mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-300">
            Here are the technologies and tools I work with in .NET Development, Full-Stack Development, and Computer Vision
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="scroll-reveal-left">
            <h3 className="text-2xl font-semibold mb-8 text-gray-100">Proficiency Levels</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-200 font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="scroll-reveal-right">
            <h3 className="text-2xl font-semibold mb-8 text-gray-100">Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="text-sm py-2 px-4 bg-gray-800 border border-gray-600 text-gray-200 hover:border-blue-500 hover:bg-blue-900/30 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

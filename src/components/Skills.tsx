
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "React Native", level: 80 },
    { name: "HTML/CSS", level: 90 },
    { name: "MySQL", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "Git", level: 85 },
    { name: "Tailwind CSS", level: 80 }
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Node.js", "Express", 
    "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap",
    "MySQL", "MongoDB", "Git", "GitHub", "REST APIs", "JSON",
    "Responsive Design", "Mobile Development", "Web Development"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600">
            Here are the technologies and tools I work with
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Proficiency Levels</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8">Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="text-sm py-2 px-4 bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
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

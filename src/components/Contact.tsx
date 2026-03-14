import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thank you! I'll get back to you soon." });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "muhammedtallat4@gmail.com", color: "from-cyan-500 to-blue-500" },
    { icon: Phone, label: "Phone", value: "+201028182637", color: "from-emerald-500 to-green-500" },
    { icon: MapPin, label: "Location", value: "Cairo, Egypt", color: "from-violet-500 to-purple-500" },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono text-sm mb-2 block">{"// contact.send()"}</span>
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Get In Touch</h2>
          <p className="text-gray-400">Let's discuss your next project or collaboration</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-5 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className={`w-11 h-11 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-600 uppercase">{label}</span>
                    <p className="text-gray-300 text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                { href: "https://www.linkedin.com/in/muhammed-tallat-a440881b7/", icon: Linkedin },
                { href: "https://github.com/MhmdTalat", icon: Github },
              ].map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/60 border border-gray-800 rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-gray-600 text-xs font-mono">message.new</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                placeholder="your_name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-gray-950 border-gray-800 text-gray-200 placeholder-gray-600 font-mono text-sm focus:border-cyan-500/50"
              />
              <Input
                name="email"
                type="email"
                placeholder="your_email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-gray-950 border-gray-800 text-gray-200 placeholder-gray-600 font-mono text-sm focus:border-cyan-500/50"
              />
              <Textarea
                name="message"
                placeholder="your_message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-gray-950 border-gray-800 text-gray-200 placeholder-gray-600 font-mono text-sm focus:border-cyan-500/50 resize-none"
              />
              <Button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-mono font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
              >
                <Send size={16} className="mr-2" />
                send_message()
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-gray-800/50">
        <p className="text-center text-gray-600 text-xs font-mono">
          © 2024 Muhammed Tallat · Built with passion and lots of ☕
        </p>
      </div>
    </section>
  );
};

export default Contact;

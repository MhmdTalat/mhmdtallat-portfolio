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
    { icon: Mail, label: "Email", value: "muhammedtallat4@gmail.com" },
    { icon: Phone, label: "Phone", value: "+201028182637" },
    { icon: MapPin, label: "Location", value: "Nasr City, Cairo, Egypt" },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground">Let's discuss your next project or collaboration</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-5 mb-8">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-muted-foreground uppercase">{label}</span>
                    <p className="text-foreground/80 text-sm">{value}</p>
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
                  className="w-10 h-10 rounded-xl bg-white/5 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 active:scale-95"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-muted-foreground text-xs font-mono">message.new</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                placeholder="your_name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-background/50 border-border text-foreground placeholder-muted-foreground font-mono text-sm focus:border-primary/50 rounded-xl"
              />
              <Input
                name="email"
                type="email"
                placeholder="your_email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-background/50 border-border text-foreground placeholder-muted-foreground font-mono text-sm focus:border-primary/50 rounded-xl"
              />
              <Textarea
                name="message"
                placeholder="your_message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-background/50 border-border text-foreground placeholder-muted-foreground font-mono text-sm focus:border-primary/50 resize-none rounded-xl"
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-indigo-500 text-primary-foreground font-mono font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-[0.97] rounded-xl"
              >
                <Send size={16} className="mr-2" />
                send_message()
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-border/50">
        <p className="text-center text-muted-foreground text-xs font-mono">
          © 2024 Muhammed Tallat · Built with passion and lots of ☕
        </p>
      </div>
    </section>
  );
};

export default Contact;

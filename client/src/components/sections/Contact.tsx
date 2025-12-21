import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { toast } from "sonner";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        toast.success("Message sent! Check your inbox for confirmation.");
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        toast.error(data.message || "Failed to send message");
      }
    } catch (error) {
      toast.error("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading title="Get In Touch" subtitle="Contact Me" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold font-display leading-tight">Let's work together</h3>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                I'm currently open to new opportunities and collaborations. 
                Whether you have a question or just want to say hi, feel free to drop a message!
              </p>

              <div className="flex flex-col gap-6 pt-4">
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="flex items-center gap-6 p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-colors border border-transparent hover:border-primary/20 group"
                >
                  <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-base text-muted-foreground mb-1">Email Me</p>
                    <p className="font-bold text-lg md:text-xl">{personalInfo.email}</p>
                  </div>
                </a>

                <a 
                  href={personalInfo.social.whatsapp} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-6 p-6 rounded-2xl bg-green-500/10 hover:bg-green-500/20 transition-colors border border-transparent hover:border-green-500/20 group"
                >
                  <div className="p-4 rounded-full bg-green-500/20 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-base text-muted-foreground mb-1">WhatsApp</p>
                    <p className="font-bold text-lg md:text-xl">Chat Directly</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10 shadow-xl">
              <CardContent className="p-6 md:p-10">
                {submitted ? (
                  <div className="text-center space-y-4 py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                    <h3 className="text-2xl font-bold text-green-500">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. I'll get back to you soon!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-base font-semibold">Name</label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Your full name" 
                        required 
                        className="h-12 text-base bg-background/50"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-base font-semibold">Email</label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        required 
                        className="h-12 text-base bg-background/50"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="message" className="text-base font-semibold">Message</label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Tell me about your project..." 
                        className="min-h-[160px] text-base resize-none bg-background/50" 
                        required 
                        value={formData.message}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg shadow-primary/20"
                      disabled={loading}
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

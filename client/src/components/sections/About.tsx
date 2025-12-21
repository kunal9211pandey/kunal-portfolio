import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo } from "@/lib/data";
import { User, MapPin, Mail, Phone, Github, Linkedin, Instagram, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <SectionHeading 
          title="About Me" 
          subtitle="Who I Am" 
        />

        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl border border-white/10">
              <img 
                src="/generated_images/main.png" 
                alt="Working" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-bold">
              I'm {personalInfo.name}, a {personalInfo.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {personalInfo.about}
            </p>

            <div className="flex flex-wrap gap-3 py-4">
              <Button variant="outline" size="icon" className="rounded-full hover:text-primary hover:border-primary" asChild>
                <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:text-primary hover:border-primary" asChild>
                <a href={personalInfo.social.github} target="_blank" rel="noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:text-primary hover:border-primary" asChild>
                <a href={personalInfo.social.instagram} target="_blank" rel="noreferrer">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:text-primary hover:border-primary" asChild>
                <a href={personalInfo.social.kaggle} target="_blank" rel="noreferrer">
                   <i className="devicon-python-plain text-lg"/>
                </a>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Name</p>
                    <p className="font-medium">{personalInfo.name}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-medium text-sm truncate" title={personalInfo.email}>{personalInfo.email}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="font-medium">{personalInfo.location}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="font-medium">{personalInfo.phone}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

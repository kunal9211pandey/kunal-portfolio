import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <SectionHeading title="Technical Skills" subtitle="My Expertise" />

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all border-primary/10 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 font-display text-primary flex items-center gap-2">
                    <span className="w-1 h-6 bg-primary rounded-full"/>
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {category.items.map((item) => (
                      <motion.div 
                        key={item.name}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="flex flex-col items-center gap-2 group cursor-pointer"
                      >
                        <div className="w-12 h-12 flex items-center justify-center bg-background rounded-xl shadow-sm border border-border group-hover:border-primary/50 transition-colors p-2">
                          <i className={`${item.icon} text-2xl`}></i>
                        </div>
                        <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                          {item.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

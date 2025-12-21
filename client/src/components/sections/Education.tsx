import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading title="Education" subtitle="Academic Background" />

        <div className="grid gap-6">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-md transition-shadow border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{item.institution}</h3>
                        <p className="text-primary font-medium">{item.degree}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground bg-muted px-3 py-1 rounded-full text-sm w-fit">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.period}
                    </div>
                  </div>
                  
                  <div className="pl-[4.5rem]">
                    <p className="text-sm font-medium mb-2">Score: <span className="text-foreground">{item.score}</span></p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
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

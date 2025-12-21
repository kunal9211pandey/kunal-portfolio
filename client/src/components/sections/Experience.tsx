import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Experience() {
  const [selectedJob, setSelectedJob] = useState<typeof experience[0] | null>(null);

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <SectionHeading title="Work Experience" subtitle="My Journey" />

        <div className="px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {experience.map((item, index) => (
                <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/2 xl:basis-1/2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-1 h-full"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="h-full cursor-pointer group hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/50 overflow-hidden bg-card/80 backdrop-blur-sm">
                          <div className="h-40 overflow-hidden relative flex-shrink-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-500/10">
                            <img 
                              src={item.logo} 
                              alt={item.company}
                              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            <div className="absolute bottom-3 left-3 right-3 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
                              <Briefcase className="w-4 h-4 text-primary" />
                              <span className="text-white text-xs font-semibold truncate">{item.company}</span>
                            </div>
                          </div>
                          <CardHeader>
                            <CardTitle className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                              {item.role}
                            </CardTitle>
                            <h4 className="font-semibold text-foreground/90 mt-1 group-hover:text-primary transition-colors">
                              {item.company}
                            </h4>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="flex items-center text-sm text-muted-foreground gap-4 flex-wrap">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{item.period}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{item.location}</span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-3 group-hover:text-foreground transition-colors">
                              {item.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.slice(0, 2).map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                              {item.skills.length > 2 && (
                                <Badge variant="outline" className="text-xs">
                                  +{item.skills.length - 2}
                                </Badge>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>

                      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-display flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                              <Briefcase className="w-6 h-6 text-primary" />
                            </div>
                            {item.role}
                          </DialogTitle>
                          <DialogDescription className="text-base font-semibold text-primary mt-2">
                            {item.company}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-6 py-4">
                          <div className="space-y-3 border-l-2 border-primary/30 pl-4">
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="w-4 h-4 text-primary" />
                              <span className="font-medium">{item.period}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <MapPin className="w-4 h-4 text-primary" />
                              <span className="font-medium">{item.location}</span>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-lg mb-3">About This Role</h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-lg mb-3">Skills & Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill) => (
                                <Badge key={skill} variant="secondary" className="px-3 py-1">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

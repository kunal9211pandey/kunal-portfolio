import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <SectionHeading title="Featured Projects 10+" subtitle="My Portfolio" />

        <div className="px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-3/4 xl:basis-1/4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-1 h-full"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="h-full cursor-pointer group hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/50 overflow-hidden">
                          <div className="relative h-48 overflow-hidden">
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Badge className="bg-primary text-primary-foreground">View Details</Badge>
                            </div>
                          </div>
                          <CardHeader>
                            <CardTitle className="font-display text-xl group-hover:text-primary transition-colors">
                              {project.title}
                            </CardTitle>
                            <CardDescription className="line-clamp-2 mt-2">
                              {project.shortDescription}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.slice(0, 3).map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                              {project.techStack.length > 3 && (
                                <Badge variant="outline" className="text-xs">+{project.techStack.length - 3}</Badge>
                              )}
                            </div>
                          </CardContent>
                          <CardFooter className="pt-0">
                            <Button variant="ghost" className="w-full group-hover:bg-primary/5" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View Project Details
                            </Button>
                          </CardFooter>
                        </Card>
                      </DialogTrigger>
                      
                      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-display">{project.title}</DialogTitle>
                          <DialogDescription className="text-base mt-2">
                            {project.shortDescription}
                          </DialogDescription>
                        </DialogHeader>
                        
                        <ScrollArea className="flex-1 pr-4 -mr-4">
                          <div className="space-y-6 py-4">
                            <div className="rounded-xl overflow-hidden border border-border">
                              <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-64 object-cover"
                              />
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-lg mb-2">About the Project</h4>
                              <p className="text-muted-foreground leading-relaxed">
                                {project.fullDescription}
                              </p>
                            </div>

                            <div>
                              <h4 className="font-semibold text-lg mb-2">Technologies Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                  <Badge key={tech} variant="secondary" className="px-3 py-1">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </ScrollArea>

                        <DialogFooter className="flex-row gap-2 sm:justify-end mt-4 pt-4 border-t">
                          <Button variant="outline" asChild className="flex-1 sm:flex-none">
                            <a href={project.github} target="_blank" rel="noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              GitHub
                            </a>
                          </Button>
                          <Button asChild className="flex-1 sm:flex-none">
                            <a href={project.link} target="_blank" rel="noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        </DialogFooter>
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

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { certificates } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Certificates() {
  return (
    <section id="certificates" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <SectionHeading title="Certifications 21+" subtitle="Professional Growth" />

        <div className="px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {certificates.map((cert, index) => (
                <CarouselItem key={cert.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-1 h-full"
                  >
                    <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/10 bg-card/80 backdrop-blur-sm overflow-hidden">
                      <div className="h-32 overflow-hidden relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        <img 
                          src={cert.image} 
                          alt={cert.name} 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute bottom-2 left-2 z-20">
                          <Badge variant="secondary" className="bg-background/80 backdrop-blur text-xs">
                            {cert.date}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-2 pt-4 flex-shrink-0">
                        <CardTitle className="text-base font-bold leading-snug line-clamp-2 min-h-[2.5rem] break-words">
                          {cert.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow py-2 min-h-[3rem]">
                        <div className="flex items-start gap-2 text-sm text-muted-foreground flex-wrap">
                          <Award className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-2 break-words">{cert.issuer}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="mt-auto pt-0 pb-4 flex-shrink-0">
                        <Button variant="outline" className="w-full justify-center gap-2 text-xs md:text-sm group" asChild>
                          <a href={cert.link} target="_blank" rel="noreferrer">
                            <span>View</span>
                            <ExternalLink className="w-3 h-3 md:w-4 md:h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
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

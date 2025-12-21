import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { recommendations } from "@/lib/data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Linkedin, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function Recommendations() {
  return (
    <section id="recommendations" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <SectionHeading title="Recommendations" subtitle="What People Say in LinkdIn" />

        <div className="px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {recommendations.map((rec, index) => (
                <CarouselItem key={rec.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="h-full cursor-pointer hover:shadow-xl transition-all duration-300 border-none bg-card/80 backdrop-blur-sm relative overflow-hidden group">
                          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Quote className="w-24 h-24 text-primary" />
                          </div>
                          
                          <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <Avatar className="w-12 h-12 border-2 border-primary/20">
                              <AvatarImage src={rec.avatar} alt={rec.name} />
                              <AvatarFallback>{rec.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-bold text-sm">{rec.name}</h4>
                              <p className="text-xs text-muted-foreground line-clamp-1">{rec.role}</p>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground text-sm leading-relaxed italic relative z-10 line-clamp-4">
                              "{rec.content}"
                            </p>
                            <div className="mt-4 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                              View full details <ExternalLink className="w-3 h-3 ml-1" />
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <div className="flex flex-col items-center text-center gap-4 mb-4">
                            <Avatar className="w-24 h-24 border-4 border-primary/20 shadow-lg">
                              <AvatarImage src={rec.avatar} alt={rec.name} />
                              <AvatarFallback className="text-xl">{rec.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <DialogTitle className="text-2xl font-display">{rec.name}</DialogTitle>
                              <DialogDescription className="text-base font-medium text-primary mt-1">
                                {rec.role}
                              </DialogDescription>
                            </div>
                          </div>
                        </DialogHeader>
                        <div className="relative py-4">
                          <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2 rotate-180" />
                          <p className="text-base leading-relaxed px-6 italic text-muted-foreground text-center">
                            "{rec.content}"
                          </p>
                          <Quote className="w-8 h-8 text-primary/20 absolute -bottom-2 -right-2" />
                        </div>
                        <DialogFooter className="flex justify-center sm:justify-center gap-2 mt-6">
                          <Button asChild variant="outline" className="gap-2 rounded-full">
                            <a href={rec.linkedin} target="_blank" rel="noreferrer">
                              <Linkedin className="w-4 h-4" />
                              View LinkedIn Profile
                            </a>
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
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

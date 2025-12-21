import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Code2, Terminal, Database, Brain, LineChart, Sparkles } from "lucide-react";
import { personalInfo } from "@/lib/data";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center py-12 md:py-20 overflow-hidden bg-background">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000 mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center max-w-7xl">
        
        {/* Text Content - Left Side */}
        <div className="order-2 lg:order-1 flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 md:space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="flex justify-center lg:justify-start w-full">
              <span className="inline-flex items-center px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-6 md:mb-8 border border-primary/20 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for work
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight mb-4 md:mb-6 leading-[1.1]">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-gradient-x bg-[length:200%_auto]">
                {personalInfo.name}
              </span>
            </h1>
            <h2 className="text-lg sm:text-2xl md:text-3xl text-muted-foreground font-light">
              {personalInfo.title}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-lg text-muted-foreground max-w-xl leading-relaxed lg:mr-auto"
          >
            Transforming complex data into actionable insights and building intelligent AI solutions with modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto pt-2 md:pt-4"
          >
            <Button size="lg" className="rounded-full h-12 md:h-14 px-6 md:px-8 text-sm md:text-base shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105 bg-gradient-to-r from-primary to-purple-600 w-full sm:w-auto" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <a href={personalInfo.resumeUrl} download className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="rounded-full h-12 md:h-14 px-6 md:px-8 text-sm md:text-base border-primary/20 hover:bg-primary/5 hover:text-primary transition-all hover:scale-105 w-full">
                Download Resume
                <Download className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Image & 3D Elements - Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="order-1 lg:order-2 flex justify-center relative perspective-1000 py-6 md:py-10 lg:py-0"
        >
          <div className="relative w-60 h-60 sm:w-96 sm:h-96 lg:w-[32rem] lg:h-[32rem] preserve-3d">
            {/* Background Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-purple-500 animate-spin-slow blur-[100px] opacity-40" />
            
            {/* Main Profile Image Container */}
            <div className="relative w-full h-full rounded-full border border-white/10 backdrop-blur-sm p-6 shadow-2xl bg-white/5">
               <div className="w-full h-full rounded-full overflow-hidden border-4 border-background/50 relative z-10 ring-1 ring-white/20">
                <img 
                  src="/profile.png" 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                />
               </div>
            </div>
            
            {/* Floating 3D Badges (Replacing the list) */}
            
            {/* Badge 1: Python Expert */}
            <motion.div 
              animate={{ y: [0, -15, 0], rotateX: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 sm:-top-6 right-0 sm:-right-8 bg-card/80 backdrop-blur-xl p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 z-30 flex items-center gap-2 sm:gap-3 transform hover:scale-110 transition-transform text-xs sm:text-sm"
            >
              <div className="p-1 sm:p-2 rounded-lg bg-primary/10 text-primary">
                <Code2 className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <div className="hidden sm:block">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Expertise</p>
                <p className="font-bold text-foreground">Python Expert</p>
              </div>
              <div className="sm:hidden">
                <p className="font-bold text-foreground text-xs">Python</p>
              </div>
            </motion.div>
            
            {/* Badge 2: Data Science */}
            <motion.div 
              animate={{ y: [0, -20, 0], rotateX: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/3 sm:top-1/2 -left-4 sm:-left-12 bg-card/80 backdrop-blur-xl p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 z-30 flex items-center gap-2 sm:gap-3 transform hover:scale-110 transition-transform text-xs sm:text-sm"
            >
              <div className="p-1 sm:p-2 rounded-lg bg-purple-500/10 text-purple-500">
                <Database className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <div className="hidden sm:block">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Focus</p>
                <p className="font-bold text-foreground">Data Science</p>
              </div>
              <div className="sm:hidden">
                <p className="font-bold text-foreground text-xs">Data</p>
              </div>
            </motion.div>

            {/* Badge 3: ML Ops */}
            <motion.div 
              animate={{ y: [0, -12, 0], rotateX: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-4 sm:-bottom-6 right-4 sm:right-10 bg-card/80 backdrop-blur-xl p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 z-30 flex items-center gap-2 sm:gap-3 transform hover:scale-110 transition-transform text-xs sm:text-sm"
            >
              <div className="p-1 sm:p-2 rounded-lg bg-pink-500/10 text-pink-500">
                <Terminal className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <div className="hidden sm:block">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Specialty</p>
                <p className="font-bold text-foreground">ML Ops</p>
              </div>
              <div className="sm:hidden">
                <p className="font-bold text-foreground text-xs">ML Ops</p>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
            <div className="absolute bottom-20 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-700" />
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}

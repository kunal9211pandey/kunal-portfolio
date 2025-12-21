import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeading({ title, subtitle, className, align = "center" }: SectionHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("mb-12", {
        "text-center": align === "center",
        "text-left": align === "left",
        "text-right": align === "right",
      }, className)}
    >
      {subtitle && (
        <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
        {title}
      </h2>
      <div className={cn("h-1 w-20 bg-primary mt-4 rounded-full", {
        "mx-auto": align === "center",
        "ml-0": align === "left",
        "ml-auto": align === "right",
      })} />
    </motion.div>
  );
}

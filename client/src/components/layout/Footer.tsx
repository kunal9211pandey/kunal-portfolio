import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Instagram, Heart, Globe } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <div className="flex flex-col items-center">
            <h3 className="font-display font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">{personalInfo.name}</h3>
            <p className="text-muted-foreground mt-2 max-w-xs">{personalInfo.title}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <SocialLink href={personalInfo.social.github} icon={<Github className="w-5 h-5" />} label="GitHub" />
            <SocialLink href={personalInfo.social.linkedin} icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
            <SocialLink href={personalInfo.social.instagram} icon={<Instagram className="w-5 h-5" />} label="Instagram" />
            
            {/* For platforms without Lucide icons, we use Devicon or generic Globe */}
            <SocialLink href={personalInfo.social.leetcode} icon={<i className="devicon-cplusplus-plain text-lg"/>} label="LeetCode" /> {/* Proxy icon */}
            <SocialLink href={personalInfo.social.kaggle} icon={<i className="devicon-python-plain text-lg"/>} label="Kaggle" /> {/* Proxy icon */}
            <SocialLink href={personalInfo.social.geeksforgeeks} icon={<Globe className="w-5 h-5" />} label="GeeksforGeeks" />
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col items-center gap-4 text-sm text-muted-foreground text-center">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="p-3 rounded-full bg-background border border-border hover:border-primary hover:text-primary hover:scale-110 transition-all duration-300 shadow-sm group relative"
      aria-label={label}
    >
      {icon}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {label}
      </span>
    </a>
  );
}

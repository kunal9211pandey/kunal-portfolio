import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User, Bot, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { personalInfo, skills, projects } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Message = {
  id: string;
  role: "user" | "bot";
  content: string | React.ReactNode;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "bot",
      content: `Hi there! 👋 I'm ${personalInfo.name}'s virtual assistant. I can tell you about his skills, projects, or how to get in touch. What would you like to know?`,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI delay
    setTimeout(() => {
      const botResponse = generateResponse(text);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "bot",
          content: botResponse,
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const generateResponse = (text: string): string | React.ReactNode => {
    const lowerText = text.toLowerCase();

    if (lowerText.includes("skill") || lowerText.includes("tech") || lowerText.includes("stack")) {
      const topSkills = skills.flatMap(s => s.items.map(i => typeof i === 'string' ? i : i.name)).slice(0, 8).join(", ");
      return (
        <div className="space-y-2">
          <p>Kunal is proficient in: <strong>{topSkills}</strong> and more.</p>
          <Button variant="link" className="h-auto p-0 text-primary" onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>
            View all skills
          </Button>
        </div>
      );
    }

    if (lowerText.includes("project") || lowerText.includes("work") || lowerText.includes("built")) {
      const topProject = projects[0];
      return (
        <div className="space-y-2">
          <p>Kunal has built some amazing things! Check out <strong>{topProject.title}</strong>: {topProject.shortDescription}</p>
          <Button variant="link" className="h-auto p-0 text-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            See all projects
          </Button>
        </div>
      );
    }

    if (lowerText.includes("contact") || lowerText.includes("email") || lowerText.includes("hire") || lowerText.includes("reach")) {
      return (
        <div className="space-y-2">
          <p>You can reach Kunal at <a href={`mailto:${personalInfo.email}`} className="text-primary underline">{personalInfo.email}</a>.</p>
          <div className="flex gap-2 mt-1">
             <Button size="sm" variant="outline" asChild>
               <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
             </Button>
             <Button size="sm" variant="outline" asChild>
               <a href={personalInfo.social.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
             </Button>
          </div>
        </div>
      );
    }
    
    if (lowerText.includes("resume") || lowerText.includes("cv")) {
        return (
            <div className="space-y-2">
                <p>You can download Kunal's resume here:</p>
                <Button size="sm" asChild>
                    <a href={personalInfo.resumeUrl} download>Download Resume</a>
                </Button>
            </div>
        );
    }

    if (lowerText.includes("about") || lowerText.includes("who")) {
        return personalInfo.about;
    }

    if (lowerText.includes("hello") || lowerText.includes("hi") || lowerText.includes("hey")) {
        return "Hello! How can I help you today? You can ask about my projects, skills, or contact info.";
    }

    return "I'm not sure about that. Try asking about 'Skills', 'Projects', 'Contact', or 'Resume'.";
  };

  const suggestions = ["Skills", "Projects", "Contact", "Resume"];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 z-50 w-[90vw] md:w-[350px] shadow-2xl"
          >
            <Card className="border-primary/20 shadow-2xl overflow-hidden">
              <CardHeader className="bg-primary text-primary-foreground p-3 md:p-4 flex flex-row items-center justify-between space-y-0">
                <div className="flex items-center gap-2 md:gap-3 min-w-0">
                  <div className="rounded-full border-2 border-white/30 p-0.5 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 overflow-hidden bg-white/10">
                    <img 
                      src="/profile.png" 
                      alt="Kunal Kumar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-xs md:text-sm truncate">Kunal's Assistant</h3>
                    <p className="text-xs text-primary-foreground/80 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                      <span className="truncate">Online</span>
                    </p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </CardHeader>
              
              <CardContent className="p-0">
                <ScrollArea className="h-[350px] p-4" ref={scrollAreaRef}>
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        {msg.role === "bot" && (
                          <Avatar className="w-8 h-8 border border-border">
                            <AvatarImage src="/profile.png" />
                            <AvatarFallback>AI</AvatarFallback>
                          </Avatar>
                        )}
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                            msg.role === "user"
                              ? "bg-primary text-primary-foreground rounded-br-none"
                              : "bg-muted text-foreground rounded-bl-none border border-border"
                          }`}
                        >
                          {msg.content}
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex gap-2 justify-start">
                         <Avatar className="w-8 h-8 border border-border">
                            <AvatarFallback>AI</AvatarFallback>
                          </Avatar>
                        <div className="bg-muted border border-border rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" />
                          <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce delay-150" />
                          <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce delay-300" />
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>

              <CardFooter className="p-3 bg-background border-t border-border flex flex-col gap-3">
                <div className="flex gap-2 overflow-x-auto w-full pb-1 scrollbar-hide">
                  {suggestions.map((s) => (
                    <Button 
                      key={s} 
                      variant="outline" 
                      size="sm" 
                      className="text-xs h-7 whitespace-nowrap rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary"
                      onClick={() => handleSendMessage(s)}
                    >
                      {s}
                    </Button>
                  ))}
                </div>
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage(inputValue);
                  }}
                  className="flex w-full gap-2"
                >
                  <Input 
                    placeholder="Ask something..." 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="rounded-full bg-muted/50 focus-visible:ring-primary/20"
                  />
                  <Button type="submit" size="icon" className="rounded-full shrink-0" disabled={!inputValue.trim() || isTyping}>
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-4 right-4 z-50"
      >
        {!isOpen && (
          <Button
            size="lg"
            className="rounded-full h-12 w-12 md:h-16 md:w-16 shadow-xl shadow-primary/40 bg-gradient-to-tr from-primary to-purple-600 hover:scale-110 transition-transform p-0.5 border-2 border-white/20 overflow-hidden flex-shrink-0"
            onClick={() => setIsOpen(true)}
          >
            <img 
              src="/profile.png" 
              alt="Chat with me" 
              className="w-full h-full object-cover rounded-full"
            />
            <span className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full border-2 border-background animate-pulse" />
          </Button>
        )}
      </motion.div>
    </>
  );
}

import { Switch, Route } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Remove Replit dev banner
    const removeBanner = () => {
      const banners = document.querySelectorAll(
        '[data-theme-banner], [class*="replit"], [class*="dev-banner"], .replit-ui-banner, #replit-banner, [class*="vite-plugin"]'
      );
      banners.forEach((banner) => banner.remove());
      
      // Also try to find and remove any iframe or div with replit content
      document.querySelectorAll('*').forEach((el) => {
        const content = el.textContent || '';
        if (content.includes('Replit') && (el.tagName === 'DIV' || el.tagName === 'IFRAME')) {
          if (el.className && (el.className.includes('banner') || el.className.includes('replit'))) {
            el.remove();
          }
        }
      });
    };

    removeBanner();
    const interval = setInterval(removeBanner, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="kunal-portfolio-theme">
        <Router />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

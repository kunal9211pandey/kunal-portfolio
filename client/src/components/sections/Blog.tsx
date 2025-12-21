import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, BookOpen } from "lucide-react";

export const blogPosts = [
  {
    id: 1,
    title: "How to Build an AI-Powered Browser Extension with LangChain & OpenAI",
    description: "Step-by-step guide to creating intelligent automation using LLMs",
    category: "AI/LLM",
    readTime: "8 min read",
    date: "2024-11-20",
    tags: ["Python", "LangChain", "OpenAI API", "Automation"],
    link: "#",
    image: "@assets/generated_images/ai_developer_portfolio_hero.png"
  },
  {
    id: 2,
    title: "Web Scraping at Scale: Bypassing Cloudflare & reCAPTCHA",
    description: "Advanced techniques for large-scale data collection and proxy management",
    category: "Web Scraping",
    readTime: "10 min read",
    date: "2024-11-18",
    tags: ["Python", "Selenium", "Data Collection", "Web Scraping"],
    link: "#",
    image: "@assets/generated_images/web_scraping_and_data_tech.png"
  },
  {
    id: 3,
    title: "Machine Learning for Housing Price Prediction: 89.5% Accuracy Achieved",
    description: "From EDA to deployment - Complete ML pipeline with Scikit-learn",
    category: "Machine Learning",
    readTime: "12 min read",
    date: "2024-11-15",
    tags: ["ML", "Scikit-learn", "Python", "Regression Models"],
    link: "#",
    image: "@assets/generated_images/machine_learning_analytics.png"
  },
  {
    id: 4,
    title: "NLP & Text Analysis: Extracting Insights from Unstructured Data",
    description: "Practical guide to tokenization, embeddings, and sentiment analysis",
    category: "NLP",
    readTime: "9 min read",
    date: "2024-11-12",
    tags: ["NLP", "Python", "NLTK", "Text Analysis"],
    link: "#",
    image: "@assets/generated_images/nlp_text_analysis_visualization.png"
  },
  {
    id: 5,
    title: "Azure Cloud for Data Scientists: Complete Setup & Deployment Guide",
    description: "Deploy ML models to production with Azure ML Services",
    category: "Cloud",
    readTime: "11 min read",
    date: "2024-11-10",
    tags: ["Azure", "Cloud", "MLOps", "Deployment"],
    link: "#",
    image: "@assets/generated_images/azure_cloud_computing.png"
  },
  {
    id: 6,
    title: "Python for Data Analysis: Pandas & NumPy Tricks You Need to Know",
    description: "Optimize data manipulation and numerical computing workflows",
    category: "Data Analysis",
    readTime: "7 min read",
    date: "2024-11-08",
    tags: ["Python", "Pandas", "NumPy", "Data Analysis"],
    link: "#",
    image: "@assets/generated_images/python_data_analysis.png"
  }
];

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = ["AI/LLM", "Web Scraping", "Machine Learning", "NLP", "Cloud", "Data Analysis"];
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  return (
    <section id="blog" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <SectionHeading 
          title="Latest Blog & Articles" 
          subtitle="AI & Data Science Insights"
        />

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 md:gap-3 mb-12 justify-center"
        >
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            className="rounded-full"
            onClick={() => setSelectedCategory(null)}
          >
            All Posts
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </motion.div>

        {/* Blog Grid - Responsive for Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/50 overflow-hidden group cursor-pointer flex flex-col">
                {/* Image Container - Fixed Height for Mobile */}
                <div className="relative w-full bg-gradient-to-br from-primary/20 to-purple-500/20 aspect-video overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                  <img 
                    src={post.image}
                    alt={post.title}
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="225"%3E%3Crect fill="%23333" width="400" height="225"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="%23666"%3E%3E Image not available%3C/text%3E%3C/svg%3E'
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content Container */}
                <CardHeader className="pb-2 md:pb-3 flex-shrink-0">
                  <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                    <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1 flex-shrink-0">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <CardTitle className="text-base md:text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 mt-1 md:mt-2 text-xs md:text-sm">
                    {post.description}
                  </CardDescription>
                </CardHeader>

                {/* Tags and Footer - Takes remaining space */}
                <CardContent className="space-y-3 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs px-2 py-0.5">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="gap-1 text-primary hover:bg-primary/10 px-2"
                      asChild
                    >
                      <a href={post.link} target="_blank" rel="noreferrer">
                        <ExternalLink className="w-3 h-3" />
                        <span className="hidden sm:inline">Read</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No posts found in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}

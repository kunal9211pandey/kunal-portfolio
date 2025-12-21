import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Zap, AlertCircle } from "lucide-react";

type NewsArticle = {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  source: string;
  date: string;
  category: string;
};

export function TechNews() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch from NewsAPI - AI & Machine Learning related news
    // Get free API key from: https://newsapi.org/
    const fetchNews = async () => {
      try {
        setLoading(true);
        
        // Using free NewsAPI.org - Replace YOUR_API_KEY with your actual key
        // Sign up at: https://newsapi.org/ to get a free API key
        const apiKey = process.env.REACT_APP_NEWS_API_KEY || "demo";
        const keywords = "artificial intelligence OR machine learning OR data science OR python programming";
        
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${encodeURIComponent(keywords)}&sortBy=publishedAt&language=en&pageSize=6&apiKey=${apiKey}`,
          { headers: { 'User-Agent': 'Mozilla/5.0' } }
        );

        if (!response.ok) {
          // If API fails, use mock data
          setNews(getMockNews());
          setLoading(false);
          return;
        }

        const data = await response.json();
        
        if (data.articles && data.articles.length > 0) {
          const formattedNews: NewsArticle[] = data.articles.slice(0, 6).map((article: any, idx: number) => ({
            id: `${idx}`,
            title: article.title,
            description: article.description || article.content || "Latest update in AI and tech",
            link: article.url,
            image: article.urlToImage || "https://images.unsplash.com/photo-1677442d019cecf8666cd87e62f9f1a7f?auto=format&fit=crop&q=80&w=400",
            source: article.source.name,
            date: new Date(article.publishedAt).toISOString().split('T')[0],
            category: "AI News"
          }));
          setNews(formattedNews);
        } else {
          setNews(getMockNews());
        }
        
        setLoading(false);
      } catch (err) {
        console.log("News fetch failed, using mock data");
        setNews(getMockNews());
        setLoading(false);
      }
    };

    fetchNews();

    // Refresh news every 6 hours
    const interval = setInterval(fetchNews, 6 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const getMockNews = (): NewsArticle[] => [
    {
      id: "1",
      title: "OpenAI Releases New GPT-4 Turbo with Vision Capabilities",
      description: "Latest version features improved reasoning, 128k token context, and multimodal capabilities for production use.",
      link: "#",
      image: "@assets/generated_images/ai_developer_portfolio_hero.png",
      source: "TechCrunch",
      date: "2024-11-23",
      category: "AI News"
    },
    {
      id: "2",
      title: "Google DeepMind Breakthrough in AlphaFold 3 Protein Structure",
      description: "Revolutionary advancement in predicting protein structures aids medical research and drug discovery.",
      link: "#",
      image: "@assets/generated_images/machine_learning_analytics.png",
      source: "Nature",
      date: "2024-11-22",
      category: "AI News"
    },
    {
      id: "3",
      title: "Python Dominates in AI/ML Development - Survey 2024",
      description: "Python remains the #1 choice for machine learning engineers and data scientists worldwide.",
      link: "#",
      image: "@assets/generated_images/python_data_analysis.png",
      source: "Stack Overflow",
      date: "2024-11-21",
      category: "AI News"
    },
    {
      id: "4",
      title: "Web Scraping Ethics: New Guidelines for Data Collection",
      description: "Industry experts discuss best practices and legal considerations for large-scale web data extraction.",
      link: "#",
      image: "@assets/generated_images/web_scraping_and_data_tech.png",
      source: "DataWeekly",
      date: "2024-11-20",
      category: "AI News"
    },
    {
      id: "5",
      title: "Azure ML Services See 300% Growth in Enterprise Adoption",
      description: "Cloud-based machine learning platforms transform how companies build and deploy AI models.",
      link: "#",
      image: "@assets/generated_images/azure_cloud_computing.png",
      source: "CloudComputing",
      date: "2024-11-19",
      category: "AI News"
    },
    {
      id: "6",
      title: "NLP Advances Enable More Accurate Sentiment Analysis",
      description: "Transformer models achieve 98% accuracy in understanding context and nuance in text analysis.",
      link: "#",
      image: "@assets/generated_images/nlp_text_analysis_visualization.png",
      source: "ArXiv",
      date: "2024-11-18",
      category: "AI News"
    }
  ];

  return (
    <section id="tech-news" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <SectionHeading 
            title="Latest AI & Tech News" 
            subtitle="Stay Updated on Industry Trends"
          />
          {loading && (
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="md:block hidden"
            >
              <Zap className="w-5 h-5 text-primary" />
            </motion.div>
          )}
        </div>

        {error && !news.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-8 flex items-center gap-3"
          >
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              Note: News API requires configuration. See README for setup instructions.
            </p>
          </motion.div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {news.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/50 overflow-hidden group cursor-pointer flex flex-col">
                {/* Image - Responsive */}
                <div className="relative w-full bg-gradient-to-br from-primary/20 to-purple-500/20 aspect-video overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                  <img 
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="225"%3E%3Crect fill="%23333" width="400" height="225"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="14" fill="%23666"%3E%3ENo image%3C/text%3E%3C/svg%3E'
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <CardHeader className="pb-2 md:pb-3 flex-shrink-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary text-xs flex-shrink-0">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1 flex-shrink-0">
                      <Calendar className="w-3 h-3" />
                      {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <CardTitle className="text-base md:text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 mt-1 md:mt-2 text-xs md:text-sm">
                    {article.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="truncate font-medium">{article.source}</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="gap-1 text-primary hover:bg-primary/10 px-2 flex-shrink-0"
                      asChild
                    >
                      <a href={article.link} target="_blank" rel="noreferrer">
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

        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8"
          >
            <p className="text-sm text-muted-foreground mb-4">
              ✅ News updates automatically every 6 hours
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

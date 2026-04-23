import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import { 
  Megaphone, 
  Monitor, 
  Code, 
  Instagram, 
  Target, 
  Search, 
  Palette, 
  Video, 
  Settings, 
  HeadphonesIcon, 
  Zap, 
  ShoppingCart,
  Globe,
  FileText,
  Wand2,
  Sparkles,
  Bot,
  MessageSquare,
  LineChart,
  FileVideo,
  Smartphone,
  Blocks,
  PlaySquare,
  PenTool,
  Phone,
  Briefcase,
  Layers,
  Star
} from "lucide-react";

const services = [
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI & Automation",
    description: "Future-proof your business with intelligent automation and AI-powered systems.",
    gradient: "from-violet-500 to-purple-600",
    highlight: true,
    subServices: [
      { icon: MessageSquare, name: "Chatbots (Website & WhatsApp)", desc: "24/7 automated customer support and lead generation" },
      { icon: PenTool, name: "AI Content Creation", desc: "Scale content generation efficiently with AI tools" },
      { icon: Zap, name: "Business Automation Systems", desc: "Streamline workflows and eliminate manual tasks" },
      { icon: Layers, name: "CRM Setup", desc: "Intelligent customer relationship management integration" },
    ],
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Drive growth and visibility with comprehensive digital marketing strategies tailored for your business.",
    gradient: "from-rose-500 to-red-600",
    highlight: false,
    subServices: [
      { icon: Target, name: "Lead Generation", desc: "High-quality inbound leads for your sales team" },
      { icon: Search, name: "SEO", desc: "Organic search optimization to rank higher" },
      { icon: Target, name: "Meta Ads (Facebook & Instagram)", desc: "Targeted advertising campaigns that convert" },
      { icon: Search, name: "Google Ads", desc: "PPC campaigns for maximum ROI and visibility" },
      { icon: Instagram, name: "Social Media Marketing", desc: "Build your brand presence across all major platforms" },
      { icon: Phone, name: "WhatsApp Marketing", desc: "Direct customer engagement via WhatsApp" },
      { icon: Star, name: "Google Reviews Growth", desc: "Automated systems to boost your local reputation" },
    ],
  },
  {
    id: "video-production",
    icon: Video,
    title: "Video Production & Content",
    description: "Engage your audience with high-quality, professional video content and editing.",
    gradient: "from-amber-500 to-orange-600",
    highlight: false,
    subServices: [
      { icon: Smartphone, name: "Reels & Short-form Content", desc: "Viral-worthy content for Instagram & TikTok" },
      { icon: PlaySquare, name: "YouTube Editing", desc: "Professional editing for long-form content" },
      { icon: Bot, name: "AI Video Creation", desc: "Innovative videos powered by generative AI" },
      { icon: FileVideo, name: "Ads & Promotional Videos", desc: "High-converting video advertisements" },
      { icon: Briefcase, name: "Corporate Videos", desc: "Professional company profiles and interviews" },
    ],
  },
  {
    id: "design-branding",
    icon: Palette,
    title: "Design & Branding",
    description: "Create a memorable and consistent brand identity that stands out from the competition.",
    gradient: "from-pink-500 to-rose-500",
    highlight: false,
    subServices: [
      { icon: Wand2, name: "Logo & Brand Identity", desc: "Professional and unique brand visuals" },
      { icon: Instagram, name: "Social Media Posters", desc: "Eye-catching designs for your daily posts" },
      { icon: FileText, name: "Brochure & Flyers", desc: "Print-ready marketing materials" },
      { icon: Blocks, name: "Packaging Design", desc: "Attractive product packaging solutions" },
      { icon: Briefcase, name: "Visiting Cards", desc: "Premium business card designs" },
    ],
  },
  {
    id: "it-services",
    icon: Monitor,
    title: "IT Services",
    description: "Transform your business operations with expert technology guidance and custom implementation.",
    gradient: "from-blue-500 to-indigo-600",
    highlight: false,
    subServices: [
      { icon: Code, name: "Custom Software Development", desc: "Tailored applications for specific business needs" },
      { icon: Smartphone, name: "Mobile App Development", desc: "Native and cross-platform mobile applications" },
      { icon: Settings, name: "System Setup", desc: "Complete IT infrastructure and software configuration" },
      { icon: HeadphonesIcon, name: "Tech Support", desc: "Reliable ongoing technical support" },
      { icon: Zap, name: "Digital Transformation", desc: "Modernize your legacy business processes" },
    ],
  },
  {
    id: "web-development",
    icon: Code,
    title: "Web Development",
    description: "Build stunning, high-performance websites that represent your brand and drive conversions.",
    gradient: "from-emerald-500 to-teal-600",
    highlight: false,
    subServices: [
      { icon: Globe, name: "Business Websites", desc: "Professional websites that build credibility" },
      { icon: FileText, name: "Portfolio Websites", desc: "Showcase your work beautifully" },
      { icon: FileText, name: "Landing Pages", desc: "High-converting campaign pages" },
      { icon: ShoppingCart, name: "E-commerce Websites", desc: "Complete online store solutions" },
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rhino-light via-background to-background">
            <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                <Sparkles className="w-4 h-4" />
                Our Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                Comprehensive <span className="text-gradient">Digital Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From strategy to execution, we provide end-to-end digital services 
                to help your business thrive online.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="container relative z-10">
            <div className="space-y-32">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  {/* Section Header */}
                  <div className="flex flex-col items-center text-center mb-16">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg relative mb-6`}>
                      {service.highlight && (
                        <div className="absolute inset-0 rounded-3xl animate-pulse ring-4 ring-purple-500/30" />
                      )}
                      <service.icon className="w-10 h-10 text-white relative z-10" />
                    </div>
                    
                    <div className="flex items-center gap-3 mb-6 justify-center flex-wrap">
                      <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
                        {service.title}
                      </h2>
                      {service.highlight && (
                        <span className="inline-flex items-center gap-1 px-4 py-1.5 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full border border-purple-200">
                          <Sparkles className="w-4 h-4" /> Premium
                        </span>
                      )}
                    </div>
                    
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {service.subServices.map((sub, subIndex) => (
                        <motion.div
                          key={sub.name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: subIndex * 0.05 }}
                          className={`group p-6 rounded-2xl bg-card border ${
                            service.highlight 
                              ? 'border-purple-200/50 shadow-glow hover:border-purple-400' 
                              : 'border-border shadow-card hover:border-primary/50'
                          } hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}
                        >
                          {service.highlight && (
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          )}
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-10 flex items-center justify-center mb-4 relative z-10`} style={{ background: `linear-gradient(135deg, hsl(var(--primary) / 0.1) 0%, hsl(var(--primary) / 0.05) 100%)` }}>
                            <sub.icon className={`w-6 h-6 ${service.highlight ? 'text-purple-500' : 'text-primary'}`} />
                          </div>
                          <h3 className={`font-semibold text-foreground mb-2 ${service.highlight ? 'group-hover:text-purple-600' : 'group-hover:text-primary'} transition-colors relative z-10`}>
                            {sub.name}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                            {sub.desc}
                          </p>
                        </motion.div>
                      ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;

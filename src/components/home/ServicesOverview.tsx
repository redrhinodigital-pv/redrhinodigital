import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Megaphone, Monitor, Code, ArrowRight, Video, Palette, Bot } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven marketing campaigns to scale your online presence and acquire more customers.",
    features: ["Social Media Management", "Paid Ads (Meta + Google)", "Lead Generation", "WhatsApp Marketing", "Google Reviews", "SEO"],
    highlight: false,
  },
  {
    icon: Video,
    title: "Video Production & Content",
    description: "Engaging visual content designed to capture attention and convert viewers into loyal customers.",
    features: ["Reels & Short-form Content", "YouTube Editing", "AI Video Creation", "Ads & Promotional Videos", "Corporate Videos"],
    highlight: false,
  },
  {
    icon: Palette,
    title: "Design & Branding",
    description: "Premium brand identities and design assets that make your business stand out from the competition.",
    features: ["Social Media Posters", "Logo & Brand Identity", "Brochure & Flyers", "Packaging Design", "Visiting Cards"],
    highlight: false,
  },
  {
    icon: Code,
    title: "Website Development",
    description: "High-performance, conversion-optimized websites built with cutting-edge modern technologies.",
    features: ["Business Websites", "Landing Pages", "Portfolio Websites", "E-commerce Websites", "Website Maintenance"],
    highlight: false,
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Intelligent systems to automate your workflows, scale customer support, and save hundreds of hours.",
    features: ["Chatbots (Website + WhatsApp)", "AI Content Creation", "Automation Systems", "CRM Setup"],
    highlight: true,
  },
  {
    icon: Monitor,
    title: "IT Services",
    description: "Robust technical infrastructure and custom software to power your business operations seamlessly.",
    features: ["Custom Software Development", "Mobile App Development", "System Setup"],
    highlight: false,
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="services">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-6 tracking-tight">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, scale, and dominate in the digital landscape, seamlessly integrated under one roof.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className={`relative h-full p-8 rounded-3xl bg-card transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1 ${
                service.highlight 
                  ? 'border-2 border-primary shadow-[0_0_30px_-5px_rgba(229,57,53,0.3)] hover:shadow-[0_0_40px_-5px_rgba(229,57,53,0.5)]' 
                  : 'border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-xl'
              }`}>
                
                {/* Hover Glow Effect inside card */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none transition-opacity duration-500 ${service.highlight ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-colors duration-300 ${
                  service.highlight ? 'bg-primary text-white' : 'bg-secondary text-primary group-hover:bg-primary/10'
                }`}>
                  <service.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {service.title}
                  {service.highlight && (
                    <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 align-middle">
                      Popular
                    </span>
                  )}
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/80 mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className={`mt-auto pt-6 border-t transition-colors ${
                  service.highlight ? 'border-primary/20' : 'border-border/50 group-hover:border-primary/20'
                }`}>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link"
                  >
                    Explore {service.title}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

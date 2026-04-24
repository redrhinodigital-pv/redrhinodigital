import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const HeroSection = () => {
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in your digital marketing, IT Services, AI Automation and web development services. Please share more details.");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 overflow-hidden bg-background">
      {/* SaaS Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Digital Marketing & IT Solutions
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold text-foreground tracking-tight mb-8 text-balance"
          >
            Scale Your Revenue With{" "}
            <span className="text-gradient relative inline-block">
              Digital Marketing & AI
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 150 2 298 10" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" className="opacity-40" />
              </svg>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed text-balance"
          >
            Chennai-based digital agency delivering data-driven marketing, IT solutions, and AI-powered growth systems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="text-lg md:text-xl text-foreground font-medium mb-12 max-w-2xl mx-auto leading-relaxed text-balance"
          >
            We don’t just market your brand — we build premium systems that accelerate your business growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center justify-center mb-16"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 w-full">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-primary text-primary-foreground font-semibold text-base shadow-button hover:bg-rhino-red-dark hover:shadow-glow transition-all duration-300 w-full sm:w-auto"
              >
                Get Your Free Growth Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`https://wa.me/919499912508?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-background border border-border text-foreground font-semibold text-base hover:bg-secondary transition-all duration-300 w-full sm:w-auto shadow-sm hover:shadow-md"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                WhatsApp Now
              </a>
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              No commitment. 100% Free Strategy Session.
            </p>
          </motion.div>

          {/* Social Proof / Stats Bento Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="glass-premium rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-1">4.9/5</h3>
              <p className="text-sm text-muted-foreground font-medium">Client Rating</p>
            </div>

            <div className="glass-premium rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-1">30+</h3>
              <p className="text-sm text-muted-foreground font-medium">Projects Delivered</p>
            </div>

            <div className="glass-premium rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-1">24/7</h3>
              <p className="text-sm text-muted-foreground font-medium">Premium Support</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

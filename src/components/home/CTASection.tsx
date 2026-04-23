import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const CTASection = () => {
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in your services. Can we discuss my project requirements?");

  return (
    <section className="py-24 bg-background relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="container relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[3rem] overflow-hidden"
        >
          {/* High-contrast SaaS Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-rhino-black via-rhino-black to-primary/20" />
          
          {/* Subtle noise/grid overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />

          {/* Glowing Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 px-6 py-20 md:py-28 text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-white/90 bg-white/10 rounded-full border border-white/10 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Let's Build Together
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6 tracking-tight max-w-3xl">
              Ready to Grow Your Business?
            </h2>
            
            <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto">
              Join the forward-thinking companies that partner with us to build premium digital experiences and drive revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-white text-rhino-black font-semibold text-base shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`https://wa.me/919499912508?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full border border-white/20 bg-white/5 text-white font-semibold text-base hover:bg-white/10 transition-all duration-300 w-full sm:w-auto backdrop-blur-md"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                Talk to Sales
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

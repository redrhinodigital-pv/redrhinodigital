import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    name: "Starter",
    price: "₹7,999",
    description: "Perfect for new businesses starting out.",
    features: ["Social Media Setup", "Basic SEO", "Google My Business", "Monthly Reporting"],
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹11,999",
    description: "Ideal for growing businesses looking to scale.",
    features: ["Everything in Starter", "Meta & Google Ads", "Content Creation", "Lead Generation", "Priority Support"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹17,999",
    description: "Comprehensive package for established brands.",
    features: ["Everything in Growth", "Advanced SEO", "Website Maintenance", "Custom Graphics", "Dedicated Manager"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹25,000+",
    description: "Advanced solutions including AI & Automations.",
    features: ["Everything in Premium", "AI Chatbot Setup", "CRM Integration", "Video Production", "Weekly Strategy Calls"],
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "₹50,000+",
    description: "Custom digital systems for large organizations.",
    features: ["Everything in Pro", "Custom Software Dev", "Full Scale Marketing", "Enterprise AI Solutions", "24/7 Dedicated Team"],
    highlight: false,
  }
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="pricing">
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
            Pricing Plans
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-6 tracking-tight">
            Transparent Pricing for Every Stage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan to accelerate your digital growth. No hidden fees, just results.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex-1 min-w-[280px] max-w-[340px] relative rounded-3xl p-8 transition-all duration-300 flex flex-col ${
                plan.highlight 
                  ? 'bg-rhino-black text-white shadow-2xl scale-105 z-10 border-2 border-primary' 
                  : 'bg-card border border-border/50 text-foreground hover:border-primary/30 hover:shadow-xl'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-display font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm h-10 ${plan.highlight ? 'text-white/70' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-display font-extrabold">{plan.price}</span>
                <span className={`text-sm ${plan.highlight ? 'text-white/60' : 'text-muted-foreground'}`}>/month</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? 'text-primary' : 'text-primary/80'}`} />
                    <span className={`text-sm font-medium ${plan.highlight ? 'text-white/90' : 'text-foreground/80'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Link
                to="/contact"
                className={`w-full inline-flex items-center justify-center gap-2 h-12 rounded-full font-semibold transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-primary text-white hover:bg-rhino-red-dark shadow-button'
                    : 'bg-secondary text-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

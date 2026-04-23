import { motion } from "framer-motion";
import { Bot, Zap, Database } from "lucide-react";

const aiFeatures = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "24/7 intelligent replies on Website & WhatsApp to engage and convert visitors instantly."
  },
  {
    icon: Zap,
    title: "Business Automation",
    description: "Seamlessly connect your CRM, sales funnels, and workflows to save hundreds of hours."
  },
  {
    icon: Database,
    title: "Data Systems",
    description: "Custom analytics dashboards and data pipelines for real-time business insights."
  }
];

const AISection = () => {
  return (
    <section className="py-24 bg-rhino-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Next-Gen Tech
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6 tracking-tight">
            AI & Automation Solutions
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Transform your business operations with cutting-edge artificial intelligence and workflow automation systems built for growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-dark rounded-3xl p-8 border border-white/10 hover:border-primary/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <feature.icon className="w-32 h-32 text-primary" />
              </div>
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISection;

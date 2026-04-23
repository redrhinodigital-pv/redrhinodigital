import { motion } from "framer-motion";
import { Target, TrendingUp, Users, Zap, CheckCircle2 } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-rhino-black relative overflow-hidden">
      {/* Dark mode glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Why Red Rhino
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6 tracking-tight">
            Built for Growth
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            We don't just build websites; we build scalable digital engines that drive your business forward.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)] max-w-6xl mx-auto">
          
          {/* Card 1: Spans 2 columns, 2 rows (Hero Bento) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 glass-dark rounded-3xl p-8 relative overflow-hidden group border border-white/10 hover:border-primary/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <TrendingUp className="w-48 h-48 text-primary" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                Result-Driven Strategy
              </h3>
              <p className="text-white/70 text-lg leading-relaxed max-w-md">
                We focus on metrics that matter: conversions, ROI, and sustainable growth. Every campaign and line of code is optimized for your bottom line.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Spans 2 columns, 1 row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 lg:col-span-2 glass-dark rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-colors flex flex-col justify-center"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Modern Tech Stack</h3>
                <p className="text-white/70">
                  We utilize enterprise-grade technologies to ensure your digital presence is lightning fast, secure, and future-proof.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Spans 1 column, 1 row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-dark rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-colors flex flex-col justify-between"
          >
            <Users className="w-10 h-10 text-primary mb-6" />
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-2">Client-Centric</h3>
              <p className="text-white/70 text-sm">Dedicated support and transparent communication at every step.</p>
            </div>
          </motion.div>

          {/* Card 4: Spans 1 column, 1 row with list */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-dark rounded-3xl p-8 border border-white/10 bg-gradient-to-br from-white/5 to-primary/10 flex flex-col justify-center"
          >
            <h3 className="text-xl font-display font-bold text-white mb-6">The Red Rhino Edge</h3>
            <ul className="space-y-4">
              {['Data-Backed Decisions', 'Agile Execution', 'End-to-End Solutions'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/80 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

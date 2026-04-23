import { motion } from "framer-motion";
import { CheckCircle2, Users, Building2 } from "lucide-react";

const stats = [
  {
    id: 1,
    title: "Projects Completed",
    value: " 30+",
    icon: CheckCircle2,
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    id: 2,
    title: "Happy Clients",
    value: "20+",
    icon: Users,
    gradient: "from-rose-500 to-red-600"
  },
  {
    id: 3,
    title: "Industries Served",
    value: "5+",
    icon: Building2,
    gradient: "from-emerald-500 to-teal-600"
  }
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-rhino-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-dark rounded-3xl p-8 border border-white/10 text-center flex flex-col items-center hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-display font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-white/70 font-medium text-lg uppercase tracking-wider">
                {stat.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

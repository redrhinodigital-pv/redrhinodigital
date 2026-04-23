import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "New Abu Restaurant",
    category: "Menu Card Design & Branding",
    description: "Designed modern menu and branding visuals",
    result: "Improved brand experience and engagement",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Success Root Technologies",
    category: "Video Creation & AI Editing",
    description: "Created high-quality promotional videos",
    result: "Increased engagement and brand visibility",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "PM Design & Builders",
    category: "Full Website Development",
    description: "Built responsive business website",
    result: "Strong online presence",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    link: "https://pmdesignersandbuilders.com/",
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="portfolio">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-6 tracking-tight">
            Our Recent Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results delivered for real businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-3xl shadow-card border border-border/50 hover:shadow-elevated transition-all duration-500 overflow-hidden hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-background/90 backdrop-blur-md text-xs font-semibold rounded-full text-foreground shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow relative">
                <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="bg-primary/5 rounded-xl p-4 mb-6 border border-primary/10">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Result</span>
                  <span className="text-sm font-medium text-foreground">{project.result}</span>
                </div>

                <a 
                  href={project.link}
                  target={project.link !== "#" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-background border border-border text-foreground font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  View Project
                  {project.link !== "#" ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

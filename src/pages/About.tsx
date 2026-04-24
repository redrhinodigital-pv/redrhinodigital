import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import { Target, Eye, Heart, Award, Instagram, Linkedin, Github, CheckCircle2 } from "lucide-react";
import vigneshImg from "@/assets/vignesh.jpeg";

const values = [
  {
    icon: Target,
    title: "Results Focused",
    description: "Every strategy is designed to deliver measurable business outcomes.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication and honest reporting at every step.",
  },
  {
    icon: Heart,
    title: "Client Success",
    description: "Your growth is our success. We're invested in your journey.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do.",
  },
];

const teamMembers = [
  { name: "Vignesh G", role: "Founder & Managing Director – Marketing Strategy" },
  { name: "Beulah Mercy A", role: "Co-Founder – Social Media & Page Management" },
  { name: "Pranaveshwaran M K", role: "Chief Executive Officer (CEO) – Creative Strategy & Design" },
  { name: "Vishwa S H", role: "Creative Director & Video Editor" },
  { name: "Sreekanth S", role: "Performance Marketing & SEO Specialist" },
  { name: "Prajit Ramachanthran", role: "AI & Software Engineer" },
  { name: "Ruth Jesica S", role: "Business Intelligence Analyst" },
  { name: "Sasitha S", role: "Business Intelligence Analyst" },
  { name: "Rajapriyan P", role: "Lead Web Developer & Tech Architect" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Us | Red Rhino Digital - Leading Digital Agency in Chennai</title>
        <meta name="description" content="Learn more about Red Rhino Digital, our mission, values, and the expert team driving digital transformation and growth for businesses across India." />
        <link rel="canonical" href="https://redrhinodigital.in/about" />
      </Helmet>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-rhino-light relative overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                Your Trusted Digital + IT + AI <span className="text-gradient">Growth Partner</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Empowering businesses across India with innovative digital solutions. <br />
                <span className="font-semibold text-foreground">We don't just market brands — we build systems that grow businesses.</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  Who We Are
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Red Rhino Digital is a Chennai-based digital growth agency helping businesses across India scale with strategy, creativity, and technology.
                  </p>
                  <p>
                    We specialize in <strong className="text-foreground">Digital Marketing</strong>,
                    <strong className="text-foreground"> Video Production, Design & Branding, Web Development, AI & Automation</strong>
                    <strong className="text-foreground"> IT Services</strong> delivering complete end-to-end solutions for business growth.
                  </p>
                  <p>We don’t just market your brand — we build systems that generate leads, improve visibility, and accelerate growth.</p>
                  <p>Our mission is simple:</p>
                  <p>
                    To transform businesses into powerful, scalable brands using smart strategies, modern technology, and data-driven solutions.

                    We believe in building long-term partnerships based on trust, transparency, and measurable success.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl gradient-hero p-1 shadow-glow">
                  <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                    <div className="text-center p-8 relative z-10">
                      <div className="text-6xl md:text-7xl font-display font-bold text-gradient mb-2 animate-pulse-slow">
                        30+
                      </div>
                      <p className="text-lg font-medium text-muted-foreground">Projects Completed</p>
                      <div className="mt-8 grid grid-cols-2 gap-6">
                        <div className="glass p-4 rounded-xl border border-border">
                          <div className="text-3xl font-display font-bold text-foreground mb-1">20+</div>
                          <p className="text-xs font-semibold text-primary uppercase tracking-wider">Happy Clients</p>
                        </div>
                        <div className="glass p-4 rounded-xl border border-border">
                          <div className="text-3xl font-display font-bold text-foreground mb-1">1</div>
                          <p className="text-xs font-semibold text-primary uppercase tracking-wider">Years Experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-24 bg-rhino-light relative">
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                What We Do
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions to scale your business
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Digital Marketing", desc: "Performance marketing, SEO, and social media growth." },
                { title: "Web & App Development", desc: "High-performance websites and custom applications." },
                { title: "AI Automation", desc: "Smart AI agents, chatbots, and automated workflows." },
                { title: "Business Growth Systems", desc: "End-to-end funnels and CRM setups for scaling." }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-8 rounded-2xl shadow-card border border-border/50 hover:shadow-elevated hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                Our Edge
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Why Choose Us
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Strategy + Creativity + Technology",
                "Real content (no stock templates)",
                "End-to-end service",
                "Fast support",
                "No long-term contracts"
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-6 glass rounded-2xl border border-border hover:border-primary/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground leading-tight">{reason}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-24 bg-rhino-black relative overflow-hidden" id="founder">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Meet Our Founder
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                The visionary behind Red Rhino Digital
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="glass-premium rounded-3xl p-1 border border-white/10 shadow-elevated">
                <div className="bg-rhino-black/80 backdrop-blur-2xl rounded-[1.4rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
                  {/* Founder Photo */}
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow relative overflow-hidden group">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img
                      src={vigneshImg}
                      alt="Vignesh G"
                      width={400}
                      height={400}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop";
                        // Fallback image if vignesh.jpeg is missing
                      }}
                    />
                  </div>

                  <div className="text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                      VIGNESH G
                    </h3>
                    <p className="text-primary font-semibold text-lg mb-6">
                      Founder & Managing Director
                    </p>
                    <p className="text-white/70 leading-relaxed mb-8 text-lg">
                      Vignesh G is the Founder & Managing Director of Red Rhino Digital, leading digital marketing, AI automation, and technology-driven business growth. Under his leadership, the agency helps businesses scale with data-backed strategies and premium digital experiences.
                    </p>
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                      <a
                        href="https://instagram.com/ig.vikki_"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 text-white/70 hover:shadow-button hover:-translate-y-1"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/vignesh220904/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 text-white/70 hover:shadow-button hover:-translate-y-1"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href="https://github.com/vignesh220904"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 text-white/70 hover:shadow-button hover:-translate-y-1"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-background relative overflow-hidden" id="team">
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The talented people powering Red Rhino Digital
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-card rounded-3xl shadow-card border border-border p-8 text-center hover:shadow-elevated hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-full gradient-hero flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-glow transition-shadow duration-500 group-hover:scale-110 transform">
                      <span className="text-xl font-display font-bold text-white">
                        {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-rhino-light relative">
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8 bg-card rounded-3xl shadow-card border border-border hover:shadow-elevated hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6 shadow-md">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
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

export default About;

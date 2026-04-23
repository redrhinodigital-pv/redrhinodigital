import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    content: "Red Rhino Digital created an amazing menu design for our restaurant. Very professional work!",
    author: "Owner",
    company: "New Abu Restaurant",
    rating: 5,
  },
  {
    content: "The video quality and editing were excellent. Helped us grow our brand online.",
    author: "Founder",
    company: "Success Root Technologies",
    rating: 5,
  },
  {
    content: "Our website looks premium and works perfectly. Highly recommend their service.",
    author: "Director",
    company: "PM Design & Builders",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-rhino-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Client Success
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-6 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our partners have to say about working with Red Rhino Digital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-3xl shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300 relative group hover:-translate-y-2"
            >
              <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote className="w-12 h-12" />
              </div>
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-lg text-foreground mb-8 leading-relaxed relative z-10 font-medium">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10 mt-auto border-t border-border pt-6">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white font-bold font-display">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

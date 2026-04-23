import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Instagram, Linkedin, Send, Sparkles, MessageSquare, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import XIcon from "@/components/icons/XIcon";
import PinterestIcon from "@/components/icons/PinterestIcon";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappMessage = encodeURIComponent("Hi, I'm interested in your services. Can we discuss my requirements?");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'f70926e0-d203-4f9e-9bdd-f7bb4d2c5974',
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          subject: `New Enquiry from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent! 🎉",
          description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rhino-light via-background to-background">
            <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                <Sparkles className="w-4 h-4" />
                Get In Touch
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-foreground mb-6 tracking-tight leading-tight">
                Let's build something <br className="hidden md:block" />
                <span className="text-gradient">powerful together</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
                Ready to grow your business? Get in touch with us for a free consultation and let's map out your digital growth strategy.
              </p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex justify-center"
              >
                <a
                  href="#contact-form"
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-primary text-white font-semibold text-base shadow-button hover:bg-rhino-red-dark hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
                >
                  Book Free Consultation
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-background" id="contact-form">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Let's Start a Conversation
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Have a project in mind? We'd love to hear about it. Contact us 
                  using any of the methods below, or fill out the form.
                </p>

                <div className="space-y-4">
                  <a
                    href="tel:+919499912508"
                    className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-sm hover:shadow-elevated hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center shadow-button group-hover:scale-105 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-0.5">Phone / WhatsApp</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-lg">
                        +91 94999 12508
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@redrhinodigital.in"
                    className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-sm hover:shadow-elevated hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center shadow-button group-hover:scale-105 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-0.5">Email</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-lg">
                        contact@redrhinodigital.in
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-sm group hover:border-primary/50 transition-colors">
                    <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center shadow-button group-hover:scale-105 transition-transform">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-0.5">Location</p>
                      <p className="font-semibold text-foreground text-lg">Chennai, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-sm text-muted-foreground mb-4 font-medium">Follow Us</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href="https://www.instagram.com/redrhinodigital"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Instagram"
                      className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:gradient-hero hover:border-transparent hover:shadow-button hover:-translate-y-1 hover:scale-105 transition-all duration-300 group"
                    >
                      <Instagram className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
                    </a>
                    <a
                      href="https://www.facebook.com/redrhinodigital"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Facebook"
                      className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:gradient-hero hover:border-transparent hover:shadow-button hover:-translate-y-1 hover:scale-105 transition-all duration-300 group"
                    >
                      <Facebook className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/redrhinodigital"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on LinkedIn"
                      className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:gradient-hero hover:border-transparent hover:shadow-button hover:-translate-y-1 hover:scale-105 transition-all duration-300 group"
                    >
                      <Linkedin className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
                    </a>
                    <a
                      href="https://x.com/redrhinodigital"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on X (Twitter)"
                      className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:gradient-hero hover:border-transparent hover:shadow-button hover:-translate-y-1 hover:scale-105 transition-all duration-300 group"
                    >
                      <XIcon className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
                    </a>
                    <a
                      href="https://www.pinterest.com/redrhinodigital"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Pinterest"
                      className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:gradient-hero hover:border-transparent hover:shadow-button hover:-translate-y-1 hover:scale-105 transition-all duration-300 group"
                    >
                      <PinterestIcon className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="p-8 md:p-10 rounded-3xl bg-card border border-border shadow-elevated relative overflow-hidden group hover:border-primary/30 transition-colors">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />
                  
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2 relative z-10">
                    Send Us a Message
                  </h3>
                  <p className="text-muted-foreground mb-8 relative z-10">
                    Fill out the form and we'll get back to you within 24 hours.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          maxLength={100}
                          className="w-full h-14 px-5 rounded-2xl border border-border bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          maxLength={15}
                          className="w-full h-14 px-5 rounded-2xl border border-border bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          maxLength={255}
                          className="w-full h-14 px-5 rounded-2xl border border-border bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                          Your Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          maxLength={1000}
                          rows={4}
                          className="w-full px-5 py-4 rounded-2xl border border-border bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none shadow-sm"
                          placeholder="Tell us about your project or requirements"
                        />
                      </div>
                    </div>

                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 rounded-full gradient-hero text-white font-semibold text-base flex items-center justify-center gap-2 hover:opacity-90 hover:shadow-button hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </div>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>

                      <a
                        href={`https://wa.me/919499912508?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-14 rounded-full bg-[#25D366] text-white font-semibold text-base flex items-center justify-center gap-2 hover:bg-[#128C7E] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                      >
                        <WhatsAppIcon className="w-5 h-5" />
                        Quick WhatsApp
                      </a>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

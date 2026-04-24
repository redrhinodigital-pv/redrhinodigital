import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "What digital marketing services does Red Rhino Digital offer in Chennai?",
    answer: "We offer end-to-end digital marketing services including SEO, Meta Ads (Facebook & Instagram), Google Ads, Social Media Marketing, Lead Generation, and WhatsApp Marketing tailored for businesses in Chennai and across India."
  },
  {
    question: "How can AI Automation help my business grow?",
    answer: "AI Automation streamlines your operations by handling repetitive tasks. We build AI chatbots for your website and WhatsApp that provide 24/7 customer support and qualify leads automatically, saving you time and increasing conversions."
  },
  {
    question: "Do you build custom websites and e-commerce stores?",
    answer: "Yes, our web development team specializes in creating high-performance, responsive business websites, landing pages, and fully functional e-commerce stores optimized for speed and SEO."
  },
  {
    question: "How long does it take to see results from SEO and digital marketing?",
    answer: "While paid ads (Google Ads, Meta Ads) can generate leads within days, organic SEO typically takes 3 to 6 months to show significant ranking improvements. We provide a tailored timeline based on your specific business goals."
  },
  {
    question: "Do you provide video production and editing services?",
    answer: "Absolutely! We create high-quality reels, YouTube videos, corporate videos, and promotional ads, including innovative AI-generated video content to engage your audience on social media."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-rhino-light relative overflow-hidden" id="faq">
      {/* JSON-LD for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="container relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            <Sparkles className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our services and how we can help your business grow.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:border-primary/30 transition-colors"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-foreground pr-8">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-primary" : ""
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 pt-1 text-muted-foreground leading-relaxed border-t border-border/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

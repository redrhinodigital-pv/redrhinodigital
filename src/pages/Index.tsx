import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AISection from "@/components/home/AISection";
import PricingSection from "@/components/home/PricingSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import TrustSection from "@/components/home/TrustSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Red Rhino Digital | Digital Marketing, AI & IT Solutions Chennai</title>
        <meta name="description" content="Leading digital agency in Chennai offering result-driven digital marketing, AI automation, website development, and branding services." />
        <link rel="canonical" href="https://redrhinodigital.in/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Red Rhino Digital",
              "image": "https://redrhinodigital.in/favicon.png",
              "@id": "https://redrhinodigital.in/",
              "url": "https://redrhinodigital.in/",
              "telephone": "+919499912508",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "No 22 Tiruveedhi Amman Koil Street, Aminijikarai",
                "addressLocality": "Chennai",
                "postalCode": "600029",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 13.0645062,
                "longitude": 80.2085352
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            }
          `}
        </script>
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <ServicesOverview />
        <AISection />
        <WhyChooseUs />
        <PortfolioSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

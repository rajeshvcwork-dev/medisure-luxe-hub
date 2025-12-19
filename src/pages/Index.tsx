import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layers, Shield, Factory, Settings, Award, CheckCircle } from "lucide-react";
import { HeroSlider } from "@/components/HeroSlider";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { StrengthCard } from "@/components/StrengthCard";
import { ClientCarousel } from "@/components/ClientCarousel";
import { AnimatedSection } from "@/components/AnimatedSection";
import heroHospitalLinen from "@/assets/hero-hospital-linen.jpg";
import heroMedicalUniforms from "@/assets/hero-medical-uniforms.jpg";
import heroHotelLinen from "@/assets/hero-hotel-linen.jpg";
import heroSurgicalTextiles from "@/assets/hero-surgical-textiles.jpg";
const strengths = [{
  icon: Layers,
  title: "End-to-End Linen Ecosystem",
  description: "Complete textile solutions from supply management, product design, manufacturing, customization, to timely delivery."
}, {
  icon: Shield,
  title: "Certified Quality & Hygiene",
  description: "Our fabrics follow healthcare-grade standards for infection control and durability, ensuring patient safety."
}, {
  icon: Factory,
  title: "Advanced Manufacturing",
  description: "We leverage modern textile technologies for consistent quality and long product life cycles."
}, {
  icon: Settings,
  title: "Tailored Solutions",
  description: "We understand operational challenges of hospitals and hotels, ensuring comfort, cleanliness, and reliability."
}];
const products = [{
  title: "Hospital Linen",
  description: "Premium bed sheets, pillowcases, blankets, and mattress protectors designed for clinical environments.",
  image: heroHospitalLinen,
  features: ["Infection-control fabrics", "High-durability weave", "Industrial wash-resistant"]
}, {
  title: "Medical Uniforms & Scrubs",
  description: "Professional-grade uniforms for doctors, nurses, and healthcare staff with comfort-fit technology.",
  image: heroMedicalUniforms,
  features: ["Breathable antimicrobial fabric", "Ergonomic design", "Custom branding options"]
}, {
  title: "Surgical & OT Textiles",
  description: "Sterile surgical gowns, drapes, and OT linens meeting international healthcare standards.",
  image: heroSurgicalTextiles,
  features: ["Sterile barrier protection", "Fluid-resistant materials", "Disposable & reusable options"]
}, {
  title: "Hotel Linen",
  description: "Luxury bedding, towels, and hospitality textiles for hotels and resorts across Malaysia.",
  image: heroHotelLinen,
  features: ["Premium thread count", "Soft-touch finishing", "Color-fast & durable"]
}];
const certifications = ["ISO 9001:2015 Certified", "Healthcare Textile Standards", "Hygiene Compliance Certified", "Quality Assurance Tested"];
const Index = () => {
  return <>
      <Helmet>
        <title>Medisure Healthcare - Premium Hospital Linen & Medical Textile Supplier Malaysia</title>
        <meta name="description" content="Malaysia's leading hospital linen supplier, medical uniform manufacturer, and healthcare textile solutions provider. Premium quality surgical gowns, scrubs, hotel linen since 2018." />
        <meta name="keywords" content="hospital linen supplier Malaysia, medical uniform manufacturer Malaysia, hotel linen wholesale, healthcare textile distributor, hospital bedding supplier, surgical gown manufacturer, scrubs supplier Malaysia" />
        <link rel="canonical" href="https://medisure.com.my" />
        <script type="application/ld+json">
          {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Medisure Healthcare Sdn. Bhd.",
          url: "https://medisure.com.my",
          logo: "https://medisure.com.my/logo.png",
          description: "Premium hospital linen and healthcare textile supplier in Malaysia",
          address: {
            "@type": "PostalAddress",
            streetAddress: "No. 15-2, Jalan USJ 9/5T",
            addressLocality: "Subang Jaya",
            postalCode: "47620",
            addressCountry: "MY"
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+60-12-345-6789",
            contactType: "sales"
          }
        })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <HeroSlider />

      {/* Who We Are Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <SectionHeading badge="Who We Are" title="Malaysia's Trusted Healthcare Textile Partner" subtitle="Delivering excellence in hospital linen, medical uniforms, and hospitality textiles since 2018" />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="max-w-4xl mx-auto">
              <p className="font-body text-lg text-muted-foreground text-center leading-relaxed mb-8">Medisure Healthcare Sdn. Bhd. is a leading provider of 360° hospital linen solutions, medical uniforms, OT gowns, healthcare textiles, and hotel linen essentials. Since 2018, we have supported hospitals, clinics, hotels, and healthcare organizations across Malaysia with premium-quality textiles, hygiene-driven fabrics, and professional-grade uniforms. Our expertise spans the complete textile ecosystem—from hospital bed sheets, patient gowns, OT and surgical linens, scrubs, and doctor coats to hotel bedding, bath towels, pillows, duvets, and staff uniforms. Every product is crafted with precision, durability, and compliance in mind.   </p>
              <p className="font-body text-lg text-muted-foreground text-center leading-relaxed">
                We deliver long-lasting textiles, superior comfort, infection-control compliance, 
                and reliable supply continuity.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Strengths Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <SectionHeading badge="Why Choose Us" title="Core Strengths" subtitle="What sets Medisure apart as your preferred healthcare textile partner" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => <AnimatedSection key={strength.title} delay={index * 100}>
                <StrengthCard {...strength} />
              </AnimatedSection>)}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <SectionHeading badge="Our Products" title="Premium Healthcare & Hospitality Textiles" subtitle="Engineered for excellence, designed for durability" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => <AnimatedSection key={product.title} delay={index * 100}>
                <ProductCard {...product} />
              </AnimatedSection>)}
          </div>
          <AnimatedSection delay={400}>
            <div className="text-center mt-12">
              <Link to="/products" className="btn-primary">
                View All Products
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <SectionHeading badge="Trusted Partners" title="Trusted by Leading Hospitals, Hotels & Healthcare Groups" subtitle="Serving Malaysia's premier healthcare institutions" />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <ClientCarousel />
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="text-center mt-8">
              <Link to="/clients" className="btn-outline">
                See All Clients
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-charcoal">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <SectionHeading badge="Quality Assurance" title="Certified Quality. Hygiene Approved. Performance Guaranteed." light />
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => <AnimatedSection key={cert} delay={index * 100}>
                <div className="bg-background/5 backdrop-blur-sm rounded-xl p-6 text-center border border-background/10 hover:border-primary/50 transition-colors">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="font-body text-sm text-background/80">{cert}</p>
                </div>
              </AnimatedSection>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-wide mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Elevate Your Healthcare Textiles?
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Partner with Medisure for premium hospital linen, medical uniforms, and hospitality textiles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-background text-primary px-8 py-4 rounded-lg font-heading font-semibold hover:bg-background/90 transition-all shadow-premium-md hover:shadow-premium-lg">
                Get a Free Quote
              </Link>
              <Link to="/products" className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary-foreground/10 transition-all">
                Explore Products
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>;
};
export default Index;

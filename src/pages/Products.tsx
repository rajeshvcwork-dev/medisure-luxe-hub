import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";

import heroHospitalLinen from "@/assets/hero-hospital-linen.jpg";
import heroMedicalUniforms from "@/assets/hero-medical-uniforms.jpg";
import heroHotelLinen from "@/assets/linen-bedsheets-towels.jpg";
import heroSurgicalTextiles from "@/assets/hospital-uniform.jpg";

const products = [
  {
    id: "hospital-linen",
    title: "Hospital Linen",
    subtitle: "Premium Healthcare Bedding Solutions",
    description: "Our hospital linen range includes premium bed sheets, pillowcases, blankets, draw sheets, and mattress protectors. Designed for clinical environments, our fabrics meet strict hygiene and durability standards required by healthcare facilities.",
    image: heroHospitalLinen,
    features: [
      "Infection-control compliant fabrics",
      "High-thread-count durability",
      "Industrial wash and autoclave resistant",
      "Hypoallergenic materials",
      "Custom sizing for medical beds",
      "Color-coded inventory systems",
    ],
    benefits: [
      "Reduces cross-contamination risks",
      "Withstands 300+ industrial wash cycles",
      "Cost-effective long-term solution",
    ],
  },
  {
    id: "medical-uniforms",
    title: "Medical Uniforms & Scrubs",
    subtitle: "Professional Healthcare Apparel",
    description: "Professional-grade uniforms for doctors, nurses, and healthcare staff. Our scrubs and medical uniforms feature antimicrobial fabrics, ergonomic designs, and customization options for institutional branding.",
    image: heroMedicalUniforms,
    features: [
      "Breathable antimicrobial fabric",
      "Ergonomic comfort-fit design",
      "Multiple pocket configurations",
      "Custom embroidery & branding",
      "Full size range available",
      "Color options for department coding",
    ],
    benefits: [
      "Enhanced staff comfort during long shifts",
      "Professional institutional appearance",
      "Easy identification by department",
    ],
  },
  {
    id: "surgical-textiles",
    title: "Surgical & OT Textiles",
    subtitle: "Sterile Operating Theatre Solutions",
    description: "Complete range of surgical gowns, drapes, and OT linens meeting international healthcare standards. Available in both disposable and reusable options for flexible inventory management.",
    image: heroSurgicalTextiles,
    features: [
      "Sterile barrier protection",
      "Fluid-resistant materials",
      "SMS & SMMS fabric options",
      "Disposable & reusable varieties",
      "Reinforced critical zones",
      "Individually packaged sterile units",
    ],
    benefits: [
      "Maximum patient and staff protection",
      "Compliant with international standards",
      "Flexible procurement options",
    ],
  },
  {
    id: "hotel-linen",
    title: "Hotel Linen",
    subtitle: "Luxury Hospitality Textiles",
    description: "Transform guest experiences with our luxury hotel linen collection. Premium bed sheets, duvet covers, towels, bathrobes, and table linens designed for Malaysia's finest hotels and resorts.",
    image: heroHotelLinen,
    features: [
      "Premium 300-600 thread count options",
      "Soft-touch Egyptian cotton blends",
      "Color-fast & shrink-resistant",
      "Luxury towel collections",
      "Spa-quality bathrobes",
      "Restaurant table linens",
    ],
    benefits: [
      "Enhanced guest satisfaction scores",
      "Premium brand positioning",
      "Long-lasting investment quality",
    ],
  },
];

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Products - Hospital Linen, Medical Uniforms, Surgical Gowns | Medisure Healthcare</title>
        <meta
          name="description"
          content="Explore premium hospital linen, medical scrubs, surgical gowns, OT textiles, and hotel linen from Medisure Healthcare. Bulk orders available for Malaysian healthcare facilities."
        />
        <meta
          name="keywords"
          content="hospital linen Malaysia, scrubs supplier Malaysia, sterile textile manufacturer, hotel bedding supplier Malaysia, bulk hospital linen, surgical gowns Malaysia"
        />
        <link rel="canonical" href="https://medisure.com.my/products" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Our Products"
              title="Premium Healthcare & Hospitality Textiles"
              subtitle="Engineered for excellence, designed for durability. Explore our comprehensive range of hospital linen, medical uniforms, surgical textiles, and hotel linen solutions."
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="space-y-24">
            {products.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 100}>
                <div
                  id={product.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative overflow-hidden rounded-2xl shadow-premium-lg">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-80 lg:h-[500px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-premium-md">
                      <span className="font-heading font-semibold">Premium Quality</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                      {product.subtitle}
                    </span>
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                      {product.title}
                    </h2>
                    <p className="font-body text-muted-foreground text-lg mb-8 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-heading font-semibold text-foreground mb-4">Key Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="font-body text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="bg-muted rounded-xl p-6 mb-8">
                      <h4 className="font-heading font-semibold text-foreground mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="font-body text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to="/contact" className="btn-primary">
                      Request Quote
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal">
        <div className="container-wide mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-background mb-4">
              Need Custom Textile Solutions?
            </h2>
            <p className="font-body text-lg text-background/80 mb-8 max-w-2xl mx-auto">
              Our team can customize any product to meet your specific requirements. From custom sizing to institutional branding, we've got you covered.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Our Team
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Products;

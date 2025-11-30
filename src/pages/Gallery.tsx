import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { X, ZoomIn } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";

import heroHospitalLinen from "@/assets/hero-hospital-linen.jpg";
import Others from "@/assets/bedsheets-towels.jpg";
import heroMedicalUniforms from "@/assets/hero-medical-uniforms.jpg";
import heroHotelLinen from "@/assets/hero-hotel-linen.jpg";
import heroSurgicalTextiles from "@/assets/hero-surgical-textiles.jpg";

const galleryImages = [
  { src: Others, alt: "Hospital bed linen and sheets", category: "Hospital Linen" },
  { src: heroHospitalLinen, alt: "Hospital bed linen and sheets", category: "Hospital Linen" },
  { src: heroMedicalUniforms, alt: "Medical professionals in scrubs", category: "Medical Uniforms" },
  { src: heroHotelLinen, alt: "Luxury hotel bedding", category: "Hotel Linen" },
  { src: heroSurgicalTextiles, alt: "Surgical gowns in operating theatre", category: "Surgical Textiles" },
  { src: heroHospitalLinen, alt: "Premium hospital bedding setup", category: "Hospital Linen" },
  { src: heroMedicalUniforms, alt: "Healthcare staff uniforms", category: "Medical Uniforms" },
  { src: heroHotelLinen, alt: "Hotel towels and bathrobes", category: "Hotel Linen" },
  { src: heroSurgicalTextiles, alt: "OT textile preparation", category: "Surgical Textiles" },
];

const categories = ["All", "Hospital Linen", "Others", "Medical Uniforms", "Hotel Linen", "Surgical Textiles"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Photo Gallery - Hospital Linen, Medical Uniforms, Surgical Textiles | Medisure</title>
        <meta
          name="description"
          content="Browse our gallery of premium hospital linen, medical uniforms, surgical gowns, and hotel textiles. See the quality of Medisure Healthcare products."
        />
        <meta
          name="keywords"
          content="hospital linen photos, medical uniform gallery, surgical gown images, healthcare textile pictures"
        />
        <link rel="canonical" href="https://medisure.com.my/gallery" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Photo Gallery"
              title="See Our Products in Action"
              subtitle="Browse through our collection of premium healthcare and hospitality textiles serving Malaysia's leading institutions."
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background sticky top-20 z-30 border-b border-border">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full font-body text-sm font-medium transition-all duration-300",
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-premium-sm"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((image, index) => (
              <AnimatedSection key={index} delay={(index % 3) * 100}>
                <div
                  className="group relative overflow-hidden rounded-xl shadow-premium-sm hover:shadow-premium-lg transition-all duration-300 cursor-pointer break-inside-avoid"
                  onClick={() => setLightboxImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <ZoomIn className="w-12 h-12 text-background mx-auto mb-2" />
                      <span className="font-body text-background text-sm">{image.category}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4">
                    <span className="inline-block px-3 py-1 bg-primary/80 text-primary-foreground rounded-full text-xs font-medium">
                      {image.category}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-background/10 rounded-full flex items-center justify-center text-background hover:bg-background/20 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery image fullscreen"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-premium-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-wide mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Like What You See?
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Request samples or schedule a consultation with our team to discuss your textile requirements.
            </p>
            <a href="/contact" className="bg-background text-primary px-8 py-4 rounded-lg font-heading font-semibold hover:bg-background/90 transition-all shadow-premium-md">
              Request Samples
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Gallery;

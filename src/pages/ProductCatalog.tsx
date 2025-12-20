import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { X, ZoomIn } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";

import heroHospitalLinen from "@/assets/hero-hospital-linen.jpg";
import hospitalStaff from "@/assets/hospital-staff.jpg";
import hospitalUniform from "@/assets/hospital-uniform.jpg";
import hospitalStaffUni from "@/assets/hospital-staff-uni.jpg";
import linenTowels from "@/assets/Linen-towels.jpg";
import linenBedsheetsTowels from "@/assets/linen-bedsheets-towels.jpg";
import hospitalHotelsSupplier from "@/assets/hospital-hotels-supplier.jpg";

interface ProductImage {
  src: string;
  alt: string;
  category: "Hospitals" | "Hotels";
  productName: string;
  material: string;
  sizes: {
    name: string;
    dimensions: string;
  }[];
}

const catalogImages: ProductImage[] = [
  // Hospital Products
  {
    src: heroHospitalLinen,
    alt: "Hospital bed linen set",
    category: "Hospitals",
    productName: "Hospital Bed Sheet Set",
    material: "100% Premium Cotton, 300 Thread Count",
    sizes: [
      { name: "Single Bed", dimensions: "90cm x 190cm x 30cm" },
      { name: "Queen Size", dimensions: "150cm x 200cm x 35cm" },
      { name: "King Size", dimensions: "180cm x 200cm x 35cm" },
    ],
  },
  {
    src: hospitalStaff,
    alt: "Hospital staff medical uniforms",
    category: "Hospitals",
    productName: "Medical Scrubs Set",
    material: "65% Polyester, 35% Cotton Blend",
    sizes: [
      { name: "Small", dimensions: "Chest: 96cm, Length: 68cm" },
      { name: "Medium", dimensions: "Chest: 102cm, Length: 72cm" },
      { name: "Large", dimensions: "Chest: 108cm, Length: 76cm" },
    ],
  },
  {
    src: hospitalUniform,
    alt: "Hospital surgical gowns",
    category: "Hospitals",
    productName: "Surgical Gown",
    material: "SMS Non-Woven Fabric, Fluid Resistant",
    sizes: [
      { name: "Medium", dimensions: "Length: 120cm, Width: 140cm" },
      { name: "Large", dimensions: "Length: 130cm, Width: 150cm" },
      { name: "X-Large", dimensions: "Length: 140cm, Width: 160cm" },
    ],
  },
  {
    src: hospitalStaffUni,
    alt: "Hospital patient gowns",
    category: "Hospitals",
    productName: "Patient Gown",
    material: "100% Cotton, Soft Finish",
    sizes: [
      { name: "Small", dimensions: "Length: 100cm, Width: 120cm" },
      { name: "Medium", dimensions: "Length: 110cm, Width: 130cm" },
      { name: "Large", dimensions: "Length: 120cm, Width: 140cm" },
    ],
  },
  // Hotel Products
  {
    src: linenTowels,
    alt: "Hotel towel collection",
    category: "Hotels",
    productName: "Premium Bath Towel Set",
    material: "100% Egyptian Cotton, 600 GSM",
    sizes: [
      { name: "Hand Towel", dimensions: "40cm x 70cm" },
      { name: "Bath Towel", dimensions: "70cm x 140cm" },
      { name: "Bath Sheet", dimensions: "90cm x 180cm" },
    ],
  },
  {
    src: linenBedsheetsTowels,
    alt: "Hotel bedding collection",
    category: "Hotels",
    productName: "Luxury Hotel Bed Set",
    material: "100% Sateen Cotton, 400 Thread Count",
    sizes: [
      { name: "Single Bed", dimensions: "100cm x 200cm x 30cm" },
      { name: "Queen Size", dimensions: "160cm x 200cm x 35cm" },
      { name: "King Size", dimensions: "200cm x 200cm x 35cm" },
    ],
  },
  {
    src: hospitalHotelsSupplier,
    alt: "Hotel premium bedding",
    category: "Hotels",
    productName: "Hotel Duvet Cover Set",
    material: "100% Percale Cotton, 300 Thread Count",
    sizes: [
      { name: "Single Bed", dimensions: "140cm x 200cm" },
      { name: "Queen Size", dimensions: "200cm x 200cm" },
      { name: "King Size", dimensions: "240cm x 220cm" },
    ],
  },
];

const categories = ["All", "Hospitals", "Hotels"] as const;

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxImage, setLightboxImage] = useState<ProductImage | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? catalogImages
      : catalogImages.filter((img) => img.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Product Catalog - Hospital & Hotel Textiles | Medisure Healthcare</title>
        <meta
          name="description"
          content="Browse our product catalog of premium hospital linen, medical uniforms, and hotel textiles. Quality healthcare and hospitality products from Medisure."
        />
        <meta
          name="keywords"
          content="hospital linen catalog, hotel textiles, medical uniforms, healthcare products Malaysia"
        />
        <link rel="canonical" href="https://medisure.com.my/product-catalog" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Product Catalog"
              title="Browse Our Product Collection"
              subtitle="Explore our premium healthcare and hospitality textiles serving Malaysia's leading hospitals and hotels."
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

      {/* Category Sections */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          {/* Hospitals Section */}
          {(selectedCategory === "All" || selectedCategory === "Hospitals") && (
            <div className="mb-16">
              <AnimatedSection>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <span className="w-12 h-1 bg-primary rounded-full"></span>
                  Hospital Products
                </h2>
              </AnimatedSection>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {catalogImages
                  .filter((img) => img.category === "Hospitals")
                  .map((image, index) => (
                    <AnimatedSection key={`hospital-${index}`} delay={(index % 4) * 100}>
                      <div
                        className="group relative overflow-hidden rounded-xl shadow-premium-sm hover:shadow-premium-lg transition-all duration-300 cursor-pointer"
                        onClick={() => setLightboxImage(image)}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Hover Overlay with Product Details */}
                        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/85 transition-all duration-300 flex items-center justify-center p-4">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                            <ZoomIn className="w-8 h-8 text-background mx-auto mb-3" />
                            <h3 className="font-heading text-sm font-bold text-background mb-2">
                              {image.productName}
                            </h3>
                            <p className="font-body text-xs text-background/80 mb-3">
                              {image.material}
                            </p>
                            <div className="space-y-1">
                              {image.sizes.map((size, sizeIndex) => (
                                <p key={sizeIndex} className="font-body text-xs text-background/70">
                                  <span className="font-medium text-background">{size.name}:</span> {size.dimensions}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                        {/* Category Badge */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4">
                          <span className="inline-block px-3 py-1 bg-primary/80 text-primary-foreground rounded-full text-xs font-medium">
                            {image.productName}
                          </span>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
              </div>
            </div>
          )}

          {/* Hotels Section */}
          {(selectedCategory === "All" || selectedCategory === "Hotels") && (
            <div>
              <AnimatedSection>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <span className="w-12 h-1 bg-primary rounded-full"></span>
                  Hotel Products
                </h2>
              </AnimatedSection>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {catalogImages
                  .filter((img) => img.category === "Hotels")
                  .map((image, index) => (
                    <AnimatedSection key={`hotel-${index}`} delay={(index % 4) * 100}>
                      <div
                        className="group relative overflow-hidden rounded-xl shadow-premium-sm hover:shadow-premium-lg transition-all duration-300 cursor-pointer"
                        onClick={() => setLightboxImage(image)}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Hover Overlay with Product Details */}
                        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/85 transition-all duration-300 flex items-center justify-center p-4">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                            <ZoomIn className="w-8 h-8 text-background mx-auto mb-3" />
                            <h3 className="font-heading text-sm font-bold text-background mb-2">
                              {image.productName}
                            </h3>
                            <p className="font-body text-xs text-background/80 mb-3">
                              {image.material}
                            </p>
                            <div className="space-y-1">
                              {image.sizes.map((size, sizeIndex) => (
                                <p key={sizeIndex} className="font-body text-xs text-background/70">
                                  <span className="font-medium text-background">{size.name}:</span> {size.dimensions}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                        {/* Category Badge */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4">
                          <span className="inline-block px-3 py-1 bg-primary/80 text-primary-foreground rounded-full text-xs font-medium">
                            {image.productName}
                          </span>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
              </div>
            </div>
          )}
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
          <div
            className="bg-background rounded-2xl shadow-premium-lg max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="w-full md:w-1/2 h-64 md:h-auto object-cover"
            />
            <div className="p-6 md:p-8 flex-1">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-4">
                {lightboxImage.category}
              </span>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                {lightboxImage.productName}
              </h3>
              <div className="mb-6">
                <h4 className="font-heading text-sm font-semibold text-foreground mb-2">Material</h4>
                <p className="font-body text-muted-foreground">{lightboxImage.material}</p>
              </div>
              <div>
                <h4 className="font-heading text-sm font-semibold text-foreground mb-3">Available Sizes</h4>
                <div className="space-y-2">
                  {lightboxImage.sizes.map((size, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="font-body font-medium text-foreground">{size.name}</span>
                      <span className="font-body text-sm text-muted-foreground">{size.dimensions}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="/contact"
                className="btn-primary w-full mt-6 text-center block"
              >
                Request Quote
              </a>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-wide mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Need Custom Products?
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Request samples or schedule a consultation with our team to discuss your textile requirements.
            </p>
            <a href="/contact" className="bg-background text-primary px-8 py-4 rounded-lg font-heading font-semibold hover:bg-background/90 transition-all shadow-premium-md inline-block">
              Request Samples
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ProductCatalog;

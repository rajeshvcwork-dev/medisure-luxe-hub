import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import heroHospitalLinen from "@/assets/hero-hospital-linen.jpg";
import heroMedicalUniforms from "@/assets/uniforms/dress.jpg";
import heroHotelLinen from "@/assets/hotel-linen/hotelbed.jpg";
import heroSurgicalTextiles from "@/assets/uniforms/surgicaldress.jpg";

const slides = [
  {
    image: heroHospitalLinen,
    title: "Premium Hospital Linen & Healthcare Textile Solutions",
    subtitle: "Industry-leading quality for Malaysian hospitals and clinics",
  },
  {
    image: heroMedicalUniforms,
    title: "Medical Uniforms, Scrubs & Surgical Textiles Engineered for Excellence",
    subtitle: "Professional-grade uniforms designed for comfort and durability",
  },
  {
    image: heroHotelLinen,
    title: "Hotel Linen & Hospitality Essentials Delivered with Precision",
    subtitle: "Luxury bedding solutions for Malaysia's finest hotels",
  },
  {
    image: heroSurgicalTextiles,
    title: "Your End-to-End Partner for Healthcare & Hospitality Linen",
    subtitle: "Complete textile ecosystem from manufacturing to delivery",
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden" aria-label="Hero Slider">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-all duration-1000 ease-out",
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          )}
        >
          {/* Background Image with Parallax Effect */}
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[8000ms]"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? "scale(1.1)" : "scale(1)",
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full container-wide mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-700",
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute"
              )}
            >
              {index === currentSlide && (
                <>
                  <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6 animate-fade-up">
                    Malaysia's Trusted Healthcare Textile Partner
                  </span>
                  <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
                    {slide.title}
                  </h1>
                  <p className="font-body text-lg md:text-xl text-background/80 mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                    <Link to="/products" className="btn-primary inline-flex items-center justify-center">
                      Explore Our Products
                    </Link>
                    <Link to="/contact" className="btn-outline border-background/30 text-background hover:bg-background hover:text-charcoal inline-flex items-center justify-center">
                      Get a Quote
                    </Link>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-background/10 backdrop-blur-sm rounded-full flex items-center justify-center text-background hover:bg-primary transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-background/10 backdrop-blur-sm rounded-full flex items-center justify-center text-background hover:bg-primary transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "transition-all duration-300",
              index === currentSlide
                ? "w-10 h-3 bg-primary rounded-full"
                : "w-3 h-3 bg-background/50 rounded-full hover:bg-background/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:flex flex-col items-center space-y-2">
        <span className="text-background/60 text-xs font-body tracking-wider rotate-90 origin-center translate-y-6">
          SCROLL
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-background/0 via-background/50 to-background/0 animate-pulse-soft" />
      </div>
    </section>
  );
};

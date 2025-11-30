import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { X, ZoomIn } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";

interface GalleryCategory {
  title: string;
  folder: string;
}

const CATEGORIES: GalleryCategory[] = [
  { title: "All", folder: "all" },
  { title: "Hospital Linen", folder: "hospital-linen" },
  { title: "Hotel Linen", folder: "hotel-linen" },
  { title: "Uniforms", folder: "uniforms" }
];

// IMPORTANT: use 'as: "url"' so Vite returns URL strings (no .default needed)
const hospitalImages = Object.values(
  import.meta.glob("../assets/hospital-linen/*.{jpg,jpeg,png,webp}", {
    eager: true,
    as: "url",
  })
) as string[];

const hotelImages = Object.values(
  import.meta.glob("../assets/hotel-linen/*.{jpg,jpeg,png,webp}", {
    eager: true,
    as: "url",
  })
) as string[];

const uniformImages = Object.values(
  import.meta.glob("../assets/uniforms/*.{jpg,jpeg,png,webp}", {
    eager: true,
    as: "url",
  })
) as string[];

const imageMap: Record<string, string[]> = {
  "hospital-linen": hospitalImages,
  "hotel-linen": hotelImages,
  "uniforms": uniformImages,
};

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Diagnostics: prints counts + a few sample URLs
  useEffect(() => {
    console.info("Gallery diagnostic:");
    console.info(" hospital-linen count:", imageMap["hospital-linen"].length);
    console.info(" hotel-linen count:", imageMap["hotel-linen"].length);
    console.info(" uniforms count:", imageMap["uniforms"].length);
    console.info(" sample hospital-linen url:", imageMap["hospital-linen"][0]);
    console.info(" sample hotel-linen url:", imageMap["hotel-linen"][0]);
  }, []);

  const imagesToDisplay =
    activeCategory === "all"
      ? [...imageMap["hospital-linen"], ...imageMap["hotel-linen"], ...imageMap["uniforms"]]
      : imageMap[activeCategory] || [];

  return (
    <div style={{ padding: "20px" }}>
      {/* SEO / Head (optional) */}
      <Helmet>
        <title>Gallery — Medisure Luxe</title>
      </Helmet>

      {/* FILTER BUTTONS */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.folder}
            onClick={() => setActiveCategory(cat.folder)}
            style={{
              padding: "10px 16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              cursor: "pointer",
              background: activeCategory === cat.folder ? "#111827" : "#fff",
              color: activeCategory === cat.folder ? "#fff" : "#000",
              transition: "0.15s",
            }}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* GALLERY GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "16px",
        }}
      >
        {imagesToDisplay.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Gallery Item ${idx}`}
            loading="lazy"
            style={{
              width: "100%",
              borderRadius: "6px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

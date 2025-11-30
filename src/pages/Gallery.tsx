import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { X, ZoomIn } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";

import React, { useState } from "react";

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

// EXACT imports for each folder – guaranteed to work
const hospitalImages = import.meta.glob(
  "../assets/hospital-linen/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const hotelImages = import.meta.glob(
  "../assets/hotel-linen/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const uniformImages = import.meta.glob(
  "../assets/uniforms/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

// Convert imported modules to URL arrays
const imageMap: Record<string, string[]> = {
  "hospital-linen": Object.values(hospitalImages).map((img: any) => img.default),
  "hotel-linen": Object.values(hotelImages).map((img: any) => img.default),
  "uniforms": Object.values(uniformImages).map((img: any) => img.default)
};

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const imagesToDisplay =
    activeCategory === "all"
      ? [
          ...imageMap["hospital-linen"],
          ...imageMap["hotel-linen"],
          ...imageMap["uniforms"]
        ]
      : imageMap[activeCategory] || [];

  return (
    <div style={{ padding: "20px" }}>
      {/* FILTER BUTTONS */}
      <div style={{ marginBottom: "25px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.folder}
            onClick={() => setActiveCategory(cat.folder)}
            style={{
              padding: "10px 16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              cursor: "pointer",
              background: activeCategory === cat.folder ? "#333" : "#fff",
              color: activeCategory === cat.folder ? "#fff" : "#000",
              transition: "0.2s"
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
          gap: "18px"
        }}
      >
        {imagesToDisplay.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Gallery Item"
            style={{
              width: "100%",
              borderRadius: "6px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

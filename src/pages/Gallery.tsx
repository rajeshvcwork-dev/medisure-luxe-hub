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

// Updated categories without gallery folder
const CATEGORIES: GalleryCategory[] = [
  { title: "All", folder: "all" },
  { title: "Hospital Linen", folder: "hospital-linen" },
  { title: "Hotel Linen", folder: "hotel-linen" },
  { title: "Uniforms", folder: "uniforms" }
];

// Auto-load images directly from /src/assets/<folder>/
const allImages = import.meta.glob(
  "/src/assets/**/*.{png,jpg,jpeg,webp}",
  { eager: true }
);

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // folder → images[]
  const imageMap: Record<string, string[]> = {};

  // Initialize arrays for categories
  CATEGORIES.forEach((cat) => {
    if (cat.folder !== "all") imageMap[cat.folder] = [];
  });

  // Match assets/<folder>/image.jpg
  for (const path in allImages) {
    const img = allImages[path] as any;

    const folderMatch = path.match(/assets\/([^/]+)\//);
    if (!folderMatch) continue;

    const folder = folderMatch[1];

    if (imageMap[folder]) {
      imageMap[folder].push(img.default);
    }
  }

  // Build the display list
  const imagesToDisplay =
    activeCategory === "all"
      ? Object.values(imageMap).flat()
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
        {imagesToDisplay.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Gallery"
            style={{
              width: "100%",
              height: "auto",
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

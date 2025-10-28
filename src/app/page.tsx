"use client";
import { useState } from "react";
import LandingComponent from '@/components/LandingComponent/LandingComponent.jsx';
import StickyHeaderComponent from '@/components/StickyHeader/StickyHeader.jsx';
import CardsSection from '@/components/CardsSection/CardsSection.jsx';
import FooterComponent from '@/components/Footer/Footer.jsx';
import PRODUCTS from "@/DataFile/Data/data.js";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All Products"
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category.trim() === selectedCategory);

  return (
    <>
      <LandingComponent />
      <StickyHeaderComponent
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <CardsSection products={filteredProducts} />
      <FooterComponent />
    </>
  );
}

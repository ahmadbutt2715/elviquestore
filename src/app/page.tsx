"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductDetailModal } from "@/components/ProductDetailModal";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Dynamic Header */}
      <Navbar />

      <main className="flex-grow">
        {/* Aesthetic presentation Hero */}
        <Hero />

        {/* Dynamic products list and filters */}
        <ProductGrid />
      </main>

      {/* Slide-out cart Drawer panel */}
      <CartDrawer />

      {/* Core detailed product review dialog */}
      <ProductDetailModal />

      {/* Informative Footer */}
      <Footer />
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";

export const Hero: React.FC = () => {
  const { setActiveProductId } = useCart();
  const featuredProduct = PRODUCTS.find((p) => p.id === "elvique-audio-max") || PRODUCTS[0];

  const handleLearnMore = () => {
    setActiveProductId(featuredProduct.id);
  };

  const handleScrollToShop = () => {
    const shopSection = document.getElementById("shop-catalog");
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 border-b border-gray-100 flex items-center min-h-[85vh] py-16 px-6 sm:px-12 lg:px-16">
      {/* Background soft blue radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#e8f0fe_0%,transparent_50%)] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Hero Copy */}
        <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left animate-slide-up">
          <span className="inline-flex self-center lg:self-start items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-google-blue-light text-google-blue mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-google-blue animate-pulse" />
            Introducing Elvique Audio Max
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            Sound, <br className="hidden sm:inline" />
            re-engineered.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Immerse yourself in pure studio-grade acoustics. Engineered with hybrid active noise cancellation, custom dynamic drivers, and up to 40 hours of playback.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button
              onClick={handleScrollToShop}
              className="w-full sm:w-auto px-8 py-3.5 bg-google-blue hover:bg-google-blue-hover text-white text-sm font-semibold rounded-full shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
            >
              Explore Products
            </button>
            <button
              onClick={handleLearnMore}
              className="w-full sm:w-auto px-8 py-3.5 bg-background border border-gray-300 hover:border-gray-400 text-gray-700 text-sm font-semibold rounded-full hover:bg-gray-50 transition-all duration-200 cursor-pointer"
            >
              Quick Details
            </button>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="lg:col-span-6 flex justify-center items-center relative">
          {/* Decorative rotating/glowing back drop circles */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-background google-shadow-sm border border-gray-100 -z-10 animate-fade-in" />
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] transition-transform duration-700 hover:scale-105 select-none">
            <Image
              src="/images/products/audio_max_1.webp"
              alt="Elvique Audio Max Chalk White"
              fill
              priority
              className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

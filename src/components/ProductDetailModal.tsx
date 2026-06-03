"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import { X, Star, Plus, Minus, ShoppingCart, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import { ProductImageMockup } from "./ProductCard";
import { useRouter } from "next/navigation";

const ProductDetailModalContent: React.FC = () => {
  const { activeProductId, setActiveProductId, addToCart } = useCart();
  
  const product = PRODUCTS.find((p) => p.id === activeProductId);

  // Hooks declared at top-level before early returns
  const [selectedVariantId, setSelectedVariantId] = useState(product?.variants[0]?.id || "");
  const [quantity, setQuantity] = useState(1);
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Synchronize background scrolling
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Accessibility: close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProductId(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setActiveProductId]);

  // Early return placed AFTER all hooks
  if (!product) return null;

  const selectedVariant =
    product.variants.find((v) => v.id === selectedVariantId) || product.variants[0];

  const handleClose = () => {
    setActiveProductId(null);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, selectedVariant.id, quantity);
    handleClose();
  };

  const handleOrderNow = () => {
    addToCart(product, selectedVariant.id, quantity);
    handleClose();
    router.push("/checkout");
  };

  const hasLocalImage =
    product.images[0] &&
    (product.images[0].includes("audio_max_1") ||
      product.images[0].includes("active_watch_1") ||
      product.images[0].includes("smart_hub_1") ||
      product.images[0].includes("earbuds_pro_1") ||
      product.images[0].includes("ambient_glow_1") ||
      product.images[0].includes("power_grid_1"));

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 overflow-y-auto animate-fade-in"
    >
      <div
        ref={modalRef}
        className="bg-background rounded-3xl w-full max-w-4xl max-h-[90vh] md:max-h-[85vh] overflow-hidden google-shadow-lg flex flex-col md:flex-row relative animate-slide-up"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 bg-gray-50 hover:bg-gray-100 border border-gray-100 text-gray-600 rounded-full transition-colors z-20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Media - Left Col */}
        <div className="w-full md:w-1/2 bg-gray-50 border-r border-gray-100 flex md:flex-col items-center justify-center pt-20 pb-8 px-8 md:p-8 relative min-h-[300px] md:min-h-0 md:overflow-y-auto overflow-hidden">
          <div className="relative aspect-square w-full max-w-[320px] select-none flex-shrink-0">
            {hasLocalImage ? (
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                priority
                className="object-contain filter drop-shadow-md"
              />
            ) : (
              <ProductImageMockup category={product.category} />
            )}
          </div>
          {/* Product Description (Desktop Only) */}
          <div className="mt-6 w-full text-center max-w-[320px] hidden md:block">
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>

        {/* Product Information details - Right Col */}
        <div className="w-full md:w-1/2 flex flex-col max-h-[60vh] md:max-h-[85vh] overflow-hidden">
          {/* Scrollable details */}
          <div className="p-6 md:p-8 overflow-y-auto flex-grow">
            {/* Category */}
            <span className="text-xs font-semibold text-google-blue bg-google-blue-light px-3 py-1 rounded-full uppercase tracking-wider">
              {product.category}
            </span>

            {/* Title */}
            <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 mt-4 leading-tight">
              {product.title}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mt-3 text-sm">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="font-bold text-gray-700">{product.rating}</span>
              <span className="text-gray-400">({product.reviewsCount} customer reviews)</span>
            </div>

            {/* Price block */}
            <div className="flex items-baseline gap-2 mt-4">
              <span className="font-display font-bold text-2xl text-gray-950">Rs. {selectedVariant.price.toLocaleString()}</span>
              {product.compareAtPrice && (
                <span className="text-sm text-gray-400 line-through">Rs. {product.compareAtPrice.toLocaleString()}</span>
              )}
            </div>

            {/* Description (Mobile Only) */}
            <p className="text-sm text-gray-600 mt-5 leading-relaxed block md:hidden">
              {product.description}
            </p>

            {/* Color variants Selection Dropdown */}
            {product.variants.length > 1 && (
              <div className="mt-6 border-t border-gray-100 pt-6">
                <label 
                  htmlFor="variant-select"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3"
                >
                  Select Option
                </label>
                <div className="relative">
                  <select
                    id="variant-select"
                    value={selectedVariantId}
                    onChange={(e) => setSelectedVariantId(e.target.value)}
                    className="w-full px-4 py-3 text-sm font-semibold rounded-2xl border border-gray-200 dark:border-gray-800 bg-background text-gray-800 dark:text-white hover:border-gray-300 dark:hover:border-gray-700 focus:border-google-blue focus:outline-none appearance-none cursor-pointer transition-all duration-200"
                  >
                    {product.variants.map((v) => (
                      <option key={v.id} value={v.id} className="bg-background text-gray-800 dark:text-white">
                        {v.title} &mdash; Rs. {v.price.toLocaleString()}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {/* Tech specifications Table */}
            <div className="mt-6 border-t border-gray-100 pt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                Technical Specifications
              </h4>
              <div className="border border-gray-100 rounded-2xl overflow-hidden divide-y divide-gray-100 bg-gray-50">
                {product.specs.map((spec, index) => (
                  <div key={index} className="grid grid-cols-3 text-xs p-3">
                    <span className="font-semibold text-gray-500">{spec.label}</span>
                    <span className="col-span-2 text-gray-700">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantee / Value props badges */}
            <div className="grid grid-cols-3 gap-2 text-[10px] text-gray-500 mt-6 pt-4 border-t border-gray-100 text-center">
              <div className="flex flex-col items-center gap-1">
                <Truck className="w-4 h-4 text-google-blue" />
                <span className="font-semibold">Free Delivery</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-google-blue" />
                <span className="font-semibold">2-Year Warranty</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RefreshCw className="w-4 h-4 text-google-blue" />
                <span className="font-semibold">30-Day Returns</span>
              </div>
            </div>
          </div>

          {/* Checkout triggers and cart modifier controls (Fixed/Sticky footer) */}
          <div className="border-t border-gray-100 p-4 md:p-6 bg-background space-y-4 flex-shrink-0">
            {/* Quantity Selector */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Quantity
              </span>
              <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded-full p-1 bg-gray-50 dark:bg-gray-900">
                <button
                  onClick={handleDecrement}
                  className="p-2 hover:bg-white dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full transition-colors cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-bold text-gray-900 dark:text-gray-100 select-none">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  className="p-2 hover:bg-white dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row items-center gap-3">
              {/* Add to Cart button */}
              <button
                onClick={handleAddToCart}
                className="w-1/2 px-4 py-3 bg-google-blue-light hover:bg-google-blue text-google-blue hover:text-white dark:bg-google-blue-light/10 dark:text-google-blue dark:hover:bg-google-blue text-xs font-bold rounded-full shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>

              {/* Order Now button */}
              <button
                onClick={handleOrderNow}
                className="w-1/2 px-4 py-3 bg-google-blue hover:bg-google-blue-hover text-white text-xs font-bold rounded-full shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductDetailModal: React.FC = () => {
  const { activeProductId } = useCart();
  if (!activeProductId) return null;

  // Reset component state when activeProductId shifts
  return <ProductDetailModalContent key={activeProductId} />;
};

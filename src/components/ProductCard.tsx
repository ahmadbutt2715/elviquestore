"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Star, ShoppingBag, Eye } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

// Custom inline SVG/CSS mockup renderer for when products use mock image tags
export const ProductImageMockup: React.FC<{ category: string; className?: string }> = ({
  category,
  className = ""
}) => {
  const isAudio = category.toLowerCase() === "audio";
  const isWearable = category.toLowerCase() === "wearables";
  const isHub = category.toLowerCase() === "smart home";

  return (
    <div className={`relative w-full h-full bg-gray-50 flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background radial soft light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,115,232,0.06)_0%,transparent_70%)] pointer-events-none" />

      {isAudio && (
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Studio Headphone Silhouette */}
          <div className="absolute w-24 h-24 rounded-full border-4 border-gray-300 opacity-60" />
          <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-7 h-12 bg-google-blue rounded-xl" />
          <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-7 h-12 bg-google-blue rounded-xl" />
          <div className="absolute top-2 w-16 h-1 bg-gray-400 rounded-full" />
        </div>
      )}

      {isWearable && (
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Smartwatch Silhouette */}
          <div className="absolute w-12 h-24 bg-gray-200 border border-gray-300 rounded-xl" />
          <div className="absolute w-20 h-20 bg-gray-800 rounded-full border-2 border-gray-400 flex items-center justify-center shadow-lg">
            <div className="w-16 h-16 bg-gray-900 rounded-full border border-gray-700 flex flex-col items-center justify-center text-[10px] text-white">
              <span className="text-google-blue font-bold">10:00</span>
              <span className="text-gray-400 text-[8px]">Elvique</span>
            </div>
          </div>
          <div className="absolute right-0 w-1.5 h-3 bg-gray-400 rounded" />
        </div>
      )}

      {isHub && (
        <div className="relative w-36 h-24 flex flex-col items-center justify-center">
          {/* Smart Hub Screen */}
          <div className="w-28 h-18 bg-gray-100 border border-gray-300 rounded-xl google-shadow-sm flex items-center justify-center p-1.5">
            <div className="w-full h-full bg-background rounded-lg border border-gray-200 overflow-hidden flex flex-col justify-between p-1">
              <div className="w-full h-1 bg-google-blue rounded-full" />
              <div className="flex justify-between items-center text-[8px] text-gray-500 font-semibold px-0.5">
                <span>72°</span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              </div>
            </div>
          </div>
          {/* Smart Hub Base */}
          <div className="w-20 h-3 bg-gray-400 rounded-b-xl border-t border-gray-300" />
        </div>
      )}

      {/* Default accessory/generic hardware silhouette */}
      {!isAudio && !isWearable && !isHub && (
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute w-16 h-16 bg-gradient-to-tr from-google-blue to-blue-300 rounded-2xl opacity-80 rotate-12" />
          <div className="absolute w-16 h-16 bg-background border border-gray-200 rounded-2xl google-shadow-sm flex items-center justify-center">
            <ShoppingBag className="w-6 h-6 text-google-blue" />
          </div>
        </div>
      )}
    </div>
  );
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, setActiveProductId } = useCart();

  const handleCardClick = () => {
    setActiveProductId(product.id);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, product.variants[0].id, 1);
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
      onClick={handleCardClick}
      className="group relative bg-background rounded-3xl border border-gray-200/80 dark:border-gray-800 shadow-[0_12px_30px_rgba(0,0,0,0.08),_0_4px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_12px_30px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12),_0_8px_20px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)] cursor-pointer flex flex-col h-full animate-fade-in"
    >
      {/* Product Image Panel */}
      <div className="relative aspect-[4/3] w-full bg-gray-50 border-b border-gray-200 dark:border-gray-800 overflow-hidden flex items-center justify-center">
        {hasLocalImage ? (
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <ProductImageMockup
            category={product.category}
            className="transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Hover Overlay Actions */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={handleQuickAdd}
            className="p-3 bg-background hover:bg-google-blue hover:text-white text-gray-800 rounded-full shadow-lg transition-all duration-200 transform scale-90 group-hover:scale-100"
            title="Quick Add"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button
            onClick={handleCardClick}
            className="p-3 bg-background hover:bg-gray-100 text-gray-800 rounded-full shadow-lg transition-all duration-200 transform scale-90 group-hover:scale-100"
            title="View Details"
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>

        {/* Sale / Compare Badge */}
        {product.compareAtPrice && (
          <span className="absolute top-4 left-4 bg-google-blue text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Save Rs. {(product.compareAtPrice - product.price).toLocaleString()}
          </span>
        )}
      </div>

      {/* Product Info Panel */}
      <div className="p-6 flex flex-col flex-1">
        {/* Category & Rating */}
        <div className="flex items-center justify-between gap-2 text-sm text-gray-500 mb-2.5">
          <span className="font-semibold text-google-blue bg-google-blue-light px-3 py-1 rounded-full text-xs">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-gray-700 text-sm">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Product Title */}
        <h3 className="font-display font-bold text-gray-900 group-hover:text-google-blue transition-colors text-lg md:text-xl line-clamp-1 leading-snug">
          {product.title}
        </h3>

        {/* Product Pricing & CTA */}
        <div className="mt-auto pt-5 flex items-center justify-between border-t border-gray-200 dark:border-gray-800 gap-2">
          <div className="flex items-baseline gap-1.5">
            <span className="font-display font-bold text-xl md:text-2xl text-gray-900">Rs. {product.price.toLocaleString()}</span>
            {product.compareAtPrice && (
              <span className="text-sm text-gray-400 line-through">Rs. {product.compareAtPrice.toLocaleString()}</span>
            )}
          </div>
          <button
            onClick={handleQuickAdd}
            className="px-5 py-2.5 bg-gray-100 group-hover:bg-google-blue text-gray-700 group-hover:text-white text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

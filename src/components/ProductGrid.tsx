"use client";

import React, { useMemo } from "react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { useCart } from "@/context/CartContext";
import { SearchSlash, SlidersHorizontal } from "lucide-react";

const categories = ["All", "Audio", "Wearables", "Smart Home", "Accessories"];

export const ProductGrid: React.FC = () => {
  const { searchQuery, selectedCategory, sortBy, setSortBy, setSearchQuery, setSelectedCategory } = useCart();

  // Filter and sort products dynamically
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // 1. Filter by category
    if (selectedCategory !== "All") {
      result = result.filter(
        (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // 2. Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (product) =>
          product.title.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // 3. Sort products
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSortBy("featured");
  };

  return (
    <div id="shop-catalog" className="max-w-7xl mx-auto px-6 py-12 scroll-mt-20">
      {/* Category Pills / Sorting Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0 sm:flex-wrap">
        {categories.map((cat) => {
          const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap border ${
                isActive
                  ? "bg-google-blue text-white shadow-sm border-google-blue hover:bg-google-blue/90"
                  : "bg-gray-50 dark:bg-gray-900/60 text-gray-700 dark:text-white hover:text-foreground hover:bg-gray-100/50 dark:hover:bg-gray-800/50 border-gray-200 dark:border-gray-850"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Filtering Header controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-6 mb-8 gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
            {selectedCategory === "All" ? "Featured Products" : selectedCategory}
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Showing {filteredProducts.length} of {PRODUCTS.length} items
          </p>
        </div>

        {/* Sort Selection */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="text-xs font-semibold text-gray-500 flex items-center gap-1.5 whitespace-nowrap">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Sort by
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-full text-xs font-medium text-gray-700 dark:text-white bg-background dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-750 focus:outline-none focus:ring-1 focus:ring-google-blue focus:border-google-blue cursor-pointer"
          >
            <option value="featured" className="bg-background text-gray-700 dark:text-white">Featured Options</option>
            <option value="price-low" className="bg-background text-gray-700 dark:text-white">Price: Low to High</option>
            <option value="price-high" className="bg-background text-gray-700 dark:text-white">Price: High to Low</option>
            <option value="rating" className="bg-background text-gray-700 dark:text-white">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Product list grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Empty State with elegant styling */
        <div className="flex flex-col items-center justify-center text-center py-20 px-6 border border-dashed border-gray-200 rounded-3xl bg-gray-50 max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-google-blue-light flex items-center justify-center mb-6">
            <SearchSlash className="w-8 h-8 text-google-blue animate-pulse" />
          </div>
          <h3 className="font-display text-lg font-bold text-gray-900">No products found</h3>
          <p className="text-sm text-gray-500 max-w-sm mt-2 leading-relaxed">
            We couldn&apos;t find any products matching &quot;{searchQuery}&quot; in category &quot;{selectedCategory}&quot;. Try adjusting your filters.
          </p>
          <button
            onClick={handleResetFilters}
            className="mt-6 px-6 py-2.5 bg-google-blue hover:bg-google-blue-hover text-white text-xs font-semibold rounded-full shadow-sm transition-all duration-200 cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
  const {
    cartCount,
    setIsCartOpen,
    setSearchQuery,
    setSelectedCategory,
    theme,
    toggleTheme
  } = useCart();

  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor page scroll to add fine blur/shadow to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background border-b border-gray-200 dark:border-gray-800 google-shadow-sm py-3"
          : "bg-background border-b border-gray-150 dark:border-gray-850 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
        
        {/* Brand/Logo */}
        <div className="flex items-center">
          <Link 
            href="/" 
            onClick={() => setSelectedCategory("All")} 
            className="flex items-center gap-1"
          >
            <span className="font-display text-2xl font-bold tracking-tight text-foreground select-none">
              Elvique<span className="text-google-blue">.</span>
            </span>
          </Link>
        </div>

        {/* Navigation Pages - Desktop */}
        <nav className="hidden lg:flex items-center gap-1 bg-gray-50 dark:bg-gray-900/60 border border-gray-150 dark:border-gray-800/80 p-1.5 rounded-full">
          <Link
            href="/"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
              pathname === "/"
                ? "bg-background dark:bg-gray-800 text-google-blue google-shadow-sm"
                : "text-gray-700 dark:text-white hover:text-foreground hover:bg-gray-100/50 dark:hover:bg-gray-800/40"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
              pathname === "/about"
                ? "bg-background dark:bg-gray-800 text-google-blue google-shadow-sm"
                : "text-gray-700 dark:text-white hover:text-foreground hover:bg-gray-100/50 dark:hover:bg-gray-800/40"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
              pathname === "/contact"
                ? "bg-background dark:bg-gray-800 text-google-blue google-shadow-sm"
                : "text-gray-700 dark:text-white hover:text-foreground hover:bg-gray-100/50 dark:hover:bg-gray-800/40"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Cart & Controls Panel */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 bg-background border border-gray-200 dark:border-gray-850 hover:border-gray-300 dark:hover:border-gray-750 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 text-gray-700 dark:text-white hover:text-foreground"
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            {theme === "light" ? <Moon className="w-4.5 h-4.5" /> : <Sun className="w-4.5 h-4.5 text-yellow-400" />}
          </button>

          {/* Cart Icon trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative px-4 py-2 bg-background border border-gray-200 dark:border-gray-850 hover:border-gray-300 dark:hover:border-gray-750 rounded-full flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 text-gray-700 dark:text-white hover:text-foreground"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline text-xs font-semibold">Cart</span>
            {cartCount > 0 && (
              <span className="w-4 h-4 bg-google-blue text-white rounded-full flex items-center justify-center text-[9px] font-bold animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-full cursor-pointer hover:text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[64px] left-0 right-0 bottom-0 bg-background z-30 p-6 flex flex-col border-t border-gray-200 dark:border-gray-850 animate-fade-in">
          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Navigation</h4>
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 text-sm font-semibold rounded-2xl transition-colors ${
                  pathname === "/"
                    ? "bg-google-blue-light dark:bg-google-blue-light/10 text-google-blue"
                    : "text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900/60 hover:text-foreground"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`w-full text-left px-4 py-3 text-sm font-semibold rounded-2xl transition-colors ${
                  pathname === "/about"
                    ? "bg-google-blue-light dark:bg-google-blue-light/10 text-google-blue"
                    : "text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900/60 hover:text-foreground"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`w-full text-left px-4 py-3 text-sm font-semibold rounded-2xl transition-colors ${
                  pathname === "/contact"
                    ? "bg-google-blue-light dark:bg-google-blue-light/10 text-google-blue"
                    : "text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900/60 hover:text-foreground"
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>


          {/* Mobile Theme Toggle */}
          <div className="mt-auto pt-6 border-t border-gray-150 dark:border-gray-850 flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">Theme</span>
            <button
              onClick={() => {
                toggleTheme();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-850 rounded-full text-xs font-semibold text-gray-700 dark:text-white hover:text-foreground hover:bg-gray-50 dark:hover:bg-gray-900/60 bg-background cursor-pointer"
            >
              {theme === "light" ? (
                <>
                  <Moon className="w-3.5 h-3.5" />
                  Dark Theme
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-yellow-400" />
                  Light Theme
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

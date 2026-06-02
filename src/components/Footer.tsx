import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 dark:border-gray-800/80 mt-20 text-gray-600 dark:text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-display text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Elvique<span className="text-google-blue">.</span>
            </span>
            <p className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              Minimalist, high-performance electronics and smart devices crafted for modern, active lifestyles.
            </p>
          </div>

          {/* Shop Col */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4 font-display">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-google-blue transition-colors">Audio Accessories</a></li>
              <li><a href="#" className="hover:text-google-blue transition-colors">Smart Wearables</a></li>
              <li><a href="#" className="hover:text-google-blue transition-colors">Ambient Lighting</a></li>
              <li><a href="#" className="hover:text-google-blue transition-colors">Power Chargers</a></li>
            </ul>
          </div>

          {/* Support Col */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4 font-display">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/contact" className="hover:text-google-blue transition-colors">Help Center</Link></li>
              <li><a href="#" className="hover:text-google-blue transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-google-blue transition-colors">Shopify Connectivity</a></li>
              <li><Link href="/contact" className="hover:text-google-blue transition-colors">Contact Care</Link></li>
            </ul>
          </div>

          {/* About Col */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4 font-display">Elvique Experience</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-google-blue transition-colors">About Us</Link></li>
              <li><Link href="/about" className="hover:text-google-blue transition-colors">Our Story & Design</Link></li>
              <li><a href="#" className="hover:text-google-blue transition-colors">Wholesale Partnerships</a></li>
              <li><a href="#" className="hover:text-google-blue transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-xs">
          <div>
            &copy; {new Date().getFullYear()} Elvique Inc. Designed in inspiration with Material Design. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

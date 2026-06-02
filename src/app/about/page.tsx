"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { ProductDetailModal } from "@/components/ProductDetailModal";
import { Award, Eye, Compass, ShieldCheck, Heart, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gray-50 border-b border-gray-100 py-20 px-6 sm:px-12 lg:px-16">
          {/* Decorative glowing gradient background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#e8f0fe_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(26,115,232,0.08)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.05)_0%,transparent_50%)] pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10 animate-slide-up">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-semibold bg-google-blue-light text-google-blue mb-6">
              Our Identity
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Aesthetics. Innovation.<br />
              Precision.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Welcome to Elvique. We are creators of minimalist, high-performance electronics and smart devices crafted for modern, active lifestyles in Pakistan and beyond.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Ethos */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-google-blue-light/30 -z-10 blur-xl animate-pulse" />
              <div className="google-card border border-gray-200 rounded-3xl p-8 md:p-10 google-shadow-md w-full max-w-md relative overflow-hidden transition-all duration-300 hover:google-shadow-lg">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-google-blue-light/20 rounded-full" />
                <h3 className="font-display font-bold text-3xl text-gray-900 mb-4">
                  Born in Pakistan, <br />Designed for the World.
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Elvique started with a single realization: technology does not have to be cold, bulky, or generic. 
                  We set out to engineer tech accessories that feel like high-end furniture and luxury goods—sleek, tactile, and highly functional.
                </p>
              </div>
            </div>

            {/* Content Core */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display text-4xl font-bold text-gray-900 leading-tight">
                Reimagining consumer tech for everyday lifestyle
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                At Elvique, we merge material elegance with modern engineering. By omitting unnecessary bulk and emphasizing clean geometric shapes, we focus on what truly matters: pure tactile feedback, immersive high-resolution acoustics, clinical health metrics tracking, and responsive home automations.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Whether it is our studio-grade noise-canceling headphones, AMOLED always-on smartwatches, or smart chromatic ambient light glows, every Elvique product goes through hundreds of hours of design reviews and premium stress-testing in Lahore, Pakistan to ensure standard-setting luxury performance.
              </p>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="bg-gray-50 border-y border-gray-200 py-20 px-6 sm:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-16">
              <h2 className="font-display text-3xl font-bold text-gray-900">Our Core Philosophy</h2>
              <p className="text-sm text-gray-500 mt-2">The fundamental values that shape every device we release.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <div className="bg-background p-8 rounded-3xl border border-gray-200 transition-all duration-300 hover:translate-y-[-4px] hover:border-transparent hover:google-shadow-md">
                <div className="w-12 h-12 rounded-2xl bg-google-blue-light text-google-blue flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-3">Minimalist Aesthetics</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We believe that great design is as little design as possible. By reducing clutter, our physical buttons, interfaces, and colors harmonize naturally with your environments.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-background p-8 rounded-3xl border border-gray-200 transition-all duration-300 hover:translate-y-[-4px] hover:border-transparent hover:google-shadow-md">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-3">Studio Quality Standard</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Zero compromises on hardware specs. From custom 40mm headphone drivers to AMOLED panels, we source the highest grade active components to ensure durability and raw performance.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-background p-8 rounded-3xl border border-gray-200 transition-all duration-300 hover:translate-y-[-4px] hover:border-transparent hover:google-shadow-md">
                <div className="w-12 h-12 rounded-2xl bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-3">Extreme Reliability</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Every order includes securing warranties, free local shipping thresholds, and responsive premium customer care to give you total peace of mind with your purchase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Timeline Section */}
        <section className="py-20 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-gray-900">Our Journey</h2>
            <p className="text-sm text-gray-500 mt-2">From custom prototypes to modern active smart storefronts.</p>
          </div>

          <div className="max-w-3xl mx-auto relative border-l border-gray-200 pl-6 sm:pl-8 space-y-12">
            {/* Timeline Item 1 */}
            <div className="relative">
              <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-google-blue border-4 border-background" />
              <span className="text-sm font-bold text-google-blue tracking-wider block mb-1">2024</span>
              <h3 className="font-display font-bold text-lg text-gray-900">The Spark & Concepts</h3>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Elvique was formed in Lahore as an engineering startup researching spatial acoustics and smart wearables. We spent months prototyping custom visual and physical designs.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative">
              <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-google-blue border-4 border-background" />
              <span className="text-sm font-bold text-google-blue tracking-wider block mb-1">2025</span>
              <h3 className="font-display font-bold text-lg text-gray-900">Flagship Product Release</h3>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                We officially launched **Elvique Audio Max** and **Elvique Active Watch**, instantly setting a new benchmark in premium lifestyle hardware for digital workers and fitness enthusiasts.
              </p>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative">
              <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-google-blue border-4 border-background" />
              <span className="text-sm font-bold text-google-blue tracking-wider block mb-1">Present</span>
              <h3 className="font-display font-bold text-lg text-gray-900">National E-commerce Expansion</h3>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                By offering free nationwide shipping limits and secure, zero-tax PKR currency pricing, we are proud to serve tech-savvy customers across Pakistan from Karachi to Islamabad.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Cart & Modal helpers */}
      <CartDrawer />
      <ProductDetailModal />

      {/* Footer */}
      <Footer />
    </div>
  );
}

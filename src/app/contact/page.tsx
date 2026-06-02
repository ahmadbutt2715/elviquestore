"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { ProductDetailModal } from "@/components/ProductDetailModal";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Loader2, Sparkles } from "lucide-react";

export default function ContactPage() {
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name || !email || !subject || !message) {
      setErrorMsg("Please fill in all the contact form fields.");
      return;
    }

    setIsSubmitting(true);
    
    // Mock API trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1800);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setIsSubmitted(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Header Hero Banner */}
        <section className="relative overflow-hidden bg-gray-50 border-b border-gray-200 py-16 px-6 sm:px-12 lg:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#e8f0fe_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_70%_30%,rgba(26,115,232,0.08)_0%,transparent_60%)] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-semibold bg-google-blue-light text-google-blue mb-4">
              Get In Touch
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              We would love to hear from you.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Have questions about your order, technical product specifications, or wholesale partnerships? Send us a message!
            </p>
          </div>
        </section>

        {/* Core Double-Column Layout */}
        <section className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
            
            {/* Left Column: Interactive Contact Info Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6 animate-slide-up">
              <h2 className="font-display text-3xl font-bold text-gray-900">Contact Information</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Connect with our customer care representatives. We typically reply to all e-commerce inquiries within 12-24 business hours.
              </p>

              {/* Info grid */}
              <div className="space-y-4">
                {/* Email block */}
                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 flex gap-4 transition-all hover:bg-background hover:border-transparent hover:google-shadow-sm group">
                  <div className="w-10 h-10 rounded-xl bg-google-blue-light text-google-blue flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Support & Sales Email</h4>
                    <a 
                      href="mailto:elvique.pk@gmail.com" 
                      className="text-sm font-semibold text-google-blue group-hover:underline block mt-1 break-all"
                    >
                      elvique.pk@gmail.com
                    </a>
                    <span className="text-xs text-gray-500 mt-1 block">Write to us anytime for rapid customer assistance.</span>
                  </div>
                </div>

                {/* Phone block */}
                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 flex gap-4 transition-all hover:bg-background hover:border-transparent hover:google-shadow-sm group">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Call or WhatsApp Support</h4>
                    <span className="text-sm font-semibold text-gray-705 text-foreground/80 block mt-1">+92 (042) 345-6789</span>
                    <span className="text-xs text-gray-500 mt-1 block">Standard local call tariffs apply. WhatsApp messaging available.</span>
                  </div>
                </div>

                {/* Headquarters block */}
                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 flex gap-4 transition-all hover:bg-background hover:border-transparent hover:google-shadow-sm group">
                  <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Headquarters & Design Lab</h4>
                    <span className="text-sm font-semibold text-gray-705 text-foreground/80 block mt-1">Gulberg III, Lahore, Pakistan</span>
                    <span className="text-xs text-gray-500 mt-1 block">Visits by appointment only for business/distributor reviews.</span>
                  </div>
                </div>

                {/* Working hours block */}
                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 flex gap-4 transition-all hover:bg-background hover:border-transparent hover:google-shadow-sm group">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Support Operating Hours</h4>
                    <span className="text-sm font-semibold text-gray-750 text-foreground/80 block mt-1">Mon &mdash; Sat: 9:00 AM &mdash; 6:00 PM</span>
                    <span className="text-xs text-gray-500 mt-1 block">Sunday: Closed. Emergency dispatch monitoring active.</span>
                  </div>
                </div>
              </div>

              {/* Aesthetic Mockup Map Panel */}
              <div className="google-card rounded-2xl border border-gray-200 p-4 google-shadow-sm relative overflow-hidden select-none min-h-[140px] flex items-center justify-center text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,115,232,0.04)_0%,transparent_80%)]" />
                <div>
                  <MapPin className="w-6 h-6 text-google-blue mx-auto mb-2 animate-bounce" />
                  <span className="text-xs font-bold uppercase tracking-wider text-google-blue block mb-1">Lahore Tech Hub Spotlight</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed block max-w-xs mx-auto">Connecting premium digital creators and active hardware engineering from our modern hub in Punjab.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Active Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                /* Spectacular Success state */
                <div className="bg-background rounded-3xl border border-gray-200 p-8 md:p-12 text-center google-shadow-md animate-fade-in relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-google-blue via-blue-400 to-indigo-500" />
                  
                  <div className="w-16 h-16 rounded-full bg-google-blue-light flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-9 h-9 text-google-blue animate-bounce" />
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-google-blue-light text-google-blue mb-4">
                    <Sparkles className="w-3.5 h-3.5" /> Message Sent
                  </span>

                  <h3 className="font-display text-3xl font-bold text-gray-900">
                    Thank you, {name}!
                  </h3>
                  <p className="text-sm sm:text-base text-gray-500 mt-3 max-w-sm mx-auto leading-relaxed">
                    Your message regarding **&quot;{subject}&quot;** has been successfully dispatched to the Elvique engineering & support crew at **`elvique.pk@gmail.com`**.
                  </p>

                  <button
                    onClick={handleReset}
                    className="mt-8 px-8 py-3.5 bg-google-blue hover:bg-google-blue-hover text-white text-sm font-semibold rounded-full shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Gorgeous Form fields block */
                <form 
                  onSubmit={handleSubmit} 
                  className="google-card p-6 md:p-8 rounded-3xl border border-gray-200 google-shadow-sm space-y-6 animate-slide-up"
                >
                  <h3 className="font-display text-xl font-bold text-gray-900">Send us a direct message</h3>
                  
                  {errorMsg && (
                    <div className="p-4 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 text-sm font-semibold rounded-2xl border border-red-100 dark:border-red-950/40">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm placeholder-gray-400 focus:outline-none focus:bg-background text-foreground focus:ring-1 focus:ring-google-blue focus:border-google-blue transition-all"
                      />
                    </div>

                    {/* Email address */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm placeholder-gray-400 focus:outline-none focus:bg-background text-foreground focus:ring-1 focus:ring-google-blue focus:border-google-blue transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Subject / Topic</label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Inquire about wholesale, product support, feedback..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm placeholder-gray-400 focus:outline-none focus:bg-background text-foreground focus:ring-1 focus:ring-google-blue focus:border-google-blue transition-all"
                    />
                  </div>

                  {/* Message body */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Detailed Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share details of your inquiry, order number if applicable..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm placeholder-gray-400 focus:outline-none focus:bg-background text-foreground focus:ring-1 focus:ring-google-blue focus:border-google-blue transition-all resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-google-blue hover:bg-google-blue-hover text-white text-sm font-semibold rounded-full shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Transmitting Message Securely...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Send Secure Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>
      </main>

      {/* Cart & modal helpers */}
      <CartDrawer />
      <ProductDetailModal />

      {/* Footer */}
      <Footer />
    </div>
  );
}

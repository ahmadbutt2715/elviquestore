"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, ShieldCheck, CreditCard, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { ProductImageMockup } from "@/components/ProductCard";

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();

  // Form states
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  // Flow states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<"form" | "success">("form");
  const [orderNumber, setOrderNumber] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Calculate pricing
  const SHIPPING_COST = cartTotal >= 40000 ? 0 : 1500;
  const ORDER_TOTAL = cartTotal + SHIPPING_COST;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Simple fields validation
    if (
      !email ||
      !firstName ||
      !lastName ||
      !address ||
      !city ||
      !zip ||
      !cardNum ||
      !cardExpiry ||
      !cardCvv
    ) {
      setErrorMsg("Please fill in all checkout fields.");
      return;
    }

    // Trigger mock checkout process
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setCheckoutStep("success");
      setOrderNumber(`ELV-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 2800); // 2.8 seconds checkout authorization animation
  };

  const handleReturnHome = () => {
    clearCart();
  };

  if (checkoutStep === "success") {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 select-none animate-fade-in">
        <div className="bg-background rounded-3xl p-8 md:p-12 w-full max-w-xl text-center border border-gray-100 google-shadow-lg relative overflow-hidden">
          {/* Confetti background flare */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-google-blue via-blue-400 to-indigo-500" />
          
          <div className="w-16 h-16 rounded-full bg-google-blue-light flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-9 h-9 text-google-blue animate-bounce" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-google-blue-light text-google-blue mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Order Confirmed
          </span>

          <h1 className="font-display text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Thank you for your order!
          </h1>
          <p className="text-sm text-gray-500 mt-3 max-w-md mx-auto leading-relaxed">
            Your payment was successfully processed. A digital invoice and delivery details are on their way to <span className="font-semibold text-gray-800">{email}</span>.
          </p>

          {/* Receipt Info Card */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 my-8 text-left space-y-3.5">
            <div className="flex justify-between text-xs pb-3 border-b border-gray-200">
              <span className="font-semibold text-gray-500">Order Number</span>
              <span className="font-bold text-gray-900 font-mono">{orderNumber}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-gray-500">Delivery Status</span>
              <span className="font-bold text-google-blue">Estimated 2-3 Business Days</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-gray-500">Shipping Address</span>
              <span className="font-bold text-gray-800 text-right">
                {firstName} {lastName}<br />
                {address}, {city}, {zip}
              </span>
            </div>
            <div className="flex justify-between text-xs pt-3 border-t border-gray-200">
              <span className="font-bold text-gray-900">Total Charged</span>
              <span className="font-bold text-lg text-gray-950 font-display">Rs. {ORDER_TOTAL.toLocaleString()}</span>
            </div>
          </div>

          <Link
            href="/"
            onClick={handleReturnHome}
            className="inline-block px-8 py-3.5 bg-google-blue hover:bg-google-blue-hover text-white text-sm font-semibold rounded-full shadow-sm hover:shadow transition-all duration-200 cursor-pointer w-full"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Checkout Navbar */}
      <header className="bg-background border-b border-gray-200 py-5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-google-blue transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Store
          </Link>
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            Elvique<span className="text-google-blue">.</span>
          </span>
          <div className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold select-none">
            <ShieldCheck className="w-4 h-4 text-google-blue" /> Secure Checkout
          </div>
        </div>
      </header>

      {/* Checkout Content split layout */}
      <main className="max-w-7xl mx-auto w-full px-6 py-10 md:py-14 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Billing & Shipping Forms - Left 7 Cols */}
        <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-8 bg-background p-6 md:p-8 rounded-3xl border border-gray-200 google-shadow-sm">
          
          {errorMsg && (
            <div className="p-4 bg-red-50 text-red-700 text-xs font-semibold rounded-2xl border border-red-100">
              {errorMsg}
            </div>
          )}

          {/* Contact Details */}
          <div>
            <h2 className="font-display text-base font-bold text-gray-900 mb-4">Contact Information</h2>
            <div>
              <label htmlFor="email" className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-google-blue focus:border-google-blue transition-all"
              />
            </div>
          </div>

          {/* Shipping Address */}
          <div className="border-t border-gray-100 pt-6">
            <h2 className="font-display text-base font-bold text-gray-900 mb-4">Shipping Destination</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-google-blue focus:border-google-blue transition-all"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-google-blue focus:border-google-blue transition-all"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="address" className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">Street Address</label>
                <input
                  type="text"
                  id="address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="1600 Amphitheatre Pkwy"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-google-blue focus:border-google-blue transition-all"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">City</label>
                <input
                  type="text"
                  id="city"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Mountain View"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-google-blue focus:border-google-blue transition-all"
                />
              </div>
              <div>
                <label htmlFor="zip" className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">Zip Code / Postcode</label>
                <input
                  type="text"
                  id="zip"
                  required
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  placeholder="94043"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-google-blue focus:border-google-blue transition-all"
                />
              </div>
            </div>
          </div>

          {/* Secure Payment details */}
          <div className="border-t border-gray-100 pt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-base font-bold text-gray-900">Payment Information</h2>
              <span className="flex items-center gap-1 text-[10px] text-gray-400 font-semibold uppercase">
                <CreditCard className="w-3.5 h-3.5 text-google-blue" /> Secure SSL
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-3">
                <label htmlFor="cardNum" className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">Card Number</label>
                <input
                  type="text"
                  id="cardNum"
                  required
                  value={cardNum}
                  onChange={(e) => setCardNum(e.target.value)}
                  placeholder="4111 2222 3333 4444"
                  maxLength={19}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-google-blue focus:border-google-blue transition-all"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="cardExpiry" className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">Expiration Date</label>
                <input
                  type="text"
                  id="cardExpiry"
                  required
                  value={cardExpiry}
                  onChange={(e) => setCardExpiry(e.target.value)}
                  placeholder="MM / YY"
                  maxLength={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-google-blue focus:border-google-blue transition-all"
                />
              </div>
              <div>
                <label htmlFor="cardCvv" className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">CVV</label>
                <input
                  type="password"
                  id="cardCvv"
                  required
                  value={cardCvv}
                  onChange={(e) => setCardCvv(e.target.value)}
                  placeholder="123"
                  maxLength={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-google-blue focus:border-google-blue transition-all"
                />
              </div>
            </div>
          </div>

          {/* Checkout Submit CTA */}
          <button
            type="submit"
            disabled={isSubmitting || cart.length === 0}
            className="w-full py-4 bg-google-blue hover:bg-google-blue-hover text-white text-sm font-semibold rounded-full shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Authorizing Shopify Payment Gateway...
              </>
            ) : (
              <>Complete Secure Payment &mdash; Rs. {ORDER_TOTAL.toLocaleString()}</>
            )}
          </button>
        </form>

        {/* Cart Itemized Summary - Right 5 Cols */}
        <div className="lg:col-span-5 bg-background p-6 md:p-8 rounded-3xl border border-gray-200 google-shadow-sm divide-y divide-gray-100">
          
          <h2 className="font-display text-base font-bold text-gray-900 pb-4">Order Summary</h2>

          {/* Cart Items list */}
          <div className="py-4 space-y-4 max-h-[360px] overflow-y-auto pr-1">
            {cart.length > 0 ? (
              cart.map((item, index) => {
                const hasLocalImage =
                  item.product.images[0] && item.product.images[0].startsWith("/images/products/audio_max_1");
                return (
                  <div key={`${item.product.id}-${item.selectedVariant.id}-${index}`} className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gray-50 rounded-xl border border-gray-150 relative shrink-0 flex items-center justify-center">
                      {hasLocalImage ? (
                        <Image src={item.product.images[0]} alt={item.product.title} fill className="object-contain p-1.5" />
                      ) : (
                        <ProductImageMockup category={item.product.category} className="p-1 scale-[0.6]" />
                      )}
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-google-blue text-white rounded-full flex items-center justify-center text-[10px] font-bold border border-white">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xs font-bold text-gray-900 line-clamp-1 leading-snug">{item.product.title}</h3>
                      <p className="text-[10px] text-gray-400 mt-0.5">Option: {item.selectedVariant.title}</p>
                    </div>
                    <span className="text-xs font-bold text-gray-900 font-display">Rs. {(item.selectedVariant.price * item.quantity).toLocaleString()}</span>
                  </div>
                );
              })
            ) : (
              <p className="text-xs text-gray-500 text-center py-6">Your cart is empty.</p>
            )}
          </div>

          {/* Pricing calculations */}
          <div className="py-4 space-y-2.5 text-xs text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold text-gray-900">Rs. {cartTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping cost</span>
              <span className="font-bold text-gray-900">{SHIPPING_COST === 0 ? "FREE" : `Rs. ${SHIPPING_COST.toLocaleString()}`}</span>
            </div>
          </div>

          {/* Total */}
          <div className="pt-4 flex justify-between items-baseline">
            <span className="text-sm font-bold text-gray-900">Total amount</span>
            <span className="text-xl font-bold font-display text-gray-950">Rs. {ORDER_TOTAL.toLocaleString()}</span>
          </div>

        </div>

      </main>
    </div>
  );
}

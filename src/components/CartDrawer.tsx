"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck } from "lucide-react";
import { ProductImageMockup } from "./ProductCard";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
  } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close drawer on overlay click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
      setIsCartOpen(false);
    }
  };

  // Close drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
      }
    };
    if (isCartOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  // Free shipping variables
  const SHIPPING_THRESHOLD = 40000;
  const isFreeShipping = cartTotal >= SHIPPING_THRESHOLD;
  const shippingProgress = Math.min((cartTotal / SHIPPING_THRESHOLD) * 100, 100);
  const amountNeeded = SHIPPING_THRESHOLD - cartTotal;

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex justify-end animate-fade-in"
    >
      {/* Sliding Sheet Panel */}
      <div
        ref={drawerRef}
        className="w-full max-w-md bg-background h-full flex flex-col justify-between shadow-2xl animate-slide-up md:animate-none"
        style={{
          animation: "slideLeft 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        <style jsx global>{`
          @keyframes slideLeft {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
        `}</style>

        {/* Drawer Header */}
        <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-google-blue" />
            <h2 className="font-display text-lg font-bold text-gray-900">Your Cart</h2>
            <span className="bg-google-blue-light text-google-blue text-xs font-bold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer text-gray-500 dark:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Shipping Threshold Progress */}
        {cart.length > 0 && (
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
            <div className="flex justify-between items-center text-xs mb-2">
              <span className="font-semibold text-gray-700">
                {isFreeShipping
                  ? "🎉 You qualify for FREE shipping!"
                  : `Add Rs. ${amountNeeded.toLocaleString()} more for free delivery`}
              </span>
              <span className="text-[10px] text-gray-400">Limit: Rs. {SHIPPING_THRESHOLD.toLocaleString()}</span>
            </div>
            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-google-blue rounded-full transition-all duration-500"
                style={{ width: `${shippingProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-gray-100">
          {cart.length > 0 ? (
            cart.map((item, index) => {
              const hasLocalImage =
                item.product.images[0] &&
                (item.product.images[0].includes("audio_max_1") ||
                  item.product.images[0].includes("active_watch_1") ||
                  item.product.images[0].includes("smart_hub_1"));
              return (
                <div key={`${item.product.id}-${item.selectedVariant.id}-${index}`} className="flex py-5 gap-4">
                  {/* Item Image */}
                  <div className="w-20 h-20 bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden relative shrink-0 flex items-center justify-center">
                    {hasLocalImage ? (
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.title}
                        fill
                        className="object-contain p-2"
                      />
                    ) : (
                      <ProductImageMockup category={item.product.category} className="p-2 scale-75" />
                    )}
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between gap-2">
                        <h3 className="text-sm font-bold text-gray-900 leading-snug line-clamp-1">
                          {item.product.title}
                        </h3>
                        <span className="text-sm font-bold text-gray-950 font-display">
                          Rs. {(item.selectedVariant.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 dark:text-white mt-0.5">
                        Variant: {item.selectedVariant.title}
                      </p>
                    </div>
 
                    {/* Quantity controls & Delete */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-gray-200 rounded-full p-0.5 bg-gray-50 scale-90 origin-left">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedVariant.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-background text-gray-600 rounded-full transition-colors cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-gray-900 select-none">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedVariant.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-background text-gray-600 rounded-full transition-colors cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
 
                      <button
                        onClick={() => removeFromCart(item.product.id, item.selectedVariant.id)}
                        className="p-1.5 text-gray-400 dark:text-white hover:text-red-500 rounded-full transition-colors cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            /* Drawer Empty State */
            <div className="flex flex-col items-center justify-center text-center h-full py-20">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 mb-5">
                <ShoppingBag className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="font-display text-base font-bold text-gray-900">Your cart is empty</h3>
              <p className="text-xs text-gray-500 max-w-[220px] mt-2 leading-relaxed">
                Add premium audio, wearables, or ambient lights to your cart to get started.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-6 px-6 py-2.5 bg-google-blue hover:bg-google-blue-hover text-white text-xs font-semibold rounded-full shadow-sm transition-all duration-200 cursor-pointer"
              >
                Browse Catalog
              </button>
            </div>
          )}
        </div>

        {/* Drawer Footer summary / buttons */}
        {cart.length > 0 && (
          <div className="px-6 py-6 border-t border-gray-200 bg-gray-50">
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-xs text-gray-500 pb-2 border-b border-gray-200">
                <span>Shipping</span>
                <span>{isFreeShipping ? "FREE" : "Rs. 1,500"}</span>
              </div>
              <div className="flex justify-between items-baseline pt-2">
                <span className="text-sm font-bold text-gray-900">Subtotal</span>
                <span className="text-xl font-bold font-display text-gray-950">
                  Rs. {(cartTotal + (isFreeShipping ? 0 : 1500)).toLocaleString()}
                </span>
              </div>
            </div>

            <Link
              href="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="w-full py-3.5 bg-google-blue hover:bg-google-blue-hover text-white text-sm font-semibold rounded-full shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer transition-all mb-4 text-center"
            >
              Secure Checkout
            </Link>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400">
              <ShieldCheck className="w-3.5 h-3.5 text-google-blue" />
              <span>Orders processed securely through Shopify Checkout</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

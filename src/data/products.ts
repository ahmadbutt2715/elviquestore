export interface ProductVariant {
  id: string;
  title: string;
  price: number;
  sku: string;
  color?: string;
  size?: string;
  spec?: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  category: string;
  tags: string[];
  variants: ProductVariant[];
  stock: number;
  rating: number;
  reviewsCount: number;
  specs: ProductSpec[];
}

export const PRODUCTS: Product[] = [
  {
    id: "elvique-audio-max",
    title: "Elvique Audio Max",
    handle: "elvique-audio-max",
    description: "Immerse yourself in pure studio-grade acoustics. Featuring intelligent active noise cancellation, ultra-comfort responsive memory foam earcups, and up to 40 hours of spatial audio playback. Engineered for deep bass, crisp mids, and crystal-clear highs.",
    price: 12999,
    compareAtPrice: 15999,
    images: ["/images/products/audio_max_1.webp"],
    category: "Audio",
    tags: ["audio", "wireless", "premium", "noise-canceling"],
    variants: [
      { id: "v-audio-max-chalk", title: "Chalk White", price: 12999, sku: "ELV-AUD-MAX-WHT", color: "#F5F5F7" },
      { id: "v-audio-max-charcoal", title: "Charcoal Black", price: 12999, sku: "ELV-AUD-MAX-BLK", color: "#1F1F1F" },
      { id: "v-audio-max-blue", title: "Bay Blue", price: 12999, sku: "ELV-AUD-MAX-BLU", color: "#1A73E8" }
    ],
    stock: 24,
    rating: 4.9,
    reviewsCount: 128,
    specs: [
      { label: "Acoustic Driver", value: "40mm custom dynamic drivers" },
      { label: "Battery Life", value: "Up to 40 hours (ANC on)" },
      { label: "Connectivity", value: "Bluetooth® 5.3, USB-C" },
      { label: "Weight", value: "285 grams" },
      { label: "Charging", value: "Fast charge: 10 mins = 5 hours play" }
    ]
  },
  {
    id: "elvique-active-watch",
    title: "Elvique Active Watch",
    handle: "elvique-active-watch",
    description: "The ultimate lifestyle companion. Track your vitals with clinical accuracy, monitor deep sleep cycles, and guide workouts with built-in dual-frequency GPS. Built from recycled aerospace-grade aluminum and features a bright, scratch-resistant AMOLED always-on display.",
    price: 8999,
    compareAtPrice: 11999,
    images: ["/images/products/active_watch_1.png"],
    category: "Wearables",
    tags: ["watch", "fitness", "smart", "wearable"],
    variants: [
      { id: "v-watch-charcoal", title: "Charcoal Black", price: 8999, sku: "ELV-WCH-ACT-BLK", color: "#1F1F1F" },
      { id: "v-watch-blue", title: "Bay Blue", price: 8999, sku: "ELV-WCH-ACT-BLU", color: "#1A73E8" },
      { id: "v-watch-chalk", title: "Chalk White", price: 8999, sku: "ELV-WCH-ACT-WHT", color: "#F5F5F7" }
    ],
    stock: 45,
    rating: 4.8,
    reviewsCount: 94,
    specs: [
      { label: "Display", value: "1.43\" AMOLED, Always-on, 466x466 px" },
      { label: "Materials", value: "100% Recycled Aluminum, Gorilla Glass" },
      { label: "Battery Life", value: "Up to 7 days in smart mode" },
      { label: "Water Resistance", value: "5 ATM (50 meters swim-proof)" },
      { label: "Sensors", value: "ECG, SpO2, Heart Rate, Skin Temp" }
    ]
  },
  {
    id: "elvique-hub-smart",
    title: "Elvique Smart Hub",
    handle: "elvique-hub-smart",
    description: "The intelligent nucleus of your smart home. Featuring a stunning 10-inch glass-morphic display, premium full-range stereo speakers, and instant touchless hand-gesture controls. Connect and automate lights, locks, cameras, and thermostats effortlessly.",
    price: 15999,
    compareAtPrice: 19999,
    images: ["/images/products/smart_hub_1.png"],
    category: "Smart Home",
    tags: ["hub", "smart-home", "assistant", "display"],
    variants: [
      { id: "v-hub-chalk", title: "Chalk White", price: 15999, sku: "ELV-HUB-SMT-WHT", color: "#F5F5F7" },
      { id: "v-hub-charcoal", title: "Charcoal Black", price: 15999, sku: "ELV-HUB-SMT-BLK", color: "#1F1F1F" }
    ],
    stock: 19,
    rating: 4.7,
    reviewsCount: 81,
    specs: [
      { label: "Display Size", value: "10.1-inch LCD touchscreen" },
      { label: "Speakers", value: "2x 15W full-range + passive radiator" },
      { label: "Camera", value: "6.5 MP with auto-framing and shutter" },
      { label: "Connectivity", value: "Wi-Fi 6E, Thread, Zigbee, Bluetooth" },
      { label: "Power", value: "30W external power adapter" }
    ]
  },
  {
    id: "elvique-earbuds-pro",
    title: "Elvique Earbuds Pro",
    handle: "elvique-earbuds-pro",
    description: "Zero bulk, limitless sound. Small, sweat-resistant earbuds featuring adaptive audio, custom 11mm transducers, and multi-point Bluetooth pairing. Includes an elegant wireless charging case with quick-charge capabilities.",
    price: 5999,
    compareAtPrice: 7999,
    images: ["/images/products/earbuds_pro_1.png"],
    category: "Audio",
    tags: ["audio", "wireless", "earbuds", "anc"],
    variants: [
      { id: "v-buds-blue", title: "Bay Blue", price: 5999, sku: "ELV-BDS-PRO-BLU", color: "#1A73E8" },
      { id: "v-buds-chalk", title: "Chalk White", price: 5999, sku: "ELV-BDS-PRO-WHT", color: "#F5F5F7" },
      { id: "v-buds-charcoal", title: "Charcoal Black", price: 5999, sku: "ELV-BDS-PRO-BLK", color: "#1F1F1F" }
    ],
    stock: 62,
    rating: 4.6,
    reviewsCount: 142,
    specs: [
      { label: "Driver Size", value: "11mm custom-designed dynamic driver" },
      { label: "Battery Life", value: "Up to 11 hours (31 hours with case)" },
      { label: "Sweat Protection", value: "IPX4 earbuds / IPX2 case" },
      { label: "Fast Charging", value: "5 min charge = 1 hour playback" },
      { label: "Voice Support", value: "Dual beamforming mics with wind reduction" }
    ]
  },
  {
    id: "elvique-ambient-light",
    title: "Elvique Ambient Glow",
    handle: "elvique-ambient-light",
    description: "Reimagine the lighting of your personal spaces. The Ambient Glow emits smooth, customized chromatic light gradients that sync to your music, smart alarms, or work schedules. Control color blends directly through your phone or simple wave gestures.",
    price: 4499,
    compareAtPrice: 5999,
    images: ["/images/products/ambient_glow_1.png"],
    category: "Smart Home",
    tags: ["lighting", "smart-home", "lifestyle"],
    variants: [
      { id: "v-glow-standard", title: "Default Glow", price: 4499, sku: "ELV-GLW-STD", color: "#1A73E8" }
    ],
    stock: 33,
    rating: 4.8,
    reviewsCount: 57,
    specs: [
      { label: "Light Source", value: "High-efficiency RGBIC multi-LED panel" },
      { label: "Brightness", value: "850 lumens maximum output" },
      { label: "Color Spectrum", value: "16 million colors + warm-to-cool whites" },
      { label: "Power Output", value: "18W USB-C input" },
      { label: "Dimensions", value: "12cm diameter, 22cm height" }
    ]
  },
  {
    id: "elvique-power-grid",
    title: "Elvique Power Grid 3-in-1",
    handle: "elvique-power-grid",
    description: "Consolidate your charging desk footprint. Elegantly charges your smartphone, smartwatch, and wireless earbuds concurrently. Incorporates intelligent thermostatic cooling, foreign-object detection, and up to 15W rapid wireless output.",
    price: 3499,
    compareAtPrice: 4999,
    images: ["/images/products/power_grid_1.png"],
    category: "Accessories",
    tags: ["charger", "wireless", "lifestyle"],
    variants: [
      { id: "v-grid-charcoal", title: "Charcoal Black", price: 3499, sku: "ELV-PWR-GRD-BLK", color: "#1F1F1F" },
      { id: "v-grid-chalk", title: "Chalk White", price: 3499, sku: "ELV-PWR-GRD-WHT", color: "#F5F5F7" }
    ],
    stock: 80,
    rating: 4.5,
    reviewsCount: 39,
    specs: [
      { label: "Wireless Output", value: "Phone (15W) + Watch (5W) + Buds (5W)" },
      { label: "Input", value: "30W Power Delivery (PD) USB-C" },
      { label: "Protection", value: "Overcurrent, Overvoltage, Over-temperature" },
      { label: "Materials", value: "Recycled aluminum and soft-touch rubber" }
    ]
  }
];

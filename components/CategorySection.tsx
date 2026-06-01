"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BIKE_CATEGORIES = [
  { id: "maxi-matic", name: "Maxi & Matic", icon: "🛵" },
  { id: "classy", name: "Classy Bike", icon: "✨" },
  { id: "sport", name: "Sport Bike", icon: "🏍️" },
  { id: "moped", name: "Moped (Bebek)", icon: "🚲" },
];

const PRODUCTS_DATA: Record<string, Array<{ id: string; name: string; info: string; price: string; image: string }>> = {
  "maxi-matic": [
    { id: "nmax-155", name: "NMAX 155 TechMAX", info: "Harga Rekomendasi OTR Jakarta", price: "Rp 41.250.000", image: "/assets/nmaxHitam.jpg" },
    { id: "lexi-lx", name: "Lexi LX 155 Connected", info: "Harga Rekomendasi OTR Jakarta", price: "Rp 25.650.000", image: "/assets/lexiSilver.jpg" },
    { id: "aerox-155", name: "Aerox 155 Connected", info: "Harga Rekomendasi OTR Jakarta", price: "Rp 27.775.000", image: "/assets/aerox3.jpg" },
    { id: "fazzio-hybrid", name: "Fazzio Hybrid Connected", info: "Harga Rekomendasi OTR Jakarta", price: "Rp 23.250.000", image: "/assets/fazioHijau.jpg" },
  ],
  "classy": [
    { id: "fazzio-hybrid", name: "Fazzio Hybrid Connected", info: "Harga Rekomendasi OTR Jakarta", price: "Rp 23.250.000", image: "/assets/fazioHijau.jpg" },
  ],
  "sport": [
    { id: "cbr-150", name: "CBR 150R Racing", info: "Harga Rekomendasi OTR Jakarta", price: "Rp 38.500.000", image: "/assets/cbrMerah.jpg" },
    { id: "r1m-1000", name: "YZF-R1M Carbon", info: "Harga Rekomendasi OTR Jakarta", price: "Rp 812.000.000", image: "/assets/yamaha3.jpg" },
  ],
  "moped": [
    { id: "vega-force", name: "Vega Force DB", info: "Harga Rekomendasi OTR Jakarta", price: "Rp 17.915.000", image: "/assets/bebekHitam.jpg" },
  ]
};

interface CategorySectionProps {
  selectedMotorId: string;
  onSelectMotor: (id: string) => void;
}

export default function CategorySection({ selectedMotorId, onSelectMotor }: CategorySectionProps) {
  const [activeCategory, setActiveCategory] = useState("maxi-matic");
  const sliderRef = useRef<HTMLDivElement>(null);

  const currentProducts = PRODUCTS_DATA[activeCategory] || [];

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = 0;
    }
  }, [activeCategory]);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const distance = 270;
      const currentScroll = sliderRef.current.scrollLeft;
      const scrollTo = direction === "left" ? currentScroll - distance : currentScroll + distance;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    // DIUBAH: Mengurangi padding atas-bawah section dari 60px menjadi 30px agar hemat ruang layar
    <section id="produk-pilihan" style={{ backgroundColor: "#ebede8", padding: "30px 20px", width: "100%", boxSizing: "border-box" }}>
      {/* DIUBAH: Mengurangi padding dalam kontainer putih dari 35px menjadi 24px */}
      <div style={{ maxWidth: "1140px", margin: "0 auto", backgroundColor: "#ffffff", borderRadius: "32px", padding: "24px", boxShadow: "0 20px 40px rgba(28,46,36,0.02)", fontFamily: "sans-serif", boxSizing: "border-box" }}>
        
        {/* HEADER */}
        {/* DIUBAH: Mengurangi margin bawah dari 40px menjadi 20px */}
        <div style={{ marginBottom: "20px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <img 
            src="/assets/logoYamaha.jpg" 
            alt="Yamaha Logo" 
            style={{ 
              width: "110px", 
              height: "auto", 
              objectFit: "contain",
              mixBlendMode: "multiply"
            }} 
          />
          <h3 style={{ fontSize: "24px", fontWeight: "800", color: "#1c2e24", margin: 0, letterSpacing: "-0.02em" }}>
            Produk yang Diminati<span style={{ color: "#ef4444", marginLeft: "4px" }}>*</span>
          </h3>
          <p style={{ fontSize: "12px", color: "#546e5a", margin: 0 }}>Pilih tipe kendaraan untuk melakukan konfigurasi warna</p>
        </div>

        {/* TAB MENU KATEGORI */}
        {/* DIUBAH: Mengurangi margin bawah dari 30px menjadi 20px */}
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", borderBottom: "2px solid #f4f4f5", paddingBottom: "15px", marginBottom: "20px" }}>
          {BIKE_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  const firstProd = PRODUCTS_DATA[cat.id]?.[0]?.id;
                  if (firstProd) onSelectMotor(firstProd);
                }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", background: "none", border: "none", cursor: "pointer", outline: "none", minWidth: "100px" }}
              >
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", border: isActive ? "2px solid #1c2e24" : "1px solid #e4e4e7", backgroundColor: isActive ? "#ffffff" : "#f4f4f5" }}>
                  {cat.icon}
                </div>
                <span style={{ fontSize: "12px", fontWeight: "700", color: isActive ? "#1c2e24" : "#a1a1aa" }}>
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* LIST KARTU KATALOG */}
        <div style={{ position: "relative", width: "100%", display: "flex", alignItems: "center" }}>
          <button onClick={() => scroll("left")} style={{ position: "absolute", left: "-15px", top: "50%", transform: "translateY(-50%)", width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#ffffff", border: "1px solid #e4e4e7", zIndex: 40, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>❮</button>
          <button onClick={() => scroll("right")} style={{ position: "absolute", right: "-15px", top: "50%", transform: "translateY(-50%)", width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#ffffff", border: "1px solid #e4e4e7", zIndex: 40, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>❯</button>

          <div ref={sliderRef} style={{ display: "flex", gap: "16px", overflowX: "auto", width: "100%", padding: "5px 2px", scrollBehavior: "smooth", boxSizing: "border-box" }}>
            <AnimatePresence mode="wait">
              {currentProducts.map((bike) => {
                const isSelected = selectedMotorId === bike.id;
                return (
                  <motion.div
                    key={bike.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ minWidth: "215px", maxWidth: "215px", backgroundColor: "#ffffff", border: isSelected ? "2px solid #1c2e24" : "1px solid #e4e4e7", borderRadius: "20px", padding: "14px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "8px" }}
                  >
                    {/* DIUBAH: Mengurangi tinggi maksimal pembungkus gambar dari 140px menjadi 110px agar kartu lebih ramping ke atas */}
                    <div style={{ width: "100%", height: "110px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={bike.image} alt={bike.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "13px", fontWeight: "800", margin: "0 0 2px 0", color: "#1c2e24" }}>{bike.name}</h4>
                      <p style={{ fontSize: "10px", color: "#a1a1aa", margin: "0 0 4px 0" }}>{bike.info}</p>
                      <span style={{ fontSize: "13px", fontWeight: "700", color: "#ef4444" }}>{bike.price}</span>
                    </div>
                    <button 
                      onClick={() => onSelectMotor(bike.id)}
                      style={{ width: "100%", padding: "8px 0", borderRadius: "10px", border: "none", backgroundColor: isSelected ? "#1c2e24" : "#e4e4e7", color: isSelected ? "#ffffff" : "#1c2e24", fontWeight: "bold", fontSize: "11px", cursor: "pointer" }}
                    >
                      {isSelected ? "✓ Dipilih" : "Pilih"}
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}

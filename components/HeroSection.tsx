"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HERO_SLIDES = [
  {
    tagline: "KENYAMANAN URBAN DAN TEKNOLOGI MAKSIMAL",
    title1: "NMAX 155",
    title2: "TechMAX.",
    desc: "Dominasi jalanan urban dengan kenyamanan posisi berkendara kelas satu dan konektivitas smartphone tercanggih.",
    image: "/assets/nmaxHitam.jpg"
  },
  {
    tagline: "KENDARAAN BEST SELLER HARIAN",
    title1: "AEROX 155",
    title2: "Connected.",
    desc: "Super Sport Scooter dengan rasio tenaga dan berat terbaik di kelasnya untuk gaya berkendara yang agresif.",
    image: "/assets/aerox3.jpg"
  },
  {
    tagline: "BERKENDARA MULTI FUNGSI DENGAN DEK RATA",
    title1: "LEXI LX",
    title2: "155cc.",
    desc: "Kombinasi sempurna antara kelincahan berkendara flat-deck dengan mesin Blue Core VVA yang bertenaga.",
    image: "/assets/lexiSilver.jpg"
  },
  {
    tagline: "KETANGGUHAN DAN EFISIENSI MAKSIMAL",
    title1: "VEGA FORCE",
    title2: "Moped.",
    desc: "Motor bebek tangguh andalan dengan mesin efisien, fungsional, dan andal untuk segala kebutuhan harian Anda.",
    image: "/assets/bebekHitam.jpg"
  }
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const slide = HERO_SLIDES[current];

  const handleExploreClick = () => {
    // Diarahkan ke id="produk-pilihan" milik CategorySection
    const element = document.getElementById("produk-pilihan");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section style={{ 
      minHeight: "100vh", 
      width: "100%", 
      display: "flex", 
      flexDirection: "row", 
      alignItems: "center", 
      justifyContent: "space-between", 
      padding: "120px 80px 40px 80px", 
      backgroundImage: "url('/assets/Sunset.jpg')", 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundRepeat: "no-repeat", 
      position: "relative", 
      overflow: "hidden", 
      boxSizing: "border-box", 
      fontFamily: "sans-serif"
    }}>
      
      {/* LAPISAN FILTER GRADASI */}
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(235, 237, 232, 0.45)", backgroundImage: "linear-gradient(to right, rgba(235, 237, 232, 0.95) 40%, rgba(235, 237, 232, 0.2) 100%)", zIndex: 1 }} />

      {/* SISI KIRI: DETAIL TEKS UTAMA */}
      <div style={{ width: "45%", display: "flex", flexDirection: "column", gap: "24px", position: "relative", zIndex: 10, textAlign: "left", boxSizing: "border-box" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <p style={{ fontSize: "11px", fontWeight: "bold", color: "#b91c1c", margin: 0, letterSpacing: "4px" }}>{slide.tagline}</p>
            <h1 style={{ fontSize: "64px", fontWeight: "300", tracking: "-0.02em", margin: 0, textTransform: "uppercase", color: "#1c2e24", fontFamily: "serif", lineHeight: "1.1" }}>
              {slide.title1} <br />
              <span style={{ fontWeight: "800", letterSpacing: "-0.04em", fontFamily: "sans-serif" }}>{slide.title2}</span>
            </h1>
            <p style={{ fontSize: "15px", color: "#1c2e24", fontWeight: "600", margin: 0, lineHeight: "1.6", maxWidth: "400px", textShadow: "0 2px 4px rgba(255,255,255,0.4)" }}>{slide.desc}</p>
          </motion.div>
        </AnimatePresence>

        <div>
          <button onClick={handleExploreClick} style={{ backgroundColor: "#1c2e24", color: "#ffffff", fontSize: "11px", fontWeight: "bold", letterSpacing: "2px", textTransform: "uppercase", padding: "16px 36px", border: "none", cursor: "pointer", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", transition: "all 0.3s" }}>
            Mulai Simulasi
          </button>
        </div>
      </div>

      {/* SISI KANAN: BINGKAI GAMBAR & PANAH SLIDER MELAYANG */}
      <div style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", zIndex: 10, boxSizing: "border-box" }}>
        
        {/* TOMBOL PANAH KIRI MELAYANG */}
        <button onClick={prevSlide} style={{ position: "absolute", left: "-22px", top: "50%", transform: "translateY(-50%)", width: "44px", height: "44px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.92)", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 8px 24px rgba(0,0,0,0.12)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 40, fontWeight: "bold", fontSize: "18px", outline: "none", transition: "all 0.3s" }}>❮</button>
        
        {/* TOMBOL PANAH KANAN MELAYANG */}
        <button onClick={nextSlide} style={{ position: "absolute", right: "-22px", top: "50%", transform: "translateY(-50%)", width: "44px", height: "44px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.92)", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 8px 24px rgba(0,0,0,0.12)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 40, fontWeight: "bold", fontSize: "18px", outline: "none", transition: "all 0.3s" }}>❯</button>

        {/* BINGKAI FOTO FULL KOTAK MELENGKUNG PRESTISIUS */}
        <div style={{ position: "relative", width: "100%", maxWidth: "540px", aspectRatio: "4/3", borderRadius: "28px", overflow: "hidden", boxShadow: "0 30px 65px rgba(28,46,36,0.25)", border: "1px solid rgba(255,255,255,0.4)" }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={slide.image}
              alt={slide.title1}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }} 
            />
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
}

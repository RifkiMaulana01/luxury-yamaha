"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MOTOR_DATABASE: Record<string, {
  fullName: string;
  price: string;
  variants: Array<{ id: string; colorName: string; hex: string; image: string; desc: string }>;
}> = {
  "nmax-155": {
    fullName: "NMAX 155 TechMAX",
    price: "Rp 41.250.000",
    variants: [
      { id: "nmax-black", colorName: "Premium Black (Hitam)", hex: "#22252a", image: "/assets/nmaxHitam.jpg", desc: "Sentuhan kemewahan warna hitam matte eksklusif yang gagah khas TechMAX." },
      { id: "nmax-red", colorName: "Matte Red (Merah)", hex: "#b91c1c", image: "/assets/nmaxMerah.jpg", desc: "Tampil berani dan elegan dengan balutan kelir merah doff premium." },
      { id: "nmax-white", colorName: "Prestige White (Putih)", hex: "#f5f6fa", image: "/assets/nmaxPutih.jpg", desc: "Kesan bersih, futuristik, dan mewah untuk menunjang gaya hidup urban Anda." }
    ]
  },
  "lexi-lx": {
    fullName: "Lexi LX 155 Connected",
    price: "Rp 25.650.000",
    variants: [
      { id: "lexi-silver", colorName: "Elixir Dark Silver (Silver)", hex: "#8395a7", image: "/assets/lexiSilver.jpg", desc: "Warna perak modern urban dengan dek rata yang sangat nyaman untuk mobilitas harian." },
      { id: "lexi-blue", colorName: "Matte Blue (Biru)", hex: "#0f3057", image: "/assets/lexiBiru.jpg", desc: "Tampil berkelas dengan nuansa biru tua doff yang dewasa." },
      { id: "lexi-red", colorName: "Matte Red (Merah)", hex: "#b91c1c", image: "/assets/lexiMerah.jpg", desc: "Gaya mencolok di jalanan kota dengan balutan kelir merah merona." }
    ]
  },
  "aerox-155": {
    fullName: "Aerox 155 Connected",
    price: "Rp 27.775.000",
    variants: [
      { id: "aerox-red", colorName: "Cyber City Red (Merah)", hex: "#d63031", image: "/assets/aerox.jpg", desc: "Kombinasi warna merah sirkuit yang sangat agresif, berani, dan energik." },
      { id: "aerox-blue", colorName: "Racing Blue Edition (Biru)", hex: "#0984e3", image: "/assets/aerox3.jpg", desc: "Identitas warna kebanggaan balap legendaris tim pabrikan Yamaha Grand Prix." },
      { id: "aerox-black", colorName: "Maxi Signature Black (Hitam)", hex: "#2d3436", image: "/assets/aerox2.jpg", desc: "Tampilan kokoh misterius warna hitam legam matte dengan emblem emas timbul." }
    ]
  },
  "fazzio-hybrid": {
    fullName: "Fazzio Hybrid Connected",
    price: "Rp 23.250.000",
    variants: [
      { id: "faz-green", colorName: "Neo Mint (Hijau)", hex: "#55efc4", image: "/assets/fazioHijau.jpg", desc: "Warna hijau pastel yang segar, estetik, dan sangat trendi untuk anak muda." },
      { id: "faz-blue", colorName: "Neo Cyan (Biru)", hex: "#74b9ff", image: "/assets/fazioBiru.jpg", desc: "Nuansa biru muda cerah yang modis mengekspresikan kebebasan berkendara." },
      { id: "faz-white", colorName: "Neo White (Putih)", hex: "#f5f6fa", image: "/assets/fazioPutih.jpg", desc: "Desain retro classy berteknologi cerdas hybrid dengan balutan putih bersih yang minimalis." }
    ]
  },
  "cbr-150": {
    fullName: "CBR 150R Racing Sport",
    price: "Rp 38.500.000",
    variants: [
      { id: "cbr-red", colorName: "Racing Red (Merah)", hex: "#c0392b", image: "/assets/cbrMerah.jpg", desc: "Desain total fairing agresif dengan kombinasi stripping merah balap sirkuit murni." },
      { id: "cbr-black", colorName: "Dominator Matte Black (Hitam)", hex: "#2f3640", image: "/assets/cbrHitam.jpg", desc: "Tampilan super sport yang intimidatif, gelap, dan gahar dengan bodi hitam legam." },
      { id: "cbr-blue", colorName: "Nitrous Blue (Biru)", hex: "#2980b9", image: "/assets/cbrBiru.jpg", desc: "Tampilan tajam motor sport full fairing dengan balutan warna biru metalik elektrik." }
    ]
  },
  "r1m-1000": {
    fullName: "YZF-R1M Carbon Superbike",
    price: "Rp 812.000.000",
    variants: [
      { id: "r1m-carbon", colorName: "Icon Performance (Carbon)", hex: "#1c2e24", image: "/assets/yamaha3.jpg", desc: "Mahakarya lintasan balap kelas tertinggi menggunakan bodi anyaman serat karbon murni." }
    ]
  },
  "vega-force": {
    fullName: "Vega Force DB",
    price: "Rp 17.915.000",
    variants: [
      { id: "vega-black", colorName: "Matte Black (Hitam)", hex: "#2d3436", image: "/assets/bebekHitam.jpg", desc: "Tampilan fungsional, minimalis, dan andal untuk kebutuhan transportasi harian." },
      { id: "vega-red", colorName: "Fiery Red (Merah)", hex: "#b91c1c", image: "/assets/bebekMerah.jpg", desc: "Motor bebek tangguh berdesain modern dengan stripping merah yang dinamis." },
      { id: "vega-blue", colorName: "Deep Blue (Biru)", hex: "#0f3057", image: "/assets/bebekBiru.jpg", desc: "Nuansa biru kokoh yang memberikan kesan kuat dan bandel di segala medan." }
    ]
  }
};

export default function SimulasiSection({ currentMotorId }: { currentMotorId: string }) {
  const activeMotorData = MOTOR_DATABASE[currentMotorId] || MOTOR_DATABASE["nmax-155"];
  const [selectedVariant, setSelectedVariant] = useState(activeMotorData.variants);

  useEffect(() => {
    if (activeMotorData && activeMotorData.variants.length > 0) {
      setSelectedVariant(activeMotorData.variants);
    }
  }, [currentMotorId, activeMotorData]);

  if (!selectedVariant) return null;

  return (
    <section id="visual-configurator-section" style={{ padding: "80px 40px", backgroundColor: "#f8f9fa", color: "#1c2e24", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        <div style={{ marginBottom: "40px", textAlign: "center" }}>
          <p style={{ fontSize: "11px", fontWeight: "bold", color: "#b91c1c", letterSpacing: "3px", margin: "0 0 8px 0" }}>KONFIGURATOR VISUAL</p>
          <h2 style={{ fontSize: "32px", fontWeight: "800", margin: 0 }}>Pilih Varian Warna</h2>
        </div>

        <div style={{ display: "flex", gap: "40px", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
          
          <div style={{ flex: "0 0 280px", display: "flex", justifyContent: "center" }}>
            <div style={{ width: "280px", backgroundColor: "#ffffff", borderRadius: "16px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", border: "1px solid #e2e8f0", padding: "16px", boxSizing: "border-box" }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedVariant.id}
                  src={selectedVariant.image}
                  alt={selectedVariant.colorName}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: "100%", height: "auto", objectFit: "contain", borderRadius: "12px" }}
                />
              </AnimatePresence>
            </div>
          </div>

          <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <span style={{ fontSize: "13px", fontWeight: "bold", color: "#718096", textTransform: "uppercase" }}>{activeMotorData.fullName}</span>
              <h3 style={{ fontSize: "28px", fontWeight: "800", margin: "5px 0 5px 0" }}>{selectedVariant.colorName}</h3>
              <span style={{ fontSize: "22px", fontWeight: "700", color: "#b91c1c" }}>{activeMotorData.price}</span>
            </div>

            <p style={{ fontSize: "14px", color: "#4a5568", lineHeight: "1.6", margin: 0 }}>{selectedVariant.desc}</p>

            <div>
              <label style={{ display: "block", fontSize: "12px", fontWeight: "bold", marginBottom: "12px", color: "#718096" }}>PILIH WARNA BODI:</label>
              <div style={{ display: "flex", gap: "16px" }}>
                {activeMotorData.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: variant.hex,
                      border: selectedVariant.id === variant.id ? "3px solid #1c2e24" : "2px solid #ffffff",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                      cursor: "pointer",
                      transform: selectedVariant.id === variant.id ? "scale(1.15)" : "scale(1)",
                      transition: "all 0.2s ease",
                      outline: "none"
                    }}
                    title={variant.colorName}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

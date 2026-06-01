"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  // Fungsi klik untuk meluncur mulus ke target ID spesifik di bawah
  const handleScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 80px",
        backdropFilter: "blur(16px)",
        backgroundColor: "rgba(255, 255, 255, 0.85)", // Diubah ke warna putih transparan agar senada dengan footer
        borderBottom: "1px solid rgba(28, 46, 36, 0.05)",
        boxSizing: "border-box",
        fontFamily: "sans-serif"
      }}
    >
      {/* LOGO */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <span style={{ fontSize: "18px", fontWeight: "400", letterSpacing: "5px", color: "#1c2e24", fontFamily: "serif", lineHeight: "1" }}>
          YAMAHA<span style={{ color: "#ef4444", fontWeight: "900", marginLeft: "2px" }}>.</span>
        </span>
        <div style={{ width: "1px", height: "14px", backgroundColor: "rgba(28, 46, 36, 0.15)" }}></div>
        <span style={{ fontSize: "10px", letterSpacing: "3px", color: "#546e5a", fontWeight: "700", textTransform: "uppercase", lineHeight: "1" }}>
          Eksklusif
        </span>
      </div>

      {/* MENU NAVIGASI (SINKRON DENGAN ID SECTION BARU) */}
      <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
        <a href="#produk-pilihan" onClick={(e) => handleScroll(e, "produk-pilihan")} style={{ fontSize: "11px", letterSpacing: "3px", textDecoration: "none", color: "#1c2e24", fontWeight: "bold", cursor: "pointer" }}>SIMULASI</a>
        <a href="#visual-configurator-section" onClick={(e) => handleScroll(e, "visual-configurator-section")} style={{ fontSize: "11px", letterSpacing: "3px", textDecoration: "none", color: "#546e5a", cursor: "pointer" }}>KOLEKSI</a>
        <a href="#visual-configurator-section" onClick={(e) => handleScroll(e, "visual-configurator-section")} style={{ fontSize: "11px", letterSpacing: "3px", textDecoration: "none", color: "#546e5a", cursor: "pointer" }}>KATALOG</a>
      </div>

      {/* TOMBOL KANAN */}
      <div>
        <button 
          onClick={(e) => handleScroll(e, "produk-pilihan")}
          style={{ 
            fontSize: "10px", 
            fontWeight: "bold", 
            letterSpacing: "2px", 
            border: "1px solid #1c2e24", 
            padding: "10px 22px", 
            backgroundColor: "transparent", 
            color: "#1c2e24", 
            cursor: "pointer", 
            transition: "all 0.3s",
            outline: "none"
          }}
        >
          PILIH MOTOR
        </button>
      </div>
    </motion.nav>
  );
}

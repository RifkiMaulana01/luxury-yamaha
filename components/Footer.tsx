"use client";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer style={{
      backgroundColor: "#ffffff", // Sewarna dengan Navbar dan TechSection atasnya
      padding: "60px 80px 30px 80px",
      fontFamily: "sans-serif",
      boxSizing: "border-box",
      width: "100%",
      position: "relative",
      zIndex: 10
    }}>
      <div style={{
        maxWidth: "1140px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "40px"
      }}>
        
        {/* BARIS ATAS: BRAND & STRUKTUR MENU PANDUAN */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "30px"
        }}>
          {/* SISI KIRI: IDENTITAS BRAND */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", textAlign: "left" }}>
            <span style={{ fontSize: "20px", fontWeight: "400", letterSpacing: "5px", color: "#1c2e24", fontFamily: "serif" }}>
              YAMAHA<span style={{ color: "#ef4444", fontWeight: "900" }}>.</span>
            </span>
            <p style={{ fontSize: "12px", color: "#546e5a", margin: 0, maxWidth: "280px", lineHeight: "1.6" }}>
              Menghadirkan mahakarya lini kendaraan roda dua premium dengan standar kenyamanan dan teknologi tertinggi.
            </p>
          </div>

          {/* SISI KANAN: TAUTAN NAVIGASI PORTAL */}
          <div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", textAlign: "left" }}>
              <span style={{ fontSize: "11px", fontWeight: "bold", letterSpacing: "2px", color: "#1c2e24", textTransform: "uppercase" }}>Tautan</span>
              <a href="#" onClick={scrollToTop} style={{ fontSize: "12px", color: "#546e5a", textDecoration: "none" }}>Halaman Utama</a>
              <a href="#produk-pilihan" onClick={(e) => handleLinkClick(e, "produk-pilihan")} style={{ fontSize: "12px", color: "#546e5a", textDecoration: "none" }}>Koleksi Motor</a>
              <a href="#visual-configurator-section" onClick={(e) => handleLinkClick(e, "visual-configurator-section")} style={{ fontSize: "12px", color: "#546e5a", textDecoration: "none" }}>Varian Warna</a>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", textAlign: "left" }}>
              <span style={{ fontSize: "11px", fontWeight: "bold", letterSpacing: "2px", color: "#1c2e24", textTransform: "uppercase" }}>Media Sosial</span>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ fontSize: "12px", color: "#546e5a", textDecoration: "none" }}>Instagram</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{ fontSize: "12px", color: "#546e5a", textDecoration: "none" }}>YouTube</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ fontSize: "12px", color: "#546e5a", textDecoration: "none" }}>Facebook</a>
            </div>
          </div>
        </div>

        {/* BARIS BAWAH: HAK CIPTA & KEMBALI KE ATAS */}
        <div style={{
          borderTop: "1px solid rgba(0,0,0,0.05)",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <span style={{ fontSize: "11px", color: "#a1a1aa" }}>
            &copy; {new Date().getFullYear()} Yamaha Eksklusif Portofolio. Hak Cipta Dilindungi.
          </span>
          <button 
            onClick={scrollToTop}
            style={{
              background: "none",
              border: "none",
              fontSize: "11px",
              fontWeight: "bold",
              color: "#1c2e24",
              cursor: "pointer",
              letterSpacing: "1px",
              outline: "none"
            }}
          >
            Kembali ke Atas &uarr;
          </button>
        </div>

      </div>
    </footer>
  );
}

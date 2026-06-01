"use client";
import { motion } from "framer-motion";

const TECH_FEATURES = [
  {
    icon: "⚡",
    title: "Blue Core VVA",
    desc: "Teknologi mesin Yamaha yang memberikan tenaga maksimal di setiap putaran mesin namun tetap mempertahankan efisiensi bahan bakar yang luar biasa."
  },
  {
    icon: "📲",
    title: "Y-Connect Technology",
    desc: "Sistem konektivitas smartphone pertama di kelasnya yang menghubungkan motor Anda langsung ke layar HP untuk memantau kondisi dan lokasi parkir."
  },
  {
    icon: "🛡️",
    title: "Traction Control (TCS)",
    desc: "Sistem kendali traksi pintar yang dirancang khusus untuk mencegah ban belakang selip di segala kondisi permukaan jalan yang basah atau berpasir."
  }
];

export default function TechSection() {
  return (
    <section 
      style={{ 
        padding: "60px 40px", 
        backgroundColor: "#ffffff", // Latar belakang putih bersih kontras dengan background abu-abu sebelumnya
        color: "#1c2e24", 
        fontFamily: "sans-serif",
        width: "100%",
        boxSizing: "border-box"
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* HEADER SECTION */}
        <div style={{ marginBottom: "40px", textAlign: "center" }}>
          <p style={{ fontSize: "11px", fontWeight: "bold", color: "#b91c1c", letterSpacing: "3px", margin: "0 0 8px 0" }}>ADVANCED TECHNOLOGY</p>
          <h2 style={{ fontSize: "28px", fontWeight: "800", margin: 0 }}>Fitur & Keunggulan Utama</h2>
        </div>

        {/* BARIS KARTU KEUNGGULAN */}
        <div style={{ 
          display: "flex", 
          gap: "24px", 
          justifyContent: "center", 
          flexWrap: "wrap",
          width: "100%"
        }}>
          {TECH_FEATURES.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 40px rgba(28,46,36,0.08)",
                borderColor: "#1c2e24"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ 
                flex: "1 1 280px", 
                maxWidth: "310px",
                backgroundColor: "#f8f9fa", 
                borderRadius: "20px", 
                padding: "28px 24px", 
                border: "1px solid #e2e8f0",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                boxSizing: "border-box",
                cursor: "pointer"
              }}
            >
              {/* Bulatan Ikon */}
              <div style={{ 
                width: "50px", 
                height: "50px", 
                borderRadius: "14px", 
                backgroundColor: "#ffffff", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                fontSize: "24px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.03)"
              }}>
                {tech.icon}
              </div>

              {/* Teks */}
              <div>
                <h4 style={{ fontSize: "16px", fontWeight: "800", margin: "0 0 8px 0", color: "#1c2e24" }}>
                  {tech.title}
                </h4>
                <p style={{ fontSize: "13px", color: "#546e5a", margin: 0, lineHeight: "1.6" }}>
                  {tech.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

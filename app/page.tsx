"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import SimulasiSection from "../components/SimulasiSection";
import TechSection from "../components/TechSection";
import Footer from "../components/Footer";

export default function Home() {
  // 1. Pastikan State Global Ini Ada
  const [selectedMotorId, setSelectedMotorId] = useState("nmax-155");

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", minHeight: "100vh", backgroundColor: "#ebede8", margin: 0, padding: 0 }}>
      <Navbar />
      
      <div style={{ width: "100%" }}>
        <HeroSection />
      </div>
      
      {/* 2. PASTIKAN DUA PROPS INI DIKIRIM KE CATEGORYSECTION */}
      <div style={{ width: "100%" }}>
        <CategorySection selectedMotorId={selectedMotorId} onSelectMotor={setSelectedMotorId} />
      </div>

      <div style={{ width: "100%" }}>
        <SimulasiSection currentMotorId={selectedMotorId} />
      </div>

      <div style={{ width: "100%" }}>
        <TechSection />
      </div>

      <Footer />
    </div>
  );
}

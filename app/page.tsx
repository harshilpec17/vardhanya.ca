import React from "react";
import Navbar from "@/src/app/components/Navbar";
import DynamicHero from "@/src/app/components/DynamicHero";
import Footer from "@/src/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <DynamicHero />
  <Footer />
    </>
  );
}

'use client'
import Contact from "@/components/Contact";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";
import { useSelector } from "react-redux";

export default function Home() {
  const theme = useSelector((state: any) => state.theme.mode)
  return (
    <div>
      <Slider />
      <Contact />
      <Footer />
    </div>
  )
}

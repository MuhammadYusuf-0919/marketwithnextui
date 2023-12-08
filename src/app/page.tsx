'use client'
import Contact from "@/components/Contact";
import Slider from "@/components/Slider";
import { useSelector } from "react-redux";
import MainSlider from "@/components/MainSlider";
import MainAdds from "@/components/MainAdds";
import Tabs from "@/components/FoodTabs";

export default function Home() {
  const theme = useSelector((state: any) => state.theme.mode)
  return (
    <div>
      <MainSlider />
      <MainAdds />
      <Tabs />
      <Slider />
      <Contact />
    </div>
  )
}

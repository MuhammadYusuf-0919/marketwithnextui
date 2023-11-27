'use client'
import Header from "@/components/Navbar";
import { useSelector } from "react-redux";

export default function Home() {
  const theme = useSelector((state: any) => state.theme.mode)
  return (
    <div>
      <Header />
      <h1>Qalesan</h1>
    </div>
  )
}

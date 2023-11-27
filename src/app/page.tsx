'use client'
import { useSelector } from "react-redux";

export default function Home() {
  const theme = useSelector((state: any) => state.theme.mode)
  return (
    <h1>hi</h1>
  )
}

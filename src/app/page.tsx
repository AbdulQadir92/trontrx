"use client"
import { useState, useEffect } from "react"
import { UpArrow } from "@/styles/pages/Home.styled"
import Navbar from "@/components/home/Navbar"
import TopSection from "@/components/home/TopSection"
import ContractStats from "@/components/home/ContractStats"
import AboutDivider from "@/components/home/dividers/AboutDivider"
import About from "@/components/home/About"
import WhyChoose from "@/components/home/WhyChoose"
import WhyChooseDivider from "@/components/home/dividers/WhyChooseDivider"
import IncomeSources from "@/components/home/IncomeSources"
import IncomeSourcesDivider from "@/components/home/dividers/IncomeSourcesDivider"
import MatchingIncome from "@/components/home/MatchingIncome"
import MatchingIncomeDivider from "@/components/home/dividers/MatchingIncomeDivider"
import HowInvestNew from "@/components/home/HowInvestNew"
import HowInvestDivider from "@/components/home/dividers/HowInvestDiveder"
import PressCarousel from "@/components/home/PressCarousel"
import FAQs from "@/components/home/FAQs"
import Footer from "@/components/home/Footer"


export default function Home() {

  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < 800) {
        setShowArrow(false)
      } else if (window.scrollY >= 800) {
        setShowArrow(true)
      }
    })
  }, [])

  return (
    <main>
      <Navbar />
      <TopSection />
      <ContractStats />
      <AboutDivider />
      <About />
      <AboutDivider />
      <WhyChoose />
      <WhyChooseDivider />
      <IncomeSources />
      <IncomeSourcesDivider />
      <MatchingIncome />
      <MatchingIncomeDivider />
      <HowInvestNew />
      <HowInvestDivider />
      <PressCarousel />
      <FAQs />
      <Footer />
      <UpArrow className={showArrow ? "shown" : ""} onClick={() => window.scrollTo(0, 0)}>
        <img id="upArrow" src="assets/images/home/arrow-up.png" alt="..." />
      </UpArrow>
    </main>
  )
}

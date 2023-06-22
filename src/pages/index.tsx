// import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import Rocket from "../components/Rocket"
import Features from "../components/Features"
import Features1 from "../components/Features1"
import Features2 from "../components/Features2"
import Features3 from "../components/Features3"
import Features4 from "../components/Features4"
import OurFact from "../components/OurFact"
import OurExperiance from "../components/OurExperiance"
import ClientSay from "../components/ClientSay"
import OurService from "../components/OurService"
import OurBlog from "../components/OurBlog"
import Footer from "../components/Footer"


import Stack from '@chakra-ui/react'

export default function Home() {
  return (
    <>
    {/* <HeroSection/> */}
    
    <Navbar/>
    <Rocket/>
    <Features/>
    <Features1/>
    <Features2/>
    <Features3/>
    <Features4/>
    <OurFact/>
    <OurExperiance/>
    <ClientSay/>
    <OurService/>
    <OurBlog/>
    <Footer/>
    
    </>
  )
}
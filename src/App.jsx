import React from "react"
import { About } from "./components/About"
import { Navbar } from "./components/Navbar"
import { Email } from "./components/Email"
import { Footer } from "./components/Footer"
import { FadeIn } from "./components/fadeIn"
export const App = () => {
  return (
    <>
      
      <Navbar/>
      <About/>
   <FadeIn>
      <Email/>
      <Footer/>
   </FadeIn>
   
    </>
  )
}

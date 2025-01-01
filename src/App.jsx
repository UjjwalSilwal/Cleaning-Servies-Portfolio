import { Navbar } from "./components"
import NavbarTop from "./components/NavbarTop"
import Footer from "./components/Footer"
import { Services } from "./components/Services"
// import Team from "./components/Team"
import Landingpage from "./components/landingPage"
import ContactUs from "./components/ContactUs"
import AboutUs from "./components/AboutUs"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Service from "./pages/Service"
import Home from "./pages/Home"

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //      <img src="/Decore.png" alt="" className='absolute top-0 right-0 ' />

    //   <NavbarTop />
    //   <Navbar />
    //   <Landingpage />
    //   <AboutUs/>
    //   <Services />
    //   {/* <Team /> */}
    //   <ContactUs/>
    //   <Footer />
    // </div>
  )
}
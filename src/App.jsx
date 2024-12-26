import { Navbar } from "./components"
import NavbarTop from "./components/NavbarTop"
import Footer from "./components/Footer"
import { Services } from "./components/Services"
// import Team from "./components/Team"
import Landingpage from "./components/landingPage"
import ContactUs from "./components/ContactUs"
import AboutUs from "./components/AboutUs"

export default function App() {
  return (
    <div className="App">
         <img src="/Decore.png" alt="" className='absolute top-0 right-0 ' />

      <NavbarTop />
      <Navbar />
      <Landingpage />
      <AboutUs/>
      <Services />
      {/* <Team /> */}
      <ContactUs/>
      <Footer />
    </div>
  )
}
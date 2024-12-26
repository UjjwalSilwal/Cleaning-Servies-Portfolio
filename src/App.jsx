import { Navbar } from "./components"
import NavbarTop from "./components/NavbarTop"
import Footer from "./components/Footer"
import { Services } from "./components/Services"
import Team from "./components/Team"
import Landingpage from "./components/landingPage"

export default function App() {
  return (
    <div>
      <div className=" relative">
        <img src="/Decore.png" alt="" className='absolute right-0 top-0 ' />
      </div>

      <NavbarTop />
      <Navbar />
      
    <div className="flex justify-end z-50">
      hello
    </div>
      <Landingpage />
      <Services />
      <Team />
      <Footer />
    </div>
  )
}
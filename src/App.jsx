import { Navbar } from "./components"
import NavbarTop from "./components/NavbarTop"
import Footer from "./components/Footer"
import { Services } from "./components/Services"
import Team from "./components/Team"

export default function App() {
  return (
    <div>
      <NavbarTop/>
      <Navbar/>
      <Services/>
      <Team/>
      <Footer/>
    </div>
  )
}
import React from 'react'
import { Navbar } from "../components"
import NavbarTop from "../components/NavbarTop"
import Footer from "../components/Footer"
import { Services } from "../components/Services"
import Landingpage from "../components/landingPage"
import ContactUs from "../components/ContactUs"
import AboutUs from "../components/AboutUs"

const Home = () => {
    return (
        <div>
            <div className="App">
                <img src="/Decore.png" alt="" className='absolute top-= right-0 ' />
                <img src="/Traveller.png" alt="" className='absolute top-14 right-14' />
                <NavbarTop />
                <Navbar />
                <Landingpage />
                <AboutUs />
                <Services />
                {/* <Team /> */}
                <ContactUs />
                <Footer />
            </div>
        </div>
    )
}

export default Home
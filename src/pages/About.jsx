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
            <div>
                <NavbarTop />
                <Navbar />
                <AboutUs />
                <Footer />
            </div>
        </div>
    )
}

export default Home
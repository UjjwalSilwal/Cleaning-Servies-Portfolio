import React from 'react'
import { Navbar } from "../components"
import NavbarTop from "../components/NavbarTop"
import Footer from "../components/Footer"
import { Services } from "../components/Services"
import Landingpage from "../components/landingPage"
import ContactUs from "../components/ContactUs"
import AboutUs from "../components/AboutUs"

const Service = () => {
    return (
        <div>
            <div className="App">

                <NavbarTop />
                <Navbar />
                <Services />
                {/* <Team /> */}
                <Footer />
            </div>
        </div>
    )
}

export default Service
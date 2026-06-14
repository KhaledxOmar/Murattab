import Hero from '../components/landing/Hero'
import NavBar from '../components/landing/NavBar'
import WhyUs from '../components/landing/WhyUs'
import Features from '../components/landing/Features'
import ShowCase from '../components/landing/ShowCase'
import HowItWorks from '../components/landing/HowItWorks'
import Prices from '../components/landing/Prices'
import Faq from '../components/landing/Faq'
import Footer from '../components/landing/Footer'

function LandingPage(){

    return(
        <html className='!scroll-smooth overflow-x-hidden'>
            <NavBar/>
            <Hero/>
            <WhyUs/>
            <Features/>
            <ShowCase/>
            <HowItWorks/>
            <Prices/>
            <Faq/>
            <Footer/>
        </html>
    )
}

export default LandingPage
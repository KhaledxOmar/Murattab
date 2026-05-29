import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import WhyUs from '../components/WhyUs'
import Features from '../components/Features'
import ShowCase from '../components/ShowCase'
import HowItWorks from '../components/HowItWorks'
import Prices from '../components/Prices'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

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
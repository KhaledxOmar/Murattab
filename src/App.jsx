import './App.css'
import NavBar from './NavBar'
import Hero from './Hero'
import WhyUs from './WhyUs'
import Features from './Features'
import ShowCase from './ShowCase'
import HowItWorks from './HowItWorks'
import Prices from './Prices'
import Faq from './Faq'

function App() {

  return (
    <html className='!scroll-smooth'>
      <NavBar/>
      <Hero/>
      <WhyUs/>
      <Features/>
      <ShowCase/>
      <HowItWorks/>
      <Prices/>
      <Faq/>
    </html>
  )
}

export default App

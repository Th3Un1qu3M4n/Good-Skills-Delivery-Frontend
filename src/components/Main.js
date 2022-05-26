import React from 'react'
import Footer from './Footer'
import FooterNav from './FooterNav'
import Newsletter from './Newsletter'
import FindUs from './FindUs'
import ContactUs from './ContactUs'
import Testimonials from './Testimonials'
import VideoCTA from './VideoCTA'
import Stats from './Stats'
import Services from './Services'
import HeroSection from './HeroSection'
import NavBar from './NavBar'
import Form from './Order/Form'
import LeafMap from './Order/LeafMap'

const Main = () => {
  return (
    <main className="main" id="top">
      {/* <LeafMap></LeafMap> */}
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <Services></Services>
      <Stats></Stats>
      <Form></Form>
      {/* <VideoCTA></VideoCTA> */}
      {/* <Testimonials></Testimonials> */}
      {/* <ContactUs></ContactUs> */}
      <FindUs></FindUs>
      <Newsletter></Newsletter>
      <FooterNav></FooterNav>
      <Footer></Footer> 
    </main>

  )
}

export default Main
// components

import About from "./About"
import Featured from "./Featured"
import Gallery from "./Gallery"
import Hero from "./Hero"
import Menu from "./Menu"
import Nav from "./Navbar"
import Specialities from "./Specialties"
import Spotlight from "./Spotlight"
import Testimonials from "./Testimonials"
import FAQ from "./FAQ"
import Newsletter from "./Newsletter"
import Contact from "./Contact"
import Rewards from "./Rewards"
import Footer from "./Footer"

function Root() {

  return (
    <div className="main-content">
        <Nav />
      <section id="hero">
        <Hero />
      </section>
      <section id="specialities">
        <Specialities />
      </section>
      <section id="featured">
        <Featured />
      </section>
      <section id="menu">
        <Menu />
      </section>
      <section id="spotlight">
        <Spotlight />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="newsletter">
        <Newsletter />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="rewards">
        <Rewards />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  )
}

export default Root

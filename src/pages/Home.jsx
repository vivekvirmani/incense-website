import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Products from "../components/Products"
import Stats from "../components/Stats"
import Gallery from "../components/Gallery"
import Testimonials from "../components/Testimonials"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <Products />
      <Stats />
      <Gallery /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
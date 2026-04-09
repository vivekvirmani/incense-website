import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-yellow-400">
          IncenseCo
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <Link to="/" className="hover:text-yellow-400 cursor-pointer">Home</Link>
          <Link to="/about" className="hover:text-yellow-400 cursor-pointer">About</Link>
          <Link to="/products" className="hover:text-yellow-400 cursor-pointer">Products</Link>
          <Link to="/contact" className="hover:text-yellow-400 cursor-pointer">Contact</Link>
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4">
          <p className="hover:text-yellow-400 cursor-pointer">Home</p>
          <p className="hover:text-yellow-400 cursor-pointer">About</p>
          <p className="hover:text-yellow-400 cursor-pointer">Products</p>
          <p className="hover:text-yellow-400 cursor-pointer">Contact</p>
        </div>
      )}
    </nav>
  )
}

export default Navbar
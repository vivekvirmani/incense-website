import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import ProductsPage from "./pages/ProductsPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
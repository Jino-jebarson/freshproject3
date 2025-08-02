import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import Home from "./Home/Home"
import About from "./About/About"
import Service from "./Services/Services"
import Blog from "./Blogs/Blogs"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"
import '../src/App.css'
function App() {

  return (
    <>
       <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
     
    </>
  )
}

export default App

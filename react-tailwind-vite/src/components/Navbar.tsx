import { useState } from "react"
import { Link } from "react-router"

const Navbar = () => {
  // ตัวแปรการแสดงผล / ซ่อนเมนูบนมือถือ
  const [isOpened, SetIsOpened] = useState(false)
  return (
    <nav className="bg-blue-600 text-white bg-gradient-to-r from-blue-600 to-blue-400">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo & Brand */}
        <a href="#" className="text-xl font-bold hover:text-gray-200">MyBrand</a>
        {/* Menu (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
          <li><Link to="/service" className="hover:text-gray-200">Service</Link></li>
          <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>
        </ul>
        {/* Hamburger Menu (Mobile) */}
        <button className="md:hidden cursor-pointer" onClick={() => SetIsOpened(!isOpened)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <ul className={`md:hidden flex-col space-y-4 p-4 transition-all duration-300 ease-in-out transform ${isOpened ? "opacity-100 translate-y-0" : "hidden"}`}>
        <li><Link to="/" className="text-center block hover:text-gray-200">Home</Link></li>
        <li><Link to="/about" className="text-center block hover:text-gray-200">About</Link></li>
        <li><Link to="/service" className="text-center block hover:text-gray-200">Service</Link></li>
        <li><Link to="/contact" className="text-center block hover:text-gray-200">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
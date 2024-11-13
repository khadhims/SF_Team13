import logow from "../assets/LogoW.png";
import logob from "../assets/LogoB.png";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Cek jika sudah menggulir lebih dari tinggi dari gambar
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`w-full p-4 fixed top-0 left-0 flex justify-between items-center z-10 transition-all duration-300 ${
      isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'
      }`}
    >
      <Link to={'/'}>
        <img
          src={isScrolled ? logob : logow}  // Jika sudah scroll, pakai logo gelap
          alt="Logo"
          className="w-56"
        />
      </Link>
      <ul className="flex flex-row items-center space-x-8">
        <button><li className="text-lg font-semibold"><Link to={'/aboutus'}>About Us</Link></li></button>
        <button><li className="text-lg font-semibold"><Link to={'/contactus'}>Contact Us</Link></li></button>
        <button><li className="text-lg font-semibold"><Link to={'/register'}>Register</Link></li></button>
        <button><li className="text-lg font-semibold"><Link to={'/login'}>Login</Link></li></button>
        <li>
          <Link to="/dashboard">
            <button className="bg-primary text-white py-3 px-6 text-lg font-bold rounded-full hover:bg-blue-400">
              Admin Portal
            </button>
          </Link>
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

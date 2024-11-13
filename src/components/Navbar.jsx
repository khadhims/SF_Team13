import logo from "../assets/LogoW.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent text-white p-4 fixed top-0 left-0 flex flex-row items-center justify-between z-10">
      <img src={logo} alt="Logo" className="w-56" /> {/* logo dengan lebar 230px */}
      <ul className="flex flex-row items-center space-x-8">
        <button><li className="text-lg"><Link to={'/aboutus'}>About Us</Link></li></button>
        <li className="text-lg">Contact Us</li>
        <button><li className="text-lg"><Link to={'/register'}>Register</Link></li></button>
        <button><li className="text-lg"><Link to={'/login'}>Login</Link></li></button>
        <li>
          <button className="bg-blue-500 text-white py-3 px-6 text-lg font-bold rounded-full hover:bg-blue-600">
            Admin Portal
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import { signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logob from "../assets/LogoB.png";
import logow from "../assets/LogoW.png";
import { auth } from "../firebase-config";

const Navbar = () => {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);  // State to store user info

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("User object:", user ? user.photoURL : null);
      setUser(user); // Update the user state when authentication state changes
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe(); // Clean up the listener
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <nav className={`w-full p-4 fixed top-0 left-0 flex justify-between items-center z-10 transition-all duration-300 ${
      isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'
    }`}>
      <Link to={'/'}>
        <img
          src={isScrolled ? logob : logow}
          alt="Logo"
          className="w-56"
        />
      </Link>
      <ul className="flex flex-row items-center space-x-8 pr-10">
        {user ? (
          <>
            <button>
              <li className="text-lg font-semibold"><Link to={'/aboutus'}>About Us</Link></li>
            </button>
            <button>
              <li className="text-lg font-semibold"><Link to={'/contactus'}>Contact Us</Link></li>
            </button>
            <button>
              <li className="text-lg font-semibold" onClick={handleLogout}>
                Logout
              </li>
            </button>
            <li className="flex items-center space-x-2">
              {user.photoURL ? (
                <img 
                  src={user.photoURL} 
                  alt="profile" 
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>  // Placeholder if no photo
              )}
            </li>
          </>
        ) : (
          <>
            <button>
              <li className="text-lg font-semibold"><Link to={'/aboutus'}>About Us</Link></li>
            </button>
            <button>
              <li className="text-lg font-semibold"><Link to={'/contactus'}>Contact Us</Link></li>
            </button>
            <button>
              <li className="text-lg font-semibold"><Link to={'/register'}>Register</Link></li>
            </button>
            <button>
              <li className="text-lg font-semibold"><Link to={'/login'}>Login</Link></li>
            </button>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

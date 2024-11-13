import { useEffect, useState } from "react";
import bgImage from "../assets/bg.jpg";
import Navbar from "../components/Navbar";
import ImgMediaCard from "../components/Card";
const AboutUs = () => {
  // const [texts, setTexts] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Memeriksa jika pengguna menggulir lebih dari tinggi layar
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white">
      <Navbar />
      <div
      className={`h-screen flex bg-fixed items-center justify-center transition-colors duration-500 ${
        isScrolled ? "bg-white" : "bg-cover bg-center"
      }`}
      style={{ backgroundImage: !isScrolled ? `url(${bgImage})` : "none" }}
      >
        <div className="text-center text-red-50 max-w-3xl flex flex-col items-center px-6">
          <h1 className="text-4xl font-bold mb-4 underline decoration-4">About Us</h1>
          <p className="text-justify text-xl mb-6">
          QuickBus adalah solusi pemesanan tiket bus yang modern dan praktis. Kami hadir untuk memberikan kemudahan bagi para penumpang dalam mengakses informasi perjalanan, memesan tiket, dan menikmati perjalanan dengan nyaman. Dengan teknologi yang inovatif, QuickBus memungkinkan Anda untuk merencanakan perjalanan hanya dengan beberapa klik, kapan saja dan di mana saja.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center"> 
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
      </div>
    </div>
  );
}

export default AboutUs
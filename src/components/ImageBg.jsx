import { useEffect, useState } from "react";
import bgImage from "../assets/bg.jpg";

const ImageBg = () => {
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
    <div
      className={`h-screen bg-fixed flex items-center justify-center transition-colors duration-500 ${
        isScrolled ? "bg-white" : "bg-cover bg-center bg-opacity-30"
      }`}
      style={{ backgroundImage: !isScrolled ? `url(${bgImage})` : "none" }}
    >
      <div className="text-center text-white max-w-2xl flex flex-col items-center px-6">
        <h1 className="text-4xl font-semibold mb-4">Mudahkan Perjalanan Anda</h1>
        <p className="text-lg mb-6">
          Tingkatkan pengalaman perjalanan Anda dengan QuickBus, solusi cepat
          dan mudah untuk pemesanan tiket kereta api. Cukup beberapa klik, dan
          tiket Anda siap tanpa perlu antre di loket!
        </p>
        <button className="bg-primary text-white py-3 px-6 rounded-full hover:bg-blue-400">
          Pesan Sekarang
        </button>
      </div>
    </div>
  );
};

export default ImageBg;

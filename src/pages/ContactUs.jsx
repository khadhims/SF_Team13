import { Button, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import bgImage from "../assets/bg.jpg";
import Navbar from "../components/Navbar";
import { db } from "../firebase-config";
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ContactUs = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [namaDepan, setNamaDepan] = useState("");
  const [namaBelakang, setNamaBelakang] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const contacUsCollectionRef = collection(db, "contactus");

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

  const handleSubmitForm = async () => {
    try {
      await addDoc(contacUsCollectionRef, {
        nama_depan: namaDepan,
        nama_belakang: namaBelakang,
        email: email,
        pesan: pesan
      });
      console.log("Pesan user telah terkirim dan tersimpan dengan sukses di Firestore.");
      alert("Pesan Anda telah terkirim.");
    } catch (error) {
      console.log("Gagal menerima pesan user:", error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className={`h-screen flex items-center justify-center bg-fixed transition-colors duration-500 ${
          isScrolled ? "bg-white" : "bg-cover bg-center"
        }`}
        style={{ backgroundImage: !isScrolled ? `url(${bgImage})` : "none" }}
      >
        {/* Container for content and form */}
        <div className="flex flex-col md:flex-row items-center justify-around justify-items-start w-full max-w-screen-2xl space-y-10 md:space-y-0 md:space-x-10">
          
          {/* Left Side Content */}
          <div className="text-center md:text-left text-red-50 flex flex-col justify-items-start max-w-xl">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-justify text-xl mb-6">
              Butuh bantuan? silahkan hubungi kami melalui kontak yang tertera ataupun dengan mengisi form yang ada.
            </p>
          </div>
          
          {/* Form Section */}
          <div className="bg-white px-6 py-12 rounded-lg shadow-lg  min-h-96 max-w-full space-y-6">
            <h2 className="text-lg font-semibold">Mohon isi form pesan dan bantuan anda di bawah ini</h2>
            <div className="flex flex-row space-x-4">
              <TextField
                label="Nama depan"
                variant="outlined"
                fullWidth
                value={namaDepan}
                onChange={(e) => setNamaDepan(e.target.value)}
              />
              <TextField
                label="Nama belakang"
                variant="outlined"
                fullWidth
                value={namaBelakang}
                onChange={(e) => setNamaBelakang(e.target.value)}
              />
            </div>

            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4"
            />

            <TextField
              label="Pesan"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
            />

            <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            className="!font-bold !text-lg !shadow-lg !shadow-primary/50"
            onClick={handleSubmitForm}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <div className="bg-gray-100 py-8">
        <div className="flex flex-wrap justify-center items-center gap-16 my-12 mx-auto w-11/12">
          <div className="flex flex-col items-center w-80 md:w-96 font-semibold">
            <HomeIcon fontSize="large" color="primary" />
            <p className="text-lg mt-2">Alamat</p>
            <p className="text-lg mt-2">Jl. Contoh No. 123, Kota Contoh</p>
          </div>
          <div className="flex flex-col items-center w-80 md:w-96 font-semibold">
            <EmailIcon fontSize="large" color="primary" />
            <p className="text-lg mt-2">Email</p>
            <p className="text-lg mt-2">contact@example.com</p>
          </div>
          <div className="flex flex-col items-center w-80 md:w-96 font-semibold">
            <WhatsAppIcon fontSize="large" color="primary" />
            <p className="text-lg mt-2">WhatsApp</p>
            <p className="text-lg mt-2">+62 123 4567 8901</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

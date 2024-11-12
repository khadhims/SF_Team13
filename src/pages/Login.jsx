import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Button, Divider, IconButton, TextField } from "@mui/material";
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from "../firebase-config";
import { useState } from "react";
import { Link } from 'react-router-dom';
import GoogleIcon from "@mui/icons-material/Google";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Toggle untuk password
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async () => {
    // e.preventDefault(); 
    setErrorMessage(""); 

    // Validasi input sebelum mengirim ke Firebase
    if (!email || !password) {
      setErrorMessage("Email dan password harus diisi");
      return;
    }

    try {
      // Login menggunakan Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login Berhasil');
      // Redirect ke halaman lain setelah login sukses (jika diperlukan)
    } catch (e) {
      // Menangani error login dan menampilkan pesan error yang lebih spesifik
      setErrorMessage("Email atau password salah.");
      console.error("Login error:", e.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("User signed up with Google and data saved to Firestore.", user);
    } catch (error) {
      console.log("Error signing up with Google:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary relative">
      {/* Full screen white background (optional) */}
      {/* Blurred box behind the form */}
      <div className="relative bg-transparent p-6 rounded-3xl max-w-sm w-full space-y-8 backdrop-blur-lg bg-white shadow-2xl">
        {/* Welcome message */}
        <div className="font-mono space-y-2">
          <h2 className="text-2xl font-bold">Selamat Datang Kembali</h2>
          <h2 className="text-sm">Mohon untuk sign in terlebih dahulu</h2>
        </div>
        
        {/* Login form */}
        <div className="space-y-4">
          {errorMessage && (
            <div className="text-red-500 text-sm mb-2">
              {errorMessage}
            </div>
          )}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setErrorMessage("")
            }}
          />

          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorMessage(""); // Clear error when typing
            }}
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={handleShowPassword}
                  edge="end"
                  aria-label="toggle password visibility"
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              ),
            }}
          />

          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            className="!font-mono !font-bold !text-lg"
            onClick={handleLogin}
          >
            Login
          </Button>
          <div className="flex items-center justify-center font-mono font-semibold text-sm">
            Belum Memiliki Akun ? Silahkan<Link to="/register" className="ml-2 text-primary">Register</Link>
          </div>
          <Divider
            sx={{
              borderColor: 'black',  // Ubah warna jika perlu
              width: '100%',
              borderBottomWidth: 50,     // Tambah ketebalan garis
              color: 'black',          // Ubah warna garis
            }}
            className='text-sm'
          >
            atau
          </Divider>
          {/* Google Sign Up button */}
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            startIcon={<GoogleIcon />} 
            onClick={signInWithGoogle}
            className=" flex !font-bold !text-base"
          >
            Sign In dengan Google
          </Button>
        </div>
      </div>
    </div>
  );
};
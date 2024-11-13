import GoogleIcon from "@mui/icons-material/Google";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Button, Divider, IconButton, TextField } from "@mui/material";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { auth, db, googleProvider } from "../firebase-config";

const Register = () => {
  const navigate = useNavigate();

  // For Auth
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // For Toggle visibility password
  const [showPassword, setShowPassword] = useState(false);

  //Toggle untuk password
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const signUpUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User dibuat dengan sukses:", user);
      return user; // Return the authenticated user
    } catch (error) {
      console.log("Gagal Sign Up:", error.message);
      throw new Error(error.message); // Throw an error to be caught in the calling function
    }
  };

  // Membuat data user di Firestore ketika Sign Up
  const createUserData = async (user) => {
    try {
      await setDoc(doc(db, "users", user.uid), {
        fullname,
        email,
      });
      console.log("Data user tersimpan dengan sukses di Firestore.");
    } catch (error) {
      console.log("Gagal menyimpan data user:", error.message);
    }
  };

  // Function buat mengurus Sign Up secara keseluruhan
  const handleSignUp = async () => {
    setErrorMessage("");
    setConfirmPasswordError("");

    if (password !== confirmPassword) {
      setConfirmPasswordError("Password tidak cocok");
      return;
    }

    try {
      const user = await signUpUser(); // Get the authenticated user
      await createUserData(user); // Save user data to Firestore
      navigate("/login");
    } catch (error) {
      if (error.message.includes("auth/email telah digunakan")) {
        setErrorMessage("Email telah digunakan. Mohon gunakan email lain.");
      } else {
        setErrorMessage("Terjadi kesalahan selama proses pendaftaran. Mohon dicoba lagi.");
      }
      console.log("Terjadi kesalahan selama proses pendaftaran: ", error.message);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    // Check if confirm password matches the original password
    if (value !== password) {
      setConfirmPasswordError("Passwords tidak cocok");
    } else {
      setConfirmPasswordError(""); // Clear error if passwords match
    }
  };

  const signUpWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Save additional user data if needed
      await setDoc(doc(db, "users", user.uid), {
        fullname: user.displayName || "",
        email: user.email,
      });
      console.log("User terdaftar dengan Google Provider data tersimpan di Firestore.");
      navigate("/login");
    } catch (error) {
      console.log("Gagal Sign Up dengan Google Provider:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary relative">
      {/* Full screen white background (optional) */}
      {/* Blurred box behind the form */}
      <div className="relative bg-transparent p-6 rounded-3xl max-w-sm w-full space-y-8 backdrop-blur-lg bg-white shadow-2xl">
        {/* Welcome message */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Selamat Datang!</h2>
          <h2 className="text-sm">Mohon isi data anda dengan lengkap</h2>
        </div>
        
        {/* Sign Up form */}
        <div className="space-y-4">
        <TextField
            label="Nama Lengkap"
            variant="outlined"
            value={fullname}
            fullWidth
            onChange={(e) => setFullname(e.target.value)}
          />
      
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            error={!!errorMessage}
            helperText={errorMessage}
            onChange={(e) => {
              setEmail(e.target.value)
              setErrorMessage("")
            }}
          />

          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            value={password}
            fullWidth
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
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextField
            label="Confirm Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            value={confirmPassword}
            fullWidth
            error={!!confirmPasswordError} // Show error if there is a confirm password error
            helperText={confirmPasswordError} // Show confirm password error message as helper text
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
            onChange={handleConfirmPasswordChange}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSignUp}
            className="!font-bold !text-lg !shadow-lg !shadow-primary/50">
            Sign Up
          </Button>
          <div className="flex items-center justify-center font-semibold text-sm">
            Sudah Memiliki Akun ? Silahkan<Link to="/login" className="ml-2 text-primary">Login</Link>
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
            onClick={signUpWithGoogle}
            className=" flex !font-bold !text-base !shadow-lg !shadow-primary/50"
          >
            Sign up dengan Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
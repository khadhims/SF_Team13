import { Button, TextField, IconButton } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase-config"; 

const Register = () => {
  // For Auth
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState(0);

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
      console.log("User created successfully:", user);
      return user; // Return the authenticated user
    } catch (error) {
      console.log("Error signing up:", error.message);
      throw new Error(error.message); // Throw an error to be caught in the calling function
    }
  };

  // Function to create user data in Firestore
  const createUserData = async (user) => {
    try {
      await setDoc(doc(db, "users", user.uid), {
        fullname,
        email,
        address,
        contact,
      });
      console.log("User data saved successfully in Firestore.");
    } catch (error) {
      console.log("Error saving user data:", error.message);
    }
  };

  // Function to handle the whole sign-up process
  const handleSignUp = async () => {
    try {
      const user = await signUpUser(); // Get the authenticated user
      await createUserData(user); // Save user data to Firestore
    } catch (error) {
      console.log("Error during sign up process:", error.message);
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
          <h2 className="text-sm">Mohon isi data anda dengan lengkap</h2>
        </div>
        
        {/* Sign Up form */}
        <div className="space-y-4">
        <TextField
            label="Nama Lengkap"
            variant="outlined"
            fullWidth
            onChange={(e) => setFullname(e.target.value)}
          />
          <TextField
            label="Nomor Handphone"
            variant="outlined"
            fullWidth
            onChange={(e) => setContact(e.target.value)}
          />
          <TextField
            label="Alamat Rumah"
            variant="outlined"
            fullWidth
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
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
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSignUp}
            className="!font-mono !font-bold !text-lg">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
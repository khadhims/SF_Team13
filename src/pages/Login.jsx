import { Button, TextField, IconButton } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  //Toggle untuk password
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
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
          <TextField
            label="Email"
            variant="outlined"
            fullWidth />
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
          />
          <Button variant="contained" color="primary" fullWidth className="!font-mono !font-bold !text-lg">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};
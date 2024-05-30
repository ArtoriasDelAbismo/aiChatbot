import { Box, Typography, Button } from "@mui/material"
import { CustomizedInput } from "../components/Shared/CustomizedInput";
import { IoLogInOutline } from "react-icons/io5";
import toast, {  } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("Ingresando", { id: "login" });
      await auth?.login(email, password)
      toast.success("Login Exitoso", { id: "login" });
    } catch (error) {
      toast.error("Error", { id: "login" } );
    }
  }
  useEffect(() => {
    if(auth?.user) {
      return navigate("/chat")
    }
  })

  return (
    <Box width={"100%"} height={"100%"} display={"flex"} flex={1}>
      <Box 
      padding={8} 
      mt={8} 
      display={{ md: "flex", sm: "none", xs: "none" }}
      >
        <img src="future-nikolai2.png" alt="" style={{ width: "500px" }}/>
      </Box>
      <Box 
      display={"flex"} 
      flex={{ xs: 1, md: 0.5 }} 
      justifyContent={"center"} 
      alignItems={"center"} 
      padding={2} 
      ml={"auto"} 
      mt={16}
      >
        <form 
        onSubmit={handleSubmit}
        style={{ 
          margin: "auto", 
          padding: "30px", 
          boxShadow: "10px 10px 20px #000", 
          borderRadius: "10px", 
          border: "none" }}
        >
          <Box sx={{ 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center" }}
          >
            <Typography 
            variant="h4" 
            textAlign={"center"} 
            padding={2}
            fontWeight={600} 
            >
            Login
            </Typography>
            <CustomizedInput type="email" name="email" label="Email"/>
            <CustomizedInput type="password" name="password" label="Password"/>
            <Button 
            type="submit" sx={{ 
              px: 2, 
              py: 1, 
              my: 2, 
              width: "400px", 
              height: "50px", 
              borderRadius: 2, 
              bgcolor: "#00fffc",
              ":hover": {
                bgcolor: "white",
                color: "black"
              }
              }}
            endIcon={<IoLogInOutline />}>Login</Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export { Login }
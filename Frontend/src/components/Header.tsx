import { AppBar, Toolbar } from "@mui/material";
import { Logo } from "./Shared/Logo.tsx";
import { useAuth } from "../context/AuthContext.tsx";
import  NavigationLink, {  } from "./Shared/NavigationLink.tsx";

const Header = () => {

  const auth = useAuth();
  return (
    <AppBar sx={{ 
      bgcolor: "transparent", 
      position: "static", 
      boxShadow: "none" 
      }}>
      <Toolbar sx={{ display: "flex", fontFamily: "Poppins, sans-serif" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink 
              bg= "#00fffc"
              to= "/chat"
              text= "Ir al Chat"
              textColor= "black"
              />
              <NavigationLink 
              bg="#51538f"
              textColor="white"
              to="/"
              text="salir"
              onClick={auth?.logout}
              />
            </>
          ) : (
            <>
              <NavigationLink 
              bg= "#00fffc"
              to= "/login"
              text= "login"
              textColor= "black"
              />
              <NavigationLink 
              bg="#51538f"
              textColor="white"
              to="/signup"
              text="sign in"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
    
  )
}

export { Header }
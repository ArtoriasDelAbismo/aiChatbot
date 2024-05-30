import React from "react";
import { Box } from "@mui/material";
import { TypingAnimation } from "../components/typer/typingAnimation";

const Home = () => {
  return (
    <div>
      <Box width={"100%"} height={"100%"} flex={"flex"}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            mx: "auto",
          }}
        >
          <Box>
            <TypingAnimation />
          </Box>
          <Box
          sx={{
            width:"100%",
            display:"flex",
            flexDirection:{ md:"row", xs:"column" },
            gap:5,
            my: 10,
          }}>
          </Box>
          <Box sx={{ display:"flex", width:"100%", mx:"auto" }}>
          <img 
            src="chatScreenshot.png" 
            alt="chat"
            style={{
              display:"flex",
              margin:"auto",
              width:"60%",
              borderRadius: 20,
              boxShadow:"-5px -5px 105px #64f3d5",
              marginTop:20,
              marginBottom:20,
              padding: 10,
            }} 
          
          />
          </Box>

        </Box>
      </Box>
    </div>
  );
};

export { Home };

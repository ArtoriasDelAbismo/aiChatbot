import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
            // Same substring at the start will only be typed out once, initially
            "Probá nuestra propia IA",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Desarrollado con OpenAI",
            1000,
            "Tu asesor personalizado experto en tenis",
            1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "30px", color: "white", display: "inline-block", textShadow: "1px 1px 20px #000", fontFamily: "Poppins, sans-serif" }}
        repeat={0}
    />
  );
};

export { TypingAnimation };

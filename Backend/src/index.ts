import app from "./App.js";
import { ConnectToDatabase } from "./db/connection.js";


// Conections and listeners

const PORT = process.env.PORT || 5000;

ConnectToDatabase()
.then(() => {
  try {
    app.listen(PORT, () => {
      console.log(`Server and Database active at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
});

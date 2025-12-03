import { initDB } from "./db/index.js";
import app from "./index.js";
import http from "http";

initDB()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    const server = http.createServer(app);
    const s = server.listen(PORT, () => {
      console.log(`Server is running on port ${3000}`);
    });
    s.on("error", (err) => {
      console.log("Server Error Occured:", err.message);
    });
  })
  .catch((err) => {
    console.log("DB Connection Failed:", err);
  });

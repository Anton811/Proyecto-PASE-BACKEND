const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

// Middlewares globales
app.use(
  cors({
    origin: [
      "http://localhost:5173", // desarrollo local
      "https://proyecto-pase.netlify.app", // producción Netlify
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json());

app.use("/api/usuario", require("./routes/usuario.route"));

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

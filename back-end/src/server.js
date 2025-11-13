import express from "express";
import cors from "cors";
import weatherRoutes from "./routes/weatherRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

// Rotas principais
app.use("/api", weatherRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🌤️  Servidor EcoWatch rodando na porta ${PORT}`);
});

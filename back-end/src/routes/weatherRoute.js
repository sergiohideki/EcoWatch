import express from "express";
import { getWeatherByCity } from "../services/weatherService.js";

const router = express.Router();

router.get("/clima", async (req, res) => {
  const { cidade } = req.query;

  if (!cidade) {
    return res.status(400).json({ erro: "Parâmetro 'cidade' é obrigatório." });
  }

  try {
    const dados = await getWeatherByCity(cidade);
    res.json({
      cidade: dados.name,
      temperatura: `${Math.round(dados.main.temp)}°C`,
      clima: dados.weather[0].description,
      umidade: `${dados.main.humidity}%`,
    });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

export default router;

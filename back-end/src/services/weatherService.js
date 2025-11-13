import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.OPENWEATHER_API_KEY;

export async function getWeatherByCity(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(
        "🚨 Erro da API OpenWeather:",
        error.response.status,
        error.response.data
      );
    } else {
      console.error("❌ Erro geral na requisição:", error.message);
    }
    throw new Error("Não foi possível obter os dados climáticos.");
  }
}

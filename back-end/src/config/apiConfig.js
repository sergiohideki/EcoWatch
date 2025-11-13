import dotenv from "dotenv";
dotenv.config();

export const API_KEY = process.env.OPENWEATHER_API_KEY;
export const BASE_URL = "https://api.openweathermap.org/data/2.5";

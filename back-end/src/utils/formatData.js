export function formatWeatherData(data) {
  return {
    cidade: data.name,
    temperatura: `${Math.round(data.main.temp)}°C`,
    clima: data.weather[0].description,
    umidade: `${data.main.humidity}%`,
  };
}

function fetchWeatherFromAPI(city) {
  console.log(`Fetching weather for ${city} from API...`);
  const fakeTemps = { Kigali: 24, Nairobi: 22, Lagos: 30 };
  return fakeTemps[city] ?? "Unknown city";
}

const weatherCache = {}

function getWeather(city) {
  if (city in weatherCache) {
    console.log(`Returning cached weather for ${city}`);
    return weatherCache[city];
  }
  const result = fetchWeatherFromAPI(city);

  weatherCache[city] = result;

  return result;
}

console.log(getWeather("Kigali"));
console.log(getWeather("Nairobi"));
console.log(getWeather("Paris"))
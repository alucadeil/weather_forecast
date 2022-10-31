export const getWeatherType = weather => weather.find(type => type.main)?.main;

import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

var todayString = today.toISOString().split('T')[0];
var tomorrowString = tomorrow.toISOString().split('T')[0];


export function getWeather2(lat, lon) {
  return axios.get(
    "https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,relativehumidity_2m,rain,visibility",
    {
      params: {
        latitude: lat,
        longitude: lon,
        start_date: todayString,
        end_date: tomorrowString,

        
        
      },
    }
  );
}



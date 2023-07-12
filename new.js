console.log("a");
const apiKey = "eba09a1b0fbf525e99e3534d1a833edd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=sfax&units=metric";
const response = await fetch(apiUrl + `&appid=${apiKey}`);
const data = await response.json();
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

var todayString = today.toISOString().split('T')[0];
var tomorrowString = tomorrow.toISOString().split('T')[0];

var nextWeek = new Date();
nextWeek.setDate(today.getDate() + 7); // Add 7 days to get the next week


var nextWeekString = nextWeek.toISOString().split('T')[0];

export function getWeather3(lat, lon) {
    return axios.get(
      "https://api.open-meteo.com/v1/forecast?hourly=temperature_2m&daily=weathercode,temperature_2m_max&timezone=auto",
      {
        params: {
          latitude: lat,
          longitude: lon,
          start_date: todayString,
          end_date: nextWeekString,
        },
      }
    );
  }

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
export async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
    console.log(data.coord);
    return {
      lon: data.coord.lon,
      lat: data.coord.lat,
    };
  }
export function getWeather4(lat, lon) {
    return axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,windspeed_10m&current_weather=true&past_days=31&forecast_days=1&timezone=auto",
      {
        params: {
          latitude: lat,
          longitude: lon,
        },
      }
    );
  }


  async function fetchData() {
    console.log("ab");
    const coord = await checkWeather();
    const x = coord.lon;
    const y = coord.lat;
    
    getWeather2(y, x).then((res) => {
      console.log(res.data);
    });
    
  }
  async function fetchData2() {
    const coord = await checkWeather();
    const x = coord.lon;
    const y = coord.lat;
  getWeather4(y, x).then((res) => {
    console.log(res.data);
  });
  }
  fetchData2();
  fetchData();

  const coord = await checkWeather();
  const x = coord.lon;
  const y = coord.lat;
getWeather3(y, x)
  .then(response => {
    
    var dateToday = today.toISOString().split('T')[0];


    const data = response.data;
    console.log(data);
    var temptomorrow1=Math.round(data.daily.temperature_2m_max[1]);
    document.getElementById('temptommorow1').innerHTML = temptomorrow1+"°c";
    var temptomorrow2=Math.round(data.daily.temperature_2m_max[2]);
    document.getElementById('temptommorow2').innerHTML = temptomorrow2+"°c";
    var temptomorrow3=Math.round(data.daily.temperature_2m_max[3]);
    document.getElementById('temptommorow3').innerHTML = temptomorrow3+"°c";
    var temptomorrow4=Math.round(data.daily.temperature_2m_max[4]);
    document.getElementById('temptommorow4').innerHTML = temptomorrow4+"°c";
    var temptomorrow5=Math.round(data.daily.temperature_2m_max[5]);
    document.getElementById('temptommorow5').innerHTML = temptomorrow5+"°c";
    var temptomorrow6=Math.round(data.daily.temperature_2m_max[6]);
    document.getElementById('temptommorow6').innerHTML = temptomorrow6+"°c";
    var temptomorrow7=Math.round(data.daily.temperature_2m_max[7]);
    document.getElementById('temptommorow7').innerHTML = temptomorrow7+"°c";

    
     // Afficher les données dans la console ou effectuer toute autre opération souhaitée avec les données

  })
  .catch(error => {
    console.error('Une erreur s\'est produite lors de la récupération des informations météorologiques :', error);
  });
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
 
  
  const dayNames = [];
  for (let i = 0; i < 8; i++) {
    const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
    const dayName = daysOfWeek[date.getDay()];
    dayNames.push(dayName);
  }
  var dayname= dayNames[1];
  document.getElementById('dayname').innerHTML = dayname;
  var dayname1= dayNames[2];
  document.getElementById('dayname1').innerHTML = dayname1;
  var dayname2= dayNames[3];
  document.getElementById('dayname2').innerHTML = dayname2;
  var dayname3= dayNames[4];
  document.getElementById('dayname3').innerHTML = dayname3;
  var dayname4= dayNames[5];
  document.getElementById('dayname4').innerHTML = dayname4;
  var dayname5= dayNames[6];
  document.getElementById('dayname5').innerHTML = dayname5;
  var dayname6= dayNames[7];
  document.getElementById('dayname6').innerHTML = dayname6;


const apiKey1 = "eba09a1b0fbf525e99e3534d1a833edd";
const apiUrl1 = "https://api.openweathermap.org/data/2.5/weather?q=sfax&units=metric";

export async function checkWeather5() {
  const response = await fetch(apiUrl1 + `&appid=${apiKey1}`);
  const data = await response.json();
  console.log(data);
  console.log(data.coord);
  return {
    lon: data.coord.lon,
    lat: data.coord.lat,
  };
}


async function fetchData3() {
  const coord = await checkWeather5();
  const x = coord.lon;
  const y = coord.lat;

  return getWeather4(y, x).then((res) => {
    console.log("res.data");
    console.log(res.data);
    
    return res.data;
  });
}
function sendJSONToPHP(file) {
  // Convertir la variable data123 en une chaîne JSON
  var jsonString = JSON.stringify(file);

  // Envoyer les données JSON vers le fichier PHP
  $.ajax({
    type: "POST",
    url: "fetch.php",
    data: { json: jsonString },
    success: function(response) {
      // Gérer la réponse de PHP
      console.log(response);
    }
  });
}
var d123=null;
fetchData3().then((res) => {
  d123=res;
  console.log("d123");
  console.log(d123);
  sendJSONToPHP(d123);

});


/*async function fetchData3() {
    const coord = await checkWeather5();
    const x = coord.lon;
    const y = coord.lat;
  getWeather4(y, x).then((res) => {
    console.log("data");

   return  res.data; 
  });


var data123=fetchData3();
console.log("data123");
console.log(data123);}*/

/*fetchData3().then((data) => {
  data123=data; // The resolved data from the promise
}).catch((error) => {
  console.error(error); // Handle any errors that occurred during the promise chain
});*/

/*




*/
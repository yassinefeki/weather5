const apiKey = "eba09a1b0fbf525e99e3534d1a833edd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=sfax&units=metric";
const response = await fetch(apiUrl + `&appid=${apiKey}`);
const data = await response.json();
  /* elemnts to show in web sites* */
  
  
  

  const temp1= document.getElementById("temp-now");
  temp1.innerHTML=data.main.temp
  const cityname= document.getElementById("city-name");
  cityname.innerHTML=data.name
  var dt = new Date();
  var hours = dt.getHours();
  var minutes = dt.getMinutes();
  var time = hours + ':' + (minutes < 10 ? '0' + minutes : minutes);
  var day = dt.toLocaleString('en-US', { weekday: 'long' });
  var date = dt.toLocaleDateString('en-US', {  month: 'long', day: 'numeric' });
  document.getElementById('day').innerHTML = day;
  document.getElementById('date').innerHTML = date;
  document.getElementById('date-time').innerHTML = time;



  console.log("a");






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
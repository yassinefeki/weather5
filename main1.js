import { getWeather2 } from "./weather2.js";
import { checkWeather } from "./weather1.js";
import { getWeather4 } from "./weather4.js";

async function fetchData() {
  console.log("a");
  const coord = await checkWeather();
  const x = coord.lon;
  const y = coord.lat;
  var temptomorrow1=Math.round(data.daily.temperature_2m_max[1]);
    document.getElementById('temptommorow1').innerHTML = x;
    var temptomorrow2=Math.round(data.daily.temperature_2m_max[2]);
    document.getElementById('temptommorow2').innerHTML = y;

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

import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "../context/LocationContext";

const days = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];

function Weather() {
  const [weatherData, setWeatherData] = useState([]);
  const { location } = useLocation();

  useEffect(() => {
    axios(
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&days=7`
    ).then((response) => {
      setWeatherData(response.data.forecast.forecastday);
      console.log(response);
    });
  }, [location]);

  return (
    <div>
      <br />
      <div className="grid">
        {weatherData.map((data, i) => {
          console.log(`test`, data);
          return (
            <div className={i === 0 ? "today card" : "card"} key={i}>
              <span className="day">
                {i === 0
                  ? "Bugün"
                  : days[new Date(data.date_epoch * 1000).getDay()]}
              </span>
              <br />
              <img src={data.day.condition.icon} />
              <div>{data.day.avgtemp_c}</div>

              <br />
              <div>
                <span className="weather">
                  {Math.round(data.day.maxtemp_c)}&#176;
                  <span className="temps">C</span>
                </span>
                <span>{data.day.mintemp_c}&#176;C</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Weather;

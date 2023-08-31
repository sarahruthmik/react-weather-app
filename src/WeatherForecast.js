import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "4f86aea83o0bad32b69a00tb6fb3bd19";
  let longitude = 40.7;
  let latitude = 74;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col forecast-day">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
              alt="Broken clouds"
            />
            <div className="WeatherForecast-temp">
              <span className="maxTemperature">80°</span>
              <span className="minTemperature">68°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

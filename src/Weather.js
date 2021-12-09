import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>{" "}
      const apiKey = "04e088e25ccb622f4891c5136c21db30"; let apiUrl
      =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=$
      {apiKey}
      &units=metric`; axios.get(apiUrl).then(handleResponse);
      <h1>New York</h1>
      <ul>
        <li>Wed 7:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="floatleft">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Partly CLoudy"
              />

              <span className="Temperature">6°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:72%</li>
            <li>Wind Speed:13m/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

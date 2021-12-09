import React from "react";
import "./Weather.css";

export default function weather() {
  return (
    <div className="weather">
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

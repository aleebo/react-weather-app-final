import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather React App</h1>
        <Weather defaultCity="New York" />
        <footer>
          This project is coded by Alicia Vuong and is
          <a
            href="https://github.com/aleebo/react-weather-app-project-one"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on Github
          </a>{" "}
          and
          <a
            href="https://stoic-tereshkova-5e23b5.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}

import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Application</h1>
        <Weather />
        <footer>
          This project was coded by Sarah Mikulski and is{" "}
          <a
            href="https://github.com/sarahruthmik/react-weather-app.git"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

import React from "react";
import {
  FaTemperatureHigh,
  FaTemperatureLow,
  BiArrowBack
} from "react-icons/fa";
import "./Weather.css";
const Weather = (props) => {
  function reset() {
    props.setData();
  }

  return (
    <div id="first">
      <div id="second">
        <h1>Current weather of {props.input}</h1>

        <div className="weatherreport">
          <div>
            <span>
              {" "}
              {props.input}, {props.Data.sys.country}
            </span>
          </div>
          <div>
            <span>{props.Data.weather[0].main}</span>
          </div>
          <div>
            <span>temp: {props.Data.main.temp} </span> <FaTemperatureLow />
          </div>
          <div>
            <span>temp_max: {props.Data.main.temp_max}</span>{" "}
            <FaTemperatureHigh />
          </div>
          <div>
            <span>temp_min: {props.Data.main.temp_min}</span>{" "}
            <FaTemperatureLow />
          </div>
          <div>
            <span>humidity: {props.Data.main.humidity} %</span>
          </div>
        </div>
        <button style={{ marginTop: "50px" }} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default Weather;

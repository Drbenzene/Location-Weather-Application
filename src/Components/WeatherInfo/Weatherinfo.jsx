import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../Contex";
import styles from "./WeatherInfo.module.css";
import {GoLocation} from 'react-icons/go'
import {MdDateRange} from 'react-icons/md'
import {WiDayCloudyGusts, WiDayCloudyHigh} from 'react-icons/wi'

function Weatherinfo() {
  const store = useContext(GlobalContext);
  const { Loading, weatherCondition, town } = store;
  console.log(weatherCondition, "On Weatherinfo");

  console.log(weatherCondition.humidity)
  useEffect(() => {

  })
  //Conversion from Unix utc to local time

    const local = new Date();
    console.log(local.toLocaleString("en-US", {timeZoneName: "short"}))  

  return (
    <>
    {weatherCondition.length !== 0 ? (
              <div className="d-flex justify-center item-center m-5">
              <div className="container">
                <div className="weather-side">
                  <div className="weather-gradient" />
                  <div className="date-container">
                    <h2 className="date-dayname">{new Date(weatherCondition.current.dt * 1000).toLocaleString("en-US", {weekday: "long"}) }</h2>
                    <MdDateRange />
                    <span className="date-day">{`${new Date(weatherCondition.current.dt * 1000).toLocaleString("en-US", {month: "long"})} ${local.toLocaleString("en-US", {day: "numeric"})} ${local.toLocaleString("en-US", {year: "numeric"})}`}</span>
                    <i className="location-icon" data-feather="map-pin" />
                    <GoLocation />
                    <span className="location">{town} - {weatherCondition.timezone}</span>

                    {/* <span className="date-day">{`${new Date(weatherCondition.current.dt * 1000).toLocaleString("en-US", {hour: "numeric"})} ${local.toLocaleString("en-US", {minutes: "numeric"})} : ${local.toLocaleString("en-US", {second: "numeric"})}`}</span> */}

                  </div>
                  <div className="weather-container">
                    <i className="weather-icon" data-feather="sun" />
                    < WiDayCloudyHigh size={30} />
                    <h1 className="weather-temp">{(weatherCondition.current.feels_like -  273.15).toFixed()}°C</h1>
                    {weatherCondition.current.weather.map((item, index) => (
                        <h3 key={item.length} className="weather-desc">{item.main}</h3>
                    ))}
                  
                  </div>
                </div>
                <div className="info-side">
                  <div className="today-info-container">
                    <div className="today-info">
                      <div className="precipitation">

                        <span className="title">CLOUDINESS</span>
                        <span className="value">{weatherCondition.current.clouds} %</span>
                        <div className="clear" />
                      </div>
                      <div className="humidity">

                        <span className="title">HUMIDITY</span>
                        <span className="value">{weatherCondition.current.humidity} %</span>
                        <div className="clear" />
                      </div>
                      <div className="wind">
                        <span className="title">WIND</span>
                        <span className="value">{weatherCondition.current.wind_deg} km/h</span>
                        <div className="clear" />
                      </div>
                    </div>
                  </div>
                  <div className="week-container">
                    <ul className="week-list">
                    {weatherCondition.daily.slice(0, 4).map((item, index) => (
                              <li key = {item.pop}>
                               <WiDayCloudyGusts size={20} />
                               <span className="day-name">{new Date(item.dt * 1000).toLocaleString("en-US", {weekday: "long"})}</span>
                                <span className="day-temp">{(item.feels_like.day - 273.15).toFixed()}°C</span>
                                </li>
                      ))}
                      <div className="clear" />
                    </ul>
                  </div>
                  <div className="location-container">
                    <button className="location-button">
                      {/* <GoLocation /> */}
                      <span>Change location</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
    ) : ""}

    </>

  );
}

export default Weatherinfo;

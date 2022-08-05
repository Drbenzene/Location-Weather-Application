import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import cities from "cities.json";
import Weatherinfo from "../WeatherInfo/Weatherinfo";
import Loading from "../Loading/Loading";
import { GlobalContext } from "../../Contex";
import styles from "./Home.module.css";
import Header from "../Header/Header";

function Home() {
  const store = useContext(GlobalContext);

  const { city, weatherHandler, changeHandler, weatherCondition, loading, weatherFetch, setCity } =
    store;
    
  console.log(weatherCondition.lat, "On Home");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error)

    function success(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      weatherFetch(lat, lon);
    }

    function error () {
      console.log("Access Denied");
    }
  }, []);


  return (
    <div className="">
      <Header />

      <div className={styles.search}>
        <div>
          <h3 className="text-3xl"></h3>
        </div>
        
        <div>
        <input
          value={city}
          onChange={changeHandler}
          type="text"
          placeholder="Enter Your Location or Latitude Here"
        />
      </div>

      <div>
        
      <button onClick={weatherHandler}> SEARCH</button>

{loading === false ? <Loading /> : ""}
      </div>

      </div>

      <Weatherinfo />
    </div>
  );
}

export default Home;

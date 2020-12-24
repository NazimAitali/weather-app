import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import Navbar from "../../navBar";
import Cards from "../../card";
const Content = () => {
  const [city, setCity] = useState("Algiers");
  const [error, setErr] = useState(Boolean);
  const [loading, setLoading] = useState(Boolean);
  const [data, setData] = useState(null);

  const updateCity = (text) => {
    setCity(text);
  };

  const getWeather = async () => {
    setErr(false);
    setLoading(true);
    try {
      const EndPoint = "http://api.weatherapi.com/v1/forecast.json";
      const key = "cb29ec2d3c3e49559e7153521202212";
      const response = await axios.get(
        `${EndPoint}?key=${key}&q=${city}&days=3&lang=fr`
      );
      setLoading(false);
      setData(response.data);
    } catch (err) {
      setErr("error");
      setLoading(false);
      setData(null);
    }
  };
  useEffect(() => {
    getWeather();
  }, []);
  console.log(data);
  return (
    <div className="center column maxW maxH">
      <Navbar updateCity={updateCity} getWeather={getWeather} />
      <Cards loading={loading} error={error} data={data} />
      <div className="center today">{moment().format("LLLL")}</div>
    </div>
  );
};

export default Content;

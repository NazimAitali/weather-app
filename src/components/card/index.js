import React from "react";
import moment from "moment";
import {
  WiCelsius,
  WiRaindrops,
  WiRaindrop,
  WiStrongWind,
  WiWindDeg,
  WiBarometer,
} from "react-icons/wi";
const Cards = ({ loading, error, data }) => {
  return (
    <div className="center column maxW maxH card-container">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>ERROR</div>
      ) : data ? (
        <div className="center column details-weather">
          <div className="center maxW city-name">{data.location.name}</div>
          <div className="center maxW weather-top">
            <div className="center column weather-top-left">
              <div className="center maxW day">{moment().format("dddd")}</div>
              <div className="center maxW column weather-detail">
                <div className="center">
                  <WiRaindrop className="détails-icons" />
                  <div>{data.current.humidity} %</div>
                  <WiRaindrops className="détails-icons" />{" "}
                  <div>{data.current.precip_mm} Mm</div>
                </div>
                <div className="center">
                  <WiStrongWind className="wind" />{" "}
                  <div>{data.current.wind_kph} Km/h</div>
                </div>
                <div className="center">
                  <WiWindDeg className="wind" />{" "}
                  <div>{data.current.wind_dir}</div>
                </div>
                <div className="center">
                  <WiBarometer className="wind" />
                  <div>{data.current.pressure_mb} Mb</div>
                </div>
              </div>
            </div>
            <div className="center weather-top-right">
              <div className="center column img">
                <img src={data.current.condition.icon} alt="icone"></img>
              </div>
              <div className="center column condition-container">
                <div className="center temp">
                  {data.current.temp_c > 0
                    ? `+ ${data.current.temp_c}`
                    : data.current.temp_c === 0
                    ? `${data.current.temp_c}°`
                    : ` ${data.current.temp_c}°`}
                  <WiCelsius className="celsus" />
                </div>
                <div className="center condition">
                  {data.current.condition.text}
                </div>
              </div>
            </div>
          </div>
          <div className="center maxW weather-bottom">
            {data.forecast.forecastday.map((forecast, i) => (
              <div index={i} className="center column forecast-items">
                <div className="center">
                  <img src={forecast.day.condition.icon} alt="icone"></img>
                </div>
                <div className="center">
                  <div className="center maxW forecast-day">
                    {moment(forecast.date).format("dddd")}
                  </div>
                </div>
                <div className="center">
                  <div className="center forecast-temp">
                    {forecast.day.maxtemp_c > 0
                      ? `+ ${Math.round(forecast.day.maxtemp_c)}`
                      : forecast.day.maxtemp_c === 0
                      ? `${Math.round(forecast.day.maxtemp_c)}°`
                      : ` ${Math.round(forecast.day.maxtemp_c)}°`}
                    <WiCelsius className="celsus" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>no data</div>
      )}
    </div>
  );
};

export default Cards;

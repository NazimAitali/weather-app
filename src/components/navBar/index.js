import React from "react";
import { Input } from "antd";
const { Search } = Input;

const Navbar = ({ updateCity, getWeather }) => {
  return (
    <div className="center column maxW search-container">
      <div className="center search-bar">
        <Search
          placeholder="input search text"
          onChange={(e) => updateCity(e.target.value)}
          onSearch={() => getWeather()}
        />
      </div>
    </div>
  );
};

export default Navbar;

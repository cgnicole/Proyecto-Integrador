import React from "react";
import SearchBar from "./SearchBar";
import "./styles/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar({ onSearch, Exit }) {
  const randomId = Math.floor(Math.random() * 826);
  return (
    <div className="nav">
      <div>
        <img
          className="rick"
          src={require("../img/rick.png")}
          alt="nicole"
        ></img>
      </div>

      <button className="random" onClick={() => onSearch(randomId)}>
        Random
      </button>

      <Link to="/home">
        <button className="home">Home</button>
      </Link>

      <Link to="/about">
        <button className="about">About</button>
      </Link>
      <Link to="/favorites">
        <button className="favorites">Favorites</button>
      </Link>

      <button onClick={Exit} className="exit">
        Exit
      </button>

      <SearchBar onSearch={onSearch} />
    </div>
  );
}

// const randomId = Math.floor(Math.random() * 826);

// <button  onClick={() => onSearch(randomId)}>
//   Random Character
// </button>;

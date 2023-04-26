import React from "react";
// import "./styles/About.css";

import "../styles/About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about_container">
      <div>
        <Link to={`/home`}>
          <button className="btn">Return</button>
        </Link>
      </div>
      <div>
        <img
          className="gif"
          src={require("../img/Nicole.gif")}
          alt="nicole"
        ></img>
      </div>
      <div>
        <img
          className="img"
          src={require("../img/avatar.png")}
          alt="nicole"
        ></img>
      </div>
      <div className="contenedor">
        <p>Hi! My name is Nicole!</p>
        <p>
          I'm the creator of this page, here you can find Rick & Mortys'
          characters, you could search for them by their ID also you can check
          for extra information if you click on the characters' names!
        </p>

        <p>
          I hope you liked my work! bye!!! 🥰
          <style></style>
        </p>

        <a href="https://github.com/cgnicole" rel="noopener">
          <img
            className="github"
            src={require("../img/github.png")}
            alt="nicole"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/nicole-sofia-camargo-garcia-189648265/"
          rel="noopener"
        >
          <img
            className="linkedin"
            src={require("../img/linkedin.png")}
            alt="nicole"
          ></img>
        </a>
        <a href="https://www.instagram.com/nicoletta.chin/" rel="noopener">
          <img
            className="insta"
            src={require("../img/insta.png")}
            alt="nicole"
          ></img>
        </a>
      </div>

      <div className="general">
        <div className="size">
          <h3 className="dato">Status 💖</h3>
          <p>⬇️</p>
          <p className="rta "> In love </p>
        </div>

        <div className="size">
          <h3 className="dato">Specie 🐱</h3>
          <p>⬇️</p>

          <p className="rta "> Cat </p>
        </div>

        <div className="size">
          <h3 className="dato">Origin 🌎</h3>
          <p>⬇️</p>

          <p className="rta "> Earth </p>
        </div>

        <div className="size">
          <h3 className="dato">Location 📍</h3>
          <p>⬇️</p>

          <p className="rta "> Colombia</p>
        </div>

        <div className="size">
          <h3 className="dato">Evil 👻</h3>
          <p>⬇️</p>

          <p className="rta "> 20% </p>
        </div>
      </div>
    </div>
  );
}

//Gender Origin Location Evil

/* <div className="respuertas">
        <button>In Love</button>
        <button>Cat</button>
        <button>Earth</button>
        <button>Colombia</button>
        <button>70%</button>
      </div> */

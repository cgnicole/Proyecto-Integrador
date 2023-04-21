import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./styles/Detail.css";
import { Link } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <div className="namedatil">
        <h2> Name | {character.name}</h2>
      </div>
      <div className="flexbutton">
        <Link to={`/home`}>
          <button className="btn2">Return</button>
        </Link>
      </div>
      <div className="containerinfoandimg">
        <div className="informationdetail">
          <h2>🛸 Status | {character.status}</h2>
          <h2>👽 Species | {character.species}</h2>
          <h2>👩🏻‍🚀 Gender | {character.gender}</h2>
          <h2>🪐 Origin | {character.origin?.name}</h2>
        </div>
        <div>
          <img
            className="imgdetail"
            src={character.image}
            alt={character.name}
          />
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import About from "./components/About";
import Detail from "./components/Detail";
import Favorites from "./components/Favorites";

import { useLocation, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "sofi@gmail.com";
  const PASSWORD = "Sofia1234.$";

  const [characters, setCharacters] = useState([]);

  const Location = useLocation();

  function login(inputs) {
    if (inputs.password === PASSWORD && inputs.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  function Exit() {
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          let existe = characters.find((ch) => ch.id === data.id);
          if (existe) {
            alert("ya existe");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onClose(id) {
    setCharacters((oldChars) => {
      return oldChars.filter((ch) => ch.id !== id);
    });
  }

  return (
    <div className="App">
      {Location.pathname === "/" ? null : (
        <NavBar Exit={Exit} onSearch={onSearch} />
      )}

      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/favorites"
          element={<Favorites onClose={onClose} />}
        ></Route>

        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

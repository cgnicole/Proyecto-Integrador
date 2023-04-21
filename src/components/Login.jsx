import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Login.css";

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;

export default function Login({ login }) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  function validate(inputs) {
    const errors = {};

    if (!inputs.email) {
      errors.email = (
        <div className="obligatoriE">The email field is required</div>
      );
    } else if (inputs.email.length > 35) {
      errors.email = (
        <div className="obligatoriE"> Cannot exceed 35 characters</div>
      );
    } else if (!regexEmail.test(inputs.email)) {
      errors.email = <div className="obligatoriE">invalid email </div>;
    } else if (!regexPassword.test(inputs.password)) {
      errors.password = (
        <div className="obligatoriE">
          It must have at least one uppercase letter, one digit, one special
          character, and a length of at least 6 characters and no more than 10
          characters.
        </div>
      );
    }

    return errors;
  }

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.value,
      })
    );
  }
  function handleSubmit(e) {
    e.prevent.default();
    const aux = Object.keys(errors);
    if (aux.length === 0) {
      // enviamos fafafafaf
      setInputs({
        email: "",
        password: "",
      });
      setErrors({
        email: "",
        password: "",
      });
      login(inputs);
      return alert("OKKKKKKK");
    }
    return alert("Error");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <img
          className="imgbienvenida"
          src="https://www.pngplay.com/wp-content/uploads/10/Rick-And-Morty-Transparent-Background.png"
          alt="imagen bienvenida"
        />

        <div className="margen">
          <label className="labelText">Email: </label>
          <input
            class="input-estilo"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            placeholder="Write your Email"
          ></input>
        </div>
        <p className="danger">{errors.email}</p>
        <label className="labelText2">Password: </label>
        <input
          class="input-estilo"
          name="password"
          value={inputs.password}
          onChange={handleChange}
          placeholder="Write your Password"
        ></input>
        <p className="danger">{errors.password}</p>
        {/* {Object.keys(errors).length === 0 ? ( */}
        <Link to="/home">
          <button className="btnLog" type="submit">
            Ingresar
          </button>
        </Link>
        {/* ) : null} */}
      </form>
    </div>
  );
}
/*
Una etiqueta form que envolverá a todo el componente.
Una etiqueta label junto con un input para el email.
Una etiqueta label junto con un input para la password.
Un button con el texto "Submit".
*/

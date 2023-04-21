import { useState } from "react";
import "./styles/SearchBar.css";

export default function SearchBar({ onSearch }) {
  //console.log("####", onSearch);
  const [id, setId] = useState("");

  function handleChange(event) {
    console.log("input value", event.target.value);

    setId(event.target.value);
  }

  return (
    <div className="bar">
      <input
        onChange={handleChange}
        type="search"
        name="search"
        value={id}
        className="searchInput"
      />

      <button className="searchButton" onClick={() => onSearch(id)}>
        Agregar
      </button>
    </div>
  );
}

import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((direct, index) => {
        return (
          <div key={index}>
            <h2>{direct.name}</h2>
            <ul>
              {direct.movies.map((movie, index) => {
                return (<li key={index} >{movie}</li>)
              })}
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Directors;
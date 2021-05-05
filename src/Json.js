import React, { Component } from "react";
import data from "./data.json";

class Json extends Component {
  render() {
    return (
      <div>
        <h2 className="jsonOtsikko">JSON datan esittäminen sivulla</h2>
        {data.Donuts.map((donut, i) => {
          return (
            <div key={i}>
              <div className="card">
                <h1>{donut.name}</h1>
                <img src={donut.img} alt={donut.name} width="300"></img>
                <p className="Price">${donut.ppu}</p>
                <hr></hr>
                <h2>Batters</h2>
                <ul>
                  {donut.batters.batter.map((batteri, i) => (
                    <li key={i}>{batteri.type}</li>
                  ))}
                </ul>
                <hr></hr>
                <h2>Topping</h2>
                <ul>
                  {donut.topping.map((toppi, i) => (
                     <li key={i}>{toppi.type}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Json;

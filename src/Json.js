import React, { Component } from "react";
import data from "./data.json"

class Json extends Component {
    render() {
        return (
            <div>
                <h2 className="jsonOtsikko">Lista Hämähäkkimiehen vihollisista</h2>
                {
                    data.Enemies.map((enemy, i) => {
                        return (
                            <div key={i}>
                                <div className="card">
                                    <h1>{enemy.name}</h1>
                                    <img src={enemy.icon} alt={enemy.name}></img>
                                    <p className="price">{enemy.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Json;
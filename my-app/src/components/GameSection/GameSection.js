import React, { Component } from "react";
import "./GameSection.css";
import characters from "../characters.json";

class GameSection extends Component {
  // Setting the initial state of the Counter component
  state = {
    characters
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="box">
        {this.state.characters.map(character => (
          // <h1>{character.name}</h1>

          <img
            className="col-md-2"
            src={character.image}
            alt="{character.name}"
            id="{character.id}"
          />
        ))}
      </div>
    );
  }
}

export default GameSection;

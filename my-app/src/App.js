import React, { Component } from "react";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import GameSection from "./components/GameSection/GameSection";
import Footer from "./components/Footer/Footer";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";
// import characters from "components/characters.json";

class App extends Component {
  state = {
    // characters,
    counter: 0,
    topScore: 0,
    clickedCharacters: []
  };

  // const { counter, topScore } = this.state;
  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <GameSection />
        <Footer />
      </div>
    );
  }
}

export default App;

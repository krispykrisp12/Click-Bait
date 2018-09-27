import React, { Component } from "react";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import GameSection from "./components/GameSection/GameSection";
import Footer from "./components/Footer/Footer";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";

class App extends Component {
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

import React from "react";
import v4 from "uuid/v4";
import "./style.css";
import Header from "../Header/index";
import AppBody from "../AppBody/index";

class App extends React.Component {
  render() {
    return <div className="App" id={v4()}>
        <Header headerLogo="Movie Mate" />
        <AppBody />
      </div>;
  }
}

export default App;

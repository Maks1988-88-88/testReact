import React from "react";
import "./style.css";

class MovieCardCollection extends React.Component {
  render() {
    const { children } = this.props;
    return <div className="MovieList">{children}</div>;
  }
}

export default MovieCardCollection;

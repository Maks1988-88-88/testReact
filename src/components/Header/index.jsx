import React from "react";
import v4 from "uuid/v4";
import PropTypes from "prop-types";
import "./style.css";

const navNames = ["Login", "Browse", "About"];

class Header extends React.Component {
  navName = navNames.map(nav => (
    <li className="Navigation__item" key={v4()}>
      <a href="http://localhost:3000/" className="Navigation__link">
        {nav}
      </a>
    </li>
  ));
  render() {
    const { headerLogo } = this.props;

    return (
      <header className="Header">
        <h1 className="Header__logo">{headerLogo}</h1>
        <ul className="Navigation">{this.navName}</ul>
      </header>
    );
  }
}

Header.propTypes = {
  headerLogo: PropTypes.string.isRequired
};

export default Header;

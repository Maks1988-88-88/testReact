import React from "react";
import PropTypes from "prop-types";
import "./style.css";

class AppSidebar extends React.Component {
  static propTypes = {
    Categories__btn: PropTypes.func.isRequired,
    SearchForm: PropTypes.func.isRequired
  };
  state = {
    InputValues: ""
  };

  _searchValues = evt => {
    let name = evt.target.name;
    this.props.Categories__btn(name);
  };

  _searchInputValues = evt => {
    let value = evt.target.value;
    const name = evt.target.name;
    this.setState({
      [name]: value
    });
  };

  _searchInputValuesonSubmit = evt => {
    evt.preventDefault();
    const { InputValues } = this.state;
    this.props.SearchForm(InputValues);
    this.setState({
      InputValues: ""
    });
  };

  render() {

    const { InputValues } = this.state;
    const { children } = this.props;

    return (
      <div className="App__sidebar">
        <form
          className="SearchForm"
          onSubmit={this._searchInputValuesonSubmit}
        >
          <input
            type="text"
            className="SearchForm__input"
            name="InputValues"
            value={InputValues}
            onChange={this._searchInputValues}
            placeholder="Search for movies by name..."
          />
          <button className="SearchForm__btn" type="submit">
            search
          </button>
        </form>
        <div className="SearchCategories">
          <button
            className="SearchCategories__btn"
            name="popular"
            onClick={this._searchValues}
          >
            popular
          </button>
          <button
            className="SearchCategories__btn"
            name="top_rated"
            onClick={this._searchValues}
          >
            top rated
          </button>
          <button
            className="SearchCategories__btn"
            name="upcoming"
            onClick={this._searchValues}
          >
            upcoming
          </button>
        </div>

        <div className="Watchlist">
          <h2 className="Watchlist__title">Watchlist</h2>
          {children}
        </div>
      </div>
    );
  }
}

export default AppSidebar;

import React, { Component } from 'react';
import "./style.css";
import PropTypes from 'prop-types';

class WatchlistCard extends Component {
  render() {
       const {
         rating,
         img,
         tittle,
         release_date,
         onClick
       } = this.props;
         return (
           <div className="WatchlistCard">
             <img className="WatchlistCard__img" src={img} alt="img" />
             <div className="WatchlistCard__body">
               <h3 className="WatchlistCard__title">{tittle}</h3>
               <p className="WatchlistCard__release">
                 Released:{release_date}
               </p>
               <p className="WatchlistCard__rating">Rating:{rating}</p>
               <button className="WatchlistCard__btn" onClick={onClick}>
                 -
               </button>
             </div>
           </div>
         );
  }
}

WatchlistCard.propTypes = {
  tittle: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default WatchlistCard;
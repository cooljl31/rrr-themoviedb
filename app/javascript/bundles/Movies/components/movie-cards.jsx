import PropTypes from 'prop-types';
import React from 'react';

export default class MovieCards extends React.Component {
  render() {
    var items = this.props
    const cards = Object.values(items).map((item =>
      <div key={item.id} className="movie-card m-3">
        <div className="movie-header img-fluid">
          <img className="w-100" src={'https://image.tmdb.org/t/p/w400' + item.poster_path} alt={item.original_title} />
        </div>
        <div className="movie-content">
          <div className="movie-content-header">
            <h3 className="movie-title">{item.title}</h3>
          </div>
          <div className="movie-info">
            <div className="info-section">
              <label>Release date</label>
              <span>{item.release_date}</span>
            </div>
            <div className="info-section">
              <label>Popularity</label>
              <span>{item.popularity}</span>
            </div>
            <div className="info-section">
              <label>Vote Average</label>
              <span>{item.vote_average}</span>
            </div>
          </div>
        </div>
      </div>));

    return (
      <div>
          {cards}
      </div>
    );
  }
}
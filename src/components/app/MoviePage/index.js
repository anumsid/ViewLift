import React from "react";
import "./index.scss";

class MoviePage extends React.Component {
  constructor() {
    super();
    this.state = { films: [] };
  }

  componentDidMount() {
    fetch("http://www.snagfilms.com/apis/films.json?limit=10")
      .then(res => res.json())
      .then(data => this.setState({ films: data.films.film }));
  }

  render() {
    const { films } = this.state;
    /* eslint-disable react/jsx-indent, indent */
    return films.length > 0
      ? (
          <div className="film-wrapper">
            {
              films.map(film => (
                <div className="film" key={film.id}>
                  <h3>{film.title}</h3>
                  <img className="film-image" src={film.images.image[0].src} alt="Some film" />
                </div>
              ))
            }
          </div>
        )
      : <div className="loader"><i className="fas fa-7x fa-spinner" /></div>;
  }
}

export default MoviePage;

import React, { Component } from "react";
import "../App.css";
import MovieCard from "../components/movieCard.js";

class Card extends Component {
  clicked() {
    console.log(2);
  }
  render() {
    return (
      <div className="row">
        {this.props.items.map(element => (
          <div className="col-4 mb-4">
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500${element.backdrop_path}`}
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h6 className="card-title">{element.title}</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0">Rating: {element.vote_average}</p>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={this.clicked()}
                  >
                    Will Watch
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Card;

import React, { Component } from "react";
import MovieCard from "./components/movieCard.js";
import WatchList from "./components/WatchList"
import "./App.css";


class App extends Component {

  constructor() {
    super();

    this.state = {
      moviesWillWatch: []
    };
  }

  addMovieToWillWatch = movie => {
    this.setState(prevState => ({
      moviesWillWatch: [...prevState.moviesWillWatch, movie]
    }));
   

  };

  removeMovieFromWillWatch = movie => {
    this.setState(prevState => ({
      moviesWillWatch: prevState.moviesWillWatch.filter(
        item => item.id !== movie.id
      )
    }));
  };

render() {
  const { moviesWillWatch } = this.state;
  return (   
      <div className="App">
        <div className="container">
        <div className="row mt-4">
          <div className="col-9">
              <MovieCard       
              addMovieToWillWatch={this.addMovieToWillWatch}
              removeMovieFromWillWatch={this.removeMovieFromWillWatch}/>   
              </div>   
            <div className="col-3">
              <WatchList moviesWillWatch={moviesWillWatch} />
            </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;

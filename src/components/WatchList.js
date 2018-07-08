import React, { Component } from "react";
import "../App.css";

class WatchList extends Component { 
    render() {
            let {moviesWillWatch} = this.props;
            console.log(moviesWillWatch)

        return( 
              <div style={{ position: "fixed" }}>
                <h4>Will Watch: { moviesWillWatch.length} movies</h4>
                <ul className="list-group">
                  { moviesWillWatch.map( element => (
                    <li className="list-group-item">
                      <div className="d-flex justify-content-between">
                        <div>{element.name}</div>
                        <div>{element.rating}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
        )
    }
}

export default WatchList ;
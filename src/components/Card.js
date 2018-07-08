import React, { Component } from "react";
import "../App.css";


class Card extends Component { 
    constructor(props) {
        super(props);
    
        this.state = {
          willWatch: false
        }
      }

      changeWillWatch = () => {
        const { addMovieToWillWatch, removeMovieFromWillWatch, item } = this.props;

        this.state.willWatch
          ? removeMovieFromWillWatch(this.props)
          : addMovieToWillWatch(this.props);
        //   console.log(this.props)
        this.setState(prevState => ({
          willWatch: !prevState.willWatch
        }));
        
      };

    render() {
        const  item  = this.props;
        const { willWatch } = this.state;
    
        return(       
                <div className="col-4 mb-4" key={item.id}>
                 <div className="card" keys={item.keys} >
               <img
                src={item.img}
                alt=""
                className="card-img-top"
              />
               <div className="card-body">
                 <h6 className="card-title">{item.name}</h6>
                <div className="d-flex justify-content-between align-items-center">
                   <p className="mb-0">Rating: {item.rating}</p>
                   <button
                    type="button"
                    className={`btn ${willWatch ? "btn-success" : "btn-secondary"}`}
                    onClick={this.changeWillWatch}
                  >
                    Will Watch 
                  </button> 
                 </div>
               </div>
           </div>
        </div>
        )
    }
}

export default Card;
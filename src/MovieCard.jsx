import React from "react";
import Image from "./400.png";

const MovieCard = ({props}) => {
    return (
        <div className="movie">

          <div>
            <p>{props.Year}</p>
          </div>

          <div>
            <img src={props.Poster !== 'N/A' ? props.Poster : Image} alt="poster" />
          </div>

          <div>
            <span>{props.Type}</span>
            <h3>{props.Title}</h3>
          </div>

        </div>
    )
}

export default MovieCard;
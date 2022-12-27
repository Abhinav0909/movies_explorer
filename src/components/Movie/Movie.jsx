import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./Movie.css";
const Movie = ({ movie }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="movie">
      <div className="overlay">
        <img
          className="image"
          onClick={() => setShow(true)}
          src={`${process.env.REACT_APP_IMAGE_URI}` + movie.poster_path}
          alt={movie.path}
        ></img>
        <Modal onClose={() => setShow(false)} show={show} movie={movie} />
        <div>
          <h3 className="movies-title">
            {movie.title.length < 30
              ? movie.title
              : movie.title.substring(0, 20).concat("........")}
          </h3>
          <p className="movies-vote">{movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
};
export default Movie;

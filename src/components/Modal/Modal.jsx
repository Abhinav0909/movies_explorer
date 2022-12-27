import React from "react";
import "./Modal.css";
const Modal = ({ onClose, show, movie }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-body">
          <div className="modal-details">
            <p className="modal-title">{movie.title}</p>
            <img
              src={`${process.env.REACT_APP_IMAGE_URI}` + movie.poster_path}
              alt={movie.path}
            ></img>
          </div>
          <div className="modal-description">
            <p className="modal-release">
              <span>Release Date:</span>
              {movie.release_date}
            </p>
            <p className="modal-overview">{movie.overview}</p>
            <p className="modal-vote">
              <span>{movie.vote_average}</span>/10
            </p>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>X</button>
        </div>
      </div>
    </div>
  );
};
export default Modal;

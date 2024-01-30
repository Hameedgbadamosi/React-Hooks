import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    margin: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const imgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  const infoStyle = {
    padding: "10px",
  };

  return (
    <Link to={`movie/${movie.rating}`}>
      <div style={cardStyle}>
        <img src={movie.posterURL} alt={movie.title} style={imgStyle} />
        <div style={infoStyle}>
          <h2 style={{ margin: "10px 0", color: "teal" }}>{movie.title}</h2>
          <p>{movie.description}</p>
          <p>Rating: {movie.rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;

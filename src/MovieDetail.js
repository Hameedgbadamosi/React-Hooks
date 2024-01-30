import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "./movies.json"; // Import your movie data

const MovieDetail = () => {
  const { rating } = useParams();
  const movie = data.movies.find(
    (movie) => movie.rating === parseFloat(rating)
  );

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title={`${movie.title} Trailer`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link to="/" className="back-button">
        Back to Home
      </Link>
    </div>
  );
};

export default MovieDetail;

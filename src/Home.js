import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import data from "./movies.json"
import "./App.css"

const Home = () => {
  const [movies, setMovies] = useState(data.movies);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filterMovies = ({ title, rating }) => {
    const filteredMovies = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating >= rating
    );
    setMovies(filteredMovies)
  };

  const appStyle = {
    textAlign: 'center',
    fontFamily: 'Arial',
    padding: '20px',
  };

  return (
    <div style={appStyle}>
      <h1 style={{ color: 'teal' }}>Movie App</h1>
      <Filter onFilter={filterMovies} />
      <MovieList movies={movies} />
      <button
        onClick={() =>
          addMovie({
            title: 'New Movie',
            description: 'A new movie.',
            posterURL: 'https://example.com/newmovie.jpg',
            rating: 3.0,
          })
        }
        style={{
          backgroundColor: 'teal',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Add Movie
      </button>
    </div>
  );
};

export default Home;

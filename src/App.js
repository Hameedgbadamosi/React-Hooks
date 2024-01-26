import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller.',
      posterURL: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_af.jpg',
      rating: 4.5,
    },
    {
      title: 'The WOMAN KING',
      description: 'Best of Action movies.',
      posterURL: 'https://hips.hearstapps.com/hmg-prod/images/best-action-movies-the-woman-king-1675183833.jpeg',
      rating: 5.0,
    },
    {
      title: 'DOUBLE WORD',
      description: 'Asian Action Movie.',
      posterURL: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABT9lendW4zMiRs8h3AIMDi4XhcI4kTwcDE7AqiU5GdYU0OqYTEz7CsdXC9PAD01QekJGuJaAZdiWtqP6am9nf25xOJVorDeNToQ.jpg?r=1a4',
      rating: 4.8,
    },
    {
      title: 'TITANIC',
      description: 'Best Romantic Movie.',
      posterURL: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1585756729-51gzsEmoYlL.jpg?crop=1.00xw:0.836xh;0,0.0540xh&resize=980:*',
      rating: 5.8,
    },
    
    // Add more movies as needed
  ]);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filterMovies = ({ title, rating }) => {
    const filteredMovies = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating >= rating
    );
    console.log('Filtered Movies:', filteredMovies);
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

export default App;

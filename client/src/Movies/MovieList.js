import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const NavStyle = styled.nav`
  text-decoration: none;
`

const linkStyle = {
  textDecoration: "none"
}

export default function MovieList(props) {
  return (
    <div className="movie-list">
      <NavStyle>
      {props.movies.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id} style={linkStyle}>
        <MovieDetails key={movie.id} movie={movie} />
        </Link>
      ))}
      </NavStyle>
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}

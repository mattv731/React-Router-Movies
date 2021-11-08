import React from 'react';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';


export default function SavedList(props) {

  const history = useHistory();

  const routeToHome = () => {
    
  }
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <Link className="home-button" to={`/`}>Home</Link>
    </div>
  );
}

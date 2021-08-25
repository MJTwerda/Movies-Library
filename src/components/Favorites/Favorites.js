import React from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {removeFavouriteMovie} from '../../actions/index.js'

export default function Favorites() {
  const favoritas = useSelector(state => state.favouritesMovies);
  const dispatch = useDispatch();

  return(
    <div>
      <h4>FAVORITAS</h4>
      <ul>
        {favoritas?.map(fav =>
        <h4>
        <Link to={`movie/${fav.id}`}>
        {fav.title}
        </Link>
        <button onClick={() => dispatch(removeFavouriteMovie(fav.id))}>X</button>
        </h4>
        )}
      </ul>
    </div>
  )
}

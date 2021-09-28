import React from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {removeFavouriteMovie} from '../../actions/index.js'
import style from './Favorites.module.css';

export default function Favorites() {
  const favoritas = useSelector(state => state.favouritesMovies);
  const dispatch = useDispatch();

  return(
    <div className={style.favContainer}>
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

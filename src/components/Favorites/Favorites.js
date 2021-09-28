import React from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {removeFavouriteMovie} from '../../actions/index.js'
import style from './Favorites.module.css';

export default function Favorites() {
  const favoritas = useSelector(state => state.favouritesMovies);
  const dispatch = useDispatch();

  if (favoritas.length === 0) {
    return(
      <div className={style.sinFav}></div>
    )
  }

  return(
    <div className={style.favContainer}>
      <ul>
        {favoritas?.map(fav =>
          <div className={style.favMovie}>
            <button className={style.btn_close} 
                    onClick={() => dispatch(removeFavouriteMovie(fav.id))}>
                    Eliminar
            </button>
            <Link to={`movie/${fav.imdbID}`} className={style.linkItem} >
              <img src={fav.Poster} alt={'No se encontró'} className={style.img}/>
            </Link>
            <div className={style.favInfo}>
              <p>{fav.Plot}</p>
              <h5>{fav.Runtime}</h5>
            </div>
          </div>
        )}
      </ul>
    </div>
  )
}

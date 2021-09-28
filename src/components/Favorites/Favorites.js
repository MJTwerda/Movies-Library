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
          <div className={style.favMovie}>
            <div className={style.btn_container} >
              <button className={style.btn_close} 
                      onClick={() => dispatch(removeFavouriteMovie(fav.id))}>
                      Eliminar
              </button>
            </div> 
            <Link to={`movie/${fav.id}`} className={style.linkItem} >
              <img src={fav.image} alt={'No se encontró'} className={style.img}/>
            </Link>
            <div>
              
            </div>
          </div>
        )}
      </ul>
    </div>
  )
}

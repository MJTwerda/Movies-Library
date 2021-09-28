import React from 'react'; 
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFavouriteMovies } from '../../actions/index';

import style from './Movies.module.css';

export default function Movies({allMovies}) {

  const dispatch = useDispatch();
    
  return (
    <div className={style.cuerpoPelis}>
      {allMovies?.map(s => 
        <div className={style.indMovie} key={s.id}>
          <NavLink to={`movie/${s.imdbID}`} className={style.indLink}>
            <img src={s.Poster} className={style.imgMovie} alt='No encontrada'/>
          </NavLink>

          <button className={style.btnFav} onClick={() => 
            dispatch(addFavouriteMovies(s.imdbID))}>Fav
          </button>
        </div> 
      )} 
    </div>
  )
}


import React, { useEffect }from 'react';
import { getDetailMovie } from '../../actions/index';
import { useDispatch, useSelector } from 'react-redux';

import style from './DetailMovie.module.css';

export default function DetailMovie({idMovie}) {
  const detail = useSelector(state => state.detailMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailMovie(idMovie));
  }, [detail])
    
  return(
    <div className={style.container}>
      <h3 className={style.title}>Detalles de {detail.Title}</h3>
      <div className={style.detailContainer}>
        <img className={style.img} src={detail.Poster} alt='Search...' />
        <div className={style.text_Detail}>
          <h4>Duración: {detail.Runtime}</h4>
          <h4>Géneros: {detail.Genre}</h4>
          <h4>Elenco: {detail.Actors}</h4>
          <h4>{detail.Plot}</h4>
          <h4>Director: {detail.Director}</h4>
          <h4>Escritores: {detail.Writer}</h4>
          <h4>Producción: {detail.Production}</h4>
          <h4>Premios: {detail.Awards}</h4>
        </div>
      </div>
    </div>
  )
} 

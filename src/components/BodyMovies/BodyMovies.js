import React from 'react';
import { useSelector } from 'react-redux';
import Buscador from '../Buscador/Buscador';
import Movies from '../Movies/Movies.js';

import style from './BodyMovies.module.css';

export default function BodyMovies() {
    
    const movies = useSelector(state => state.moviesSearch);

    if (movies === undefined) {
        return (
            <div className={style.container}>
                <div className={style.Buscador_componente}>
                    <Buscador />
                </div>
                {alert('No encontramos la película que buscaste, intentás con otro título?')}
            </div>
        )
    }

    if (movies.length === 0) {
        return (
            <div className={style.container}>
                <div className={style.Buscador_componente}>
                    <Buscador />
                </div>
                {/* {alert('No se pudo acceder a la base de datos')} */}
            </div>
    )}

    return (
        <div className={style.cont_con_movies}>
            <div className={style.Buscador_componente}>
                <Buscador />
            </div>
            <div className={style.Movies_componente}>
                <Movies allMovies={movies}/>
            </div>
        </div>
    )
}

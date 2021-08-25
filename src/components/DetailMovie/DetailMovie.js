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
            <h4>DETALLES</h4>
            <img src={detail.Poster} alt='Search...' />
            <h5>{detail.Runtime}</h5>
            <h5>{detail.Actors}</h5>
            <h5>{detail.Plot}</h5>
        </div>
    )
} 

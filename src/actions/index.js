//Establezco una variable de entorno, donde se encuentra la clave de la Api necesaria para hacer los request.
//En este archivo cambiar todas las ${REACT_APP_API_KEY} por su propia Api Key.
//const { REACT_APP_API_KEY } = process.env;

export const GET_MOVIES = 'GET_MOVIES';
export const ADD_FAVOURITE_MOVIE = 'ADD_FAVOURITE_MOVIE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const GET_DETAIL_MOVIE = 'GET_DETAIL_MOVIE';

export function getMovies(title) {
    return function (dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=4c1a7357&s=${title}`)
        .then(data => data.json())
        .then(responsive => {
            dispatch({type: GET_MOVIES, payload: responsive})
        })
        .catch(error => error)
    }
}
export function addFavouriteMovies(id) {
    return function(dispatch) {
        fetch(`http://www.omdbapi.com/?apikey=$4c1a7357&i=${id}&plot=full`)
        .then(data => data.json())
        .then(movie => {
            dispatch({type: ADD_FAVOURITE_MOVIE, payload: movie})
        })
        .catch(error => error)
    }
}

export function removeFavouriteMovie(id) {
    return {
        type: REMOVE_FAVOURITE,
        payload: id
    }
}
export function getDetailMovie(id) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=4c1a7357&i=${id}`)
        .then(data => data.json())
        .then(responsive => {
            dispatch({type: GET_DETAIL_MOVIE, payload: responsive})
        })
    }
}

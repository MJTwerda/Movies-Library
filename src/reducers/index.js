import { GET_MOVIES, ADD_FAVOURITE_MOVIE, REMOVE_FAVOURITE, GET_DETAIL_MOVIE } from "../actions/index.js";

const initialState = {
  moviesSearch: [],
  favouritesMovies: [],
  detailMovie: {}
}

export function rootReducer(state=initialState, action) {
  if (action.type === GET_MOVIES){
    return {
      ...state,
      moviesSearch: action.payload.Search
    }
  }
  if (action.type === ADD_FAVOURITE_MOVIE){
    return {
      ...state,
      favouritesMovies: state.favouritesMovies.concat(action.payload)
    }
  }
  if (action.type === REMOVE_FAVOURITE){
    return {
      ...state,
      favouritesMovies: state.favouritesMovies.filter(m => m.imdbID !== action.payload)
    }
  }
  if (action.type === GET_DETAIL_MOVIE){
    return {
      ...state,
      detailMovie: action.payload
    }
  }
  return state;
}

export default rootReducer;

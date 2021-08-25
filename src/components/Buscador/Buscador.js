import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../actions";
import style from './Buscador.module.css';


export default function Buscador() {
  
  const [title, setTitle] = useState('');
  
  const dispatch = useDispatch();

  function onChange(e) {
    setTitle(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getMovies(title))
    setTitle('');
  }

  return(
    <div className={style.cuerpoBuscador}>
      <form onSubmit={handleSubmit} className={style.formContainer}>
        <label className={style.label}> Película </label>
          <input  type='text' value={title} name='buscador' autoComplete='off'
                  onChange={onChange} className={style.barraInput}/>

          <input  type='submit' name='btnBuscar' value='Buscar'
                  onSubmit={handleSubmit} className={style.btn}/>
      </form>
    </div>
  )
} 

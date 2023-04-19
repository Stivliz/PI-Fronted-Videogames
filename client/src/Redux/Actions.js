import axios from 'axios'
import {GET_VIDEOGAMES, CLEAN_VIDEOGAMES, GET_VIDEOGAME_ID, 
        CLEAN_VIDEOGAME_ID, GET_GENRES, API_OR_DB, 
        ALPHABETICAL_ORDER, ORDER_BY_RATING, FILTER_BY_GENRE, FILTER_BY_NAME, VIDEOGAME_POST, ERROR } from "./Actions-Types.js";


//Action para obtener todos los videojuegos.

export const getVideogames = () => {
    return async (dispatch) => {
        try {
            const response = await axios('/videogames');
            dispatch({
                type: GET_VIDEOGAMES,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error
            })
        }
    }
}


//Action para limpiar la informacion de videojuegos. 

export const cleanVideogames = () => {
    return {
        type: CLEAN_VIDEOGAMES
    }
}


//Action para obtener la informacion de un juego determinado.

export const getVideogameId = (id) => {
    return async (dispatch) => {
        try {
            let response = await axios(`/videogames/${id}`)
            dispatch({
                type: GET_VIDEOGAME_ID,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error
            })
        }
    }
}


//Action para limpiar la informacion de un juego determinado.
        
export const cleanVideogameId = () => {
    return {
        type: CLEAN_VIDEOGAME_ID
    }
}



//Action para obtener todos los genres.

export const getGenres = () => {
    return async (dispatch) => {
        try {
            let response = await axios('/genres')
            dispatch({
                type: GET_GENRES,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type:ERROR,
                payload: error
            })
        }
    }
    
}


//Action para obtener los juegos de Api o DB.

export const apiOrDb = (game) => {
    return {
        type: API_OR_DB,
        payload: game
    }
}


//Action para ordenar los juegos alfabeticamente (A-Z || Z-A).

export const alphabeticalOrder = (order) => {
    return {
        type: ALPHABETICAL_ORDER,
        payload: order
    }
}


//Action para ordenar los videojuegos por Rating.

export const orderByRating = (rating) => {
    return {
        type: ORDER_BY_RATING,
        payload: rating
    }
}


//Action para filtrar los videogames porun genero en especifico.

export const filterByGenre = (genre) => {
    return {
      type: FILTER_BY_GENRE,
      payload: genre
    }
  }



//Action para filtrar un juego por determinado nombre.

export const filterBYName = (name) => {
    return async (dispatch) => {
        try {
            let response = await axios(`/videogames?name=${name}`)
            dispatch({
                type: FILTER_BY_NAME,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error
            })
        }
    }
}


//Action para guardar la informacion de un nuevo videogame.

export const postVideogame = (videogame) => {

    return async (dispatch) => {

        try {
            let response = await axios.post('/videogames', videogame)
            dispatch({
                type: VIDEOGAME_POST,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error
            })
        }
    }

}
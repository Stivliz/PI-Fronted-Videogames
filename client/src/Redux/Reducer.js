import {GET_VIDEOGAMES, CLEAN_VIDEOGAMES, GET_VIDEOGAME_ID,
        CLEAN_VIDEOGAME_ID, GET_GENRES, API_OR_DB, 
        ALPHABETICAL_ORDER, ORDER_BY_RATING, FILTER_BY_GENRE, FILTER_BY_NAME, VIDEOGAME_POST} from "./Actions-Types";


const initialState = {
    allVideogames: [],
    videogame: {},
    genres: [],
    gamesCopy: [],
    videogame_post: {}
}


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_VIDEOGAMES:
            return{
                ...state,
                allVideogames: action.payload,
                gamesCopy: action.payload
            }


        case CLEAN_VIDEOGAMES:
            return {
             ...state,
                allVideogames: []
            }

        
        case GET_VIDEOGAME_ID:
            return {
                ...state,
                videogame: action.payload
            }
            

        case CLEAN_VIDEOGAME_ID:
            return {
              ...state,
                videogame: {}
            }


        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            }


        case API_OR_DB:
            //Games almacena todo lo que tiene la gamesCopy, que en si es la copia de todos los videogames(allVideogames).
            const games = state.gamesCopy
            //Creamos una constante storesGames que comparara al action.payload, que en si es la opcion que clickee el usuario, (Son 3
            //opciones, allVideogames, API Y DB), dado que sea DB, por payload vendra DB entonces filtrara los videojuegos
            //de la base de datos, dado que no sea DB filtrara los de la Api. 
            const storedGames = action.payload === "DB" ? games.filter((e) => e.dbCreated) : games.filter((e) => !e.dbCreated)
            //Retornaremos una copia del estado para no pisar aquellos datos que no utilicemos con cambios nuevos
            //y tomamos a la propiedad videogames, que se encargara de almacenar en este caso otro ternario, en donde
            //si el action.payload que viene es igual a la opcion de AllVideogames, entonces devolveremos todos 
            //todos los vidojuegos tanto de API y DB, si el action.payload no es igual a "allVideogames", entonces
            //almacenara los juegos ya sea de la DB o API dependiendo el caso que se alojo en la constante storedGames
            return{
                ...state,
                allVideogames: storedGames 
            }


        case ALPHABETICAL_ORDER:
            //Ordenamos los videogames alfabeticamente
            const alphabeticSort = ( action.payload === 'A-Z') 
            ? state.gamesCopy.sort((a,b) => {
                if(a.name.toUpperCase() > b.name.toUpperCase()) return 1
                if(a.name.toUpperCase() < b.name.toUpperCase()) return -1
                return 0
            })
            : state.gamesCopy.sort((a,b) => {
                if(a.name.toUpperCase() > b.name.toUpperCase()) return -1
                if(a.name.toUpperCase() < b.name.toUpperCase()) return 1
                return 0
            })
            return {
                ...state,
                allVideogames: alphabeticSort
            };

        
        case ORDER_BY_RATING:
            //Ordenamos los videogames por rating
            const ratingSort = (action.payload === 'HIGH')
            ? state.gamesCopy.sort((a,b) => {
                if(a.rating > b.rating) return -1
                if(a.rating < b.rating) return 1
                return 0
            })
            : state.gamesCopy.sort((a,b) => {
                if(a.rating > b.rating) return 1
                if(a.rating < b.rating) return -1
                return 0
            })
            return {
                ...state,
                allVideogames: ratingSort
            }
        
        
        case FILTER_BY_GENRE:
            let gamesGenre = state.gamesCopy;
            let genresFiltered;
            if (action.payload === "Genres") {
                genresFiltered = gamesGenre;
            } else {
                genresFiltered = gamesGenre.filter(game => {
                    if (typeof game.genres === "string") {
                        return game.genres.includes(action.payload);
                    } 
                    return false
                })
            }
            return {
                ...state,
                allVideogames: genresFiltered
            };                       



        case FILTER_BY_NAME:
            return{
                ...state,
                allVideogames: action.payload
            }


        
        case VIDEOGAME_POST: 
        return {
          ...state,
            videogame_post: action.payload
        }
        

        
        default:
            return {
                ...state
            }
    }
}

export default reducer;
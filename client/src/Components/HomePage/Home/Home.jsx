import { useEffect, useState } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { getVideogames, cleanVideogames } from "../../../Redux/Actions";
import style from './Home.module.css'
import Cards from '../Cards/Cards';
import Nav from "../Nav/Nav";
import Paginated from "../Paginated/Paginated";
import Loader from "../../Loader/Loader";

const Home = () => {

    const dispatch = useDispatch();
    const  allVideogames  = useSelector((state) => state.allVideogames);
    console.log( 'juegos:' , allVideogames)
   
    const [currentPage, setCurrentPage] = useState(1);
    const [gamePerPage] = useState(15);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState('')
    console.log('order:', order)

    const lastIndex = currentPage * gamePerPage; // 1 * 15 = 15 -> Ultimo indice. 
    const firstIndex = lastIndex - gamePerPage // 15 - 15 = 0 --> Primer indice.

    //Utilizamos el slice para ir mostrando de 15 en 15.
    const videogames = allVideogames.slice(firstIndex, lastIndex) 
                                               //0      //15      
    console.log('todos:' , allVideogames.length)                   


    const onSpecificPage = (page) => {
        setCurrentPage(page)
    }


    const onPrevPage = () => {
        const firstpage = firstIndex + 1;
        if(currentPage === firstpage) return;
        const prevPage = currentPage - 1
        setCurrentPage(prevPage);
    }                                             
    const onNextPage = () => {
        const next = currentPage + 1
        setCurrentPage(next)
        if(!(videogames.length ) ){
            setCurrentPage(1)
        }
        
    }

    useEffect(() => {
        dispatch(getVideogames())
        .then(() => setLoading(false))  
        return () => dispatch(cleanVideogames())
    },[dispatch])

    //se renderizara el loader mientras que loading sea true, en el momento que carguen los videojuegos
    //Loader cambiara a false, ya que se ejecuta el .then y este a su vez setea el estado de true a false, con 
    //lo cual el componente Loader se dejara de renderizar.
    //el Loader se utiliza para mostrar una animación de carga mientras se espera a que se obtengan los datos de los videojuegos. 
    //Una vez que se obtienen los datos y se actualiza el estado de la variable loading a false, el componente Loader se desmonta y 
    //se muestra el contenido principal de la página.
    if(loading){
        return <Loader />
    }

    return(
        <div>  

          
            
            <div className={style.navHome}>
                <Nav setCurrentPage={setCurrentPage} setOrder={setOrder}/>
            </div>
            
            <div className={style.cardsContainer}>
                {
                    
                    videogames?.map((game) => (
                        
                            <Cards 
                            key={game.id} 
                            id={game.id}
                            img = {game.background_image} 
                            name={game.name}
                            genres={game.genres}
                            rating={game.rating}
                            />
                        
                    ))
                   
                } 

            </div>
            <div>


            {
                <Paginated 
                    videogames={allVideogames} 
                    currentPage={currentPage} //Pagin actual = 1
                    gamePerPage={gamePerPage} //juego por pagina = 15
                    onPrevPage={onPrevPage}
                    onNextPage={onNextPage}
                    onSpecificPage={onSpecificPage}
                />
            }
            </div>
            
            
        </div>
    )



}

export default Home;





import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getVideogameId, cleanVideogameId }  from "../../Redux/Actions";
import styles from './GameDetail.module.css'
import Loader from "../Loader/Loader";

const GameDetail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const game = useSelector((state) => state.videogame)
    const navigate = useNavigate();
    const[loading, setLoading] = useState(true);


    useEffect(() => {
        dispatch(getVideogameId(id))
        .then(() => setLoading(false))
        return () => dispatch(cleanVideogameId())
    }, [dispatch, id])

    const handlerButton = () => {
        navigate('/videogames')
    }

    if(loading){
        return <Loader />
    }

    return(
    <>

        <div className={styles["card-container"]}>
        
            <span className={styles["image-container"]}>
                <div>
                    <img src={game?.background_image} alt={game?.name}/>
                </div>
            </span>
            <span className={styles["properties-container"]}>
            <h2>{game?.name}</h2> <br />
            <p>{game?.description}</p>
            <div>
                <h3> &larr; Rating &rarr;</h3>
                <p>{game?.rating}</p>
            </div>
            <div>
                <h3>&larr; Genres &rarr;</h3>
                <p>{
              typeof game?.genres === 'string'
              ? game?.genres
              :(game?.genres.map(g => g.name).join( ' | '))
            }</p>
            </div>

            <div>
                <h3>&larr; Platforms &rarr;</h3>
                <p>{game?.platforms}</p>
            </div>

            <div>
                <h3>&larr; Released &rarr;</h3>
                <p>{game?.released}</p>
            </div>
            <button className={styles["back-button"]} onClick={handlerButton}>Back</button>
            </span>
      </div>

    </>
    )


}

export default GameDetail;
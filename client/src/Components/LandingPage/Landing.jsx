import { useNavigate } from "react-router-dom";
import styles from './Landing.module.css';

const LandingPage = () => {

    const navigate = useNavigate()

    const handlerButton = () => {
        navigate('/videogames')
    }

    return(
        <div className={styles["landing-container"]}>
        <h1 className={`${styles["landing-title"]} ${styles["landing-text"]}`}>
          WELCOME TO VIDEO GAMES
        </h1> <br/> <br/> <br/> 
        <button className={styles["landing-button"]} onClick={handlerButton}>
          Play Again
        </button>
    
        <h3 className={`${styles["landing-footer"]} ${styles["landing-text"]} ${styles["landing-subtitle"]} ${styles["landing-text"]}`}>
          BY: STIVLIZ 🕹️
        </h3>
      </div>
    )

}

export default LandingPage;
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getVideogames, getGenres, apiOrDb, alphabeticalOrder, orderByRating, filterByGenre} from '../../../Redux/Actions';
import AllGenres from './AllGenres';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css'
import image from './1.jpg'

const Nav = ({setCurrentPage, setOrder}) => {

   
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genres)
    console.log('prueba:', genres)

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])



    const hanlderApiOrDb = (event) => {
        event.target.value === 'ALLVIDEOGAMES'
        ? dispatch(getVideogames())
        :dispatch(apiOrDb(event.target.value))
        setCurrentPage(1)
    }

    const handlerAlphabeticOrder = (event) => {
        event.target.value === 'ALPHABETIC'
        ? dispatch(getVideogames())
        : dispatch(alphabeticalOrder(event.target.value))
        setOrder(event.target.value)
        setCurrentPage(1)
    }

    const hablderOrderRating = (event) => {
        event.target.value === 'RATING'
        ? dispatch(getVideogames())
        : dispatch(orderByRating(event.target.value))
        setOrder(event.target.value)
        setCurrentPage(1)
    }

    const handlerFilterGenres = (event) => {
        event.preventDefault()
        dispatch(filterByGenre(event.target.value));
        setOrder(event.target.value)
        setCurrentPage(1)
    }


    return(
        <div className={styles.containerNav}>

            <div>
                <img className={styles.image} src={image} alt='logo'/>
            </div>

            <div className={styles.selectContainer}>
                <select className={styles.select} onChange={hanlderApiOrDb}>
                <option className={styles.select2}value='ALLVIDEOGAMES'>ALL VIDEOGAMES</option>
                <option className={styles.select}value='API'>API</option>
                <option className={styles.select}value='DB'>DB</option>
                </select>
            </div>

            <div className={styles.selectContainer}>
                <select className={styles.select} name='ALPHABETIC' onChange={handlerAlphabeticOrder}>
                <option value='ALPHABETIC'>ALPHABETIC</option>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
                </select>
            </div>

            <div className={styles.selectContainer}>
                <select className={styles.select} name='RATING' onChange={hablderOrderRating}>
                <option value='RATING'>RATING</option>
                <option value='HIGH'>HIGH RATING</option>
                <option value='LOW'>LOW RATING</option>
                </select>
            </div>

            <div className={styles.selectContainer}>
                <select className={styles.select} name='Genres' onChange={handlerFilterGenres}>
                <option value='Genres'> ALL VIDEOGAME GENRES </option>
                <AllGenres genres={genres} />
                </select>
            </div>

            <div>
                <button>
                    <Link to='/videogames/form'>CREATE</Link>
                </button>
            </div>

            <div className={styles.searchBarContainer}>
                <SearchBar />
            </div>

        </div>


       
    )
}

export default Nav;

 // <div className={styles.containerNav}>
        //     <select onChange={hanlderApiOrDb}>
        //         <option value='ALLVIDEOGAMES'>ALL VIDEOGAMES</option>
        //         <option value='API'>API</option>
        //         <option valu='DB'>DB</option>
        //     </select>

        //     <select name='ALPHABETIC' onChange={handlerAlphabeticOrder}>
        //         <option value='ALPHABETIC'>ALPHABETIC</option>
        //         <option value='A-Z'>A-Z</option>
        //         <option value='Z-A'>Z-A</option>
        //     </select>

        //     <select name='RATING' onChange={hablderOrderRating}>
        //         <option value='RATING'>RATING</option>
        //         <option value='HIGH'>HIGH RATING</option>
        //         <option value='LOW'>LOW RATING</option>
        //     </select>

        //     <select name='Genres' onChange={hanlderFilterGenres}>
        //         <option value='Genres'> ALL VIDEOGAME GENRES </option>   
        //         <AllGenres genres={genres}/>         
        //     </select>
            

            

        //     <div>
        //         <SearchBar />
        //     </div>
        // </div>
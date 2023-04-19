import { useDispatch } from "react-redux";
import { useState } from "react";
import { filterBYName } from "../../../Redux/Actions";
import styles from './SearchBar.module.css'

const SearchBar = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState('')

    const hanlderSearchByName = (event) => {
        setName(event.target.value)
    }
    const handlerSubmit = (event) => {
        event.preventDefault()
        dispatch(filterBYName(name))
        setName('')
    }

    return(
        <>
        <form className={styles.searchForm}>
            <input className={styles.searchInput} type="search" placeholder='Search...' onChange={hanlderSearchByName}/>
            <button className={styles.searchButton} type="submit" onClick={handlerSubmit}>Search</button>
        </form>

            {/* <input  type="search" placeholder='Search...' onChange={hanlderSearchByName}/>
            <button type="submit" onClick={handlerSubmit}>Search</button> */}

        </>
    )
}

export default SearchBar;
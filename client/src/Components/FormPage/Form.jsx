
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, postVideogame } from "../../Redux/Actions";
import validate from "./Validations";
import styles from "./Form.module.css"
export default function Form() {

    const platforms = ['PC', 'PlayStation 5', 'Xbox One', 'PlayStation 4', 'Xbox Series S/X', 'Nintendo Switch', 'iOS', 'Android', 'Nintendo 3DS', 'Nintendo DS', 'Nintendo DSi', 'macOS'];
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genres);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        description: '',
        released: '',
        background_image: '',
        rating: 0,
        genres: [],
        platforms: []
    })

    const [error, setError] = useState({
        name: '',
        description: '',
        released: '',
        background_image: '',
        rating: 0,
        genres: [],
        platforms: []
    })

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })

        setError(
            validate({
                ...form,
                [e.target.name]:e.target.value
            })
        )
    }

    const handleSelectForGenres = (e) =>{
        setForm({
            ...form,
            genres: [...new Set([...form.genres, e.target.value])]
        })

        setError(
            validate({
                ...form,
                [e.target.name]:e.target.value
            })
        ) 
    }

    const handleSelectForPlatforms = (e) =>{
        setForm({
            ...form,
            platforms: [...new Set([...form.platforms, e.target.value])]
            
        })
        
        setError(
            validate({
                ...form,
                [e.target.name]:e.target.value
            })
        )  
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!Object.keys(error).length) {
            dispatch(postVideogame(form))
            setForm({
                name: '',
                description: '',
                released: '',
                background_image: '',
                rating: 0,
                genres: [],
                platforms: []
            })

        } else {
            alert('You must comple the form')
        }   
    }


    useEffect(() => {
        dispatch(getGenres());
    },[dispatch])


    const onClick = () => {
        navigate('/videogames')
    }

    return (
        <> 
        <div className={styles.container}>
          <form className={styles.form}onSubmit={handleSubmit}>
            <h1>Create a New VideoGame</h1>
            <label htmlFor="name">Name:</label>
            <input
              value={form.name}
              onChange={handleInputChange}
              type="text"
              id="name"
              name="name"
              placeholder="ej: League of Legends"
            />
            <p>{error.name}</p>
            <br />
  
            <label htmlFor="released">Release Date:</label>
            <input
              value={form.released}
              onChange={handleInputChange}
              type="date"
              id="released"
              name="released"
              placeholder="ej: 29/10/2009"
            />
            <p>{error.released}</p>
            <br />
  
            <label htmlFor="rating">Rating:</label>
            <input
              value={form.rating}
              onChange={handleInputChange}
              type="number"
              id="rating"
              name="rating"
              placeholder="ej: 4.5"
            />
            <p>{error.rating}</p>
            <br />
  
            <label htmlFor="description">Description:</label>
            <textarea
              value={form.description}
              onChange={handleInputChange}
              id="description"
              name="description"
              placeholder="ej: Created by Riot Games"
            />
            <p>{error.description}</p>
            <br />
  
            <label htmlFor="background_image">Image:</label>
            <input
              value={form.background_image}
              onChange={handleInputChange}
              type="text"
              id="background_image"
              name="background_image"
              placeholder="URL background_image"
            />
            <p>{error.background_image}</p>
            <br />
  
            <div>
              <div>
                <select onChange={handleSelectForGenres}>
                  <option value="genres">Genres</option>
                  {genres?.map((genre) => (
                    <option key={genre.id} value={genre.name}>
                      {genre.name}
                    </option>
                  ))}
                </select>
                <p>{error.genres}</p>
                <p>{form.genres.join(" | ")}</p>
              </div>
              <div>
                <select onChange={handleSelectForPlatforms}>
                  <option value="platforms" disabled>
                    Platforms
                  </option>
                  {platforms?.map((platform, i) => (
                    <option key={i} value={platform}>
                      {platform}
                    </option>
                  ))}
                </select>
                <p>{error.platforms}</p>
                <p>{form.platforms.join(" | ")}</p>
              </div>
            </div>
  
            <div>
              {!form.name.length ||
              !form.description.length ||
              !form.released ||
              !form.background_image.length ||
              !form.rating ||
              !form.genres.length ||
              !form.platforms.length ? (
                <button type="submit" disabled={true}>
                  Create
                </button>
              ) : (
                <button type="submit">Create</button>
              )}
            </div>
  
            <div>
              <button onClick={onClick}>Back</button>
            </div>
          </form>
        </div>
      </>            
    );
}






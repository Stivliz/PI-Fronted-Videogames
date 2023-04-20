import './App.css';
// import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/Landing';
import Home from './Components/HomePage/Home/Home';
import GameDetail from './Components/GameDetail/GameDetail';
import Form from './Components/FormPage/Form';


// /*Cuando queramos trabajar de forma local, vamos a descomnetar el localhost.*/ 
// // axios.defaults.baseURL = "http://localhost:3001" 

// /*Cuando queramos actualizar nuestro deploy usaremos esta URL. */
// axios.defaults.baseURL = "https://pi-backend-videogames-production.up.railway.app/"

function App() {
  return (
    <Routes>
      <Route  default path='/' element={<LandingPage />} />
      <Route path='/videogames' element={<Home />} />
      <Route path='/videogames/:id' element={<GameDetail />}/> 
      <Route path='/videogames/form' element={<Form />} />
    </Routes>
  );
}

export default App;

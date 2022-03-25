import React,{useEffect, useState, useContext} from 'react';
import CardList from './components/CardList';
import { GlobalStyle} from './style/styles';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './rutas/About';
import Cv from './rutas/Cv';
import { AppContext } from './context/AppContext';



function App() {

  const [characters, setCharacters] = useState([])

  const {state:{darkMode, lightMode}} = useContext(AppContext)
  const [temaClaro, setTemaClaro] = useState(false)



  useEffect(()=>{
    const URL = 'https://rickandmortyapi.com/api/character';
      fetch(URL)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  },[])
  

  return (
    <>
    <BrowserRouter>
    <GlobalStyle TemaClaro={temaClaro ? lightMode : darkMode}/>
    <Navbar setTemaClaro={setTemaClaro} temaClaro={temaClaro}/>
    <Routes>
      <Route path='/' element={<>
          <div className="App">
            <CardList characters={characters}/>
          </div>
      </>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cv' element={<Cv/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

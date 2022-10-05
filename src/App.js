import React, {useState, useEffect} from 'react';
import './App.css';
import { Navrbar } from './components/navbar';
import { SearchBar } from './components/Searchbar';
import { Pokedex } from './components/Pokedex';
import { getPokemons } from './api';
import { getPokemonData } from './api';
import {getPokemonDesc} from './api';

function App() {
  const [pokemons, setPokemons] = useState([])
  const [description, setDescription] = useState([])

  const fetchDescription = async () => {
    try{
      const data = await getPokemons()
      const promises = data.results.map(async(pokemon) => {
        return await getPokemonDesc(pokemon.name)
      })
      const results= await Promise.all(promises)
      console.log(data)
      console.log(results)
      setDescription(results)
    }
  catch(err){}
  }

  const fetchPokemons= async () => {
    try{
      const data = await getPokemons()
      const promises= data.results.map(async(pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      console.log(results)
      setPokemons(results)
    }
  catch(err){}
  }

  useEffect(()=> {
    fetchDescription()
  }, [])

  useEffect(()=> {
    fetchPokemons()
  }, [])
  
  return (
    <div className="App">
      <header>
        <Navrbar />
      </header>
      <SearchBar />
      <Pokedex 
        description={description}
        pokemons={pokemons}
      />
    </div>
  );
}

export default App;

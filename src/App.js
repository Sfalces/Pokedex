import React, {useState, useEffect} from 'react';
import './App.css';
import { Navrbar } from './components/navbar';
import { SearchBar } from './components/Searchbar';
import { Pokedex } from './components/Pokedex';
import { getPokemons, searchPokemon } from './api';
import { getPokemonData } from './api';
import {getPokemonDesc} from './api';

function App() {
  const [pokemons, setPokemons] = useState([])
  const [description, setDescription] = useState([])
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  const onSearch= async (pokemon) =>{
    if (!pokemon) {
      return fetchPokemons()
    }
    setLoading(true)
    const result = await searchPokemon(pokemon)
    // const data = await getPokemonDesc(pokemon)   Bug obtener descripcion
    if (!result) {
      setNotFound(true)
      setLoading(false)
      return
    }else{
    setPokemons([result])
    // setDescription([data])
    setPage(0)
    setTotal(1)
    }
    setLoading(false) 
  }

  const fetchDescription = async () => {
    try{
      const data = await getPokemons(25, 25 * page)
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
      const data = await getPokemons(25, 25 * page)
      const promises= data.results.map(async(pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      console.log(results)
      setPokemons(results)
      setLoading(false)
      setTotal(Math.ceil(data.count /25))
      setNotFound(false)
    }
  catch(err){}
  }

  useEffect(()=> {
    
     fetchDescription()
   }, [page])

  useEffect(()=> {
      fetchPokemons();
  }, [page]);

  
  return (
    <div className="App">
      <header>
        <Navrbar />
      </header>
      <SearchBar 
      onSearch = {onSearch}
      />
      { notFound ? (<div>No existe ese pokemon</div>):(
      <Pokedex 
        loading={loading}
        description={description}
        pokemons={pokemons}
        page = {page}
        setPage={setPage}
        total={total}
        setTotal={setTotal}
      />
      )}
    </div>
  );
}

export default App;

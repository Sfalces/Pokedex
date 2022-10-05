export const searchPokemon=async (name) =>{
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/${name}`
        const response = await fetch(url)
        const data = response.json()
        return data
    }catch(err){}
}

export const getPokemons = async (limit = 25, offset = 0) =>{
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}.`
        const response = await fetch(url)
        const data = response.json()
        return data
    }catch(err){}
}

export const getPokemonData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };

  export const getPokemonDesc = async (name) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
      const data = await response.json();
      return data;
    } catch (err) {}
  };
  

 
import React from "react";
import { Pokemon } from "./pokemon";
import { Pagination } from "./Pagination";

export const Pokedex = (props) => {
    const { pokemons, description, page, setPage, total, loading} = props;
  
    const lastPage = () => {
      const nextPage = Math.max(page - 1, 0);
      setPage(nextPage);
    };
  
    const nextPage = () => {
      const nextPage = Math.min(page + 1, total - 1);
      setPage(nextPage);
    };

    return(
        <div className="pokedex">
            <div className="header">
                <h1>Pokedex</h1>
                <Pagination 
                 page={page + 1}
                 totalPages={total}
                 onLeftClick={lastPage}
                 onRightClick={nextPage}
                />
            </div>
            {loading ? (
        <div className="loading font-bold-large">Cargando pokemones...</div>
        ) : (
            <div className="pokedex__grid">
                {pokemons.map((pokemon, idx) =>{ 
                    return(
                        <Pokemon description={description[idx].flavor_text_entries[9].flavor_text} pokemon={pokemon} key={pokemon.name} />
                    )
                })}
            </div>
      )}
        </div>
    )
}
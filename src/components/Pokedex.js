import React from "react";
import { Pokemon } from "./pokemon";

export const Pokedex = (props) =>{
    const {pokemons, description} = props
    return(
        <div>
            <div className="header">
                <h1>Pokedex</h1>
                <div>Pagination</div>
            </div>
            <div className="pokedex__grid">
                {pokemons.map((pokemon, idx) =>{
                    // console.log(description[idx].flavor_text_entries[9]) Comele el nepe a oteiza
                    return(
                        <Pokemon description={description[idx].flavor_text_entries[9].flavor_text} pokemon={pokemon} key={pokemon.name} />
                    )
                })}
            </div>
        </div>
    )
}
import React, { useState } from "react";
import { searchPokemon } from "../api";

export const SearchBar = () =>{

    const [search, setSearch] = useState("")
    const [pokemon, setPokemon] = useState()
    const handleOnChange = (e)=>{
        console.log(search)
        setSearch(e.target.value)
    }
    const handleOnClick=async(e)=>{
        const data = await searchPokemon(search)
        setPokemon(data)
    } 

    return( 
        <div className="searchbar__container">
            <div className="searchbar">
                <input
                placeholder="&#128270; Buscar Pokemon"
                onChange={handleOnChange}
                />
            </div>
            <div className="searchbar__btn"> 
                <button onClick={handleOnClick}>
                    Buscar
                </button>
            </div>
        </div>
    )
}
import React, { useState } from "react";


export const SearchBar = (props) =>{

    const {onSearch} = props
    const [search, setSearch] = useState("")
    const handleOnChange = (e)=>{
        setSearch(e.target.value)
        if (e.target.value.length === 0) {
          onSearch(null);
       }
    }
    const handleOnClick=async(e)=>{
        onSearch(search)
    } 

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSearch(search)
        }
      } 

    return( 
        <div className="searchbar__container">
            <div className="searchbar">
                <input
                onKeyDown={handleKeyDown}
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
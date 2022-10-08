import React from "react";
import '../App.css';

export const Navrbar = () => {

    const imgUrl="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

    return(
        <nav className="Poke__Nav">
            <div>
                <a className="pokeApi__img" href="http://localhost:3000/">
                    <img className="PokeApi" src={imgUrl} alt=""/> &#10084;&#65039;
                </a>      
            </div>
        </nav>
    )
}

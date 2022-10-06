import React, { useState } from "react";

function getGradient(types) {
  let type1 = types[0].type.name;
  let type2 = types[1] ? types[1].type.name : types[0].type.name;
  return `linear-gradient(to right, var(--color-type-${type1}), var(--color-type-${type2}))`;
}

export const Pokemon = (props) => {
  const { pokemon, description } = props;
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className="Pokemon">
        <div className="D3__div"
        style={{ display: `${isActive ? "block" : "none"}` }}>
      <img
        className="D3__Image"
        src={`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${pokemon.name}.gif`}
        alt=""
      />
      </div>
      <div
        className={`pokemon__card ${isActive ? "invoked" : ""}`}
        style={{ background: `${getGradient(pokemon.types)}` }}
        onClick={toggleClass}
      >
        <header className="card__header">
          <h3 className="card-title font-bold-large capitalize">
            {pokemon.name}
          </h3>
          <h2 className="card-id font-bold-medium">#{pokemon.id}</h2>
        </header>
        <div className="pokemon__img-containter">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            className="pokemon__img"
            alt=""
          />
        </div>
        <div className="pokemon__info">
          <div className="card__basestats font-bold-tiny">
            <div className="card__stats"> 
              <div>hp {pokemon.stats[0].base_stat}&#10084;&#65039;</div>
              <div>atq {pokemon.stats[1].base_stat}⚔️</div>
            </div>
            <div className="card__stats"> 
              <div>def {pokemon.stats[2].base_stat}🛡️</div>
              <div>spd {pokemon.stats[5].base_stat}🥾</div>
            </div>
          </div>
          <div className="pokemon-type">
            {pokemon.types.map((type, idx) => {
              return (
                <div
                  key={idx}
                  className={`pokemon-type-text font-bold-tiny ${type.type.name} capitalize`}
                >
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <h3
            className={`card__about font-bold-medium`}
            style={{ color: `var(--color-type-${pokemon.types[0].type.name}` }}
          >
            {" "}
            About
          </h3>
          <div className="card__physical">
            <div className="card__physical--weight">
              <div className="card__phylogo font-regular-medium">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 2H11.9747C11.0609 0.793125 9.62719 0 8 0C6.37281 0 4.93906 0.793125 4.02531 2H2C0.897187 2 0 2.89719 0 4V14C0 15.1028 0.897187 16 2 16H14C15.1028 16 16 15.1028 16 14V4C16 2.89719 15.1028 2 14 2ZM8 1C10.2091 1 12 2.79094 12 5C12 7.20906 10.2091 9 8 9C5.79094 9 4 7.20906 4 5C4 2.79094 5.79094 1 8 1ZM15 14C15 14.5522 14.5522 15 14 15H2C1.44781 15 1 14.5522 1 14V4C1 3.44781 1.44781 3 2 3H3.42375C3.15437 3.61344 3 4.28813 3 5C3 7.75688 5.24312 10 8 10C10.7569 10 13 7.75688 13 5C13 4.28813 12.8456 3.61344 12.5763 3H14C14.5522 3 15 3.44781 15 4V14ZM8 8C8.82719 8 9.5 7.32719 9.5 6.5C9.5 6.065 9.31094 5.67625 9.01437 5.40219L9.95938 3.19688C10.0681 2.94344 9.95063 2.64938 9.69656 2.54063C9.44406 2.43187 9.14906 2.54906 9.04031 2.80344L8.09469 5.00969C6.98656 4.9375 6.5 5.89531 6.5 6.5C6.5 7.32719 7.17281 8 8 8ZM8 6C8.27625 6 8.5 6.22375 8.5 6.5C8.5 6.77625 8.27625 7 8 7C7.72375 7 7.5 6.77625 7.5 6.5C7.5 6.22375 7.72375 6 8 6Z"
                    fill="#212121"
                  />
                </svg>
                {pokemon.weight / 10} kg
              </div>
              <div className="card__physical--color font-regular-small">
                Weight
              </div>
            </div>
            <div className="card__physical--height">
              <div className="card__phylogo font-regular-medium">
                <svg
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0H1C0.447812 0 0 0.447812 0 1V15C0 15.5522 0.447812 16 1 16H7C7.55219 16 8 15.5522 8 15V1C8 0.447812 7.55219 0 7 0ZM1 15V1H7V3H5.25C5.11188 3 5 3.11188 5 3.25V3.75C5 3.88812 5.11188 4 5.25 4H7V6H5.25C5.11188 6 5 6.11188 5 6.25V6.75C5 6.88812 5.11188 7 5.25 7H7V9H5.25C5.11188 9 5 9.11187 5 9.25V9.75C5 9.88813 5.11188 10 5.25 10H7V12H5.25C5.11188 12 5 12.1119 5 12.25V12.75C5 12.8881 5.11188 13 5.25 13H7V15H1Z"
                    fill="#212121"
                  />
                </svg>
                {pokemon.height / 10} m
              </div>
              <div className="card__physical--color font-regular-small">
                Height
              </div>
            </div>
          </div>
          <div className="font-regular-small">{description}</div>
        </div>
      </div>
    </div>
  );
};
/*{`${pokemon.types[0].type.name}`}*/

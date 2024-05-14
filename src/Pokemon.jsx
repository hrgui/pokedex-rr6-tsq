/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

export function PokemonView({ name, img, id }) {
  return (
    <div>
      <img src={img} />
      <h1>
        #{id} {name}
      </h1>
    </div>
  );
}

export function PokemonNav({ id }) {
  const prev = id - 1;
  const next = id + 1;
  return (
    <div style={{ gap: "16px", display: "flex", justifyContent: "center", fontSize: "36px" }}>
      {prev > 0 && <Link to={`/${prev}`}>&laquo;</Link>}
      {id}
      <Link to={`/${next}`}>&raquo;</Link>
    </div>
  );
}

export function Pokemon() {
  const { pokemon } = useLoaderData();
  return (
    <>
      <PokemonView name={pokemon.name} id={pokemon.id} img={pokemon.sprites.front_default} />
      <PokemonNav id={pokemon.id} />
    </>
  );
}

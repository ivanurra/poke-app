import Link from "next/link";

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url
    .split("/")
    .filter((x) => x)
    .pop();

  return (
    <li>
      <Link href={`/pokemones/${id}`}>{pokemon.name}</Link>
    </li>
  );
};

export default function Pokemones({ pokemones }) {
  console.log(pokemones);
  return (
    <div>
      <p className="text-uppercase">LIST OF POKEMONS</p>
      <p className="text-uppercase">Press a name to more info</p>
      <ul>
        <li>
          {pokemones.map((pokemon) => (
            <Pokemon pokemon={pokemon} key={pokemon.name} />
          ))}
        </li>
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
  const data = await response.json();

  return {
    props: { pokemones: data.results },
  };
};

const Pokemon = ({ pokemon }) => {
  return <li>{pokemon.name}</li>;
};

export default function Pokemones({ pokemones }) {
  console.log(pokemones);
  return (
    <div>
      <p className="text-uppercase">POKEMONES</p>
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

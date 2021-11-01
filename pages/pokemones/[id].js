import Link from "next/link";
import Image from "next/image";

const Pokemon = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>
        {data.name}, number #{data.id}
      </h1>
      <Image
        src={data.sprites.front_default}
        height={300}
        width={300}
        alt="Pokemon image"
      />
      <Link href="/">Back to home</Link>
    </div>
  );
};

export default Pokemon;

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  );
  const data = await response.json();

  return { props: { data } };
};

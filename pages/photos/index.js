import Link from "next/link";

const Photos = () => {
  return (
    <div>
      <p>Photos here</p>
      <button>
        <Link href="/">Home</Link>
      </button>
      <button>
        <Link href="/test">Test</Link>
      </button>
    </div>
  );
};
export default Photos;

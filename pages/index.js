import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Hello World!</p>
      <button>
        <Link href="/test">TEST</Link>
      </button>
    </div>
  );
}

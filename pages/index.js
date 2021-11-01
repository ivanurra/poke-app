import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p className="text-uppercase">Title</p>
      <button className="btn btn-primary">
        <Link href="/test">Test</Link>
      </button>
      <button className="btn btn-secondary">
        <Link href="/photos">Photos</Link>
      </button>
      <Image src="/coffee.jpg" alt="Coffee mug" width={400} height={400}/>
    </div>
  );
}

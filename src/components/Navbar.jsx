import Link from "next/link";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between overflow-hidden rounded-b-3xl bg-blue-800 px-10 py-4 text-white">
      <div>
        <Link href="/">
          <h1 className="items-center text-4xl font-bold">Star Wars</h1>
        </Link>
      </div>
      <div className="w-1/4">
        <ul className="flex items-center justify-around">
          <Link href="/about">
            <li className="text-xl font-medium">About</li>
          </Link>
          <Link href="/char">
            <li className="text-xl font-medium">Characters</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

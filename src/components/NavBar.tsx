import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
      <Link href="/" className="text-2xl font-bold">
        NKD
      </Link>
      <ul className="flex gap-4 space-x-4 text-gray-600">
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/about-me">About me</Link>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="#">Vi</Link>
        </li>
      </ul>
    </nav>
  );
};

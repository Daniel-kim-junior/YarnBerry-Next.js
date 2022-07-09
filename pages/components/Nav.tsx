import Link from "next/link";
export default function Nav() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/">1st Project</Link>
      </li>
      <li>
        <Link href="/">2rd Project</Link>
      </li>
      <li>
        <Link href="/">3rd Project</Link>
      </li>
    </ul>
  );
}

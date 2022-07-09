import Link from "next/link";
export default function Nav() {
  return (
    <>
      <h1>개발자 김민성의 포트폴리오</h1>
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
    </>
  );
}

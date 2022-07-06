import type { NextPage } from "next";
import Link from "next/link";
import HeadMeta from "./components/HeadMeta";
const Home: NextPage = () => {
  return (
    <>
      <HeadMeta image="" url="" description="헤헤헤" title="개발자 김민성"></HeadMeta>
      <h1>/pages/index.js</h1>
      <ul>
        <li>
          <Link href="/sub">/pages/sub/index.js</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;

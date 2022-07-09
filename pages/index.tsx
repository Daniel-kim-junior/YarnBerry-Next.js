import type { NextPage } from "next";
import Link from "next/link";
import Nav from "./components/Nav";
import HeadMeta from "./components/HeadMeta";
const Home: NextPage = () => {
  return (
    <>
      <HeadMeta image="" url="" description="FrontEnd" title="개발자 김민성"></HeadMeta>
      <h1>개발자 김민성의 포트폴리오</h1>
      <Nav />
    </>
  );
};

export default Home;

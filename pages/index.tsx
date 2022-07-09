import type { NextPage } from "next";
import Link from "next/link";
import Nav from "./components/Nav";
import HeadMeta from "./components/HeadMeta";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <>
      <HeadMeta image="" url="" description="FrontEnd" title="개발자 김민성"></HeadMeta>
      <NavContainer>
        <Nav />
      </NavContainer>
    </>
  );
};
const NavContainer = styled.nav`
  display: flex;
  background: teal;
`;

export default Home;

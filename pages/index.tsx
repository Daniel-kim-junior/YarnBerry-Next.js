import type { NextPage } from "next";
import Link from "next/link";
import Nav from "./components/Nav";
import HeadMeta from "./components/HeadMeta";
import styled from "styled-components";

interface Post {
  username: string;
  posttitle: string;
  contents: string;
}

interface Props {
  props: Post;
}

const Home: NextPage = () => {
  return (
    <>
      <HeadMeta image="" url="" description="FrontEnd" title="개발자 김민성"></HeadMeta>
      <NavContainer>
        <Nav />
      </NavContainer>
      {/* <div>게시물 작성자 : {props.username}</div>
      <div>게시물 제목 : {props.posttitle}</div>
      <div>게시물 내용 : {props.contents}</div> */}
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api");
  console.log(res);
  if (res.ok) {
    const data = await res.json();
    return {
      props: data,
    };
  } else {
    return {
      props: {},
    };
  }
}

const NavContainer = styled.nav`
  display: flex;
  background: teal;
`;

export default Home;

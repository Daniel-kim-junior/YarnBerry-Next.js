import type { NextPage } from "next";
import Link from "next/link";
import Nav from "./components/Nav";
import HeadMeta from "./components/HeadMeta";
import styled from "styled-components";
import { useEffect, useState } from "react";

interface Post {
  username: string | null;
  posttitle: string | null;
  contents: string | null;
}

interface Props {
  props: Post;
}

export async function status() {
  const res = await fetch("http://localhost:3000/api");
  if (res.ok) {
    const data = await res.json();
    return data;
  }
}

const Home: NextPage = () => {
  const [state, setState] = useState<Post>();
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3000/api");
      if (res.ok) {
        const data = await res.json();
        setState(data);
      }
    })();
  }, []);
  return (
    <>
      <HeadMeta image="" url="" description="FrontEnd" title="개발자 김민성"></HeadMeta>
      <NavContainer>
        <Nav />
      </NavContainer>
      <div>게시물 작성자 : {state?.username}</div>
      <div>게시물 제목 : {state?.posttitle}</div>
      <div>게시물 내용 : {state?.contents}</div>
    </>
  );
};

const NavContainer = styled.nav`
  display: flex;
  background: teal;
`;

export default Home;

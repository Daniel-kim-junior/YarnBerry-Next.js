import Link from "next/link";
import styled from "styled-components";
import PostList from "../components/Post/PostList";
const dummy = [
  {
    id: 1,
    title: "첫번째 게시물",
    contents: "hi",
    image: "../styles/next.png",
  },
];

function HomePage() {
  return (
    <>
      <Link href="/registerPost">글 등록하기</Link>
      <StyleDiv>하이</StyleDiv>
    </>
  );
}

export const StyleDiv = styled.div`
  color: purple;
`;


export default HomePage;

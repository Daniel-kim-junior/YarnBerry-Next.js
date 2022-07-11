import Link from "next/link";
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
  return <Link href="/registerPost">글 등록하기</Link>;
}

export default HomePage;

import { Fragment } from "react";
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
  return <PostList posts={dummy} />;
}

export default HomePage;

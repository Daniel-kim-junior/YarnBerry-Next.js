import PostItem from "./PostItem";

export interface Post {
  id: number;
  title: string;
  image: string;
  contents: string;
}

interface PropsType {
  posts: Post[];
}

export default function PostList({ posts }: PropsType) {
  return (
    <>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          image={post.image}
          contents={post.contents}
        ></PostItem>
      ))}
    </>
  );
}

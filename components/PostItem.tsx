import { Post } from "./PostList";
export default function PostItem({ id, title, contents, image }: Post) {
  return (
    <>
      <div>{id}</div>
      <div>{title}</div>
      <div>{contents}</div>
      <div>{image}</div>
    </>
  );
}

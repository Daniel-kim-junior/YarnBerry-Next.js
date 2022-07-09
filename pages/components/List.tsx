import Link from "next/link";

interface ListProps {
  props: string;
}

export default function List({ props }: ListProps) {
  return (
    <>
      <ul>{props}</ul>
    </>
  );
}

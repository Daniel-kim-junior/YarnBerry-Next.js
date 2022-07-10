import { FormEvent, useState } from "react";

export default function Form(): JSX.Element {
  const [values, setValues] = useState({
    title: "",
    contents: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input />
      <input />
    </form>
  );
}

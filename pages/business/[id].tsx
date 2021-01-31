import { useRouter } from "next/router";

export default function Business() {
  const {
    query: { id },
  } = useRouter();

  return <h1> hola {id}</h1>;
}

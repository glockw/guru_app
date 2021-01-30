import { useInput } from "../../hooks/useInput";
import SearchButton from "../atoms/SeachButton";
import InputWide from "../molecules/InputWide";

export default function Filter() {
  const { bind: search } = useInput("plumbers, deliverys, takeout...");
  const { bind: location } = useInput("address, neighborhood, city...");

  return (
    <>
      <div className="nav">
        <InputWide hook={search} placeholder={"Find"} />
        <InputWide hook={location} placeholder={"Near"} />

        <SearchButton />
      </div>
      <style jsx>
        {`
          .nav {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
}

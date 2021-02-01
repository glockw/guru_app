import { useInput } from "../../hooks/useInput";
import SearchButton from "../atoms/SeachButton";
import InputWide from "../molecules/InputWide";

export default function Filter({ onSearch }) {
  const { bind: search, value: what } = useInput(
    "plumbers, deliverys, takeout..."
  );
  const { bind: location, value: near } = useInput(
    "address, neighborhood, city..."
  );

  const doSearch = () => {
    onSearch(what, near);
  };

  return (
    <>
      <div className="filter">
        <InputWide hook={search} placeholder={"Find"} />
        <InputWide hook={location} placeholder={"Near"} />
        <SearchButton onSearch={doSearch} />
      </div>
    </>
  );
}

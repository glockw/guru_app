import { useDispatch } from "react-redux";
import { useInput } from "../../hooks/useInput";
import { fetch_business } from "../../redux/actions";
import SearchButton from "../atoms/SeachButton";
import InputWide from "../molecules/InputWide";

export default function Filter() {
  const dispatch = useDispatch();
  const { bind: search, value: what } = useInput(
    "plumbers, deliverys, takeout..."
  );
  const { bind: location, value: near } = useInput(
    "address, neighborhood, city..."
  );

  const doSearch = () => {
    dispatch(fetch_business(what, near));
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

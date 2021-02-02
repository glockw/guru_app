import { useDispatch, useSelector } from "react-redux";
import { fetch_more } from "../redux/actions";
import Filter from "./organisms/Filter";

const Nav = () => {
  const dispatch = useDispatch();
  const { total, offset } = useSelector((data) => data);
  const moreResults = () => {
    dispatch(fetch_more);
  };

  return (
    <header>
      <Filter />
      {total > 0 && (
        <div>
          <span>
            Total {offset} of {total}
          </span>
          <button onClick={moreResults}> more </button>
        </div>
      )}

      <style jsx>{`
        div {
          padding: 1em;
        }
        header {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </header>
  );
};

export default Nav;

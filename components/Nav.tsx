import { useSelector } from "react-redux";
import Filter from "./organisms/Filter";

const Nav = () => {
  const { total } = useSelector((data) => data);

  return (
    <header>
      <Filter />
      {total > 0 && (
        <div>
          <span> Total of {total}</span>
          <button> more </button>
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

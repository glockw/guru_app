import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchButton = ({ onSearch = (f) => f }) => {
  return (
    <>
      <button onClick={onSearch}>
        <span className="button-text">
          Search <FontAwesomeIcon icon={faSearch} />
        </span>
      </button>

      <style jsx>
        {`
          button {
            text-align: center;
          }
          .button-text {
            font-weight: 500;
          }
        `}
      </style>
    </>
  );
};

export default SearchButton;

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchButton = () => {
  return (
    <>
      <button>
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

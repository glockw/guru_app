import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import GridList from "./GridList";

const Businesses = () => {
  const { business } = useSelector((data) => data);
  return (
    <>
      <div className="flex-items">
        {business.length ? (
          <GridList data={business} />
        ) : (
          <div className="flex-column">
            <img src="img/not_found.jpg" />
            <span>
              Place a Search...
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        )}
      </div>

      <style jsx>
        {`
          .flex-column {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 10em;
          }
          .flex-items {
            position: relative;
            top: 5em;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          @media (max-width: 600px) {
            .flex-items {
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>
    </>
  );
};

export default Businesses;

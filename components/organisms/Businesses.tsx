import { Business } from "../../models";
import GridList from "./GridList";

const Businesses = ({ data }: { data: Business[] }) => {
  return (
    <>
      <div className="flex-items">
        <GridList data={data} />
      </div>
      <style jsx>
        {`
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

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
            display: flex;
            flex-wrap: wrap;
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

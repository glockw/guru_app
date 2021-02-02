import { Business } from "../../models";
import GridItem from "../molecules/GridItem";

const GridList = ({ data }: { data: Business[] }) => {
  return (
    <>
      {data.map((business) => (
        <GridItem key={business.id} {...business} />
      ))}
    </>
  );
};

export default GridList;

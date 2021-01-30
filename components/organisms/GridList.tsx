import { Business } from "../../models";
import GridItem from "../molecules/GridItem";

const GridList = ({ data }: { data: Business[] }) => {
  if (!data || data.length == 0) return <h1>no hay vida</h1>;

  return data.map((business, index) => (
    <GridItem key={business.id} {...business} />
  ));
};

export default GridList;

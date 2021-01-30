import { Business } from "../../models";
import PhoneMasked from "../atoms/PhoneMasked";
import Review from "./Review";

const DescriptionDetail = ({ item }: { item: Business }) => {
  const {
    location: { formatted_address },
  } = item;
  return (
    <>
      <h5> {item.name} </h5>
      <Review {...item} show_count={true} />
      <PhoneMasked {...item} />
      <span className="address">{formatted_address}</span>

      <style jsx>
        {`
          h5 {
            margin: 0px;
            padding-bottom: 0px;
            font-size: 1.2em;
            font-weight: 700;
          }

          .address {
            font-size: 0.8em;
          }
        `}
      </style>
    </>
  );
};

export default DescriptionDetail;

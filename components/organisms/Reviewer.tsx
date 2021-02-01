import moment from "moment";
import { Review } from "../../models";
import StarsRatings from "../atoms/StarsRating";

export default function Reviewer({ review }: { review: Review }) {
  return (
    <>
      <div className="review">
        <div className="img-width">
          <img src={review.user.image_url} />
        </div>
        <div className="body">
          <p>
            {review.user.name}
            {`  `}
            {moment(review.time_created).format("DD/MM/YYYY")}
          </p>
          <StarsRatings rating={review.rating} />
          <p>{review.text}</p>
        </div>
      </div>

      <style jsx>
        {`
          p {
            margin: 0;
          }
          .body {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .img-width {
            width: 30%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }
          .review {
            display: flex;
            height: 10em;

            flex-direction: flex-start;
          }
          img {
            width: 6em;
            height: 6em;
            border-radius: 50%;
            object-fit: cover;
          }
        `}
      </style>
    </>
  );
}

import StarsRatings from "../atoms/StarsRating";

const Review = ({ rating, review_count, show_count }) => {
  const star = <StarsRatings rating={rating} />;
  return (
    <>
      {show_count && (
        <div className="block">
          {star}
          <span className="count"> {review_count} reviews </span>
        </div>
      )}

      {!show_count && star}

      <style jsx>
        {`
          .block {
            padding: 0.1em;
          }
          .count {
            position: relative;
            transform: translate(3px, 3px);
          }
        `}
      </style>
    </>
  );
};

export default Review;

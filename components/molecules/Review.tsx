import StarsRatings from "../atoms/StarsRating";

const Review = ({ rating, review_count, show_count }) => {
  const star = <StarsRatings rating={rating} review_count={review_count} />;
  return (
    <>
      {show_count && (
        <div className="block">
          {star}
          <span className="count"> {review_count}</span>
        </div>
      )}

      {!show_count && star}

      <style jsx>
        {`
          .block {
            display: flex;
            align-items: center;
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

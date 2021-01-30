import ReactStars from "react-rating-stars-component";

const StarsRatings = ({ rating, review_count, stars = 5, size = 40 }) => {
  return (
    
      <ReactStars
        count={stars}
        value={rating}
        size={size}
        edit={false}
        isHalf={true}
        activeColor="#ffd700"
      />
 
  );
};

export default StarsRatings;

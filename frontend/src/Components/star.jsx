import React from "react";

const Star = ({ totalStars = 5, defaultRating = 0}) => {
  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;

        return (
          <span
            key={index}
            style={{
              color: starValue <= defaultRating ? "gold" : "gray",
              fontSize: "1rem",
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default Star;
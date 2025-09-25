import React from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number; // e.g. 3.8
  outOf?: number; // default: 5
  size?: number; // star size in pixels
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  outOf = 5,
  size = 20,
  className = "",
}) => {


  return (
    <span className={`flex items-center ${className}`}>
      {Array.from({ length: outOf }, (_, index) => {
        // const starValue = index + 1;
        const fillPercentage = Math.min(
          Math.max(rating - index, 0),
          1
        ) * 100;

        return (
          <span
            key={index}
            className="relative block"
            style={{ width: size, height: size }}
          >
            {/* Empty Star */}
            <Star
              size={size}
              className="absolute top-1/2 left-0 right-0 -translate-y-1/2 text-gray-300 fill-current"
              strokeWidth={1.5}
            />

            {/* Filled Star */}
            <span
              className="absolute block top-1/2 left-0 right-0 -translate-y-1/2 overflow-hidden"
              style={{
                width: `${fillPercentage}%`,
                height: "100%",
              }}
            >
              <Star
                size={size}
                className="text-yellow-400 fill-yellow-400"
                strokeWidth={1.5}
              />
            </span>
          </span>
        );
      })}
    </span>
  );
};

export default StarRating;
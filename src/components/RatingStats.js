import { useContext } from "react";
import RatingContext from "../context/RatingContext";

function RatingStats() {
  const { ratings, reverse } = useContext(RatingContext);

  let average =
    ratings.reduce((acc, cur) => {
      return acc + cur.score;
    }, 0) / ratings.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className={`Stats ${reverse && "reversed"}`}>
      <span>Rated characters: {ratings.length}</span>
      <span>Average score: {isNaN(average) ? 0 : average}</span>
    </div>
  );
}

export default RatingStats;

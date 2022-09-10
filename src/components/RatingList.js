import { useContext } from "react";
import RatingContext from "../context/RatingContext";
import RatingItem from "./RatingItem";

const RatingList = () => {
  const { ratings } = useContext(RatingContext);

  if (!ratings || ratings.length === 0) {
    return <p>No charactes rated yet</p>;
  }

  return (
    <div>
      {ratings.map((item) => {
        return <RatingItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default RatingList;

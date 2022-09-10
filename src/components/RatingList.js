import { useContext } from "react";
import RatingContext from "../context/RatingContext";
import RatingItem from "./RatingItem";

const RatingList = () => {
  const { ratings, reverse } = useContext(RatingContext);

  if (!ratings || ratings.length === 0) {
    return (
      <p style={{ color: !reverse && "#796b93" }}>No charactes rated yet</p>
    );
  }

  return (
    <div className="RatingList">
      {ratings.map((item) => {
        return <RatingItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default RatingList;

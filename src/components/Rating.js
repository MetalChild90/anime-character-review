import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Star from "./Star";

function Rating({ addScore, score }) {
  const [value, setValue] = useState(0);
  const [dynamicValue, setDynamicValue] = useState(0);

  useEffect(() => {
    setValue(score);
  }, [score]);

  const colors = {
    1: "#f44336",
    2: "#FF5722",
    3: "#FF9800",
    4: "#FFC107",
    5: "#FFEB3B",
  };

  const meanings = {
    1: "Awful 🤮",
    2: "Don't care 😒",
    3: "Average 😐",
    4: "Good 🙂",
    5: "Fantastic 🔥",
  };

  const handleClick = (newValue) => {
    setValue(newValue);
    addScore(newValue);
  };

  const handleMouseEnter = (tempValue) => {
    setDynamicValue(tempValue);
  };

  const handleMouseLeave = () => {
    setDynamicValue(value);
  };

  const starSpans = [];

  for (let v = 1; v <= 5; v++) {
    starSpans.push(
      <Star
        key={v}
        color={colors[value]}
        isFilled={v <= dynamicValue}
        value={v}
        handleClick={handleClick}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        clickable={true}
      />
    );
  }

  return (
    <div className="Rating">
      <p>{value ? meanings[value] : "Not Rated Yet"}</p>
      {starSpans}
    </div>
  );
}

Rating.defaultProps = {
  score: 0,
};

Rating.propTypes = {
  addScore: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

export default Rating;

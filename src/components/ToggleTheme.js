import { GrSun } from "react-icons/gr";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useContext } from "react";
import RatingContext from "../context/RatingContext";

function ToggleTheme() {
  const { reverse, toggleReverse } = useContext(RatingContext);

  return (
    <div className="ToggleTheme" onClick={toggleReverse}>
      <GrSun className="ToggleTheme-icon" />
      <BsFillMoonStarsFill
        className="ToggleTheme-icon"
        style={{ color: "#010101" }}
      />
      <span className={`ToggleTheme-switch ${reverse && "cliked"}`}></span>
    </div>
  );
}

export default ToggleTheme;

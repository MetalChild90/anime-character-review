import PropTypes from "prop-types";

function Star({
  value,
  color,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
  isFilled,
  clickable,
}) {
  return (
    <span
      className="Star"
      style={{ color, cursor: clickable && "pointer" }}
      onClick={() => handleClick(value)}
      onMouseEnter={() => handleMouseEnter(value)}
      onMouseLeave={() => handleMouseLeave(value)}
    >
      {isFilled ? "★" : "☆"}
    </span>
  );
}

Star.defaultProps = {
  value: 0,
  isFilled: true,
  clickable: false,
};

Star.propTypes = {
  value: PropTypes.number.isRequired,
  isFilled: PropTypes.bool.isRequired,
  clickable: PropTypes.bool.isRequired,
  color: PropTypes.string,
  handleClick: PropTypes.func,
  handleMouseEnter: PropTypes.func,
  handleMouseLeave: PropTypes.func,
};

export default Star;

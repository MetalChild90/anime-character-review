import PropTypes from "prop-types";

function Box({ children, bgColor, color }) {
  return (
    <div style={{ backgroundColor: bgColor, color }} className="Box">
      {children}
    </div>
  );
}

Box.defaultProps = {
  bgColor: "rgba(0,0,0,0.4)",
};

Box.propTypes = {
  bgColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Box;

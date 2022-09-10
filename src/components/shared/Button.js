import PropTypes from "prop-types";

function Button({ children, version, type }) {
  return (
    <button className={`Button Button-${version}`} type={type}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "secondary",
  type: "button",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;

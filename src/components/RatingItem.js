import PropTypes from "prop-types";
import Box from "./shared/Box";
import { useContext, useState } from "react";
import RatingContext from "../context/RatingContext";
import { FiMoreHorizontal } from "react-icons/fi";
import defaultImage from "../assets/images/defaultimage.png";
import useToggle from "../hooks/useToggle";
import { motion } from "framer-motion";
import Star from "./Star";
import $ from "jquery";

const RatingItem = ({ item }) => {
  const { deleteRating, editRating } = useContext(RatingContext);

  const [coords, setCoords] = useState({ x: "", y: "" });
  const [openButtons, toggleOpenButtons] = useToggle(false);
  const [showReview, toggleShowReview] = useToggle(false);

  const handleClick = (e) => {
    setCoords({ x: e.pageX, y: e.pageY });
    toggleOpenButtons();
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    editRating(item);
    toggleOpenButtons();
    setCoords({ x: "", y: "" });
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    deleteRating(item.id);
    setCoords({ x: "", y: "" });
  };

  const handleShowReviewClick = (e) => {
    e.stopPropagation();
    toggleShowReview();
    toggleOpenButtons();
    setCoords({ x: "", y: "" });
  };

  const handleActionButtonsWrapperClick = () => {
    toggleOpenButtons();
    setCoords({ x: "", y: "" });
  };

  const colors = {
    1: "#f44336",
    2: "#FF5722",
    3: "#FF9800",
    4: "#FFC107",
    5: "#FFEB3B",
  };

  const starSpans = [];

  for (let v = 1; v <= 5; v++) {
    starSpans.push(
      <Star key={v} color={colors[item.score]} isFilled={v <= item.score} />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      exit={{ opacity: 0 }}
    >
      <Box>
        <div className="Item-horizontalBox">
          <FiMoreHorizontal onClick={handleClick} />
          {openButtons && (
            <div
              className="Item-actionButtons-wrapper"
              style={{ minHeight: $(document).height() }}
              onClick={handleActionButtonsWrapperClick}
            >
              <div
                className={`Item-actionButtons`}
                style={{
                  top: openButtons && coords.y,
                  left: openButtons && coords.x,
                }}
              >
                <button
                  className="Button Button-fullWidth"
                  onClick={handleShowReviewClick}
                >
                  Show review
                </button>
                <button
                  className="Button Button-fullWidth"
                  onClick={handleEditClick}
                >
                  Edit
                </button>
                <button
                  className="Button Button-delete Button-fullWidth"
                  onClick={handleDeleteClick}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="Item">
          <div className="Item-image-box">
            <img
              src={item.image ? item.image : defaultImage}
              alt={item.name ? item.name : "Default Image"}
              className="Item-image"
            />
          </div>
          <div className="Item-scoreBox"> {starSpans}</div>
          <p className="Item-name">{item.name}</p>
          <p>{item.anime}</p>
          {showReview && (
            <div className="Item-review">
              <span className="Item-closeReview" onClick={toggleShowReview}>
                &times;
              </span>
              <Box bgColor="#796b93">{item.review}</Box>
            </div>
          )}
        </div>
      </Box>
    </motion.div>
  );
};

RatingItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default RatingItem;

import PropTypes from "prop-types";
import Box from "./shared/Box";
import { useContext } from "react";
import RatingContext from "../context/RatingContext";
import { FiMoreHorizontal } from "react-icons/fi";
import defaultImage from "../assets/images/defaultimage.png";
import useToggle from "../hooks/useToggle";
import { motion } from "framer-motion";
import Star from "./Star";

const RatingItem = ({ item }) => {
  const { deleteRating, editRating } = useContext(RatingContext);

  const [openButtons, toggleOpenButtons] = useToggle(false);
  const [showReview, toggleShowReview] = useToggle(false);

  const handleClick = () => {
    toggleOpenButtons();
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    toggleOpenButtons();
    editRating(item);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    toggleOpenButtons();
    deleteRating(item.id);
  };

  const handleShowReviewClick = (e) => {
    e.stopPropagation();
    toggleOpenButtons();
    toggleShowReview();
  };

  const handleActionButtonsWrapperClick = () => {
    toggleOpenButtons();
  };

  const colors = {
    1: "#f44336",
    2: "#FF5722",
    3: "#FF9800",
    4: "#FFC107",
    5: "#FFEB3B",
  };

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
              onClick={handleActionButtonsWrapperClick}
            >
              <div className={`Item-actionButtons`}>
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
              style={{ width: item.image ? "auto" : "200px" }}
            />
          </div>
          <div className="Item-scoreBox">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i + 1}
                color={colors[item.score]}
                isFilled={i + 1 <= item.score}
              />
            ))}
          </div>
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

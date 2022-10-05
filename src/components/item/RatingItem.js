import { FiMoreHorizontal } from "react-icons/fi";
import PropTypes from "prop-types";
import Box from "../shared/Box";
import useToggle from "../../hooks/useToggle";
import ActionsModal from "./ActionsModal";
import ItemScore from "./ItemScore";
import ItemImage from "./ItemImage";
import ItemReview from "./ItemReview";
import ItemData from "./ItemData";
import { motion } from "framer-motion";

const RatingItem = ({ item }) => {
  const [openModal, toggleOpenModal] = useToggle(false);
  const [showReview, toggleShowReview] = useToggle(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      exit={{ opacity: 0 }}
    >
      <Box>
        <div className="Item-horizontalBox">
          <FiMoreHorizontal onClick={toggleOpenModal} />
          {openModal && (
            <ActionsModal
              toggleShowReview={toggleShowReview}
              toggleOpenModal={toggleOpenModal}
              item={item}
            />
          )}
        </div>
        <div className="Item">
          <ItemImage item={item} />
          <ItemScore item={item} />
          <ItemData item={item} />
          {showReview && (
            <ItemReview toggleShowReview={toggleShowReview} item={item} />
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

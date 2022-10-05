import Box from "../shared/Box";

function ItemReview({ toggleShowReview, item }) {
  return (
    <div className="Item-review">
      <span className="Item-closeReview" onClick={toggleShowReview}>
        &times;
      </span>
      <Box bgColor="#796b93">{item.review}</Box>
    </div>
  );
}

export default ItemReview;

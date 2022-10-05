import Star from "../Star";

function ItemScore({ item }) {
  const colors = {
    1: "#f44336",
    2: "#FF5722",
    3: "#FF9800",
    4: "#FFC107",
    5: "#FFEB3B",
  };
  return (
    <div className="Item-scoreBox">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i + 1}
          color={colors[item.score]}
          isFilled={i + 1 <= item.score}
        />
      ))}
    </div>
  );
}

export default ItemScore;

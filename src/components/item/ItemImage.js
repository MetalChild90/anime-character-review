import defaultImage from "../../assets/images/defaultimage.png";

function ItemImage({ item }) {
  return (
    <div className="Item-image-box">
      <img
        src={item.image.file ? item.image.file : defaultImage}
        alt={item.name ? item.name : "Default Image"}
        className="Item-image"
        style={{ width: item.image.file ? "auto" : "200px" }}
      />
    </div>
  );
}

export default ItemImage;

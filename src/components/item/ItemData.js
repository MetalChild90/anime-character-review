function ItemData({ item }) {
  return (
    <div>
      <p className="Item-name">{item.name}</p>
      <p>{item.anime}</p>
    </div>
  );
}

export default ItemData;

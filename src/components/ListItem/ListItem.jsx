export default function ListItem({ item, updateItem, handleDelete}) {

  return ( 
    <div className="card">
      <p>{item.name}</p>
      <p>{item.quantity} {item.unit}</p>
      <br />
      <div>
      {item.purchased ? (
        <span>Purchased</span>
      ) : (
        <div>
          <button className="buyBtn" onClick={() => updateItem(item.id)}>Buy</button>
          <button className="deleteBtn" onClick={() => handleDelete(item.id)}>Remove</button>
        </div>)}
    </div>
    </div>
  );
}

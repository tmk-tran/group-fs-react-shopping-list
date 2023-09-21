export default function ListItem({ item, updateItem, handleDelete}) {
    // const itemClassName = item.purchased ? 'purchased' : '';

  return ( 
    <div className="card">
      <p>{item.name}</p>
      <p>{item.quantity} {item.unit}</p>
      <br />
      <button className="buyBtn" onClick={() => updateItem(item.id)}>Buy</button> 
      <button className="deleteBtn" onClick={() => handleDelete(item.id)}>Remove</button>
    </div>
  );
}

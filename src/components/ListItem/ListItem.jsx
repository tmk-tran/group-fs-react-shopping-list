import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function ListItem({ item, updateItem, handleDelete}) {

    // added variable for changing the background color
    const card = item.purchased ? 'card purchased' : 'card';
    // vavriable for grey out items on purchase
    const textGrey = item.purchased? { color:'gray', textDecoration: "line-through" }: {};

  return ( 
    <div className="card">
        <h3></h3>  
      <p style={textGrey}>{item.name}</p>
      <p style={textGrey}>Qty:  {item.quantity} {item.unit}</p>
      <br />
      <div>
      {item.purchased ? (
        <span style={{backgroundColor:"rgb(74, 196, 25)", borderRadius:"3px"}}>Purchased</span>
      ) : (
        <div>
          <button className="buyBtn" onClick={() => updateItem(item.id)}><FontAwesomeIcon icon={faClipboardCheck} className="clipboard-icon" /></button>
          <button className="deleteBtn" onClick={() => handleDelete(item.id)}><FontAwesomeIcon icon={faTrash} className="trash-icon"/></button>
        </div>)}
    </div>
    </div>
  );
}

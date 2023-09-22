import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ListItem({ item, updateItem, handleDelete }) {
  // const [isEditing, setIsEditing] = useState(false);

  // added variable for changing the background color
  const card = item.purchased ? "card purchased" : "card";
  // vavriable for grey out items on purchase
  const textGrey = item.purchased
    ? { color: "gray", textDecoration: "line-through" }
    : {};

    

  return (
    <div className="card">
      <button
        className="editBtn"
        onClick={() => console.log("clicked edit yo!")}
      >
        Edit
      </button>
      <h3></h3>
      <p style={textGrey}>{item.name}</p>
      <p style={textGrey}>
        Qty: {item.quantity} {item.unit}
      </p>
      <br />
      <div>
        {item.purchased ? (
          <span
            style={{ backgroundColor: "rgb(74, 196, 25)", borderRadius: "3px" }}
          >
            Purchased
          </span>
        ) : (
          <div>
            <button className="buyBtn" onClick={() => updateItem(item.id)}>
              <FontAwesomeIcon
                icon={faClipboardCheck}
                className="clipboard-icon"
              />
            </button>
            <button className="deleteBtn" onClick={() => handleDelete(item.id)}>
              <FontAwesomeIcon icon={faTrash} className="trash-icon" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// {isEditing ? (
//     // Display input fields for editing when isEditing is true
//     <div>
//       <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
//       <input type="text" value={itemQuantity} onChange={(e) => setItemQuantity(e.target.value)} />
//       <input type="text" value={itemUnit} onChange={(e) => setItemUnit(e.target.value)} />
//       <button onClick={() => setIsEditing(false)}>Save</button>
//     </div>
//   ) : (
//     // Display item details when isEditing is false
//     <div>
//       <button className="editBtn" onClick={() => setIsEditing(true)}>Edit</button>
//       <h3></h3>
//       <p style={textGrey}>{item.name}</p>
//       <p style={textGrey}>Qty: {item.quantity} {item.unit}</p>
//       <br />
//       {/* ... rest of your code */}
//     </div>
//   )}
// </div>

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import Edit from "../Edit/Edit";
import { useState } from "react";

export default function ListItem({ item, updateItem, handleDelete, editItem }) {
  const [edit, setEdit] = useState(false);
  const [editName, setEditName] = useState(item.name);
  const [editQuantity, setEditQuantity] = useState(item.quantity);
  const [editUnit, setEditUnit] = useState(item.unit);

  const handleEdit = () => {
    setEdit(!edit);
};

const saveEdit = () => {
    console.log("clicked saveEdit");
    editItem(item.id, editName, editQuantity, editUnit);
    setEdit(false);
  };

  // variable for grey out items on purchase
  const textGrey = item.purchased
    ? { color: "gray", textDecoration: "line-through" }
    : {};
  return (
    <div className="card">
      {edit ? (
        // Render the edit fields when edit mode is true
        <div>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <input
            type="text"
            value={editQuantity}
            onChange={(e) => setEditQuantity(e.target.value)}
          />
          <input
            type="text"
            value={editUnit}
            onChange={(e) => setEditUnit(e.target.value)}
          />
          <button className="editBtn" onClick={handleEdit}>
            Cancel
          </button>
          <button onClick={saveEdit}>Save</button>
        </div>
      ) : (
        // Render item details when edit mode is false
        <div>
          <button className="editBtn" onClick={handleEdit}>
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
                style={{
                  backgroundColor: "rgb(74, 196, 25)",
                  borderRadius: "3px",
                }}
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
                <button
                  className="deleteBtn"
                  onClick={() => handleDelete(item.id)}
                >
                  <FontAwesomeIcon icon={faTrash} className="trash-icon" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

//     <div className="card">
//       <button
//         className="editBtn"
//         onClick={() => {
//             handleEdit(id);
//             console.log("clicked edit yo!", id)}}
//       >
//         Edit
//       </button>
//       <h3></h3>
//       <p style={textGrey}>{item.name}</p>
//       <p style={textGrey}>
//         Qty: {item.quantity} {item.unit}
//       </p>
//       <br />
//       <div>
//         {item.purchased ? (
//           <span
//             style={{ backgroundColor: "rgb(74, 196, 25)", borderRadius: "3px" }}
//           >
//             Purchased
//           </span>
//         ) : (
//           <div>
//             <button className="buyBtn" onClick={() => updateItem(item.id)}>
//               <FontAwesomeIcon
//                 icon={faClipboardCheck}
//                 className="clipboard-icon"
//               />
//             </button>
//             <button className="deleteBtn" onClick={() => handleDelete(item.id)}>
//               <FontAwesomeIcon icon={faTrash} className="trash-icon" />
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';


export default function InputForm({ fetchItem, handleDelete, handleSubmit}){

  const [itemInput, setItemInput] = useState("");
  const [quantityInput,setQuantityInput] = useState("");
  const [unitInput ,setUnitInput] = useState("");


return(<>
<div>
<h2>Add a New Item</h2>
      <form onSubmit={handleSubmit}>
        <label>Item</label>
        <input
          type="text"
          placeholder="Item name"
          value={itemInput}
          onChange={(event) => setItemInput(event.target.value)}
        />
              <label>Quantity</label>
        <input
          type="number"
          placeholder="Quantity"
          value={quantityInput}
          onChange={(event) => setQuantityInput(event.target.value)}
        />
              <label>Unit</label>
        <input
          type="text"
          placeholder="Unit"
          value={unitInput}
          onChange={(event) => setUnitInput(event.target.value)}
        />
        <button type="submit">Add Item</button>
        </form>
        <h2> Shopping List </h2>

        <button>Reset</button>
        <button onClick={() => handleDelete(id)}>Clear</button>
</div>

 </>)
}

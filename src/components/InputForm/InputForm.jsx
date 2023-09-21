import React, { useState } from 'react';


export default function InputForm( { handleClear, resetList, addItem, itemName, setItemName, itemUnit, setItemUnit, itemQuantity, setItemQuantity} ){

return(<>
<div>
<h2>Add a New Item</h2>
      <form onSubmit={addItem}>
        <label>Item</label>
        <input
          type="text"
          placeholder="Item name"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
        />
        <label>Quantity</label>
        <input
          type="number"
          placeholder="Quantity"
          value={itemQuantity}
          onChange={(event) => setItemQuantity(event.target.value)}
        />
        <label>Unit</label>
        <input
          type="text"
          placeholder="Unit"
          value={itemUnit}
          onChange={(event) => setItemUnit(event.target.value)}
        />
        <button type="submit">Add Item</button>
        </form>
        <h2> Shopping List </h2>

        <button onClick={() => resetList()}>Reset</button>
        <button onClick={() => handleClear()}>Clear</button>
</div>

 </>)
}



import React, { useState } from 'react';
// For Font Awesome 5
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


export default function InputForm( { handleClear, resetList, addItem, itemName, setItemName, itemUnit, setItemUnit, itemQuantity, setItemQuantity, deleteSwal} ){

return(
<div>
<h2>Add a New Item</h2>
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Item name"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={itemQuantity}
          onChange={(event) => setItemQuantity(event.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Units"
          value={itemUnit}
          onChange={(event) => setItemUnit(event.target.value)}
          required
        />
        <button className="addBtn" type="submit"><FontAwesomeIcon icon={faShoppingCart} className="clipboard-icon"/></button>
        </form>
        <h2> Shopping List </h2>

        <button className="resetBtn" onClick={() => resetList()}>Reset</button>
        <button className="clearBtn" onClick={() => deleteSwal(event)}>CLEAR</button>
</div>

 );
}

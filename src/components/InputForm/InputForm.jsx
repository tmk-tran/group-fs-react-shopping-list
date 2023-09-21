import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function InputForm({handleSubmit, newItemName, newItemQuantity, newItemUnit}){

return(<>
<div>
<h2>Add a new guest</h2>
      <form onSubmit={handleSubmit}>
        <label>Item</label>
        <input
          type="text"
          placeholder="Item name"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
              <label>Quantity</label>
        <input
          type="number"
          placeholder="Quantity"
          value={newItemQuantity}
          onChange={(event) => setNewItemQuantity(event.target.value)}
        />
              <label>Unit</label>
        <input
          type="text"
          placeholder="Unit"
          value={newItemUnit}
          onChange={(event) => setNewItemUnit(event.target.value)}
        />
        <button type="submit">Add Item</button>
        </form>
        <h2> Shopping List </h2>
        <button>Reset</button>
        <button onClick={() => handleDelete(id)}>Clear</button>
</div>

 </>)
}

StudentForm.propTypes = {
    addStudent: PropTypes.func.isRequired,
};
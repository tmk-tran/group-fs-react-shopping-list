import swal from 'sweetalert';


import React, { useState, useEffect } from "react";
import axios from "axios";
import InputForm from "../InputForm/InputForm.jsx";
import ShoppingList from "../ShoppingList/ShoppingList.jsx";
import Header from "../Header/Header.jsx";
import "./App.css";

function App() {
  const [itemList, setItemList] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemUnit, setItemUnit] = useState("");
  const [editingId, setEditingId] = useState(0);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = () => {
    axios
      .get("/list/")
      .then((response) => {
        setItemList(response.data);
      })
      .catch((error) => {
        console.log("Error in fetchItem GET", error);
      });
  };

  const addItem = (event) => {
    event.preventDefault();
    // axios.post("/list/", {
    //   name: itemName,
    //   quantity: itemQuantity,
    //   unit: itemUnit,
    // });
    axios({
      method: editingId ? "PUT" : "POST",
      url: `/list/${editingId ? editingId : ""}`,
      data: { name: itemName, quantity: itemQuantity, unit: itemUnit },
    })
      .then((response) => {
        fetchItem();
        setItemName("");
        setItemQuantity(0);
        setItemUnit("");
        editingId && setEditingId(0);
      })
      .catch((err) =>
        console.log(
          `error in ${editingId ? "editing" : "adding new"} item`,
          err
        )
      );
  };

  const updateItem = (id) => {
    axios
      .put(`/list/purchased/${id}`, {
        name: itemName,
        quantity: itemQuantity,
        unit: itemUnit,
      })
      .then((response) => {
        fetchItem();
      })
      .catch((error) => {
        console.log("Error in updateItem PUT", error);
      });
  };

  const resetList = () => {
    axios
      .put("/list/reset")
      .then((response) => {
        fetchItem();
      })
      .catch((error) => {
        console.log("Error in reset list PUT", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`/list/${id}`)
      .then((response) => {
        fetchItem();
      })
      .catch((error) => {
        console.log("Error in handleDelete", error);
      });
  };

  const handleClear = (event) => {
    console.log("test");
    axios
      .delete(`/list/`)
      .then(() => {
        console.log("in clear");
        fetchItem();
      })
      .catch((error) => {
        console.log("Error in handleClear", error);
      });
  };

  function deleteSwal(event) {
  swal({
    title: "Delete the Whole List?",
    text: "Once deleted, you will not be able to recover this list!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((confirm) => {
    console.log(confirm)
    if (confirm) {
      handleClear(event);
      console.log("list has been deleted");
      swal("The list has been deleted.", {
        icon: "success",
      });
    } else {
      swal("Your list is safe!");
    }
  });
  
}

  return (
    <div className="App">
      <Header />
      <main>
        <InputForm
          deleteSwal={deleteSwal}
          resetList={resetList}
          handleClear={handleClear}
          addItem={addItem}
          itemUnit={itemUnit}
          setItemUnit={setItemUnit}
          itemName={itemName}
          setItemName={setItemName}
          itemQuantity={itemQuantity}
          setItemQuantity={setItemQuantity}
        />
        <hr />
        <ShoppingList
          itemList={itemList}
          handleDelete={handleDelete}
          updateItem={updateItem}
        />
      </main>
    </div>
  );
}
export default App;

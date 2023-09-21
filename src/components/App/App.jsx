import React, {useState, useEffect} from 'react';
import axios from "axios";
import InputForm from '../InputForm/InputForm.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import Header from '../Header/Header.jsx'
import './App.css';



function App() {
    const [itemList, setItemList] = useState([]);
    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState("");
    const [itemUnit, setItemUnit] = useState('');

    useEffect(() => {
      fetchItem();
    }, []);
  
    const fetchItem = () => {
      axios.get('/list/')
        .then((response) => {
          setItemList(response.data);
        })
        .catch((error) => {
          console.log('Error in fetchItem GET', error);
        });
    };
  
    const addItem = (event) => {
        event.preventDefault();
      axios.post('/list/', { name: itemName, quantity: itemQuantity, unit: itemUnit })
        .then((response) => {
          fetchItem();
          setItemName('');
          setItemQuantity();
          setItemUnit('');
        })
        .catch((error) => {
          console.log('Error in addItem POST', error);
        });
    };
  
    const updateItem = (id) => {
      axios.put(`/list/purchased/${id}`, { name: itemName, quantity: itemQuantity, unit: itemUnit })
        .then((response) => {
          fetchItem();
        })
        .catch((error) => {
          console.log('Error in updateItem PUT', error);
        });
    };

    const resetList = () => {
        axios.put("/list/reset")
          .then((response) => {
            fetchItem();
          })
          .catch((error) => {
            console.log('Error in reset list PUT', error);
          });
      };

    const handleDelete = (id) => {
      axios.delete(`/list/${id}`)
        .then((response) => {
          fetchItem();
        })
        .catch((error) => {
          console.log('Error in handleDelete', error);
        });
    };

      const handleClear = () => {
        axios.delete(`/list/`)
          .then(() => {
            console.log("in clear")
            fetchItem();
          })
          .catch((error) => {
            console.log('Error in handleClear', error);
          });
      };

    return (
        <div className="App">
            <Header />
            <main>
                <InputForm resetList={resetList} handleClear={handleClear} addItem={addItem} itemUnit={itemUnit} setItemUnit={setItemUnit} itemName={itemName} setItemName={setItemName} itemQuantity={itemQuantity} setItemQuantity= {setItemQuantity}/>
                <hr/>
                <ShoppingList itemList={itemList} handleDelete={handleDelete} updateItem={updateItem}/>
                                
            </main>
        </div>
    );
}
export default App;

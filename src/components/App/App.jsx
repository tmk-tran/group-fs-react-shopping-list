import React, {useState, useEffect} from 'react';
import axios from "axios";
import InputForm from '../InputForm/InputForm.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import Header from '../Header/Header.jsx'
import ListItem from '../ListItem/ListItem.jsx';
import './App.css';



function App() {
    const [itemList, setItemList] = useState([]);
    const [itemName, setNewItemName] = useState('');
    const [itemQuantity, setNewItemQuantity] = useState('');
    const [itemUnit, setNewItemUnit] = useState('');
  
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
  
    const addItem = () => {
      axios.post('/list/', { name: itemName, quantity: itemQuantity, unit: itemUnit })
        .then((response) => {
          fetchItem();
          setNewItemName('');
          setNewItemQuantity('');
          setNewItemUnit('');
        })
        .catch((error) => {
          console.log('Error in addItem POST', error);
        });
    };
  
    const updateItem = (id) => {
      axios.put(`/list/${id}`, { name: itemName, quantity: itemQuantity, unit: itemUnit })
        .then((response) => {
          fetchItem();
        })
        .catch((error) => {
          console.log('Error in updateItem PUT', error);
        });
    };
  
    const handleDelete = (id) => {
      axios.delete('/list/', { params: { id } })
        .then((response) => {
          fetchItem();
        })
        .catch((error) => {
          console.log('Error in handleDelete', error);
        });
    };
  

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchItem();
      };




// ADDED 'ListItem' UNDER <P> TAG -MARK
    return (
        <div className="App">
            <Header />
            <main>
                <InputForm itemList={itemList} fetchItem={fetchItem} handleDelete={handleDelete} handleSubmit={handleSubmit}/>
                <hr/>
                <ShoppingList itemList={itemList} handleDelete={handleDelete} updateItem={updateItem}/>
                                
            </main>
        </div>
    );
}

export default App;

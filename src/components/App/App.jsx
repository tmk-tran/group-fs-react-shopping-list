import React, {useState, useEffect} from 'react';

import InputForm from '../InputForm/InputForm.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import Header from '../Header/Header.jsx'
import ListItem from '../ListItem/ListItem.jsx';
import './App.css';


function App() {
    let [itemList, setItemList] = useState([]);
    const [newItemName, setNewItemName] = useState("");
    const [newItemQuantity,setNewItemQuantity] = useState("");
    const [newItemUnit,setNewItemUnit] = useState("");

    
    useEffect(() => {
        fetchItem();
      }, []);
    
    const fetchItem = () => {
    axios.get('/list')
        .then((response) => {
            setItemList(response.data);
        })
        .catch((error) => {
            console.log('Error in fetchItem GET', error)
        });

    }
    const addItem = () => {
        axios.post('/list', {name: itemName, quantity: itemQuantity, unit: itemUnit})
            .then((response) => {
                fetchItem();
                setNewItemName("")
                setNewItemQuantity("")
                setNewItemUnit("")
            })
            .catch((error) => {
                console.log('Error in addItem POST', error)
            });


    }
    const updateItem = (id) => {
        axios.put(`/list/${id}`)
        .then((response) => {
            fetchItem();
        })
        .catch((error) => {
            console.log('Error in updateItem PUT', error)

        });


    }


    const handleDelete = (event) => {
        axios.delete('/list'), {params: i}

    }



    const handleSubmit = (event) => {
        event.preventDefault();
        if (newItemName) {
          addItem();
        } else {
          alert("The new item needs a name!");
        }
      };







// ADDED 'ListItem' UNDER <P> TAG -MARK
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                <InputForm handleSubmit={handleSubmit} newItemName={newItemName} newItemQuantity={newItemQuantity} newItemUnit={newItemUnit} setNewItemName={setNewItemName}setNewItemQuantity={setNewItemQuantity} setNewItemUnit={setNewItemUnit}/>
                <hr/>
                <ShoppingList/>
                                
            </main>
        </div>
    );
}

export default App;

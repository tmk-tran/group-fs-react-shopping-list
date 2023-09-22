import "./ShoppingList.css";
import ListItem from "../ListItem/ListItem"

export default function ShoppingList ({ itemList, handleDelete, updateItem, handleEdit}) {

    return(
        <>
            {itemList.map(item => 
                 <ListItem key={item.id} item={item} handleDelete={handleDelete} updateItem={updateItem} handleEdit={handleEdit} />
            )}
       </>
    )
}// end of return



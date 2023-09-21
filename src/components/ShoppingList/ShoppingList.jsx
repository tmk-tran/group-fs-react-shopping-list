import "./ShoppingList.css";
import ListItem from "../ListItem/ListItem"

export default function ShoppingList ({ itemList, handleDelete, updateItem}) {

    return(
        <>
            {itemList.map(item => 
                 <ListItem key={item.id} item={item} handleDelete={handleDelete} updateItem={updateItem} />
            )}
       </>
    )
}// end of return



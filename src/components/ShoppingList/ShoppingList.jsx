import "./ShoppingList.css";
import ListItem from "../ListItem/ListItem"
export default function  ({ /*placeholder */}) {
    return(
        <div class="card">
            <br/>
    {/*      commented out. placeholder for mark's ListItem
            <p>{item}</p>
            <p>{quantity} {unit}</p>
    */}
    
            <ListItem item={item} quantity={quantity} unit={unit} />
            <button class="buyBtn">Buy</button>
            <button class="removeBtn">Remove</button>
            <br/>
        </div>
    )
}// end of return


//need to map
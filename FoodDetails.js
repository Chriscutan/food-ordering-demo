import {useState} from 'react';
import FinalComfirm from './FinalConfirm';

function FoodDetails(props){
    let [item, setItem] = useState(0);
    let [finalOrder, setFinalOrder] = useState(false);

    function increaseItem(){
        setItem(item + 1);
        
    }

    function decreaseItem(){
        setItem(item - 1);
    }

    function placeOrder(){
        setFinalOrder(true);
    }

    return(
        <div className="order-container">
            <img src={props.img} className="food-img"></img>
            <p>{props.name}</p>
            <p>{props.desc}</p>
            <div className="flexbox">
                <button className="btn" onClick={decreaseItem}>-</button>
                <h2 className="count">{item < 0 ? 0 : item}</h2>
                <button className="btn" onClick={increaseItem}>+</button>
            </div>

            <button className="btn" onClick={placeOrder}>Place Order</button>

            { finalOrder ? <FinalComfirm name={props.name} quan={item} price={props.price} total={Number(props.price) * Number(item)} /> : null}
        </div>
    );
}

export default FoodDetails;
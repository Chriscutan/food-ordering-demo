import React, {useState} from "react";
import OrderConfirm from "./OrderConfirm";
import FoodDetails from "./FoodDetails";

function FoodCard(props){
    let [confirm, setConfirm] = useState(false);
    let [details, setDetails] = useState(false);
    let totalPrice = 0;
    function placeOrder(){
        setConfirm(true);
        setTimeout(()=>{
            setConfirm(false);
        }, 3000);
    }

    function showDetails(){
        setDetails(true);
        setTimeout(()=>{
            setDetails(false);
        }, 7000);
    }
    return(
        <div className="food-container">
            <div className="food-header">
                <img src={props.img} className="food-img" onClick={showDetails}></img>
            </div>
            <p>{props.name}</p>
            <p>{props.des}</p>
            <p>Rs. {props.price}</p>
            <button className="btn" onClick={placeOrder}>Order Now</button>

            { confirm ? <OrderConfirm orderItem={props.name} orderQuan="1" price={props.price}/> : null}

            { details ? <FoodDetails img={props.img} name={props.name} desc={props.des} price={props.price} /> : null}
        </div>
    );
}

export default FoodCard;
function OrderConfirm(props){

    return(
        <div className="order-container">
            <h2 className="success">Order Placed Successfully!!!</h2>
            <p className="order-item">Your order: {props.orderItem}</p>
            <p className="order-quan">Quantity: {props.orderQuan}</p>
            <p className="price">Price: Rs. {props.price}</p>
            {Number(props.price) < 150 ? <p className="delivery-chg">Delivery Amount: Rs. 20</p> : null}
            {Number(props.price) < 150 ? <p className="total">Total Amount: {Number(props.price) + 20}</p> 
            : <p className="total">Total Amount: {props.price}</p>}
        </div>
    );
}

export default OrderConfirm;
function FinalComfirm(props){
    return(
        <div className="finalorder-container">
            <h2 className="success">Order Successfully Placed!!!</h2>
            <p>Your Order: {props.name}</p>
            <p>Quantity: {props.quan}</p>
            <p>Price: {props.price}</p>
            <p>Grand Total: {props.total}</p>
        </div>
    );
}

export default FinalComfirm;
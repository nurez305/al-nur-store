import { useState, useContext } from "react";
import { CartContext } from "./context/CartContext";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
    const ctx = useContext(CartContext);

    const [quantity, setQuantity] = useState(1);

    const increaseHandler = () => {
        setQuantity(prev => prev + 1);
    }

    const decreaseHandler = () => {
        if(quantity === 1) {
            return;
        }
        setQuantity(prev => prev - 1)
    }

    const total = quantity * props.amount;

    const addItemHandler = () => {
        let itemArr = []

        ctx.addItem({
            id: props.id,
            name: props.name,
            quantity: quantity,
            amount: props.amount,
            image: props.image,
            total: total,
        }, props.id, quantity, total)

        itemArr.push(quantity);

        console.log(quantity);

        ctx.itemTotal();

        ctx.totalOrder();

        console.log(ctx.items)
    }
    
   

    return <div className={`col-sm-8 col-md-4 col-lg-3 ${classes.cartitem__div}`}>
    <img src={props.image} alt="description" className={classes.cartitem_img} />
    <div className={classes.cartitem_amount}>
        <div>
            <p className={classes.cartitem_name}>{props.name}</p>
            <p>₦{props.amount}</p>
        </div>
        <p>Total <br />
            <span style={{fontWeight: "bold"}}>₦{total}</span>
        </p>
    </div>
    <div className={classes.cartitem_amount}>
        
        <div>
            <p className={classes.cartitem__qtysect}>Quantity</p>
            <div className={classes.cartitem__actions}>
                <button onClick={decreaseHandler} className={classes.cartitem__decrease}>-</button>
                <p className={classes.cartitem__quantity}>{quantity}</p>
                <button onClick={increaseHandler} className={classes.cartitem__increase}>+</button>
            </div>
        </div>
    </div>
   
    <div className={classes.btn__div}>
        <button className={classes.cartitem__btn} onClick={addItemHandler}>Add to Cart</button>
    </div>
</div>
}

export default CartItem;
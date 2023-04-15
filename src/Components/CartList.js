import classes from "./CartList.module.css";
// import img from "../images/Shirt.jpg";
import { useState, useContext } from "react";
import { CartContext } from "./context/CartContext";

const CartList = (props) => {
    const ctx = useContext(CartContext);

    const [qty, setQty] = useState(props.quantity);

    const increaseHandler = (id) => {
        setQty(prev => prev + 1)

        for(const item of ctx.items) {
            if(item.id === id) {
                item.quantity += 1
                item.total = item.quantity * item.amount
                console.log(item)
            }
        }

        ctx.totalOrder();

        console.log(ctx.items)
    }

    const decreaseHandler = (id) => {
        if(qty === 1) {
            return;
        }

        setQty(prev => prev - 1)

        for(const item of ctx.items) {
            if(item.id === id) {
                item.quantity = qty - 1
                item.total = item.quantity * item.amount
                console.log(item)
            }
        }

        ctx.totalOrder();
    }

    const removeItemHandler = () => {
        return ctx.removeItem(props.id)
    }

    const total = props.amount * qty;

    return <div className={`container ${classes.cart_checkout}`}>
        <div>
            <img className={classes.checkout_img} src={props.image} alt="Shirt pix" />
            <p>{props.name}</p>
            <div>
                <p className={classes.cartitem__qtysect}>Quantity</p>
                <div className={classes.cartitem__actions}>
                    <button onClick={decreaseHandler.bind(null, props.id)} className={classes.cartitem__decrease}>-</button>
                    <p onChange={() => ctx.total} className={classes.cartitem__quantity}>{qty}</p>
                    <button onClick={increaseHandler.bind(null, props.id)} className={classes.cartitem__increase}>+</button>
                </div>
            </div>
        </div>
        <div className={classes.checkout__actions}>
           
        </div>
        <div className={classes.cartitem_amount}>
            <p>Price <br />
                <span>${props.amount}</span>
            </p>
            <p>Total <br />
                <span style={{fontWeight: "bold"}}>${total}</span>
            </p>
            <button className={classes.remove__item} onClick={removeItemHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                </svg>
            </button>
        </div>
    </div>
}

export default CartList;
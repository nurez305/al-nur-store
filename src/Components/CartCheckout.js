import { CartContext } from "./context/CartContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import classes from "./CartCheckout.module.css";
import CartList from "./CartList";
import Backdrop from "./Backdrop";
import PayStack from "./PayStack";
import Footer from "./Footer";


const CartCheckout = () => {
    const navigate = useNavigate();
    const ctx = useContext(CartContext);
    const [check, setCheck] = useState(false)

    const cancelSetOut = () => {
        setCheck(false)
    }

    console.log(ctx.items)

    ctx.totalOrder()

    let checkOut;

    if(ctx.items.length < 1) {
        checkOut =  <div className={`container ${classes.cart_check}`}>
            <p>You currently have no item in your cart.</p>
            <button onClick={() => {
                navigate('/')
            }}>Continue Shopping</button>
        </div>
    } else {
        checkOut = ctx.items.map(item => {
                return <CartList    
                            key={item.id} 
                            id={item.id} 
                            name={item.name}
                            quantity={item.quantity}
                            amount={item.amount}
                            image={item.image}
                            />
            } )
        }

    return <>
        <div className={classes.cart__list}> 
                {checkOut}
                {ctx.items.length > 0 && 
                <div className={`container ${classes.payment_action}`}>
                    <p>Total: ₦<span style={{fontWeight: "bold", color: "red"}}>{ctx.total}</span></p>
                    <button onClick={setCheck} className={classes.proceed__checkout}>Proceed to Payment</button>
                </div>
                }
                {check && <Backdrop onCancel={cancelSetOut} />}
                {check && <PayStack amount={ctx.total} onCancel={cancelSetOut} />}
            </div>
            <Footer />
        </>
}


export default CartCheckout;
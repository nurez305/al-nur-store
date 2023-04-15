import PaystackPop from '@paystack/inline-js'
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './context/CartContext';

import classes from "./PayStack.module.css"

const PayStack = (props) => {
    const ctx = useContext(CartContext);
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    // const [amount, setAmount] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const navigatePage = () => {
        navigate('/', {replace: true});
    }

    const payWithPaystack = (event) => {
        event.preventDefault(); 
        const payStack = new PaystackPop();

        if(firstName === "" || lastName === "" || email === "") {
            alert("Please fill out the required information");
            return;
        }
        payStack.newTransaction({
            key: "pk_test_513da27a425b9b63696d1dbe020fad8fc6a08c7a",
            email: email,
            amount: props.amount * 100,
            firstName: firstName,
            lastName: lastName, 
            onSuccess(transaction){
                let message = `Payment Complete Reference ${transaction.reference}`
                alert(message)
                setEmail('')
                setFirstName('')
                setLastName('')
                navigatePage();
            },
            onCancel() {
                alert("Transaction cancelled successfully");
                ctx.items = []
            }
        })
    }

    return <form id="paymentForm" className={classes.payment}>
            <div className={`form-group ${classes.control}`}>
                <label htmlFor="email">Email Address</label>
                <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} id="email-address" />
            </div>
            <div className={classes.control}>
                <label htmlFor="amount">Amount</label>
                <input type="tel" value={props.amount} id="amount" />
            </div>
            <div className={classes.control}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" value={firstName} onChange={(e) => {setFirstName(e.target.value)}} id="first-name" />
            </div>
            <div className={classes.control}>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" value={lastName} onChange={(e) => {setLastName(e.target.value)}} id="last-name" />
            </div>
            <div className={classes.confirmOrder}>
                <button type="submit" onClick={props.onCancel} className={classes.cancelBtn}> Cancel </button>
                <button type="submit" onClick={payWithPaystack} className={classes.confirmBtn}> Pay </button>
            </div>
        </form>
}

export default PayStack;
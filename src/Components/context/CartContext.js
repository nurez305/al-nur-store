import { createContext, useState } from "react";

export const CartContext = createContext({
    items: [],
    totalItem: () => {},
    increaseQty: () => {},
    itemQty: "",
    addItem: () => {},
    removeItem: () => {},
    totalAmt: () => {},
    totalAmount: "",
    totalOrder: () => {},
})

const CartContextProvider = (props) => {
    const [userOrder, setUserOrder] = useState([])
    const [itemQty, setItemQty] = useState();
    const [totalOrder, setTotalOrder] = useState();

    const increaseItemQty = () => {
        setItemQty(prev => prev + 1)
    }

    const removeItemHandler = (id) => {
        setUserOrder(prev => {
            return prev.filter(item => item.id !== id)
        })
        totalItem();
    }

    const totalItem = () => {
        let qtyArray = [];

        for(const item of userOrder) {
            console.log(item.quantity)
            qtyArray.push(item.quantity)
            console.log(qtyArray);
        }

        const quantityArray = qtyArray.reduce((prevVal, curVal) => {
            return prevVal + curVal
        }, 0)

        console.log(quantityArray)

        return quantityArray;
    }

    const totalOrderChangeHandler = (action, num) => {
        let amountArray = [];

        for(const item of userOrder) {
            console.log(item.total)
            amountArray.push(item.total)
        }

        let quantityArray = amountArray.reduce((prevVal, curVal) => {
            return prevVal + curVal
        }, 0)

        setTotalOrder(quantityArray);
        console.log(quantityArray)
        console.log(totalOrder)
    }

    const addItemHandler = (item, id, newQty, total) => {
        const existingItem = userOrder.find(item => item.id === id);

        console.log(existingItem);

        if(existingItem) {
            console.log(existingItem.quantity)
            console.log(existingItem)
            existingItem.quantity += newQty
            existingItem.total = existingItem.quantity * existingItem.amount;
            console.log(existingItem.total);
            // totalOrderChangeHandler();
            return;
        } else {
            setUserOrder(prev => {
                return prev.concat(item)
            })
        }
     
        // setItemQty(qty)
    }

    const context = {
        items: userOrder,
        itemTotal: totalItem,
        totalItem: totalItem(),
        increaseQty: increaseItemQty,
        itemQty: itemQty,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        totalOrder: totalOrderChangeHandler,
        total: totalOrder
    }

    return <CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>
}

export default CartContextProvider;
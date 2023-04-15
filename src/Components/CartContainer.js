import { useState } from "react";

import classes from "./CartContainer.module.css";

import CartItem from "./CartItem"
import SearchBar from "./SearchBar";

const CartContainer = () => {
    const [itemFiltered, setItemFiltered] = useState(null);
    const [fallBack, setFallBack] = useState(false)

    const Dummy = [
        {
            id: "k1",
            name: "Rolex Wristwatch",
            amount: 12,
            image: "https://cdn.shopify.com/s/files/1/0833/7361/products/8bc99928f44e351f357d4621f63e295544caf125_1024x1024.jpg?v=1614208931"
        },
        {
            id: "k2",
            name: "Addidas Hoody",
            amount: 11,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/Y/187502_1634833688.jpg"
        },
        {
            id: "k3",
            name: "Lacoste Hoody",
            amount: 24,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/E/X/121271_1656856725.jpg"
        },
        {
            id: "k4",
            name: "Jordan Boot",
            amount: 76,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/Z/169529_1604051771.jpg"
        },
        {
            id: "k5",
            name: "Nike Jean Trouser",
            amount: 22,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/O/V/211223_1678043313.jpg"
        },
        {
            id: "k6",
            name: "Nike Tracksuit",
            amount: 52,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/F/190640_1631121932.jpg"
        },
        {
            id: "k7",
            name: "Zara Dress",
            amount: 32,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/Y/138017_1615373484.jpg"
        },
        {
            id: "k8",
            name: "Zara Footwear",
            amount: 51,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/E/X/84279_1632817631.jpg"
        },
        {
            id: "k9",
            name: "Zara Light Top",
            amount: 43,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/F/F/130406_1642800072.jpg"
        },
        {
            id: "k10",
            name: "Nike Air Wurache",
            amount: 19,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/P/141731_1656277147.jpg"
        },
        {
            id: "k11",
            name: "Zara scandals",
            amount: 34,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/G/W/109330_1542745558.jpg"
        },
        {
            id: "k12",
            name: "Zara Suit",
            amount: 21,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/E/116163_1595602900.jpg"
        },
        {
            id: "k13",
            name: "Zara Leather Footwear",
            amount: 45,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/J/A/84279_1636835208.jpg"
        },
        {
            id: "k14",
            name: "Nike Socks",
            amount: 35,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/K/4680_1636273944.jpg"
        },
        {
            id: "k15",
            name: "Rolex Wristwatch",
            amount: 61,
            image: "https://cdn.shopify.com/s/files/1/0833/7361/products/b70bbd7db3b1fc174dd76576c13516edc999c227_1024x1024.jpg?v=1610198335"
        },
        {
            id: "k16",
            name: "Zara Highheel",
            amount: 23,
            image: "https://is4.fwrdassets.com/images/p/fw/z/SLAU-WZ964_V1.jpg"
        },
        {
            id: "k17",
            name: "Zara Scandals",
            amount: 34,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/G/W/109330_1542745558.jpg"
        },
        {
            id: "k18",
            name: "Zara Slimfit Dress",
            amount: 18,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/D/173344_1592890074.jpg"
        },
        {
            id: "k19",
            name: "Nike Jean Shirt",
            amount: 25,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/M/187502_1623705877.jpg"
        },
        {
            id: "k20",
            name: "Nike Singlets",
            amount: 29,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/F/203238_1655410853.jpg"
        },
        {
            id: "k21",
            name: "Nike Air Max",
            amount: 24,
            image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/9944621/1.jpg?0905"
        },
        {
            id: "k22",
            name: "Jordan Boot",
            amount: 17,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/K/O/181466_1663255402.jpg"
        }
    ]

    const filterHandler = (content) => {
        let itemFilter = true;

        for(const item of Dummy) {
            console.log(item.name);
            itemFilter = item.name.includes("O")
            console.log(itemFilter)
        }

        const filteredItem = Dummy.filter(item => item.name.toLowerCase().includes(content.toLowerCase()))

        setItemFiltered(filteredItem);

        console.log(itemFilter)
        console.log(filteredItem)
        console.log(itemFiltered)

        if(filteredItem.length === 0) {
            setFallBack(true)
        } else {
            setFallBack(false)
        }

        // setItemInclude(prev => !itemFilter)
        // const filteredItem = Dummy.filter((item) => item)

        // console.log(filteredItem)
    }

    return <>
        <SearchBar onChange={(e) => {filterHandler(e.target.value)}} />
        <div className="container-fluid">
            <div className={`row d-flex justify-content-center ${classes.cart_container}`}>
                {fallBack && <p style={{textAlign: "center", margin: "2rem"}}>Search not found</p>}
                {itemFiltered ? itemFiltered.map(item => {
                    return <CartItem 
                                key={item.id}
                                id={item.id}
                                name={item.name} 
                                amount={item.amount}
                                image={item.image} 
                                />
                }) : Dummy.map(item => {
                    return <CartItem 
                                key={item.id}
                                id={item.id}
                                name={item.name} 
                                amount={item.amount} 
                                image={item.image} 
                                />
                })}
                {/* <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem /> */}
            </div>
        </div>
    </>
}

export default CartContainer;
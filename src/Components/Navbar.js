import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import classes from "./Navbar.module.css";

const Navbar = () => {
    const ctx = useContext(CartContext);
    const [toggle, setToggle] = useState(false);

    const toggleNavbar = () => {
        setToggle(prev => !prev)
    }

    return <div className={classes.mart_header} onClick={ctx.totalOrder()}>
        <nav className={`container d-flex justify-content-between ${classes.mart_nav}`}>
            <Link to="/" className={classes.mart__link}>
                <h1>       
                    Al-Nur Store
                </h1>
            </Link>
                <ul className={`${classes.desktop__nav}`}>
                    <li>
                        <Link to="/" style={{textDecoration: "none", color: "black"}} className={`${classes.nav_link}`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="#" style={{textDecoration: "none", color: "black"}} className={`${classes.nav_link}`}>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="#" style={{textDecoration: "none", color: "black"}} className={`${classes.nav_link}`}>
                            Service
                        </Link>
                    </li>
                    <li>
                        <Link to="#" style={{textDecoration: "none", color: "black"}} className={`${classes.nav_link}`}>
                            Contact
                        </Link>
                    </li>
                    {/* <SearchBar /> */}
                </ul>
            
            <Link to="/cart" className={classes.mart__link}>
                <div className={classes.mart_icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="20" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                    </svg>
                    <span>{ctx.totalItem}</span>
                </div>
                <button>Logout</button>
            </Link>
            <div className={classes.mobile_cart}>
                <Link to="/cart" className={classes.mobile_icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                    </svg>
                    <span>{ctx.totalItem}</span>
                </Link>
                <button onClick={toggleNavbar} className={`${classes.toggle__nav} ${toggle ? classes.toggle_true : null}`}>
                    <span className={`${classes.top_toggle} ${toggle ? classes.top_true : null}`}></span>
                    <span className={`${classes.toggle_middle} ${toggle ? classes.middle_true : null}`}></span>
                    <span className={`${classes.toggle_bottom} ${toggle ? classes.bottom_true : null}`}></span>
                </button>
            </div>
        </nav>
            <ul className={`${classes.mobile_nav} ${toggle ? classes.active : null}`}>
                <li>
                    <Link to="/" style={{textDecoration: "none", color: "black"}}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/products" style={{textDecoration: "none", color: "black"}}>
                        Products
                    </Link>
                </li>
                <li>
                    <Link to="/service" style={{textDecoration: "none", color: "black"}}>
                        Service
                    </Link>
                </li>
                <li>
                    <Link to="/contact" style={{textDecoration: "none", color: "black"}}>
                        Contact
                    </Link>
                </li>
                <button>Logout</button>
            </ul>
    </div>
}

export default Navbar;

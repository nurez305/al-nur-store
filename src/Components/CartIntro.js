import classes from "./CartIntro.module.css";
import img4 from "../images/cartimage2.jpg"

const CartIntro = () => {
    return (
    
    <div className={classes.cart_intro}>
        <div className={`container ${classes.cart_sect}`}>
            <div className={classes.cart__text}>
                <h1>Al-Nur Store</h1>
                <p>...your fashion, our topmost priority</p>
                <p className={classes.intro__text}>At Al-Nur Store, we pride ourselves with
                quality services and excellent customer service. Your fashion is our topmost priority! </p>
            </div>
            <div className={classes.img_container}>
                <img src={img4} className={classes.intro_img} alt="intro-img" />
            </div>
        </div>
    </div>
   )
}

export default CartIntro;
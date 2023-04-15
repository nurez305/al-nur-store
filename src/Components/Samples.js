// import img from "../images/CartBackground1.jpg";
// import img1 from "../images/cartBackground.jpg";
import img2 from "../images/sneaker.webp";
import img3 from "../images/wristwatch.jpg";

import classes from "./Samples.module.css";

const Samples = () => {
    return <div className={`container ${classes.samples_sect}`}>
        <div className={classes.luxury__watch}>
            <div className={classes.img_container}>
                <img src={img2} className={classes.intro_img} alt="intro-img" />
            </div>
            <div className={classes.cart__text}>
                <h3>SHOES FOR MAN</h3>
                <p>New Model 2023 Collections</p>
            </div>
        </div>
        <div className={classes.luxury__shoe}>
            <div className={classes.cart__text}>
                <h3>LUXURY WATCH</h3>
                <p>New 2023 Watches</p>
            </div>
            <div className={classes.img_container}>
                <img src={img3} className={classes.intro_img} alt="intro-img" />
            </div>
          
        </div>
    </div>
}

export default Samples;
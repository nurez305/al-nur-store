import CartContainer from "./CartContainer";
import CartIntro from "./CartIntro";
import Footer from "./Footer";
import Samples from "./Samples";
import Services from "./Services";

const HomePage = () => {
    return <>
        <CartIntro />
        <Services />
        <Samples />
        <CartContainer />
        <Footer />
    </>
}

export default HomePage;
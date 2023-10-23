import { NavigationHome } from "../nav/NavsOfPages";
import { About_Us } from "../footer/AboutUs";
import { ShoppingCart } from "../Products/Products";

export const HomeApp = () => {
    return (
        <>
            <NavigationHome></NavigationHome>
            <ShoppingCart></ShoppingCart>
            <About_Us></About_Us>
        </>
    )
};

import {Routes,Route} from "react-router-dom"
import Product from "../pages/Product"
import SingleProduct from "../pages/SingleProduct"
import CartPage from "../pages/CartPage"
import PaymentPage from "../pages/PaymentPage"

function MainRoutes(){
    return(
        <Routes>
            <Route path="/product" element={<Product/>}/>
            <Route path="/product/:id" element={<SingleProduct/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/payment" element={<PaymentPage/>}/>
        </Routes>
    )
}
export default MainRoutes
import {Routes,Route} from "react-router-dom"
import Product from "../pages/Product"
import SingleProduct from "../pages/SingleProduct"
import CartPage from "../pages/CartPage"
import PaymentPage from "../pages/PaymentPage"
import Signup from "../pages/Signup"
import Login from "../pages/Login"

function MainRoutes(){
    return(
        <Routes>
            <Route path="/product" element={<Product/>}/>
            <Route path="/product/:id" element={<SingleProduct/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/payment" element={<PaymentPage/>}/>
            <Route path="/singup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}
export default MainRoutes
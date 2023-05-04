import {Routes,Route} from "react-router-dom"
import Product from "../pages/Product"
import SingleProduct from "../pages/SingleProduct"

function MainRoutes(){
    return(
        <Routes>
            <Route path="/product" element={<Product/>}/>
            <Route path="/product/:id" element={<SingleProduct/>}/>
        </Routes>
    )
}
export default MainRoutes
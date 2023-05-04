import {Routes,Route} from "react-router-dom"
import Product from "../pages/Product"

function MainRoutes(){
    return(
        <Routes>
            <Route path="/product" element={<Product/>}/>
        </Routes>
    )
}
export default MainRoutes
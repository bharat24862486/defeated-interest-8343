import { Routes, Route } from "react-router-dom";
import Product from "../pages/Product";
import SingleProduct from "../pages/SingleProduct";
import CartPage from "../pages/CartPage";
import PaymentPage from "../pages/PaymentPage";
import { Analytics } from "../admin/Analytics";
import { Deshboard } from "../admin/Deshboard";
import Admin_login from "../admin/admin_login";
import AdminProducts from "../admin/AdminProducts";
import PrivateRoute from "../admin/Components/PrivateRoute";
import Settings from "../admin/Settings";
import Home from "../pages/Home";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/payment" element={<PaymentPage />} />

      <Route
        path="/admin/admin_login"
        element={
          // <PrivateRoute>
          <Admin_login />
          // </PrivateRoute>
        }
      />
      <Route
        path="/admin/deshboard"
        element={
          <PrivateRoute>
            <Deshboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/products"
        element={
          <PrivateRoute>
            <AdminProducts />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/analytics"
        element={
          <PrivateRoute>
            <Analytics />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/setting"
        element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
export default MainRoutes;

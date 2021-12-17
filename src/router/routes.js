import {Routes, Route} from 'react-router-dom'
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import NotFound from '../pages/not-found/NotFound';
import SellerHome from '../pages/seller-home/SellerHome';
import ProductList from '../components/views/product-list/ProductList';
import OrderList from '../components/views/order-list/OrderList';
import SaleList from '../components/views/seller/sale-list/SaleList';
import ProductView from '../components/views/product-view/ProductView';
import Checkout from '../components/views/buyer/checkout/Checkout';
import Cart from '../components/views/buyer/cart/Cart';
import RequireAuth from "./RequireAuth";
import Logout from "../pages/logout/Logout";
import AuthServices from "../services/authservice";
import FollowerList from "../components/views/seller/followers/FollowerList";
import SellerProductList from "../components/views/seller/product-list/SellerProductList";
import ProductEdit from "../components/views/seller/product-edit/ProductEdit";
import AddProduct from "../components/views/seller/product-add/AddProduct";

export default function AppRoutes() {
    const { ROLE_SELLER, ROLE_ADMIN } = AuthServices;
    return (
        <Routes>
            <Route exact path="/" element={
                <RequireAuth>
                    <Home/>
                </RequireAuth>
            }>
                <Route index element={
                    <RequireAuth>
                        <ProductList/>
                    </RequireAuth>
                }/>
                <Route path="catalog" element={
                    <RequireAuth><ProductList/>
                    </RequireAuth>
                }/>
                <Route path="products/:productId" element={
                    <RequireAuth><ProductView/>
                    </RequireAuth>
                }/>
                <Route path="orders" element={
                    <RequireAuth>
                        <OrderList/>
                    </RequireAuth>
                }/>
                <Route path="checkout" element={
                    <RequireAuth>
                        <Checkout/>
                    </RequireAuth>
                }/>
                <Route path="cart" element={
                    <RequireAuth>
                        <Cart/>
                    </RequireAuth>
                }/>
            </Route>
            <Route path="seller-home" element={<SellerHome requiredRole={ROLE_SELLER} />}>
                <Route index element={<ProductList/>}/>
                <Route path="products" element={<SellerProductList/>}/>
                <Route path="products/edit/:id" element={<ProductEdit />}/>
                <Route path="products/add/" element={<AddProduct />}/>
                <Route path="sales" element={<SaleList/>}/>
                <Route path="followers" element={<FollowerList/>}/>
            </Route>
            <Route path="login" element={<Login/>}/>
            <Route path="logout" element={<Logout/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

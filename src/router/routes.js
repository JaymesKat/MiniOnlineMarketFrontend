import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import NotFound from '../pages/not-found/NotFound';
import SellerHome from '../pages/seller-home/SellerHome';
import ProductList from '../components/views/product-list/ProductList';
import OrderList from '../components/views/order-list/OrderList';
import SaleList from '../components/views/sale-list/SaleList';

export default function AppRoutes(){
    return (
        <Routes>
            <Route exact path="/" element={<Home />}>
                <Route index element={<ProductList />} />
                <Route path="catalog" element={<ProductList />} />
                <Route path="orders" element={<OrderList />} />
            </Route>
            <Route path="seller-home" element={<SellerHome />}>
                <Route index element={<ProductList />} />
                <Route path="products" element={<ProductList />} />
                <Route path="sales" element={<SaleList />} />
            </Route>
            <Route path="login" element={<Login />}/>
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

import { createBrowserRouter,Navigate } from "react-router-dom";
import AdminProduktet from './components/AdminProduktet'
import UserLayout from './components/UserLayout'
import Home from "./components/Home";
import Produktet from "./components/Produktet";
import View_Product from "./components/View_Product";

 const router = createBrowserRouter ([
    {
        path:'/admin/produktet',
        element:<AdminProduktet/> 

    },
    {
        path:'/',
        element:<Navigate to={'/home'} replace/>
    },
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/products',
        element:<Produktet/>
    },
    {
        path:'/view_product/:productID',
        element:<View_Product/>
    }
])
export default router   
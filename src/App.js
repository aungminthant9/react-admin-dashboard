import Home from "./pages/Home";
import Sidebar from "./component/sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";

function App() {
  return (
    <BrowserRouter>
     <Topbar/>
     <div className="flex mt-[10px]">
       <Sidebar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<UserList/>}/>
        <Route path="/user/:userId" element={<User/>}/>
        <Route path="/newUser" element={<NewUser/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/newproduct" element={<NewProduct/>}/>
       </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;

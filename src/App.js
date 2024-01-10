import Home from "./pages/Home";
import Sidebar from "./component/sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import UserList from "./pages/UserList";

function App() {
  return (
    <BrowserRouter>
     <Topbar/>
     <div className="flex mt-[10px]">
       <Sidebar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<UserList/>}/>
       </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;

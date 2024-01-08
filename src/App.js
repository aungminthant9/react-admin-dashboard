import Home from "./component/pages/Home";
import Sidebar from "./component/sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";

function App() {
  return (
    <div>
     <Topbar/>
     <div className="flex mt-[10px]">
       <Sidebar/>
       <Home/>
     </div>
    </div>
  );
}

export default App;

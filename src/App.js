import Sidebar from "./component/sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";

function App() {
  return (
    <div>
     <Topbar/>
     <div className="flex">
       <Sidebar/>
       <div className="flex-[4]">
         other pages
       </div>
     </div>
    </div>
  );
}

export default App;

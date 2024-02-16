 import Navbar from "./Components/Navbar/Navbar";
import Useritem from "./Components/User/Useritem";
import DisplayAllUser from "./Components/DisplayallUser/DisplayAllUser";
import './App.css';
function App() {
  return (
    <div className="App">
      
      <Navbar title="Github Finder"/>
      <div className="app-wrapper">
       <DisplayAllUser/>
       </div>
    </div>
  );
}

export default App;

import './App.css';
import {
  
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './Home';
import { Login } from './Login';
import { Dashboard } from './Dashboard';
import { Fir } from './Fir';
import { Analysis } from './Analysis';

function App() {
  return (
    <div className="App"> 
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Login/>} />
      <Route path="/dash" element={<Dashboard/>} />
      <Route path="/fir" element={<Fir/>} />
      <Route path="/analysis" element={<Analysis/>} />
    </Routes>
    </div>
  );
}

export default App;

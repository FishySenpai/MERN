import Navbar from './components/Navbar';
import Login from './components/User/Login';
import Registration from './components/User/Registration';
import './App.css';
import { Router, Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={Login}/>
      </Routes>
    </div>
  );
}

export default App;

import Navbar from './components/Navbar';
import Login from './components/User/Login';
import Registration from './components/User/Registration';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

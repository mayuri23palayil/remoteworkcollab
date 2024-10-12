
import './App.css';
import { Route, Routes } from 'react-router-dom'; // Only import Route and Routes

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Define the route for the Login page */}
        <Route path="/login" element={<Login />} />
        {/* Define the route for the Register page */}
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        {/* Default route (Redirect to Login page if no other route matches) */}
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

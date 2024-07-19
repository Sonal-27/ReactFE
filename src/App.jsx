import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import SignUp from './components/signup/signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;

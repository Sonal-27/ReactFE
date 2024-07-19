import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
      </Routes>
    </Router>
  );
}

export default App;

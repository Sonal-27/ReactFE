import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import config from '../../config'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp =() => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    const handleSignupRedirect = (e) => {

      e.preventDefault();
      axios.post(`${config.apiBaseUrl}/register/`, {
        email,
            password,
            username
        })
      .then(response => {
          if(response.status === 201){
            navigate('/login');
          }
      })
      .catch(error => {
          console.error(error);
          toast.error("registration failed. Please enter valid information");
      });
    };
    return (
      <div className="signup">
        <ToastContainer />
        <h4>SignUp</h4>
        <form>

        <div className="text_area">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email ID (@gmail.com)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text_input"
            />
          </div>  
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="text_input"

            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text_input"

            />
          </div>
          <input
            type="submit"
            value="SIGN UP"
            className="btn"
            onClick={handleSignupRedirect}
          />
          <div className="link">Already have an account?
        <br></br>
        <Link to="/login">Login</Link>
        </div>
        </form>
        
      </div>
    )
  }

export default SignUp;
import './signup.css';
import { redirect, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import config from '../../config'; 


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
          console.log(response);
      })
      .catch(error => {
          console.error(error);
      });
      redirect()
        
    };
    return (
      <div className="signup">
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
        <a href="/login">Login</a>
        </div>
        </form>
        
      </div>
    )
  }

export default SignUp;
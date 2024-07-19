import './login.css';
import { useState } from 'react';
import axios from 'axios';


const Login =() => {
    // const navigate = useNavigate();
    // const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');




    const handleSignupRedirect = (e) => {
      e.preventDefault();
      console.log("Email:"+email);
      console.log("password:"+password);


      axios.post('http://3.128.179.244:8000/api/login/', {
            email,
            password,
        })
      .then(response => {
          console.log(response);
      })
      .catch(error => {
          console.error(error);
      });
    };

    
    return (
      <div className="login">
        <h4>Login</h4>
        <form>
          <div className="text_area">
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className="text_input"
            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="text_input"

            />
          </div>
          <input
            type="submit"
            value="LOGIN"
            className="btn"
            onClick={handleSignupRedirect}
          />
          <div className="link">Don't have an account?
            <br></br>
            <a href="/signup">Sign Up</a>
        </div>
        </form>
        
      </div>
    )
  }

export default Login;
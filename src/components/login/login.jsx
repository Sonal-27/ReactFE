import './login.css';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../config'; // Import the configuration
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSignupRedirect = (e) => {
        e.preventDefault();
        console.log("Email:" + email);
        console.log("Password:" + password);

        axios.post(`${config.apiBaseUrl}/login/`, { 
            email,
            password,
        })
            .then(response => {
                if (response.status === 200) {
                    console.log("redirect now");
                    navigate('/home'); 
                }
            })
            .catch(error => {
                console.error(error);
                toast.error("Login failed. Please check your credentials and try again.");
            });
    };

    return (
        <div className="login">
            <ToastContainer />
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
                    <br />
                    <Link to="/signup">Login</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;

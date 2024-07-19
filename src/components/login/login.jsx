import './login.css';
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSignupRedirect = (e) => {
        e.preventDefault();
        console.log("Email:" + email);
        console.log("Password:" + password);

        axios.post('http://3.128.179.244:8000/api/login/', {
            email,
            password,
        })
            .then(response => {
                if (response.status === 200) {
                    setRedirect(true);
                }
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    };

    if (redirect) {
        return <Navigate to="/home" />;
    }

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
                    <br />
                    <a href="/signup">Sign Up</a>
                </div>
            </form>
        </div>
    );
}

export default Login;

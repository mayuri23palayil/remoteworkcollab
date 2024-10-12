import React, { useState } from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom'; 

const Login = () => {
  /*const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log("Email:", email);
    console.log("Password:", password);
  };*/

  return (
    <h2>hii</h2>

    /* <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="footer-text">Don't have an account? <Link to={'/register'}>Register Now!</Link></p>
    </div> */
  );
};

export default Login;

import React, {useState} from 'react';
import './LoginForm.css';

export const LogInForm = ({onSubmit,dispatch}) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [error, setError] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!userEmail || !userPassword) {
            setError("Please fill in all fields");
            return;
        }
        if (!isValidEmail(userEmail)) {
            setError("Please enter a valid email address");
            return;
        }
        setError("");
        onSubmit(userEmail, userPassword);
    }

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    return (
        <div className="login-card">
            <div className="logo-container">
                <div className="logo">
                    <span className="logo-text">AI</span>
                    <span className="logo-dot"></span>
                </div>
                <h1 className="title">Welcome Back</h1>
                <p className="subtitle">Enter your credentials to continue</p>
            </div>

            <form onSubmit={handleOnSubmit} className="login-form">
                {error && (
                    <div className="error-message">
                        <svg xmlns="http://www.w3.org/2000/svg" className="error-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        {error}
                    </div>
                )}

                <div className="input-group">
                    <input
                        id="email"
                        type="email"
                        required
                        className="input-field"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                    <label htmlFor="email" className="input-label">Email</label>
                </div>

                <div className="input-group">
                    <input
                        id="password"
                        type="password"
                        required
                        className="input-field"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                    <label htmlFor="password" className="input-label">Password</label>
                </div>

                <button type="submit" className="login-button">
                    <span className="button-text">Sign In</span>
                    <span className="button-icon">→</span>
                </button>
                <button onClick={() => dispatch({type: "signUp"})} className="login-button">
                    <span className="button-text">Sign Up</span>
                    <span className="button-icon">→</span>
                </button>
            </form>
        </div>
    );
}

export default LogInForm;
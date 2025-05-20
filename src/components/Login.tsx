import React, { useState } from 'react';
import '../index.css';

interface FormData {
  email: string;
  password: string;
}

interface LoginProps {
  onLoginSuccess: (email: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = formData.email.trim();
    const trimmedPassword = formData.password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      setError('Please fill in all fields.');
      return;
    }

    const storedUsers = localStorage.getItem('signupDataArray');
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    const matchedUser = users.find(
      (user: { email: string; password: string }) =>
        user.email === trimmedEmail && user.password === trimmedPassword
    );

    if (matchedUser) {
      onLoginSuccess(trimmedEmail);
      setFormData({ email: '', password: '' });
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="login-container">
      {error && (
        <div className="custom-popup error-popup">
          <p>{error}</p>
          <button className="close-btn" onClick={() => setError(null)}>×</button>
        </div>
      )}

      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

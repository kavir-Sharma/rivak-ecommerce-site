import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../index.css';

interface FormData {
  email: string;
  password: string;
}

interface LoginProps {
  onLoginSuccess: (email: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    clearErrors,
  } = useForm<FormData>();

  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState<'success' | 'error' | null>(null);

  const closePopup = () => {
    setPopupMessage('');
    setPopupType(null);
  };

  const onSubmit = (data: FormData) => {
    const trimmedEmail = data.email.trim();
    const trimmedPassword = data.password.trim();

    const storedUsers = localStorage.getItem('signupDataArray');
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    const matchedUser = users.find(
      (user: { email: string; password: string }) =>
        user.email === trimmedEmail && user.password === trimmedPassword
    );

    if (matchedUser) {
      onLoginSuccess(trimmedEmail);
      setPopupMessage('Login successful!');
      setPopupType('success');
      reset();
    } else {
      setError('email', { message: 'Invalid email or password.' });
      setError('password', { message: ' ' });
      setPopupMessage('Invalid email or password.');
      setPopupType('error');
    }

    setTimeout(() => {
      closePopup();
    }, 3000);
  };

  return (
    <div className="login-container">
      {popupMessage && (
        <div className={`custom-popup ${popupType === 'error' ? 'error-popup' : ''}`}>
          <p>{popupMessage}</p>
          <button className="close-btn" onClick={closePopup}>×</button>
        </div>
      )}

      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email format',
            },
          })}
          onFocus={() => clearErrors('email')}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'Password is required',
          })}
          onFocus={() => clearErrors('password')}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

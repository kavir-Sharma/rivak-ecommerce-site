import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../index.css';

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [allData, setAllData] = useState<FormData[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem('signupDataArray');
    if (savedData) {
      setAllData(JSON.parse(savedData));
    }
  }, []);

  const onSubmit = (data: FormData) => {
    const trimmedData = {
      name: data.name.trim(),
      email: data.email.trim(),
      password: data.password.trim(),
    };

    if (trimmedData.password.length < 6) {
      setError('Password must be at least 6 characters.');
      setTimeout(() => setError(null), 3000);
      return;
    }

    const updatedData = [...allData, trimmedData];
    localStorage.setItem('signupDataArray', JSON.stringify(updatedData));
    setAllData(updatedData);
    setSubmitted(true);
    reset();

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="container">
      {(submitted || error) && (
        <div className={`custom-popup ${error ? 'error-popup' : 'success-popup'}`}>
          <p>{error || 'Signup successful!'}</p>
          <button
            className="close-btn"
            onClick={() => {
              error ? setError(null) : setSubmitted(false);
            }}
          >
            ×
          </button>
        </div>
      )}

      <div className="signup">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Full Name"
            {...register("name", {
              required: "Name is required",
              minLength: { value: 2, message: "Minimum 2 characters" },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Only letters and spaces allowed"
              }
            })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}

          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address"
              }
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Password (min 6 chars)"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

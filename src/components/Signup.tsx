import React, { useState, useEffect } from 'react';
import '../index.css';

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [allData, setAllData] = useState<FormData[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem('signupDataArray');
    if (savedData) {
      setAllData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate name: only letters and spaces, at least 2 characters
  const isValidName = (name: string) => /^[A-Za-z\s]{2,}$/.test(name);

  // Clear error message after 3 seconds
  const clearErrorAfterDelay = () => {
    setTimeout(() => setError(null), 3000);
  };

  // Clear success message after 3 seconds
  const clearSubmittedAfterDelay = () => {
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedData: FormData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      password: formData.password.trim(),
    };

    if (!trimmedData.name || !trimmedData.email || !trimmedData.password) {
      setError('Please fill in all fields.');
      clearErrorAfterDelay();
      return;
    }

    if (!isValidName(trimmedData.name)) {
      setError('Please enter a valid name (only letters and spaces, minimum 2 characters).');
      clearErrorAfterDelay();
      return;
    }

    if (trimmedData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      clearErrorAfterDelay();
      return;
    }

    const updatedData = [...allData, trimmedData];
    localStorage.setItem('signupDataArray', JSON.stringify(updatedData));

    setAllData(updatedData);
    setSubmitted(true);
    setFormData({ name: '', email: '', password: '' });

    clearSubmittedAfterDelay();
  };

  return (
    <div className="container">
      {/* Popup message above form */}
      {(submitted || error) && (
        <div className={`custom-popup ${error ? 'error-popup' : 'success-popup'}`}>
          <p>{error ? error : 'Signup successful!'}</p>
          <button
            className="close-btn"
            onClick={() => {
              if (error) setError(null);
              else setSubmitted(false);
            }}
            aria-label="Close popup"
          >
            ×
          </button>
        </div>
      )}

      <div className="signup">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

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
            placeholder="Password (min 6 chars)"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

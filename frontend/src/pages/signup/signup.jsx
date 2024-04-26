import { useState } from 'react';
import './App.css'; // Assurez-vous que ce fichier existe et contient vos styles CSS

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignUp = () => {
    const errors = {};
    if (!username.trim()) {
      errors.username = 'Username is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    if (!confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setErrors(errors);

    // Ajoutez ici votre logique d'inscription si aucune erreur n'est détectée
    if (Object.keys(errors).length === 0) {
      console.log('Signed up successfully!');
      // Ajoutez votre logique d'inscription ici
    }
  };

  return (
    <div className="div">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a5a4cc60c1e3b6ba9f34b56e326bd901be9bbd79a39ce2e01193aa4c26dd92eb?apiKey=f0567170fbe140ca8ae93d451355cc9e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a4cc60c1e3b6ba9f34b56e326bd901be9bbd79a39ce2e01193aa4c26dd92eb?apiKey=f0567170fbe140ca8ae93d451355cc9e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a4cc60c1e3b6ba9f34b56e326bd901be9bbd79a39ce2e01193aa4c26dd92eb?apiKey=f0567170fbe140ca8ae93d451355cc9e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a4cc60c1e3b6ba9f34b56e326bd901be9bbd79a39ce2e01193aa4c26dd92eb?apiKey=f0567170fbe140ca8ae93d451355cc9e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a4cc60c1e3b6ba9f34b56e326bd901be9bbd79a39ce2e01193aa4c26dd92eb?apiKey=f0567170fbe140ca8ae93d451355cc9e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a4cc60c1e3b6ba9f34b56e326bd901be9bbd79a39ce2e01193aa4c26dd92eb?apiKey=f0567170fbe140ca8ae93d451355cc9e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a4cc60c1e3b6ba9f34b56e326bd901be9bbd79a39ce2e01193aa4c26dd92eb?apiKey=f0567170fbe140ca8ae93d451355cc9e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a4cc60c1e3b6ba9f34b56e326bd901be9bbd79a39ce2e01193aa4c26dd92eb?apiKey=f0567170fbe140ca8ae93d451355cc9e&"
        className="img"
        alt="Logo"
      />
      <div className="div-2">Sign up</div>
      <div className="div-3">
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="input"
          aria-label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <div className="error">{errors.username}</div>}
      </div>
      <div className="div-5">
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="input"
          aria-label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div className="div-7">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Password"
          className="password-input"
          aria-label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          className="password-toggle-icon"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "👁️" : "👁️"}
          Show Password</span>
         
        {errors.password && <div className="error">{errors.password}</div>}
      </div>
      <div className="div-10">
        <input
          type={showConfirmPassword ? "text" : "password"}
          id="confirmPassword"
          placeholder="Confirm password"
          className="password-input"
          aria-label="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <span
          className="password-toggle-icon"
          onClick={toggleConfirmPasswordVisibility}
        >
          {showConfirmPassword ? "👁️" : "👁️"}
          Show Confirm Password</span>
        
        {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
      </div>
      <button className="signup-button" onClick={handleSignUp}>Sign up</button>
      <div className="div-14">
        <div className="self-center mt-7 text-base text-sky-700">
          <span style={{ color: 'rgba(0,0,0,1)' }}>Already have an account?</span>{" "}
          <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
}

export default App;

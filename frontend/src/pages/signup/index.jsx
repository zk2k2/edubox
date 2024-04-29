import React, { useState } from "react";


function SignUp() {

function Logo() {
  return (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5a4cc60c1e3b6ba9f34b56e326bd901be9bbd79a39ce2e01193aa4c26dd92eb?apiKey=4231b80fdf894e88b435b645bef85a1d&"
      alt="Company logo"
      className="self-center max-w-full aspect-[4.17] w-[272px]"
    />
  );
}

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // State pour le champ de confirmation du mot de passe
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(""); // State pour l'erreur du champ de confirmation du mot de passe
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Fonction de validation pour le champ username
    const validateUsername = (username) => {
      if (username.trim() === "") {
        setUsernameError("Username is required");
        return false;
      } else {
        setUsernameError("");
        return true;
      }
    };

    // Fonction de validation pour le champ email
    const validateEmail = (email) => {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!re.test(email)) {
        setEmailError("Invalid email address");
        return false;
      } else {
        setEmailError("");
        return true;
      }
    };

    // Fonction de validation pour le champ password
    const validatePassword = (password) => {
      const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!re.test(password)) {
        setPasswordError(
          "Password must be at least 8 characters long and contain at least one letter and one number"
        );
        return false;
      } else {
        setPasswordError("");
        return true;
      }
    };

    const validateConfirmPassword = () => {
      if (confirmPassword !== password) {
        setConfirmPasswordError("Passwords do not match");
        return false;
      } else {
        setConfirmPasswordError("");
        return true;
      }
    };

    // Vérifier la validation des champs
    const isUsernameValid = validateUsername(username);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword();

    const BACKEND_URL = "http://localhost:8080";

    // Si tous les champs sont valides, envoyer la requête au backend
    if (
      isUsernameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      const authenticationRequest = {
        username,
        email,
        password,
      };
      fetch(BACKEND_URL + "/api/v1/auth/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(authenticationRequest),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          window.location.href = "/";
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <form
      className="flex flex-col grow px-7 pt-8 pb-16 w-full text-xl bg-white-A700 max-md:px-5 max-md:mt-10 max-md:max-w-full"
      onSubmit={handleSubmit}
    >
      <Logo />
      <h1 className="text-center mt-11 text-5xl font-semibold text-sky-900 max-md:mt-10 max-md:text-4xl">
        Sign Up
      </h1>

      <div className="flex gap-5 justify-between px-4 py-4 mt-14 whitespace-nowrap bg-white rounded-md border border-solid border-black border-opacity-10 text-black text-opacity-50 max-md:pr-5 max-md:mt-10">
        <label htmlFor="username" className="sr-only">
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          aria-label="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="w-full bg-transparent focus:outline-none"
        />
        {usernameError && <div className="text-red-500">{usernameError}</div>}
      </div>
      <div className="flex gap-5 justify-between px-4 py-4 mt-7 whitespace-nowrap bg-white rounded-md border border-solid border-black border-opacity-10 text-black text-opacity-50 max-md:pr-5">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          aria-label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full bg-transparent focus:outline-none"
        />
        {emailError && <div className="text-red-500">{emailError}</div>}
      </div>
      <div className="flex gap-5 justify-between px-4 py-4 mt-7 whitespace-nowrap bg-white rounded-md border border-solid border-black border-opacity-10 text-black text-opacity-50">
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Password"
          aria-label="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full bg-transparent focus:outline-none"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5001dfd2dcb6fc4e89cef442604c817e0f7bbe76e7705a36b7c9e71e1db4f9c5?apiKey=4231b80fdf894e88b435b645bef85a1d&"
          alt="Toggle password visibility"
          className="shrink-0 self-start aspect-square w-[26px]"
          onClick={() => setShowPassword(!showPassword)}
          style={{ cursor: "pointer" }}
        />
      </div>
      {passwordError && <div className="text-red-500">{passwordError}</div>}

      <div className="flex gap-5 justify-between px-4 py-4 mt-7 whitespace-nowrap bg-white rounded-md border border-solid border-black border-opacity-10 text-black text-opacity-50">
        <label htmlFor="confirmPassword" className="sr-only">
          Confirm Password
        </label>
        <input
          type={showconfirmPassword ? "text" : "password"}
          id="confirmPassword"
          placeholder="Confirm Password"
          aria-label="Confirm Password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          className="w-full bg-transparent focus:outline-none"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5001dfd2dcb6fc4e89cef442604c817e0f7bbe76e7705a36b7c9e71e1db4f9c5?apiKey=4231b80fdf894e88b435b645bef85a1d&"
          alt="Toggle password visibility"
          className="shrink-0 self-start aspect-square w-[26px]"
          onClick={() => setShowconfirmPassword(!showconfirmPassword)}
          style={{ cursor: "pointer" }}
        />
      </div>
      {confirmPasswordError && (
        <div className="text-red-500">{confirmPasswordError}</div>
      )}

      <button type="submit" className="sign-up-button my-5">
        Sign up
      </button>

      <div className="self-center mt-5 text-base text-black flex items-center">
        <span className="text-black">Already have an account?</span>
        <a href="/Login" className="ml-1 text-blue-600">
          Login
        </a>
      </div>
    </form>
  );
}

function MyComponent() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex flex-col w-full h-screen bg-gray-50 max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7e8a92ee1d1283fe4fcdd2cfa319abd64f26a6dcfb50e459f157a5d1ecb2dcf?apiKey=4231b80fdf894e88b435b645bef85a1d&"
            alt="Decorative element"
            className="self-end aspect-square w-[29px]"
          />
          <div className="mb-1.5 max-w-full w-[846px]">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full" />
              <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                <SignUpForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .sign-up-button {
          font-family: Inter, sans-serif;
          border-radius: 10px;
          background-color: rgba(50, 109, 230, 1);
          color: #fff;
          font-weight: 600;
          padding: 18px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}


export default SignUp;



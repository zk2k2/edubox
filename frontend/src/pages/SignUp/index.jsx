import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';
import { Button, Input,Select, Text, Img, Heading } from '../../components';
import {AuthContext} from "../../AuthContext";
import {useNavigate} from "react-router-dom";
import { useContext } from 'react';
import Cookies from "js-cookie";


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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [status, setStatus] = useState('student'); // Default value is 'student'
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState('USER');
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const BACKEND_URL = 'http://localhost:8080';//process.env.REACT_APP_URL_BACKEND;

  const options = [
    { value: 'STUDENT', label: 'STUDENT' },
    { value: 'PROFESSIONAL', label: 'PROFESSIONAL' },
    { value: 'OTHER', label: 'OTHER' },
  ];
  const handleSubmit = (event) => {
    event.preventDefault();

      const validateFirstName = (firstname) => {
      if (firstname.trim() === '') {
        setFirstNameError('First name is required');
        return false;
      } else {
        setFirstNameError('');
        return true;
      }
    };

    const validateLastName = (lastname) => {
      if (lastname.trim() === '') {
        setLastNameError('Last name is required');
        return false;
      } else {
        setLastNameError('');
        return true;
      }
    };

    const validateEmail = (email) => {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!re.test(email)) {
        setEmailError('Invalid email address');
        return false;
      } else {
        setEmailError('');
        return true;
      }
    };

    const validatePassword = (password) => {
      const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!re.test(password)) {
        setPasswordError(
          'Password must be at least 8 characters long and contain at least one letter and one number'
        );
        return false;
      } else {
        setPasswordError('');
        return true;
      }
    };

    const validateConfirmPassword = () => {
      if (confirmPassword !== password) {
        setConfirmPasswordError('Passwords do not match');
        return false;
      } else {
        setConfirmPasswordError('');
        return true;
      }
    };

    const isFirstNameValid = validateFirstName(firstName);
    const isLastNameValid = validateLastName(lastName);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(confirmPassword);



    if (
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      const authenticationRequest = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
        dateofbirth: formatDate(dateOfBirth),
        status: status.toUpperCase(),
        role: "USER",
      };

      const authenticationRequestJSON = JSON.stringify(authenticationRequest);


      fetch(BACKEND_URL + '/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: authenticationRequestJSON,
      })
        .then((response) => response.json())
        .then((data) => {
          Cookies.set('accessToken', data["access_token"], {
            expires: 7,
            sameSite: 'Strict',
          });
          setIsAuthenticated(true);
          navigate('/home');
        })
        .catch((error) => {
          alert(error);
        });
    }
   };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
      <div>
        <form
            className="flex flex-col grow px-7 pt-8 pb-8 w-full text-xl bg-white-A700 max-md:px-5 max-md:mt-10 max-md:max-w-full"
            onSubmit={handleSubmit}
        >
          <Logo/>
          <h1 className="text-center mt-11 text-5xl font-semibold text-sky-900 max-md:mt-10 max-md:text-4xl">
            Sign Up
          </h1>

          <div className="flex flex-row mt-[18px] gap-[20px]">
            <div className="flex-1">
              <label htmlFor="firstname" className="sr-only">
                First Name
              </label>
              <Input
                  type="text"
                  shape="round"
                  id="firstname"
                  placeholder="First name"
                  aria-label="Firstname"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  className="self-stretch gap-[35px] sm:pl-5 font-medium border-black-900_26 border border-solid h-[50px]" // Adjust the height here
              />
              {firstNameError && (
                  <div className="text-red-500">{firstNameError}</div>
              )}
            </div>
            <div className="flex-1">
              <label htmlFor="lastname" className="sr-only">
                Last Name
              </label>
              <Input
                  type="text"
                  shape="round"
                  id="lastname"
                  placeholder="Last Name"
                  aria-label="Lastname"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  className="self-stretch gap-[35px] sm:pl-5 font-medium border-black-900_26 border border-solid h-[50px]" // Adjust the height here
              />
              {lastNameError && (
                  <div className="text-red-500">{lastNameError}</div>
              )}
            </div>
          </div>


          <div className="flex flex-col items-start mt-[18px] gap-[7px]">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <Input
                type="email"
                shape="round"
                id="email"
                placeholder="Email"
                aria-label="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="self-stretch sm:px-5 border-black-900_26 border border-solid"
            />
            {emailError && <div className="text-red-500">{emailError}</div>}
          </div>

          <div className="flex flex-col items-start mt-[18px] gap-[7px]">
            <Input
                shape="round"
                type="date"
                name="dateOfBirth"
                className="self-stretch sm:px-5 border-black-900_26 border border-solid"
                placeholder='Enter your date of birth'
                value={formatDate(dateOfBirth)}
                onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>

          <div className="flex flex-row mt-[18px] gap-[20px]">
            <div className="flex-1">
              <Input
                  shape="round"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  suffix={
                    <Img
                        src="images/img_eye.png"
                        alt="Eye"
                        className="w-[23px] h-[23px]"
                        onClick={() => setShowPassword(!showPassword)}
                    />
                  }
                  className="self-stretch gap-[35px] sm:pl-5 font-medium border-black-900_26 border border-solid"
                  placeholder="your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <div className="text-red-500">{passwordError}</div>}
            </div>
            <div className="flex-1">
              <Input
                  shape="round"
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="newPasswordConfirmation"
                  suffix={
                    <Img
                        src="images/img_eye.png"
                        alt="Eye"
                        className="w-[23px] h-[23px]"
                        onClick={() =>
                            setShowConfirmPassword(
                                !showConfirmPassword
                            )
                        }
                    />
                  }
                  className="self-stretch gap-[35px] sm:pl-5 font-medium border-black-900_26 border border-solid"
                  placeholder="confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {confirmPasswordError && <div className="text-red-500">{confirmPasswordError}</div>}
            </div>
          </div>

          <div className="flex flex-col items-start mt-[18px] gap-[7px]">
            <Select
                shape="round"
                name="status"
                options={options}
                className="self-stretch sm:px-5 border-black-900_26 border border-solid"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            />
          </div>

          <button type="submit" className="sign-up-button mt-16">
            Sign up
          </button>

          <div className="self-center mt-5 text-base text-black flex items-center">
            <span className="text-black">Already have an account?</span>
            <a href="/Login" className="ml-1 text-blue-600">
              Login
            </a>
          </div>
        </form>
      </div>

  );
}

function SignUp() {
  return (
      <>
        <div className="flex flex-col justify-center items-center h-screen bg-gray-50 max-md:px-5 max-md:max-w-full">
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7e8a92ee1d1283fe4fcdd2cfa319abd64f26a6dcfb50e459f157a5d1ecb2dcf?apiKey=4231b80fdf894e88b435b645bef85a1d&"
              alt="Decorative element"
              className="self-end aspect-square w-[29px]"
          />
          <div className="max-w-full w-[846px]">
            <div className="flex gap-5 max-md:flex-col justify-center max-md:gap-0">
              <div className="flex flex-col justify-center ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                <SignUpForm/>
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
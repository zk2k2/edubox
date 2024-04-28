import React, { useState } from "react";

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

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

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

        const validatePassword = (password) => {
            const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            if (!re.test(password)) {
                setPasswordError("Password must be at least 8 characters long and contain at least one letter and one number");
                return false;
            } else {
                setPasswordError("");
                return true;
            }
        };

        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);


        const BACKEND_URL="http://localhost:8080"

        if (isEmailValid && isPasswordValid) {
            const authenticationRequest = {
                email,
                password,
            };
            fetch(BACKEND_URL+'/api/v1/auth/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(authenticationRequest),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    window.location.href = '/';
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
            <h1 className="mx-5 mt-11 text-5xl font-semibold text-sky-900 max-md:mx-2.5 max-md:mt-10 max-md:text-4xl">
                Welcome back!
            </h1>
            <div
                className="flex gap-5 justify-between px-4 py-4 mt-14 whitespace-nowrap bg-white rounded-md border border-solid border-black border-opacity-10 text-black text-opacity-50 max-md:pr-5 max-md:mt-10"
            >
                <label htmlFor="email" className="sr-only"> Email </label>
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
            <div
                className="flex gap-5 justify-between px-4 py-4 mt-7 whitespace-nowrap bg-white rounded-md border border-solid border-black border-opacity-10 text-black text-opacity-50"
            >
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
            <a href="/ " className="mt-3.5 text-base text-sky-700">
                Forgot password?
            </a>
            
            <button type="submit" className="sign-up-button">
            Login
             </button>
          
            <div className="self-center mt-5 text-base text-black flex items-center">
            <span className="text-black">Don't have an account?</span>
             <a href="/SignUp" className="ml-1 text-blue-600">Sign up</a>
            </div>
        </form>
    );
}

function MyComponent() {
    return (
        <> <div className="flex flex-col px-5">
            <div className="flex flex-col px-20 pt-6 pb-20 mt-5 w-full bg-gray-50 max-md:px-5 max-md:max-w-full">
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
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
            </div><style jsx>{`
         .sign-up-button {
            font-family: Inter, sans-serif;
            border-radius: 10px;
            background-color: rgba(50, 109, 230, 1);
            color: #fff;
            font-weight: 600;
            padding: 18px;
            cursor: pointer;
          }
        `}</style></>
    );
}

export default MyComponent;

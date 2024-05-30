import React, { useState } from 'react';
import { Button, Img, Input } from './..';
import Cookies from 'js-cookie';
import './style.css';

export default function Header({ firstname, ...props }) {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  function logout() {
    Cookies.remove('accessToken');
    window.location.href = '/login';
  }

  return (
    <header {...props}>
      <div className="flex md:flex-col justify-between items-center w-full gap-60 mx-auto max-w-[1283px]">
        <div className="flex md:flex-col justify-between items-center w-[74%] md:w-full gap-60">
          <Img
            src="images/img_edubox_white_1.png"
            alt="eduboxwhiteone"
            className="w-[20%] md:w-full object-cover"
          />
          {/*  <Input
            color="blue_800"
            size="sm"
            name="search"
            placeholder="Search for Virtual Machines, users, and more..."
            className="w-[64%] md:w-full sm:px-5 rounded-[10px] input"
            style={{ '::placeholder': { color: 'red' } }} // Change the placeholder color here
          /> */}
        </div>
        <div className="relative">
          <Button
            shape="round"
            rightIcon={
              <div className="bg-blue-A700 rounded-[1000px]">
                <Img
                  src="images/img_user.png"
                  alt="user_three"
                  className="h-[33px] w-full md:h-auto rounded-tl-[43px] rounded-tr-[43px] object-cover"
                />
              </div>
            }
            className="gap-[18px] sm:pl-5 min-w-[131px]"
            onClick={toggleOptions}
          >
            {firstname}
          </Button>

          {showOptions && (
            <div className="absolute z-auto right-0 flex flex-col mt-2 py-2 w-48 !bg-white-A700 border rounded shadow-lg">
              <button className="my-3">View profile</button>
              <button className="my-3" onClick={logout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

import React, {useState} from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Img, Heading } from "../../components";
import Header from "../../components/Header";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import Cookies from 'js-cookie';

export default function WireframeThreePage() {
  const [collapsed, setCollapsed] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  let userId;

  const getToken = () => Cookies.get('token');

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  alert(getToken());
  const BACKEND_URL = "http://localhost:8080";
  fetch("http://localhost:8080/api/v1/users/currentuserid", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getToken}`,
      "Content-Type": "application/json", // Adjust content type as needed
    },
  })
      .then((response) => {
        alert(response.status)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        alert("response ");
        const r = response.clone();
        response.text().then(text => {
          alert(text); // Alert the text content of the response
        });
        return r.json();
      })
      .then((data) => {
        alert("here3");
        userId = data.userId; // Assign userId from the response data
        console.log(userId); // Optional: Log the userId
        alert(userId);
      })
      .catch((error) => {
        alert(error);
        console.error("There was a problem with the fetch operation:", error);
      });

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <>
      <Helmet>
        <title>Yassine's Application1</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-gray-50">
        <div className="flex flex-col">
          <Header className="p-[15px] bg-blue-A700" />
          <div className="flex md:flex-col justify-between items-start w-[98%] md:w-full gap-5 md:p-5">
            <Sidebar
              width="282px !important"
              collapsedWidth="80px !important"
              collapsed={collapsed}
              className="flex flex-col h-screen top-0 py-[50px] md:py-5 bg-blue_gray-50 !sticky overflow-auto md:hidden"
            >
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "12px", // Adjust padding to increase vertical spacing
                    gap: "22px",
                    alignSelf: "start",
                    color: "#505968",
                    fontWeight: 400,
                    fontSize: "20px",
                  },
                }}
                rootStyles={{ ["&>ul"]: { gap: "0.93px" } }}
                className="flex flex-col w-full mb-[269px] pb-[22px] sm:pb-5"
              >
                <MenuItem
                  icon={
                    <Img
                      src="images/img_sandbox.png"
                      alt="sandbox_one"
                      className="h-[41px] w-[41px] object-cover"
                    />
                  }
                >
                  Virtual Machines
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      src="images/img_group.png"
                      alt="image"
                      className="h-[32px] w-[32px] object-cover"
                    />
                  }
                >
                  User Management
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      src="images/img_user_1.png"
                      alt="user_one"
                      className="h-[28px] w-[28px] object-cover"
                    />
                  }
                >
                  My Account
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      src="images/img_info.png"
                      alt="info_one"
                      className="h-[32px] w-[32px] object-cover"
                    />
                  }
                >
                  Assistance
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      src="images/img_gear.png"
                      alt="gear_one"
                      className="h-[32px] w-[32px] object-cover"
                    />
                  }
                >
                  Settings
                </MenuItem>
              </Menu>
            </Sidebar>
            <div className="flex flex-col md:self-stretch gap-[18px] flex-1">
              <div className="flex p-[13px] bg-white-A700 mx-5 mt-5">
                <div className="flex  w-[30%] md:w-full ml-1.5 gap-5 md:ml-0">
                  <div className="w-[20%]">
                    <div className="bg-blue-A700 rounded-[1000px]">
                      <Img
                        src="images/img_user.png"
                        alt="user_three"
                        className="h-[86px] w-full md:h-auto rounded-tl-[43px] rounded-tr-[43px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1.5">
                    <Heading size="md" as="h1">
                      {userId ? userId : "Loading..."}
                    </Heading>
                    <Text as="p" className="!text-blue_gray-700">
                      Administrator
                    </Text>
                  </div>
                </div>
              </div>
              <div className="p-5 m-5 bg-white-A700">
                <div className="flex flex-col mb-[67px] gap-[25px]">
                  <div className="flex justify-between items-center gap-5">
                    <Heading size="s" as="h2">
                      Profile details
                    </Heading>
                    <div className="flex">
                    <div className="flex">
                      <button
                          className={`sm:px-5 font-bold border-black-900_26 border border-solid rounded-[5px] flex items-center justify-center text-center cursor-pointer h-[42px] px-[35px] text-lg bg-gray-400 text-white-A700 mr-2`}
                          style={{display: showButtons ? 'none' : 'block'}}
                          onClick={toggleButtons}
                      >
                        Cancel
                      </button>
                      <button
                          className={`sm:px-5 font-bold border-black-900_26 border border-solid rounded-[5px] flex items-center justify-center text-center cursor-pointer h-[42px] px-[35px] text-lg bg-blue-500 text-white-A700`}
                          style={{display: showButtons ? 'none' : 'block'}}
                          onClick={toggleButtons}
                      >
                        Confirm
                      </button>
                    </div>
                    <Img
                        src="images/img_edit.png"
                        alt="edit_one"
                        className="self-end w-[28px] object-cover"
                        style={{display: showButtons ? 'block' : 'none'}}
                        onClick={toggleButtons}
                    />
                    </div>
                  </div>
                  <div className="flex md:flex-col justify-center items-center gap-[30px]">
                    <div className="flex flex-col md:self-stretch gap-[23px] flex-1">
                      <div className="flex flex-col items-start gap-[7px]">
                        <Text as="p">Name</Text>
                        <Input
                            shape="round"
                            name="name"
                            placeholder={`Zied`}
                            className="self-stretch sm:px-5 border-black-900_26 border border-solid"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1.5">
                        <Text as="p">Surname</Text>
                        <Input
                            shape="round"
                            name="surname"
                            placeholder={`Kharrat`}
                            className="self-stretch sm:px-5 border-black-900_26 border border-solid"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-[7px]">
                        <Text as="p">User ID</Text>
                        <Input
                          shape="round"
                          name="zied2ktwo"
                          placeholder={`zied.2k2`}
                          className="self-stretch sm:px-5 border-black-900_26 border border-solid"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-[7px]">
                        <Text as="p">Date of birth</Text>
                        <Input
                          shape="round"
                          name="dateOfBirth"
                          placeholder={`04/06/2002`}
                          className="self-stretch sm:px-5 border-black-900_26 border border-solid"
                        />
                      </div>
                    </div>
                    <div className="h-[350px] w-px md:w-[350px] md:h-px bg-gray-600_3d" />
                    <div className="md:self-stretch mb-1.5 flex-1">
                      <div className="flex flex-col items-start gap-[7px]">
                        <Text as="p">E-mail</Text>
                        <Input
                          shape="round"
                          type="email"
                          name="email"
                          placeholder={`zied.kharrat@insat.ucar.tn`}
                          className="self-stretch sm:px-5 border-black-900_26 border border-solid"
                        />
                      </div>
                      <div className="flex flex-col items-start mt-[18px] gap-[7px]">
                        <Text as="p">Password</Text>
                        <Input
                          shape="round"
                          type="password"
                          name="password"
                          placeholder={`••••••••••••••`}
                          suffix={
                            <Img
                              src="images/img_eye.png"
                              alt="Eye"
                              className="w-[23px] h-[23px]"
                            />
                          }
                          className="self-stretch gap-[35px] sm:pl-5 font-medium border-black-900_26 border border-solid"
                        />
                      </div>
                      <div className="flex flex-col items-start mt-[25px] gap-[7px]">
                        <Text as="p">Status</Text>
                        <Input
                          shape="round"
                          name="student"
                          placeholder={`Student`}
                          className="self-stretch sm:px-5 border-black-900_26 border border-solid"
                        />
                      </div>
                      <Button
                        color="red_A700"
                        size="sm"
                        className="w-full mt-[55px] sm:px-5 font-bold border-black-900_26 border border-solid rounded-[5px]"
                        style={{display: showButtons ? 'none' : 'block'}}
                        onClick={toggleButtons}
                      >
                        Delete my account
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

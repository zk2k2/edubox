import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Input,Select, Text, Img, Heading } from '../../components';
import Header from '../../components/Header';
import { MenuItem, Menu, Sidebar } from 'react-pro-sidebar';
import Cookies from 'js-cookie';

export default function UserProfile() {
  const [collapsed, setCollapsed] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [userId, setUserId] = useState(null); // Initialize userId state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');

  const [status, setStatus] = useState('');
  const [role, setRole] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const BACKEND_URL = process.env.REACT_APP_URL_BACKEND
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewPasswordConfirmation, setShowNewPasswordConfirmation] = useState(false);

  const options = [
    { value: 'STUDENT', label: 'STUDENT' },
    { value: 'PROFESSIONAL', label: 'PROFESSIONAL' },
    { value: 'OTHER', label: 'OTHER' },
  ];
  const accessToken = Cookies.get('accessToken');

  // State to manage the lock/unlock status
  const [isLocked, setIsLocked] = useState(true);

  // State to hold initial data
  const [initialData, setInitialData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
            BACKEND_URL + '/api/v1/users/currentuser',
            {
              method: 'GET',
              mode: 'cors',
              headers: {
                Authorization: 'Bearer ' + accessToken,
                'Content-Type': 'application/json', // Adjust content type as needed
              },
            }
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setUserId(data['id']);
        setFirstName(data['firstname']);
        setLastName(data['lastname']);
        setEmail(data['email']);
        //setPassword(data["password"]);//not needed
        setRole(data['role']);
        setStatus(data['status']);
        setDateOfBirth(data['dateofbirth']);
        setInitialData(data); // Store initial data
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchUserData(); // Call the async function immediately
  }, []);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
    setIsLocked(!isLocked);

    if (!isLocked) {
      // Reset the form values to initial data when locking the form
      setFirstName(initialData.firstname);
      setLastName(initialData.lastname);
      setEmail(initialData.email);
      //setPassword(initialData.password);//not needed
      setStatus(initialData.status);
      setRole(initialData.role);
      setDateOfBirth(initialData.dateofbirth);
    } else {
      // Clear the form values when unlocking the form
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setStatus('');
      setDateOfBirth('');
    }
  };

  const deleteAccount = () => {
    fetch(BACKEND_URL + '/api/v1/users/' + userId, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    })
        .then((response) => {
          alert('The user was deleted successfully');
        })
        .catch((error) => {
          alert('Error: ' + error);
        });
  };

  const handleSubmit = (event) => {
    alert("I'm in handleSubmit");
    event.preventDefault();
    // Create an object to hold updated data
    const updatedData = {
      firstname: firstName || initialData.firstname,
      lastname: lastName || initialData.lastname,
      email: email || initialData.email,
      dateofbirth: dateOfBirth || formatDate(initialData.dateofbirth),
      //password: password || initialData.password, //will be handled elsewhere
      status: status || initialData.status,
      role: role || initialData.role,
    };

    // Update initial data with updated data
    //setInitialData(updatedData);
    const jsonUpdatedData = JSON.stringify(updatedData);
    // Log form data as JSON
    alert(jsonUpdatedData);

    fetch(BACKEND_URL + '/api/v1/users/' + userId, {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + accessToken,
        'Content-Type': 'application/json', // Adjust content type as needed
      },
      body: jsonUpdatedData,
    })
        .then((response) => response.json())
        .then((data) => {
          alert(JSON.stringify(data));
          changePassword();
        })
        .then(toggleButtons)
        .catch((error) => {
          alert(error);
        });

    const changePassword = async () => {
      if (
          password !== '' &&
          newPassword !== '' &&
          newPasswordConfirmation !== ''
      ) {
        const changePasswordRequest = {
          currentPassword: password,
          newPassword: newPassword,
          confirmationPassword: newPasswordConfirmation,
        };

        fetch(BACKEND_URL + '/api/v1/users/password', {
          method: 'PATCH',
          mode: 'cors',
          headers: {
            Authorization: 'Bearer ' + accessToken,
            'Content-Type': 'application/json', // Adjust content type as needed
          },
          body: JSON.stringify(changePasswordRequest),
        })
            .then((response) => response.text())
            .then((data) => {
              alert(data);
            })
            .catch((error) => {
              alert(error);
              alert(JSON.stringify(changePasswordRequest));
            });
      }
    };
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getOptionByValue = (value) => options.find(option => option.value === value) || options[2];




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
                        padding: '12px', // Adjust padding to increase vertical spacing
                        gap: '22px',
                        alignSelf: 'start',
                        color: '#505968',
                        fontWeight: 400,
                        fontSize: '20px',
                      },
                    }}
                    rootStyles={{ ['&>ul']: { gap: '0.93px' } }}
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
                        {initialData.firstname + ' ' + initialData.lastname}
                      </Heading>
                      <Text as="p" className="!text-blue_gray-700">
                        {initialData.role}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="p-5 m-5 bg-white-A700">
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-[67px] gap-[25px]">
                      <div className="flex justify-between items-center gap-5">
                        <Heading size="s" as="h2">
                          Profile details
                        </Heading>
                        <div className="flex">
                          <div className="flex">
                            <button
                                type="button"
                                className={`sm:px-5 font-bold border-black-900_26 border border-solid rounded-[5px] flex items-center justify-center text-center cursor-pointer h-[42px] px-[35px] text-lg bg-gray-400 text-white-A700 mr-2`}
                                style={{ display: showButtons ? 'none' : 'block' }}
                                onClick={toggleButtons}
                            >
                              Cancel
                            </button>
                            <button
                                type="submit"
                                className={`sm:px-5 font-bold border-black-900_26 border border-solid rounded-[5px] flex items-center justify-center text-center cursor-pointer h-[42px] px-[35px] text-lg bg-blue-500 text-white-A700`}
                                style={{ display: showButtons ? 'none' : 'block' }}
                            >
                              Confirm
                            </button>
                          </div>
                          <Img
                              src="images/img_edit.png"
                              alt="edit_one"
                              className="self-end w-[28px] object-cover"
                              style={{ display: showButtons ? 'block' : 'none' }}
                              onClick={toggleButtons}
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-col justify-center  gap-[30px]" /*add items-center to make the boxes in the center*/>
                        <div className="flex flex-col md:self-stretch gap-[23px] flex-1">
                          <div className="flex flex-col items-start gap-[7px]">
                            <Text as="p">Name</Text>
                            <Input
                                shape="round"
                                name="name"
                                className="self-stretch sm:px-5 border-black-900_26 border border-solid"
                                placeholder={
                                  isLocked
                                      ? initialData.firstname
                                      : 'Enter your first name'
                                }
                                disabled={isLocked}
                                value={firstName}
                                onChange={setFirstName}
                            />
                          </div>
                          <div className="flex flex-col items-start gap-1.5">
                            <Text as="p">Surname</Text>
                            <Input
                                shape="round"
                                name="surname"
                                className="self-stretch sm:px-5 border-black-900_26 border border-solid"
                                placeholder={
                                  isLocked
                                      ? initialData.lastname
                                      : 'Enter your last name'
                                }
                                disabled={isLocked}
                                value={lastName}
                                onChange={setLastName}
                            />
                          </div>
                          <div className="flex flex-col items-start gap-[7px]">
                            <Text as="p">User ID</Text>
                            <Input
                                shape="round"
                                name="userId"
                                className="self-stretch sm:px-5 border-black-900_26 border border-solid"
                                placeholder={initialData.id}
                                disabled={true}
                                value={userId}
                            />
                          </div>
                          <div className="flex flex-col items-start gap-[7px]">
                            <Text as="p">Date of birth</Text>
                            <Input
                                shape="round"
                                type="date"
                                name="dateOfBirth"
                                className="self-stretch sm:px-5 border-black-900_26 border border-solid"
                                placeholder={
                                  isLocked
                                      ? initialData.dateofbirth
                                      : 'Enter your date of birth'
                                }
                                disabled={isLocked}
                                value={formatDate(dateOfBirth)}
                                onChange={setDateOfBirth}
                            />
                          </div>
                        </div>
                        <div className="h-[450px] w-px md:w-[350px] md:h-px bg-gray-600_3d" />
                        <div className="md:self-stretch mb-1.5 flex-1">
                          <div className="flex flex-col items-start gap-[7px]">
                            <Text as="p">Status</Text>
                            <Select
                                shape="round"
                                name="status"
                                options={options}
                                //placeholder={initialData.status}
                                className="self-stretch sm:px-5 border-black-900_26 border border-solid"
                                disabled={isLocked}
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                          </div>
                          <div className="flex flex-col items-start mt-[18px] gap-[7px]">
                            <Text as="p">E-mail</Text>
                            <Input
                                shape="round"
                                type="email"
                                name="email"
                                className="self-stretch sm:px-5 border-black-900_26 border border-solid"
                                placeholder={
                                  isLocked ? initialData.email : 'Enter your email'
                                }
                                disabled={isLocked}
                                value={email}
                                onChange={setEmail}
                            />
                          </div>
                          <div className="flex flex-col items-start mt-[18px] gap-[7px]">
                            <Text as="p">Password</Text>
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
                                disabled={isLocked}
                                placeholder="Enter your password"
                                value={password}
                                onChange={setPassword}
                            />
                            <div style={{display: showButtons ? 'none' : 'block'}}>
                              <div className="flex flex-row mt-[18px] gap-[20px]">
                                <div className="flex-1">
                                  <Text as="p" className="mb-[7px]">New password</Text>
                                  <Input
                                      shape="round"
                                      type={showNewPassword ? 'text' : 'password'}
                                      name="newPassword"
                                      suffix={
                                        <Img
                                            src="images/img_eye.png"
                                            alt="Eye"
                                            className="w-[23px] h-[23px]"
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                        />
                                      }
                                      className="self-stretch gap-[35px] sm:pl-5 font-medium border-black-900_26 border border-solid"
                                      disabled={isLocked}
                                      placeholder="Enter your new password"
                                      value={newPassword}
                                      onChange={setNewPassword}
                                  />
                                </div>
                                <div className="flex-1">
                                  <Text as="p" className="mb-[7px]">Confirm new password</Text>
                                  <Input
                                      shape="round"
                                      type={showNewPasswordConfirmation ? 'text' : 'password'}
                                      name="newPasswordConfirmation"
                                      suffix={
                                        <Img
                                            src="images/img_eye.png"
                                            alt="Eye"
                                            className="w-[23px] h-[23px]"
                                            onClick={() =>
                                                setShowNewPasswordConfirmation(
                                                    !showNewPasswordConfirmation
                                                )
                                            }
                                        />
                                      }
                                      className="self-stretch gap-[35px] sm:pl-5 font-medium border-black-900_26 border border-solid"
                                      disabled={isLocked}
                                      placeholder="Enter your password"
                                      value={newPasswordConfirmation}
                                      onChange={setNewPasswordConfirmation}
                                  />
                                </div>
                              </div>
                            </div>

                          </div>

                          <Button
                              color="red_A700"
                              type="button"
                              size="sm"
                              className="w-full mt-[55px] sm:px-5 font-bold border-black-900_26 border border-solid rounded-[5px]"
                              style={{display: showButtons ? 'none' : 'block'}}
                              onClick={() => {
                                toggleButtons();
                                deleteAccount();
                              }}
                          >
                            Delete my account
                          </Button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

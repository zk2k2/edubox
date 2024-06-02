import React, { useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Img, Text, Input, Heading } from '../../components';
import Header from '../../components/Header';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { AppSidebar } from 'components/AppSidebar';
import Cookies from 'js-cookie';
import { AuthContext } from 'AuthContext';

function UserRow({
  id,
  firstName,
  lastName,
  role,
  email,
  dateOfBirth,
  actionSrc,
  alt,
  onDelete,
}) {
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleImageClick = () => {
    setShowDeleteButton(true);
  };

  const handleCancelClick = () => {
    setShowDeleteButton(false);
  };

  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <>
      <div className="shrink-0 mt-7 h-px border border-solid bg-neutral-500 bg-opacity-20 border-neutral-500 border-opacity-20" />
      <div className="flex gap-5 justify-between mt-10 mr-8 ml-8 font-medium max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
        <div className="flex-1 text-center">{firstName}</div>
        <div className="flex-1 text-center">{lastName}</div>
        <div className="flex-1 text-center">{role}</div>
        <div className="flex-1 text-center">{email}</div>
        <div className="flex-1 text-center">{dateOfBirth}</div>
        <div className="flex-shrink-0 w-[27px] flex justify-center">
          {showDeleteButton ? (
            <div className="flex flex-col gap-2">
              <button
                onClick={handleDeleteClick}
                className="bg-red-500 text-white p-1 rounded"
              >
                Delete
              </button>
              <button
                onClick={handleCancelClick}
                className="bg-gray-300 text-black p-1 rounded"
              >
                Cancel
              </button>
            </div>
          ) : (
            <img
              loading="lazy"
              src={actionSrc}
              alt={alt}
              className="w-full h-auto cursor-pointer"
              onClick={handleImageClick}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default function AdminView() {
  const accessToken = Cookies.get('accessToken');
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const { role, userName } = useContext(AuthContext);

  const BACKEND_URL = process.env.REACT_APP_BACKEND;

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/v1/users/${userId}`, {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + accessToken,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('There was a problem with the delete operation:', error);
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch(BACKEND_URL + '/api/v1/users', {
        method: 'GET',
        mode: 'cors',
        headers: {
          Authorization: 'Bearer ' + accessToken,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setUsers(data); // Set the users state with the fetched data
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    fetchUserData();
  }, []); // Fetch user data once when the component mounts

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        `${user.firstname} ${user.lastname}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, users]);

  const handleSort = () => {
    const sortedUsers = [...filteredUsers].sort((a, b) => {
      const nameA = `${a.firstname} ${a.lastname}`.toLowerCase();
      const nameB = `${b.firstname} ${b.lastname}`.toLowerCase();

      if (sortOrder === 'asc') {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    setFilteredUsers(sortedUsers);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <>
      <Helmet>
        <title>Edubox</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-gray-50">
        <div className="flex flex-col">
          <Header className="p-[15px] bg-blue-A700" firstname={userName} />
          <div className="flex md:flex-col justify-center items-start w-[98%] md:w-full gap-6 md:p-5">
            <AppSidebar role={role} />
            <div className="flex flex-col md:self-stretch gap-6 flex-1">
              <div className="flex p-[13px] bg-white-A700 mx-5 mt-5">
                <div className="flex flex-col w-[56%] md:w-full mt-1.5 ml-[13px] gap-[15px] md:ml-0">
                  <div className="flex items-start ml-[5px] gap-[5px] md:ml-0 flex-wrap pt-3">
                    <Text
                      size="s"
                      as="p"
                      className="!text-blue-A700 !font-medium"
                    >
                      Dashboard
                    </Text>
                    <Text
                      size="s"
                      as="p"
                      className="!text-blue-A700 !font-medium"
                    >
                      {'>'}
                    </Text>
                    <Text
                      size="s"
                      as="p"
                      className="!text-blue-A700 !font-medium"
                    >
                      Manage Edubox users
                    </Text>
                  </div>
                  <div className="flex sm:flex-col items-center gap-6">
                    <Img
                      src="images/img_sandbox_35x35.png"
                      alt="sandbox_three"
                      className="w-[82px] sm:w-full object-cover"
                    />
                    <div className="flex flex-col items-start gap-[3px]">
                      <Heading size="md" as="h1">
                        Manage Edubox Users
                      </Heading>
                      <Text as="p" className="!font-normal">
                        Manage all of Edubox’s user accounts
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <main className="flex p-[13px] bg-white-A700 mx-5 mt-5">
                <section className="flex flex-col px-5 py-12 w-full text-lg font-medium text-black bg-white-A700 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-4 pr-20 whitespace-nowrap text-neutral-500 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                    <Input
                      type="text"
                      placeholder="Search by name"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="px-5 py-3.5 bg-white rounded-md border border-solid border-black  max-md:px-5 max-md:max-w-full"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e2ad1a991f457a793eb4dba0c255e14893506e60e2d6d261703fd66a1b25f45?apiKey=4231b80fdf894e88b435b645bef85a1d&"
                      alt="Search icon"
                      className="shrink-0 my-auto aspect-square w-[33px] cursor-pointer"
                      onClick={handleSort} // Add the onClick event to sort
                    />
                  </div>
                  <div className="flex gap-5 justify-between mt-10 mr-8 ml-8 font-semibold max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                    <div className="flex-1 text-center">First Name</div>
                    <div className="flex-1 text-center">Last Name</div>
                    <div className="flex-1 text-center">Role</div>
                    <div className="flex-1 text-center">E-mail Address</div>
                    <div className="flex-1 text-center">Date of birth</div>
                    <div className="flex-shrink-0 w-[27px]">Actions</div>
                  </div>
                  {filteredUsers.map((user, index) => (
                    <UserRow
                      key={user.id}
                      id={user.id}
                      firstName={user.firstname}
                      lastName={user.lastname}
                      role={user.role}
                      email={user.email}
                      dateOfBirth={formatDate(user.dateofbirth)} // Adjust according to your actual data structure
                      actionSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/68d8bebdb18597fd4dbe76b1ce6e3aebbbae9e4631ef14e78a11c803c3fdd5d3?apiKey=4231b80fdf894e88b435b645bef85a1d&"
                      alt="Action icon"
                      onDelete={handleDelete}
                    />
                  ))}
                </section>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

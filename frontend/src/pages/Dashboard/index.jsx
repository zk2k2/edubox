import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Input, Text, Img, Heading } from '../../components';
import Header from '../../components/Header';
import { MenuItem, Menu, Sidebar } from 'react-pro-sidebar';
import { AppSidebar } from 'components/AppSidebar';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthContext';

const BACKEND_URL = process.env.REACT_APP_BACKEND;

export default function Dashboard() {
  const [collapsed, setCollapsed] = React.useState(false);
  const [firstname, setFirstname] = useState('');
  const { userName, setUserName, role, setRole } = useContext(AuthContext);

  function getUserInfo() {
    const accessToken = Cookies.get('accessToken');
    const userInfo = jwtDecode(accessToken);
    const userId = userInfo.userId;

    fetch(BACKEND_URL + '/api/v1/users/' + userId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserName(data.firstname);
        setRole(data.role);
      });
  }
  getUserInfo();
  const QuickActionItem = ({ icon, title, description, link }) => (
    <Link to={link} className="no-underline">
      <div className="flex gap-3.5 !w-full py-5 pr-14 pl-6 text-black bg-white max-md:flex-wrap max-md:px-5 my-3 bg-white-A700 hover:bg-blue-A700 transition-colors duration-300 hover:text-white-A700">
        <img
          src={icon}
          alt=""
          className="shrink-0 aspect-square w-[50px] h-[50px]"
        />
        <div className="flex flex-col grow shrink-0 self-start  basis-0 w-fit ">
          <div className="text-2xl font-semibold">{title}</div>
          <div className=" text-md">{description}</div>
        </div>
      </div>
    </Link>
  );
  const quickActionItems = [
    {
      icon: '/images/dashboard_sandbox.png',
      title: 'Deploy a new Virtual Machine',
      description: 'Instantly get a code running environment up',
      link: '/deploy-vm',
    },
    {
      icon: '/images/dashboard_profile.png',
      title: 'Manage my profile',
      description: 'View and edit your profile details',
      link: '/user',
    },
    {
      icon: '/images/dashboard_info.png',
      title: 'See the guide',
      description: 'Stuck? View how our platform works',
      link: '/guide',
    },
    {
      icon: '/images/privacy_icon.png',
      title: 'Privacy policy',
      description: 'View our privacy policy',
      link: '/temp',
    },
  ];

  return (
    <>
      <Helmet>
        <title>My Dashboard</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-gray-50 !overflow-hidden h-screen">
        <div className="flex flex-col">
          <Header className="p-[15px] bg-blue-A700" firstname={userName} />
          <div className="flex md:flex-col justify-center !overflow-hidden items-start w-[98%] md:w-full gap-6 md:p-5">
            <AppSidebar role={role} />
            <div className="md:self-stretch flex-1 !overflow-hidden">
              <div className="flex flex-col gap-2">
                <div className="flex p-2 bg-white-A700 mt-8">
                  <div className="flex flex-col w-[56%] md:w-full mt-1.5 ml-[13px] gap-[15px] md:ml-0">
                    <div className="flex sm:flex-col items-center gap-6">
                      <Img
                        src="images/edubox-icon.png"
                        alt="sandbox_three"
                        className="w-[70px] sm:w-full object-cover"
                      />
                      <div className="flex flex-col items-start gap-[3px]">
                        <Heading size="md" as="h1">
                          Welcome back {userName}!
                        </Heading>
                        <Text as="p" className="!font-normal">
                          Quickly get started with EduBox below
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 max-md:max-w-full w-full">
                  <div className="flex gap-20 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow max-md:mt-5 max-md:max-w-full">
                        {quickActionItems.map((item, index) => (
                          <QuickActionItem
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            link={item.link}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow justify-center w-full bg-white max-md:mt-5 max-md:max-w-full">
                        <div className="flex items-stretch">
                          <img
                            src="/images/dashboard_art.png"
                            alt="decoration"
                            className="w-full  max-md:max-w-full"
                          />
                        </div>
                      </div>
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

import React from 'react';
import { Helmet } from 'react-helmet';
import { Button, Input, Text, Img, Heading } from '../../components';
import Header from '../../components/Header';
import { MenuItem, Menu, Sidebar } from 'react-pro-sidebar';

export default function Dashboard() {
  const [collapsed, setCollapsed] = React.useState(false);

  const QuickActionItem = ({ icon, title, description }) => (
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
  );
  const quickActionItems = [
    {
      icon: '/images/dashboard_sandbox.png',
      title: 'Deploy a new Virtual Machine',
      description: 'Instantly get a code running environment up',
    },
    {
      icon: '/images/dashboard_profile.png',
      title: 'Manage my profile',
      description: 'View and edit your profile details',
    },
    {
      icon: '/images/dashboard_info.png',
      title: 'See the guide',
      description: 'Stuck? View how our platform works',
    },
    {
      icon: '/images/dashboard_preferences.png',
      title: 'Manage my preferences',
      description: 'Stuck? View how our platform works',
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
      <div className="w-full bg-gray-50">
        <div className="flex flex-col">
          <Header className="p-[15px] bg-blue-A700" />
          <div className="flex md:flex-col justify-center items-start w-[98%] md:w-full gap-6 md:p-5">
            <Sidebar
              width="282px !important"
              collapsedWidth="80px !important"
              collapsed={collapsed}
              className="flex flex-col h-screen top-0 py-[50px] md:py-5 bg-blue_gray-50 !sticky overflow-auto md:hidden"
            >
              <Menu
                menuItemStyles={{
                  button: {
                    padding: '12px',
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
            <div className="md:self-stretch flex-1">
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
                          Welcome back, Zied!
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
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow justify-center w-full bg-white max-md:mt-5 max-md:max-w-full">
                        <div className="flex items-stretch">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e8ee57938ecc76b46d64eafca91caa4dd254690fac498f848ee160761ea9a33?apiKey=885d1370e8b24e0bae7345330583fdb3&"
                            alt="decoration"
                            className="w-full aspect-[1.12] max-md:max-w-full"
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

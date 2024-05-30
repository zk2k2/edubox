import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Text, Input, Heading, Switch, Button } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
function UserRow({ firstName, lastName, role, email, created, actionSrc, alt }) {
  return (
      <>
      <div
          className="shrink-0 mt-7 h-px border border-solid bg-neutral-500 bg-opacity-20 border-neutral-500 border-opacity-20"/>
      <div
          className="flex gap-5 justify-between mt-10 mr-8 ml-8 font-semibold max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
        <div className="flex-1 text-center">{firstName}</div>
        <div className="flex-1 text-center">{lastName}</div>
        <div className="flex-1 text-center">{role}</div>
        <div className="flex-1 text-center">{email}</div>
        <div className="flex-1 text-center">{created}</div>
        <div className="flex-shrink-0 w-[27px]">
          <img loading="lazy" src={actionSrc} alt={alt} className="w-full h-auto"/>
        </div>
      </div>
</>
)
  ;
}

export default function AdminView() {

  const userRows = [
    {
      firstName: 'Zied',
      lastName: 'Kharrat',
      role: 'Admin',
      email: 'zied.kharrat@insat.ucar.tn',
      created: '3 hours ago',
      actionSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/68d8bebdb18597fd4dbe76b1ce6e3aebbbae9e4631ef14e78a11c803c3fdd5d3?apiKey=4231b80fdf894e88b435b645bef85a1d&',
      alt: 'Action icon'
    },
    {
      firstName: 'Zied',
      lastName: 'Kharrat',
      role: 'Admin',
      email: 'zied.kharrat@insat.ucar.tn',
      created: '3 hours ago',
      actionSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/68d8bebdb18597fd4dbe76b1ce6e3aebbbae9e4631ef14e78a11c803c3fdd5d3?apiKey=4231b80fdf894e88b435b645bef85a1d&',
      alt: 'Action icon' },
    { firstName: 'Zied', lastName: 'Kharrat', role: 'Admin', email: 'zied.kharrat@insat.ucar.tn', created: '3 hours ago', actionSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/68d8bebdb18597fd4dbe76b1ce6e3aebbbae9e4631ef14e78a11c803c3fdd5d3?apiKey=4231b80fdf894e88b435b645bef85a1d&', alt: 'Action icon' },
    { firstName: 'Zied', lastName: 'Kharrat', role: 'Admin', email: 'zied.kharrat@insat.ucar.tn', created: '3 hours ago', actionSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/68d8bebdb18597fd4dbe76b1ce6e3aebbbae9e4631ef14e78a11c803c3fdd5d3?apiKey=4231b80fdf894e88b435b645bef85a1d&', alt: 'Action icon' },
  ];

  return (
    <>
      <Helmet>
        <title>Edubox</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-50">
        <div className="flex flex-col">
          <Header className="p-[15px] bg-blue-A700" />
          <div className="flex md:flex-col justify-center items-start w-[98%] md:w-full gap-6 md:p-5">
            <Sidebar
              width="282px !important"
              collapsedWidth="80px !important"
              className="flex flex-col h-screen top-0 p-6 sm:p-5 bg-blue_gray-50 !sticky overflow-auto md:hidden"
            >
              <Menu
                menuItemStyles={{
                  button: {
                    padding: 0,
                    gap: "22px",
                    alignSelf: "start",
                    color: "#505968",
                    fontWeight: 400,
                    fontSize: "20px",
                    paddingTop: "4px",
                    paddingBottom: "4px",
                    [`&:hover, &.ps-active`]: { color: "#000000" },
                  },
                }}
                rootStyles={{ ["&>ul"]: { gap: "0.93px" } }}
                className="flex flex-col w-full mt-[26px] mb-[295px] pb-[22px] sm:pb-5"
              >
                <MenuItem
                  icon={
                    <Img src="images/img_sandbox.png" alt="sandbox_one" className="h-[41px] w-[41px] object-cover" />
                  }
                >
                  Virtual Machines
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_group.png" alt="image" className="h-[32px] w-[32px] object-cover" />}
                >
                  User Management
                </MenuItem>
                <MenuItem
                  icon={
                    <Img src="images/img_user_28x28.png" alt="user_one" className="h-[28px] w-[28px] object-cover" />
                  }
                >
                  My Account
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_info.png" alt="info_one" className="h-[32px] w-[32px] object-cover" />}
                >
                  Assistance
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_gear.png" alt="gear_one" className="h-[32px] w-[32px] object-cover" />}
                >
                  Settings
                </MenuItem>
              </Menu>
            </Sidebar>
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
                <section
                    className="flex flex-col px-5 py-12  w-full text-lg font-medium text-black bg-white-A700 max-md:mt-10 max-md:max-w-full">
                  <div
                      className="flex gap-4 pr-20 whitespace-nowrap text-neutral-500 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                    <button
                        className="justify-center items-start px-5 py-3.5 bg-white rounded-md border border-solid border-black border-opacity-10 max-md:px-5 max-md:max-w-full">
                      Search
                    </button>
                    <img loading="lazy"
                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e2ad1a991f457a793eb4dba0c255e14893506e60e2d6d261703fd66a1b25f45?apiKey=4231b80fdf894e88b435b645bef85a1d&"
                         alt="Search icon" className="shrink-0 my-auto aspect-square w-[33px]"/>
                  </div>
                  <div
                      className="flex gap-5 justify-between mt-10 mr-8 ml-8 font-semibold max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                    <div className="flex-1 text-center">First Name</div>
                    <div className="flex-1 text-center">Last Name</div>
                    <div className="flex-1 text-center">Role</div>
                    <div className="flex-1 text-center">E-mail Address</div>
                    <div className="flex-1 text-center">Created</div>
                    <div className="flex-shrink-0 w-[27px]">Actions</div>
                  </div>
                  {userRows.map((row, index) => (
                      <UserRow key={index} {...row} />
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







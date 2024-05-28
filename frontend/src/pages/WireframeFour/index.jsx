import React from 'react';
import { Helmet } from 'react-helmet';
import { Button, Input, Text, Img, Heading } from '../../components';
import Header from '../../components/Header';
import { MenuItem, Menu, Sidebar } from 'react-pro-sidebar';

export default function WireframeFourPage() {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

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
                <div className="flex p-2 bg-white-A700 my-5">
                  <div className="flex flex-col w-[56%] md:w-full mt-1.5 ml-[13px] gap-[15px] md:ml-0">
                    <div className="flex items-start ml-[5px] gap-[5px] md:ml-0 flex-wrap pt-3">
                      <Text
                        size="s"
                        as="p"
                        className="!text-blue-A700 !font-medium"
                      >
                        Virtual Machines
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
                        Deploy a new virtual machine
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
                          Deploy a new Virtual Machine
                        </Heading>
                        <Text as="p" className="!font-normal">
                          Please specify your Virtual Machine’s settings
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-end">
                    <Img
                      src="images/img_edit.png"
                      alt="edit_one"
                      className="w-[28px] mr-[38px] md:mr-0 z-[1] object-cover"
                    />
                    <div className="self-stretch mt-[-16px] p-6 sm:p-5 relative bg-white-A700">
                      <div className="flex flex-col items-start mb-[25px] gap-[17px]">
                        <Text size="xl" as="p">
                          General Information
                        </Text>
                        <div className="flex md:flex-col self-stretch items-center gap-[30px]">
                          <div className="flex flex-col items-start md:self-stretch flex-1">
                            <div className="flex flex-col self-stretch items-start gap-[7px]">
                              <Text as="p">Instance name</Text>
                              <Input
                                shape="round"
                                name="name"
                                placeholder={`my-vm32`}
                                className="self-stretch sm:px-5 border-black-900_26 border border-solid"
                              />
                            </div>
                            <div className="flex flex-col self-stretch items-start mt-4 gap-1">
                              <Text as="p">Machine Type</Text>
                              <Input
                                shape="round"
                                name="generalpurprose"
                                placeholder={`GENERAL-PURPROSE`}
                                className="self-stretch sm:px-5 border-black-900_26 border border-solid"
                              />
                            </div>
                            <Text size="xl" as="p" className="mt-[26px]">
                              Machine Configuration
                            </Text>
                            <Text as="p" className="mt-3.5">
                              Operating System
                            </Text>
                            <Input
                              shape="round"
                              name="date"
                              placeholder={`04/06/2002`}
                              className="self-stretch mt-[58px] sm:px-5 border-black-900_26 border border-solid"
                            />
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
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { Img } from 'components/Img';
import { Link } from 'react-router-dom';

const AppSidebar = ({ collapsed, role, ...props }) => {
  return (
    <Sidebar
      {...props}
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
              src="images/home_icon.png"
              alt="sandbox_one"
              className="h-[39px] w-[39px] object-cover"
            />
          }
          component={<Link to="/home" />}
        >
          Home
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_sandbox.png"
              alt="sandbox_one"
              className="h-[41px] w-[41px] object-cover"
            />
          }
          component={<Link to="/virtual-machines" />}
        >
          Virtual Machines
        </MenuItem>
        {role !== 'USER' && (
          <MenuItem
            icon={
              <Img
                src="images/img_group.png"
                alt="image"
                className="h-[32px] w-[32px] object-cover"
              />
            }
            component={<Link to="/user-management" />}
          >
            User Management
          </MenuItem>
        )}
        <MenuItem
          icon={
            <Img
              src="images/img_user_1.png"
              alt="user_one"
              className="h-[28px] w-[28px] object-cover"
            />
          }
          component={<Link to="/user" />}
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
          component={<Link to="/guide" />}
        >
          Guide
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_gear.png"
              alt="gear_one"
              className="h-[32px] w-[32px] object-cover"
            />
          }
          component={<Link to="/settings" />}
        >
          Settings
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export { AppSidebar };
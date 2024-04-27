import React from "react";
import { Menu, MenuItem } from "react-pro-sidebar";
import { Img } from "components/Img";

const Sidebar = ({ collapsed }) => {
  return (
    <Menu
      menuItemStyles={{
        button: {
          padding: "12px",
          gap: "22px",
          alignSelf: "start",
          color: "#505968",
          fontWeight: 400,
          fontSize: "20px",
        },
      }}
      rootStyles={{ ["&>ul"]: { gap: "0.93px" } }}
      className="flex flex-col w-[200px] mb-[269px] pb-[22px] sm:pb-5" // Adjust the width here
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
  );
};

export { Sidebar };

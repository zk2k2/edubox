import React from "react";
import { Button, Img, Input } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto max-w-[1283px]">
        <div className="flex md:flex-col justify-between items-center w-[74%] md:w-full gap-5">
          <Img src="images/img_edubox_white_1.png" alt="eduboxwhiteone" className="w-[20%] md:w-full object-cover" />
          <Input
            color="blue_800"
            size="sm"
            name="search"
            placeholder={`Search for Virtual Machines, users, and more...`}
            className="w-[64%] md:w-full sm:px-5 rounded-[10px]"
          />
        </div>
        <Button
          shape="round"
          rightIcon={<Img src="images/img_user.png" alt="User" className="w-[29px] h-[29px]" />}
          className="gap-[18px] sm:pl-5 min-w-[131px]"
        >
          Zied
        </Button>
      </div>
    </header>
  );
}

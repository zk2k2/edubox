import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Text, Input, Heading, Switch, Button } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

const table1Data = [{ columnsquarenin: "images/img_square_90.png" }, { columnsquarenin: "yassine.b" }];

export default function WireframeTwoPage() {
  const [searchBarValue11, setSearchBarValue11] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("columnsquarenin", {
        cell: (info) => <Img src={info?.getValue?.()} alt="squareninetyone" className="md:w-full object-cover" />,
        header: (info) => (
          <div className="flex flex-col gap-3">
            <div className="flex md:flex-col justify-between items-center gap-5">
              <div className="flex justify-between items-center w-[42%] md:w-full gap-5">
                <div className="flex self-start items-center gap-[18px]">
                  <Img src="images/img_square_90.png" alt="squareninety" className="w-[24px] object-cover" />
                  <Heading as="h1" className="self-end">
                    User ID
                  </Heading>
                </div>
                <div className="flex self-end gap-[23px] flex-wrap">
                  <Heading as="h2">Privileges</Heading>
                  <Heading as="h3">E-mail Address</Heading>
                </div>
              </div>
              <div className="flex self-start justify-between w-[40%] md:w-full gap-5">
                <Heading as="h4" className="self-end">
                  Password
                </Heading>
                <div className="flex self-start justify-between w-[50%] gap-5 flex-wrap">
                  <Heading as="h5">Created </Heading>
                  <Heading as="h6">Actions</Heading>
                </div>
              </div>
            </div>
            <div className="h-px bg-gray-600_3d" />
          </div>
        ),
        meta: { width: "976px" },
      }),
    ];
  }, []);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <>
      <Helmet>
        <title>Yassine's Application1</title>
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
              <div className="flex sm:flex-col justify-between items-center gap-5 p-[9px] bg-white-A700">
                <div className="flex ml-[91px] md:ml-0">
                  <div className="flex flex-col items-start gap-1.5">
                    <Text size="xs" as="p" className="text-center">
                      Number of users
                    </Text>
                    <Text size="2xl" as="p" className="text-center">
                      8 users
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-[7px]">
                  <Text size="xs" as="p" className="text-center">
                    Number of admins
                  </Text>
                  <Text size="2xl" as="p" className="!text-blue-A700 text-center">
                    2 admins
                  </Text>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Text size="xs" as="p" className="text-center">
                    Number of active users
                  </Text>
                  <Text size="2xl" as="p">
                    4/8 users
                  </Text>
                </div>
                <div className="flex flex-col items-center mt-0.5 mr-[92px] gap-[9px] md:mr-0">
                  <Text size="xs" as="p" className="text-center">
                    User-ran VMs
                  </Text>
                  <Text size="2xl" as="p">
                    7 deployed VMs
                  </Text>
                </div>
              </div>
              <div className="p-1.5 bg-white-A700">
                <div className="flex flex-col mt-4 mb-[74px]">
                  <div className="flex md:flex-col items-center w-[81%] md:w-full ml-2 md:ml-0">
                    <Input
                      size="sm"
                      shape="round"
                      name="search"
                      placeholder={`Search`}
                      value={searchBarValue11}
                      onChange={(e) => setSearchBarValue11(e)}
                      suffix={
                        searchBarValue11?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue11("")} /> : null
                      }
                      className="sm:px-5 !text-gray-600 border-black-900_26 border border-solid flex-grow"
                    />
                    <Img
                      src="images/img_bulleted_list.png"
                      alt="bulletedlist"
                      className="w-[33px] md:w-full ml-[15px] md:ml-0 object-cover"
                    />
                    <Button color="blue_A700" shape="round" className="ml-[15px] md:ml-0 font-medium min-w-[100px]">
                      Add User
                    </Button>
                    <Switch className="ml-6 md:ml-0" />
                    <Text as="p" className="self-end mb-[5px] ml-[15px] md:ml-0 !text-gray-600 !font-normal">
                      Show only active users
                    </Text>
                  </div>
                  <ReactTable
                    size="xs"
                    bodyProps={{ className: "" }}
                    headerProps={{ className: "" }}
                    rowDataProps={{ className: "md:flex-col" }}
                    className="mt-[-193px] ml-1.5 md:ml-0 relative"
                    columns={table1Columns}
                    data={table1Data}
                  />
                  <div className="mt-[133px] pb-1.5 px-1.5 z-[1]">
                    <div className="flex flex-col self-start gap-[17px]">
                      <div className="h-px bg-gray-600_3d" />
                      <div className="flex md:flex-col justify-center items-end">
                        <Img
                          src="images/img_square_90.png"
                          alt="squareninetyone"
                          className="w-[24px] md:w-full object-cover"
                        />
                        <div className="flex flex-col ml-[18px] md:ml-0 bg-blue-A700 rounded-[14px]">
                          <Img
                            src="images/img_user.png"
                            alt="user_seven"
                            className="h-[29px] rounded-tl-[14px] rounded-tr-[14px] object-cover"
                          />
                        </div>
                        <Text as="p" className="ml-[9px] md:ml-0 !text-blue_gray-700">
                          nidhal.j
                        </Text>
                        <Text as="p" className="mb-[3px] ml-7 md:ml-0">
                          Regular
                        </Text>
                        <Text
                          as="p"
                          className="flex justify-center items-center h-[30px] mb-[3px] ml-[33px] pl-[11px] pr-[21px] py-1 md:ml-0 sm:pr-5 border-black-900_26 border border-solid bg-white-A700 rounded-[5px]"
                        >
                          nidhal.jabnouni@insat.ucar.tn
                        </Text>
                        <div className="h-[30px] w-[22%] md:w-full md:h-auto ml-[22px] md:ml-0 relative">
                          <Text as="p" className="mb-0.5 ml-[49px] md:ml-0">
                            8080
                          </Text>
                          <div className="flex items-center h-max w-max gap-[11px] left-0 bottom-0 right-0 top-0 m-auto border-black-900_26 border border-solid bg-white-A700 absolute rounded-[5px]">
                            <Text as="p">••••••••••••••</Text>
                            <Img
                              src="images/img_eye.png"
                              alt="eye_three"
                              className="self-start w-[23px] object-cover"
                            />
                          </div>
                        </div>
                        <Text as="p" className="ml-4 md:ml-0">
                          3 hours ago
                        </Text>
                        <Img
                          src="images/img_edit.png"
                          alt="edit_five"
                          className="w-[25px] md:w-full ml-[18px] md:ml-0 object-cover"
                        />
                        <Img
                          src="images/img_trash.png"
                          alt="trash_five"
                          className="w-[26px] md:w-full ml-[7px] md:ml-0 object-cover"
                        />
                        <Img
                          src="images/img_menu_vertical.png"
                          alt="menuvertical"
                          className="w-[27px] md:w-full object-cover"
                        />
                      </div>
                      <div className="h-px bg-gray-600_3d" />
                    </div>
                  </div>
                  <div className="mt-2.5 p-1.5">
                    <div className="flex flex-col mt-[9px] mb-1.5 gap-[21px]">
                      <div className="flex md:flex-col justify-center items-end">
                        <Img
                          src="images/img_square_90.png"
                          alt="squareninetyone"
                          className="w-[24px] md:w-full object-cover"
                        />
                        <div className="flex flex-col ml-[18px] md:ml-0 bg-blue-A700 rounded-[14px]">
                          <Img
                            src="images/img_user.png"
                            alt="user_nine"
                            className="h-[29px] rounded-tl-[14px] rounded-tr-[14px] object-cover"
                          />
                        </div>
                        <Text as="p" className="mt-[3px] ml-[9px] md:ml-0 !text-blue_gray-700">
                          bassem.l
                        </Text>
                        <Text as="p" className="ml-[17px] md:ml-0">
                          Regular
                        </Text>
                        <Text
                          as="p"
                          className="flex justify-center items-center h-[30px] ml-[26px] px-[9px] py-1 md:ml-0 border-black-900_26 border border-solid bg-white-A700 rounded-[5px]"
                        >
                          bassem.larguech@insat.ucar.tn
                        </Text>
                        <div className="h-[30px] w-[21%] md:w-full md:h-auto ml-[22px] md:ml-0 relative">
                          <Text as="p" className="mb-0.5 ml-[49px] md:ml-0">
                            8080
                          </Text>
                          <div className="flex items-center h-max w-max gap-[11px] left-0 bottom-0 right-0 top-0 m-auto border-black-900_26 border border-solid bg-white-A700 absolute rounded-[5px]">
                            <Text as="p">••••••••••••••</Text>
                            <Img src="images/img_eye.png" alt="eye_five" className="self-start w-[23px] object-cover" />
                          </div>
                        </div>
                        <Text as="p" className="ml-4 md:ml-0">
                          3 hours ago
                        </Text>
                        <Img
                          src="images/img_edit.png"
                          alt="edit_seven"
                          className="w-[25px] md:w-full ml-5 md:ml-0 object-cover"
                        />
                        <Img
                          src="images/img_trash.png"
                          alt="trash_seven"
                          className="w-[26px] md:w-full ml-[5px] md:ml-0 object-cover"
                        />
                        <Img
                          src="images/img_menu_vertical.png"
                          alt="menuvertical"
                          className="w-[27px] md:w-full object-cover"
                        />
                      </div>
                      <div className="h-px bg-gray-600_3d" />
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

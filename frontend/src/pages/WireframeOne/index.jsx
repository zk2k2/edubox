import { Helmet } from 'react-helmet';
import { CloseSVG } from '../../assets/images';
import {
  Img,
  Text,
  CheckBox,
  Heading,
  Switch,
  Button,
  Input,
} from '../../components';
import Header from '../../components/Header';
import { ReactTable } from '../../components/ReactTable';
import { createColumnHelper } from '@tanstack/react-table';
import { MenuItem, Menu, Sidebar } from 'react-pro-sidebar';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const tableData = [
  {
    name: 'myvm-32',
    operating: 'images/img_windows_10.png',
    status: 'Running',
    cpu: '8%',
    ports: '8080',
    laststarted: '3 hours ago',
    actions: 'images/img_stop.png',
  },
  {
    name: 'myvm-32',
    operating: 'images/img_windows_10.png',
    status: 'Running',
    cpu: '4%',
    ports: '8081',
    laststarted: '3 hours ago',
    actions: 'images/img_stop.png',
  },
  {
    name: 'myvm-32',
    operating: 'images/img_windows_10.png',
    status: 'Stopped',
    cpu: '12%',
    ports: '8090',
    laststarted: '3 hours ago',
    actions: 'images/img_stop.png',
  },
];

export default function WireframeOnePage() {
  const [tableVm, setTableVm] = useState([]);
  const [showRunningOnly, setShowRunningOnly] = useState(false);
  const [searchBarValue1, setSearchBarValue1] = React.useState('');
  const [collapsed, setCollapsed] = React.useState(false);
  const token = localStorage.getItem('token');
  useEffect(() => {
    fetch(process.env.URL_BACKEND + '/ListVm', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json', // Adjust content type as needed
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (showRunningOnly) {
          // Show only running VMs
          const runningVMs = data.filter((item) => item.status === 'Running');

          setTableVm(runningVMs);
        } else {
          // Show all VMs
          setTableVm(data);
        }
        if (searchBarValue1 !== '') {
          const filteredData = tableVm.filter((item) =>
            item.name
              .toLowerCase()
              .includes(searchBarValue1.trim().toLowerCase())
          );

          setTableVm(filteredData);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
    // To remove just for test
    setTableVm(tableData);
  }, []);
  const handleSwitchChange = (val) => {
    console.log(val);
    setShowRunningOnly(val);
  };

  console.log(searchBarValue1);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor('rowsquareninety', {
        cell: (info) => (
          <div className="flex">
            <CheckBox
              name="squareninetyone"
              label=""
              id="squareninetyone2"
              className="mt-[18px] mb-[25px]"
            />
          </div>
        ),
        header: (info) => (
          <div className="flex pb-px px-px">
            <CheckBox
              name="squareninety"
              label=""
              id="squareninety"
              className="ml-[7px] md:ml-0"
            />
          </div>
        ),
        meta: { width: '49px' },
      }),
      tableColumnHelper.accessor('name', {
        cell: (info) => (
          <div className="flex items-start gap-1">
            <Img
              src="images/img_sandbox_35x35.png"
              alt="sandbox_three"
              className="w-[35px] mb-2 object-cover"
            />
            <Text as="p" className="mt-2 !text-blue_gray-700">
              {info?.getValue?.()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Heading as="h1" className="pl-[15px] py-px">
            Name
          </Heading>
        ),
        meta: { width: '147px' },
      }),
      tableColumnHelper.accessor('operating', {
        cell: (info) => (
          <div className="flex">
            <Img
              src={info?.getValue?.()}
              alt="windowsten_one"
              className="w-[39px] mb-3 ml-[41px] md:ml-0 object-cover"
            />
          </div>
        ),
        header: (info) => (
          <Heading as="h2" className="p-px">
            Operating System
          </Heading>
        ),
        meta: { width: '194px' },
      }),
      tableColumnHelper.accessor('status', {
        cell: (info) => (
          <Text as="p" className="!text-blue-A700">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h3" className="pl-3.5 py-px">
            Status
          </Heading>
        ),
        meta: { width: '123px' },
      }),
      tableColumnHelper.accessor('cpu', {
        cell: (info) => (
          <Text as="p" className="!text-teal-300">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h4" className="p-px">
            CPU (%)
          </Heading>
        ),
        meta: { width: '123px' },
      }),
      tableColumnHelper.accessor('ports', {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="h5" className="p-px">
            Port(s)
          </Heading>
        ),
        meta: { width: '123px' },
      }),
      tableColumnHelper.accessor('laststarted', {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="h6" className="p-px">
            Last started
          </Heading>
        ),
        meta: { width: '146px' },
      }),
      tableColumnHelper.accessor('actions', {
        cell: (info) => (
          <div className="flex items-start">
            <Img
              src={info?.getValue?.()}
              alt="stop_one"
              className="w-[33px] mt-[3px] mb-[11px] object-cover"
            />
            <Img
              src="images/img_trash.png"
              alt="trash_one"
              className="w-[26px] mt-1.5 object-cover"
            />
            <Img
              src="images/img_menu_vertical.png"
              alt="menuvertical"
              className="w-[27px] mt-[3px] object-cover"
            />
          </div>
        ),
        header: (info) => (
          <Heading as="h6" className="pl-[11px] py-px">
            Actions
          </Heading>
        ),
        meta: { width: '104px' },
      }),
    ];
  }, []);

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
            <div className="flex flex-col md:self-stretch gap-6 flex-1">
              <div className="flex sm:flex-col justify-between gap-5 p-3 bg-white-A700">
                <div className="flex ml-[155px] md:ml-0">
                  <div className="flex flex-col items-start gap-1">
                    <Text size="xs" as="p" className="text-center">
                      VMs CPU Usage
                    </Text>
                    <Text
                      size="2xl"
                      as="p"
                      className="!text-teal-300 text-center"
                    >
                      24%{' '}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[5px]">
                  <Text size="xs" as="p" className="text-center">
                    Memory Usage
                  </Text>
                  <Text
                    size="2xl"
                    as="p"
                    className="!text-amber-A400 text-center"
                  >
                    38%
                  </Text>
                </div>
                <div className="flex flex-col items-start gap-1.5">
                  <Text size="xs" as="p" className="text-center">
                    Currently deployed
                  </Text>
                  <Text size="2xl" as="p">
                    5/7 VMs
                  </Text>
                </div>
                <div className="flex flex-col items-center mr-[155px] gap-1.5 md:mr-0">
                  <Text size="xs" as="p" className="text-center">
                    Currently running
                  </Text>
                  <Text size="2xl" as="p">
                    1/5 VMs
                  </Text>
                </div>
              </div>
              <div className="p-1.5 bg-white-A700">
                <div className="flex flex-col mt-4 mb-[134px] gap-[23px]">
                  <div className="flex md:flex-col justify-between items-center w-[97%] md:w-full gap-5">
                    <div className="flex md:flex-col justify-center items-center w-[61%] md:w-full gap-[15px]">
                      <Input
                        size="sm"
                        shape="round"
                        name="search"
                        placeholder={`Search`}
                        value={searchBarValue1}
                        onChange={(e) => setSearchBarValue1(e)}
                        suffix={
                          searchBarValue1?.length > 0 ? (
                            <CloseSVG onClick={() => setSearchBarValue1('')} />
                          ) : null
                        }
                        className="sm:px-5 !text-gray-600 border-black-900_26 border border-solid flex-grow"
                      />
                      <Img
                        src="images/img_bulleted_list.png"
                        alt="bulletedlist"
                        className="w-[33px] md:w-full object-cover"
                      />
                      <Link to="/WireframeFour">
                        <Button
                          color="blue_A700"
                          shape="round"
                          className="font-medium min-w-[158px]"
                        >
                          Deploy new VM
                        </Button>
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch
                        value={showRunningOnly}
                        onChange={handleSwitchChange}
                      />
                      <Text
                        as="p"
                        className="self-end mb-1 !text-gray-600 !font-normal"
                      >
                        Show only running VMs
                      </Text>
                    </div>
                  </div>
                  <ReactTable
                    size="sm"
                    bodyProps={{ className: '' }}
                    headerProps={{ className: 'md:flex-col' }}
                    rowDataProps={{ className: 'md:flex-col' }}
                    columns={tableColumns}
                    data={tableVm}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

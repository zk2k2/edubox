import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Input, Text, Img, Heading } from '../../components';
import Header from '../../components/Header';
import { MenuItem, Menu } from 'react-pro-sidebar';
import { AppSidebar } from 'components/AppSidebar';
import { AuthContext } from '../../AuthContext';
import { useContext } from 'react';
import { Select } from '../../components';

export default function DeployVM() {
  const { userName } = useContext(AuthContext);

  return (
    <>
      <Helmet>
        <title>Deploy a VM</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full !h-screen bg-gray-50 !overflow-hidden">
        <div className="flex flex-col">
          <Header className="p-[15px] bg-blue-A700" firstname={userName} />
          <div className="flex md:flex-col justify-between items-start w-[98%] md:w-full gap-5 md:p-5">
            <AppSidebar role="USER" />
            <div className="flex flex-col md:self-stretch gap-[18px] flex-1">
              <div className="flex p-[13px] bg-white-A700 mx-5 mt-5">
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
              <div className="p-5 m-5 bg-white-A700">
                <div className="flex flex-col mb-[67px] gap-[25px]">
                  <div className="flex justify-between items-center gap-5">
                    <Heading size="s" as="h2">
                      Virtual Machine Configuration
                    </Heading>
                  </div>
                  <div className="flex md:flex-col justify-center items-center gap-[30px]">
                    <div className="flex flex-col md:self-stretch gap-[23px] flex-1">
                      <div className="flex flex-col items-start gap-[7px]">
                        <Text as="p">Machine Name</Text>
                        <Input
                          shape="round"
                          name="name"
                          placeholder={`vm-32`}
                          className="self-stretch sm:px-5 border-black-900_26 border border-solid"
                          required
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1.5">
                        <Text as="p">Base Image</Text>
                        <Select
                          shape="round"
                          name="baseImage"
                          options={[
                            { value: 'alpine', label: 'Alpine' },
                            { value: 'debian', label: 'Debian' },
                          ]}
                          placeholder="Select base image"
                          className="self-stretch border-black-900_26 !pr-0 pl-3 border border-solid"
                          required
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1.5">
                        <Text as="p">Tag</Text>
                        <Select
                          shape="round"
                          name="tag"
                          options={[
                            { value: 'image1', label: 'Image 1' },
                            { value: 'image2', label: 'Image 2' },
                            { value: 'image3', label: 'Image 3' },
                          ]}
                          placeholder="Select machine tag"
                          className="self-stretch border-black-900_26 !pr-0 pl-3 border border-solid"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1.5">
                        <Text as="p">Python Installation (optional)</Text>
                        <Select
                          shape="round"
                          name="java"
                          options={[{ value: 'python3', label: 'Python 3' }]}
                          placeholder="Select Python installation"
                          className="self-stretch border-black-900_26 !pr-0 pl-3 border border-solid"
                        />
                      </div>
                    </div>
                    <div className="h-[350px] w-px md:w-[350px] md:h-px bg-gray-600_3d" />
                    <div className="md:self-stretch mb-1.5 flex-1">
                      <div className="flex flex-col items-start gap-1.5">
                        <Text as="p">Node.js Installation</Text>
                        <Select
                          shape="round"
                          name="nodejs"
                          options={[
                            { value: 'java8', label: 'Java 8' },
                            { value: 'java17', label: 'Java 17' },
                            { value: 'java21', label: 'Java 21' },
                          ]}
                          placeholder="Select Node.js installation (optional)"
                          className="self-stretch border-black-900_26 !pr-0 pl-3 border border-solid"
                        />
                      </div>
                      <div className="flex flex-col items-start mt-[18px] gap-[7px]">
                        <Text as="p">Java Installation</Text>
                        <Select
                          shape="round"
                          name="java"
                          options={[
                            { value: 'java8', label: 'Java 8' },
                            { value: 'java17', label: 'Java 17' },
                            { value: 'java21', label: 'Java 21' },
                          ]}
                          placeholder="Select Java installation (optional)"
                          className="self-stretch border-black-900_26 !pr-0 pl-3 border border-solid"
                        />
                      </div>
                      <Button
                        color="blue_A700"
                        size="sm"
                        className="w-full !mt-[92px] sm:px-5 font-medium border-black-900_26 border border-solid rounded-[5px]"
                        onclick={() => {
                          console.log('Deploying VM...');
                        }}
                      >
                        Deploy Virtual Machine
                      </Button>
                      <Button
                        size="sm"
                        className="w-full mt-5 sm:px-5 font-medium bg-gray-100 !text-gray-400 border-black-900_26 border border-solid rounded-[5px]"
                      >
                        Cancel
                      </Button>
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

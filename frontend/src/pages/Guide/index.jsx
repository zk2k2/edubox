import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Input, Text, Img, Heading } from '../../components';
import Header from '../../components/Header';
import { AppSidebar } from 'components/AppSidebar';
import { AuthContext } from '../../AuthContext';
import { Select } from '../../components';

export default function Guide() {
  const { userName } = useContext(AuthContext);

  return (
    <>
      <Helmet>
        <title>Edubox Guide</title>
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
                      Home
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
                      Read the Edubox Guide
                    </Text>
                  </div>
                  <div className="flex sm:flex-col items-center gap-6">
                    <Img
                      src="images/dashboard_info.png"
                      alt="info_icon"
                      className="w-[68px] sm:w-full object-cover"
                    />
                    <div className="flex flex-col items-start gap-[3px]">
                      <Heading size="md" as="h1">
                        Read the EduBox Guide
                      </Heading>
                      <Text as="p" className="!font-normal">
                        Read the guide to understand how EduBox works!
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" bg-white-A700  h-[550px] w[1200px] m-5 p-5">
                <div className="mx-3 my-3 !mb-7">
                  <div className="flex">
                    <img
                      src="images/edubox-icon.png"
                      alt=""
                      className="w-10 mx-3"
                    />
                    <Text className="!text-3xl !font-semibold mt-1 ">
                      What is EduBox?
                    </Text>
                  </div>

                  <Text as="p" className="!font-normal !text-xl my-3">
                    EduBox is a platform that allows you to deploy Virtual
                    Machines for educational purposes. You can deploy a Virtual
                    Machine with a base image of your choice and install Python,
                    Node.js, and Java on it. You can also deploy multiple
                    Virtual Machines with different configurations. Our goal was
                    to provide students with an easy and approachable way to
                    deploy Linux environments for educational purposes.
                  </Text>
                </div>
                <div className="mx-3 my-3 !mb-5">
                  <div className="flex">
                    <img
                      src="images/edubox-icon.png"
                      alt=""
                      className="w-10 mx-3"
                    />
                    <Text className="!text-3xl !font-semibold mt-1 ">
                      How do I get started?
                    </Text>
                  </div>

                  <Text as="p" className="!font-normal !text-xl my-3">
                    To get started, simply click on Deploy a Virtual Machine
                    from your dashboard. You will be prompted to enter the
                    Virtual Machine's name, select a base image, and choose the
                    software you want to install on it. Once you have entered
                    the required information, click on the Deploy button to
                    create your Virtual Machine. Voilà! You now have a fully
                    functional virtual environment!.
                  </Text>
                </div>
                <div className="mx-3 my-3  ">
                  <div className="flex">
                    <img
                      src="images/edubox-icon.png"
                      alt=""
                      className="w-10 mx-3"
                    />
                    <Text className="!text-3xl !font-semibold mt-1 ">
                      How does EduBox work?
                    </Text>
                  </div>

                  <Text as="p" className="!font-normal !text-xl my-3">
                    EduBox uses Docker containers as the core technology behind
                    Virtual Machines. It also leverages noVNC, a web-based VNC
                    client, to provide you with a graphical interface to your
                    Virtual Machine. This means you can access your Virtual
                    Machine directly from your browser without the need for any
                    additional software.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .sign-up-button {
          font-family: Inter, sans-serif;
          border-radius: 10px;
          background-color: rgba(50, 109, 230, 1);
          color: #fff;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Input, Text, Img, Heading } from '../../components';
import Header from '../../components/Header';
import { AppSidebar } from 'components/AppSidebar';
import { AuthContext } from '../../AuthContext';
import { Select } from '../../components';

export default function Guide() {
  const { userName, role } = useContext(AuthContext);

  return (
    <>
      <Helmet>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full !h-screen bg-gray-50 !overflow-hidden">
        <div className="flex flex-col">
          <Header className="p-[15px] bg-blue-A700" firstname={userName} />
          <div className="flex md:flex-col justify-between items-start w-[98%] md:w-full gap-5 md:p-5">
            <AppSidebar role={role} />
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
                      Privacy policy
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
                        Read our privacy policy
                      </Heading>
                      <Text as="p" className="!font-normal">
                        EduBox is committed to protecting your privacy.
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
                      Does EduBox collect any personal information?
                    </Text>
                  </div>

                  <Text as="p" className="!font-normal !text-xl my-3">
                    EduBox does collect personal information, but it is managed
                    with the utmost care and used only with your explicit
                    consent. EduBox follows stringent data privacy policies to
                    ensure that your information is handled securely and
                    transparently. The collected data helps enhance your
                    experience by providing personalized content and services.
                    Rest assured, your personal information is never used
                    without your permission, and EduBox prioritizes your privacy
                    and data security at all times.
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
                      Does my data get deleted if I delete my account?
                    </Text>
                  </div>

                  <Text as="p" className="!font-normal !text-xl my-3">
                    Yes, if you delete your account, all your personal
                    information is completely removed from our systems. EduBox
                    ensures that your data is entirely deleted and cannot be
                    recovered once your account is deleted. We prioritize your
                    privacy and take strict measures to ensure that your
                    information is permanently erased.
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
                      Is my data shared with third parties?
                    </Text>
                  </div>

                  <Text as="p" className="!font-normal !text-xl my-3">
                    No, EduBox does not share your personal information with any
                    third parties. If this policy changes in the future, you
                    will be notified and asked for your consent before any
                    information is shared.
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

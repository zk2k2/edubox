import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Input, Text, Img, Heading } from '../../components';
import Header from '../../components/Header';
import { AppSidebar } from 'components/AppSidebar';
import { AuthContext } from '../../AuthContext';
import { Select } from '../../components';

export default function DeployVM() {
  const { userName } = useContext(AuthContext);
  const [image, setImage] = useState('');
  const [tag, setTag] = useState('');
  const [python, setPython] = useState('python3');
  const [nodejs, setNodejs] = useState('nodejs20');
  const [java, setJava] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function requestVMDeployment(event) {
    event.preventDefault();
    setLoading(true);

    const languages = [];
    if (python) languages.push(python);
    if (nodejs) languages.push(nodejs);
    if (java) languages.push(java);

    const secret = '66687104b6c27da56e1fbacd5636a9e6';
    const data = {
      baseImage: image,
      secret: secret,
      languages: languages,
    };

    fetch('http://127.0.0.1:5000/createVm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setSuccess(true);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
        // Optionally handle error state here
      });
  }

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
              <form onSubmit={requestVMDeployment}>
                <div className="flex flex-row bg-white-A700  items-center justify-center h-[500px] w[1200px] m-5 p-5">
                  <div className="flex flex-col justify-center items-center">
                    <div>
                      <Text
                        as="h3"
                        className="!font-medium !text-blue-A700 !text-5xl mb-5"
                      >
                        Successfully deployed!
                      </Text>
                    </div>
                    <Text as="h3" className="!font-normal !text-xl mb-3">
                      Your Virtual Environment is ready, click the button below
                      to access it.
                    </Text>
                    <Text as="h3" className="!font-normal !text-xl mb-3">
                      Your VM password is, please keep it safe.
                    </Text>
                    <button className="sign-up-button w-full h-12 mt-5">
                      <div className="flex justify-center">
                        <Text as="h3" className=" !text-white-A700">
                          Launch my Virtual Machine
                        </Text>
                        <img
                          src="images/external_link.png"
                          className=" w-7 h-7 mx-3"
                          alt=""
                        />
                      </div>
                    </button>
                    <button className="sign-up-button !bg-gray-200 w-full h-12 mt-5">
                      <div className="flex justify-center">
                        <Text as="h3" className=" !text-black">
                          Stop My Virtual Machine
                        </Text>
                        <img
                          src="images/img_stop.png"
                          className=" w-6 h-6 mx-3 mt-0.5"
                          alt=""
                        />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <Text as="p">Your VM was deployed successfully!</Text>
                </div>
              </form>
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

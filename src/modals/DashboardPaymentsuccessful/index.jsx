import React from "react";
import ModalProvider from "react-modal";

import { Img, Text, Button } from "components";

const DashboardPaymentsuccessfulModal = (props) => {
  function handleNavigate() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[28%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col items-center justify-end mt-[64px] p-[32px] md:px-[20px] rounded-[4px] shadow-bs1 w-[100%]">
            <Img
              src="images/img_layer2.svg"
              className="h-[152px] mt-[86px] w-[56%]"
              alt="LayerTwo"
            />
            <div className="flex flex-col gap-[16px] items-center justify-start mt-[45px] md:w-[100%] w-[auto]">
              <Text
                className="text-bluegray_800 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Payment Successful
              </Text>
              <Text
                className="font-normal leading-[22.00px] not-italic text-bluegray_800 text-center"
                as="h6"
                variant="h6"
              >
                <span className="text-bluegray_800 text-[14px] font-inter">
                  Add
                </span>
                <span className="text-green_700 text-[14px] font-inter font-medium">
                  {" "}
                  200.000đ
                </span>
                <span className="text-bluegray_800 text-[14px] font-inter">
                  {" "}
                  to your wallet already
                  <br />
                  Check your new balance!
                </span>
              </Text>
            </div>
            <Text
              className="font-normal mt-[21px] not-italic text-bluegray_400 text-left w-[auto]"
              as="h6"
              variant="h6"
            >
              Send receipt to
            </Text>
            <div className="flex flex-row gap-[16px] items-center justify-center mt-[16px] md:w-[100%] w-[53%]">
              <Button
                className="flex h-[48px] items-center justify-center rounded-[50%] w-[48px]"
                size="xlIcn"
                variant="icbOutlineIndigo51"
              >
                <Img
                  src="images/img_lightbulb.svg"
                  className="h-[20px]"
                  alt="lightbulb"
                />
              </Button>
              <Button
                className="common-pointer flex h-[48px] items-center justify-center rounded-[50%] w-[48px]"
                onClick={handleNavigate}
                size="xlIcn"
                variant="icbOutlineIndigo51"
              >
                <Img
                  src="images/img_facebook.svg"
                  className="h-[20px]"
                  alt="facebook"
                />
              </Button>
              <Button
                className="flex h-[48px] items-center justify-center rounded-[50%] w-[48px]"
                size="xlIcn"
                variant="icbOutlineIndigo51"
              >
                <Img
                  src="images/img_globe.svg"
                  className="h-[20px]"
                  alt="globe"
                />
              </Button>
            </div>
            <Button
              className="cursor-pointer font-bold min-w-[336px] mt-[32px] text-[14px] text-center text-white_A700 w-[auto]"
              shape="CircleBorder28"
              size="7xl"
              variant="FillDeeporange300"
            >
              Yes, I understand
            </Button>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default DashboardPaymentsuccessfulModal;

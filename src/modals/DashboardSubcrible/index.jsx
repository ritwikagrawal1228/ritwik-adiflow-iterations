import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Input } from "components";

const DashboardSubcribleModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[34%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 md:h-[186px] h-[252px] p-[16px] md:px-[20px] relative rounded-[4px] shadow-bs1 w-[100%]">
            <div className="absolute flex flex-col gap-[35px] h-[max-content] inset-[0] items-start justify-center m-[auto] w-[87%]">
              <div className="flex flex-col gap-[21px] items-start justify-start md:w-[100%] w-[auto]">
                <Text
                  className="text-bluegray_800 text-left w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Subcrible
                </Text>
                <Text
                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Subcribe our newletter and get notification to stay update
                </Text>
              </div>
              <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                <Text
                  className="font-medium text-bluegray_800 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Email
                </Text>
                <div className="h-[56px] relative w-[100%]">
                  <Img
                    src="images/img_cursor.svg"
                    className="h-[20px] ml-[auto] mr-[20px] my-[auto] w-[20px]"
                    alt="cursor"
                  />
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                    wrapClassName="absolute flex inset-[0] justify-center m-[auto] w-[100%]"
                    type="email"
                    name="email One"
                    placeholder="Ackermanlhn@gmail.com"
                    prefix={
                      <Img
                        src="images/img_mail.svg"
                        className="ml-[20px] mr-[16px] left-[5%] right-[4%] absolute my-[auto]"
                        alt="mail"
                      />
                    }
                    shape="RoundedBorder4"
                    size="3xl"
                    variant="OutlineIndigo51"
                  ></Input>
                </div>
              </div>
            </div>
            <Img
              src="images/img_close.svg"
              className="common-pointer absolute h-[24px] right-[6%] top-[6%] w-[24px]"
              onClick={props.onRequestClose}
              alt="close"
            />
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default DashboardSubcribleModal;

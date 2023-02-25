import React from "react";

import { Img, Text } from "components";

const Sidebar1 = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="bg-white_A700 flex flex-col gap-[36px] items-center justify-start p-[32px] sm:px-[20px] w-[100%]">
          <Img
            src="images/img_logo.svg"
            className="h-[28px] mt-[4px] w-[50%]"
            alt="Logo"
          />
          <div className="flex flex-col items-start justify-start mb-[418px] md:w-[100%] w-[88%]">
            <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[75%]">
              <Img
                src="images/img_grid_20X20.svg"
                className="h-[20px] w-[20px]"
                alt="grid"
              />
              <Text
                className="font-normal font-poppins not-italic text-bluegray_400 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Dashboard
              </Text>
            </div>
            <div className="flex flex-row gap-[16px] items-center justify-start mt-[34px] md:w-[100%] w-[69%]">
              <Img
                src="images/img_user_20X20.svg"
                className="h-[20px] w-[20px]"
                alt="user"
              />
              <Text
                className="font-normal font-poppins not-italic text-bluegray_400 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Customer
              </Text>
            </div>
            <div className="flex flex-row gap-[32px] items-center justify-between mt-[32px] w-[100%]">
              <div className="flex flex-row gap-[16px] items-end justify-start w-[auto]">
                <Img
                  src="images/img_sort.svg"
                  className="h-[20px] mb-[2px] w-[20px]"
                  alt="sort"
                />
                <Text
                  className="font-normal font-poppins mt-[6px] not-italic text-bluegray_400 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Message
                </Text>
              </div>
              <Text
                className="bg-red_600 flex font-bold font-poppins h-[24px] items-center justify-center rounded-[50%] text-center text-white_A700 w-[24px]"
                variant="body1"
              >
                3
              </Text>
            </div>
            <div className="flex flex-row gap-[16px] items-center justify-start mt-[31px] md:w-[100%] w-[39%]">
              <Img
                src="images/img_folder_20X20.svg"
                className="h-[20px] w-[20px]"
                alt="folder"
              />
              <Text
                className="font-normal font-poppins not-italic text-bluegray_800 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                File
              </Text>
            </div>
            <div className="flex flex-row gap-[16px] items-start justify-start mt-[32px] md:w-[100%] w-[66%]">
              <Img
                src="images/img_calendar.svg"
                className="h-[20px] w-[20px]"
                alt="calendar"
              />
              <Text
                className="font-normal font-poppins mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Calender
              </Text>
            </div>
            <div className="flex flex-row gap-[16px] items-end justify-start mt-[34px] md:w-[100%] w-[47%]">
              <Img
                src="images/img_trash.svg"
                className="h-[20px] mb-[2px] w-[20px]"
                alt="trash"
              />
              <Text
                className="font-normal font-poppins mt-[5px] not-italic text-bluegray_400 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Shop
              </Text>
            </div>
            <div className="flex flex-row gap-[16px] items-center justify-start mt-[33px] md:w-[100%] w-[44%]">
              <Img
                src="images/img_mail_20X20.svg"
                className="h-[20px] w-[20px]"
                alt="mail"
              />
              <Text
                className="font-normal font-poppins not-italic text-bluegray_400 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Cart
              </Text>
            </div>
            <div className="flex flex-row gap-[13px] items-end justify-start mt-[31px] md:w-[100%] w-[62%]">
              <div className="bg-white_A700 flex h-[26px] items-center justify-start p-[3px] w-[26px]">
                <div className="bg-bluegray_400 h-[20px] rounded-[50%] w-[20px]"></div>
              </div>
              <Text
                className="font-normal font-poppins mb-[2px] mt-[7px] not-italic text-bluegray_400 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Settings
              </Text>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;

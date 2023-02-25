import React from "react";

import { Img, Text } from "components";

const Sidebar5 = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="bg-white_A700 flex flex-col gap-[36px] items-center justify-start p-[32px] sm:px-[20px] w-[100%]">
          <Img
            src="images/img_logo.svg"
            className="h-[28px] mt-[4px] w-[50%]"
            alt="Logo"
          />
          <div className="flex flex-col items-start justify-start mb-[1447px] md:w-[100%] w-[88%]">
            <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[71%]">
              <Img
                src="images/img_grid_20X20.svg"
                className="h-[20px] w-[20px]"
                alt="grid"
              />
              <Text
                className="font-inter font-medium text-bluegray_400 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Dashboard
              </Text>
            </div>
            <div className="flex flex-row gap-[16px] items-center justify-start mt-[34px] md:w-[100%] w-[66%]">
              <Img
                src="images/img_user_20X20.svg"
                className="h-[20px] w-[20px]"
                alt="user"
              />
              <Text
                className="font-inter font-medium text-bluegray_400 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Customer
              </Text>
            </div>
            <div className="flex flex-row gap-[34px] items-center justify-between mt-[32px] w-[100%]">
              <div className="flex flex-row gap-[16px] items-end justify-start w-[auto]">
                <Img
                  src="images/img_sort.svg"
                  className="h-[20px] mb-[2px] w-[20px]"
                  alt="sort"
                />
                <Text
                  className="font-inter font-medium mt-[5px] text-bluegray_400 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Message
                </Text>
              </div>
              <Text
                className="bg-red_600 flex font-bold font-inter h-[24px] items-center justify-center rounded-[50%] text-center text-white_A700 w-[24px]"
                variant="body1"
              >
                3
              </Text>
            </div>
            <div className="flex flex-row gap-[16px] items-center justify-start mt-[32px] md:w-[100%] w-[39%]">
              <Img
                src="images/img_folder.svg"
                className="h-[20px] w-[20px]"
                alt="folder"
              />
              <Text
                className="font-inter font-medium text-bluegray_400 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                File
              </Text>
            </div>
            <div className="flex flex-row gap-[16px] items-start justify-start mt-[33px] md:w-[100%] w-[63%]">
              <Img
                src="images/img_calendar.svg"
                className="h-[20px] w-[20px]"
                alt="calendar"
              />
              <Text
                className="font-inter font-medium mt-[3px] text-bluegray_400 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Calender
              </Text>
            </div>
            <div className="flex flex-row gap-[16px] items-end justify-start mt-[34px] md:w-[100%] w-[46%]">
              <Img
                src="images/img_trash_20X20.svg"
                className="h-[20px] w-[20px]"
                alt="trash"
              />
              <Text
                className="font-inter font-medium mt-[5px] text-bluegray_800 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Shop
              </Text>
            </div>
            <div className="flex flex-row gap-[16px] items-center justify-start mt-[35px] md:w-[100%] w-[43%]">
              <Img
                src="images/img_mail_20X20.svg"
                className="h-[20px] w-[20px]"
                alt="mail"
              />
              <Text
                className="font-inter font-medium text-bluegray_400 text-left w-[auto]"
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
                className="font-inter font-medium mb-[2px] mt-[7px] text-bluegray_400 text-left w-[auto]"
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

Sidebar5.defaultProps = {};

export default Sidebar5;

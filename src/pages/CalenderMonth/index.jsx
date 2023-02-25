import React from "react";

import { Img, Text, Line, Button, RadioGroup, Radio, List } from "components";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";

const CalenderMonthPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[241px]">
            <div className="flex flex-col gap-[36px] items-center justify-start mb-[426px] ml-[32px] mr-[54px] mt-[36px] w-[65%]">
              <Img
                src="images/img_logo.svg"
                className="h-[28px] w-[57%]"
                alt="Logo"
              />
              <div className="flex flex-col items-start justify-start w-[100%]">
                <div
                  className="common-pointer flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[71%]"
                  onClick={() => navigate("/dashboardone")}
                >
                  <Img
                    src="images/img_grid_20X20.svg"
                    className="h-[20px] w-[20px]"
                    alt="grid"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Dashboard
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-center justify-start mt-[33px] md:w-[100%] w-[66%]"
                  onClick={() => navigate("/customer")}
                >
                  <Img
                    src="images/img_user.svg"
                    className="h-[20px] w-[20px]"
                    alt="user"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
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
                      className="font-medium mt-[5px] text-bluegray_400 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Message
                    </Text>
                  </div>
                  <Text
                    className="bg-red_600 flex font-bold h-[24px] items-center justify-center rounded-[50%] text-center text-white_A700 w-[24px]"
                    variant="body1"
                  >
                    3
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-center justify-start mt-[32px] md:w-[100%] w-[39%]"
                  onClick={() => navigate("/filemanagementdefault")}
                >
                  <Img
                    src="images/img_folder.svg"
                    className="h-[20px] w-[20px]"
                    alt="folder"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    File
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-start justify-start mt-[33px] md:w-[100%] w-[63%]">
                  <Img
                    src="images/img_camera.svg"
                    className="h-[20px] w-[20px]"
                    alt="camera"
                  />
                  <Text
                    className="font-medium mt-[3px] text-bluegray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Calender
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-end justify-start mt-[34px] md:w-[100%] w-[46%]"
                  onClick={() => navigate("/shippinginfo")}
                >
                  <Img
                    src="images/img_trash.svg"
                    className="h-[20px] mb-[2px] w-[20px]"
                    alt="trash"
                  />
                  <Text
                    className="font-medium mt-[5px] text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Shop
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-center justify-start mt-[33px] md:w-[100%] w-[43%]"
                  onClick={() => navigate("/cartproductlist")}
                >
                  <Img
                    src="images/img_mail_20X20.svg"
                    className="h-[20px] w-[20px]"
                    alt="mail"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Cart
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[13px] items-end justify-start mt-[31px] md:w-[100%] w-[62%]"
                  onClick={() => navigate("/settings")}
                >
                  <div className="bg-white_A700 flex h-[26px] items-center justify-start p-[3px] w-[26px]">
                    <div className="bg-bluegray_400 h-[20px] rounded-[50%] w-[20px]"></div>
                  </div>
                  <Text
                    className="font-medium mb-[2px] mt-[7px] text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Settings
                  </Text>
                </div>
              </div>
            </div>
          </aside>
          <Line className="bg-indigo_51 md:h-[1px] h-[950px] mb-[74px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_51 flex font-poppins items-center justify-start p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col gap-[38px] items-start justify-start mb-[75px] mt-[14px] w-[100%]">
                <Text
                  className="text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Calendar
                </Text>
                <div className="flex md:flex-col flex-row font-inter gap-[20px] items-center justify-between w-[100%]">
                  <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[24%]">
                    <div className="flex flex-col items-start justify-start mb-[8px] w-[100%]">
                      <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                        <Text
                          className="font-normal leading-[22.00px] not-italic text-bluegray_400 text-left w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Click in the calendar to create event
                        </Text>
                        <Button
                          className="flex items-center justify-center text-center"
                          onClick={() => navigate("/createeventpopup")}
                          rightIcon={
                            <Img
                              src="images/img_plus.svg"
                              className="ml-[5px] text-center"
                              alt="plus"
                            />
                          }
                          shape="CircleBorder24"
                          size="5xl"
                          variant="FillDeeporange300"
                        >
                          <div className="common-pointer bg-transparent cursor-pointer font-semibold text-[14px] text-left text-white_A700">
                            Create new event
                          </div>
                        </Button>
                      </div>
                      <RadioGroup
                        className="mt-[32px] w-[62%]"
                        name="radiogroupprofileviews one"
                      >
                        <Radio
                          value="NewEvent"
                          className="font-medium mr-[30px] text-[16px] text-bluegray_800 text-left"
                          inputClassName="h-[8px] mr-[5px] w-[8px]"
                          checked={false}
                          name="radiogroupprofileviews one"
                          label="New Event"
                          variant="FillGreen700_1"
                        ></Radio>
                        <Radio
                          value="MyEventOnly"
                          className="font-medium mr-[2px] mt-[25px] text-[16px] text-bluegray_800 text-left"
                          inputClassName="h-[8px] mr-[5px] w-[8px]"
                          checked={false}
                          name="radiogroupprofileviews one"
                          label="My Event Only"
                          variant="FillIndigo401"
                        ></Radio>
                        <Radio
                          value="Meeting"
                          className="font-medium mr-[50px] mt-[20px] text-[16px] text-bluegray_800 text-left"
                          inputClassName="h-[8px] mr-[5px] w-[8px]"
                          checked={false}
                          name="radiogroupprofileviews one"
                          label="Meeting"
                          variant="FillAmber300"
                        ></Radio>
                        <Radio
                          value="Error"
                          className="font-medium mb-[5px] mr-[75px] mt-[20px] text-[16px] text-bluegray_800 text-left"
                          inputClassName="h-[8px] mr-[5px] w-[8px]"
                          checked={false}
                          name="radiogroupprofileviews one"
                          label="Error"
                          variant="FillRed600_1"
                        ></Radio>
                      </RadioGroup>
                      <Line className="bg-indigo_51 h-[1px] mt-[32px] w-[100%]" />
                      <Text
                        className="font-normal mt-[31px] not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Team members
                      </Text>
                      <List
                        className="flex-col grid items-center mt-[38px] w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <Text
                            className="font-bold text-bluegray_800 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            🚗
                          </Text>
                          <Text
                            className="font-medium ml-[8px] mt-[2px] text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @Avo
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[102px] ml-[36px] text-[12px] text-center text-indigo_401 w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillGray103"
                          >
                            Lead design
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-bold text-bluegray_800 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            ⚽
                          </Text>
                          <Text
                            className="font-medium mt-[2px] text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @Nhun
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[102px] text-[12px] text-center text-indigo_401 w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillGray103"
                          >
                            Product design
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <Text
                            className="font-bold text-bluegray_800 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            👑
                          </Text>
                          <Text
                            className="font-medium ml-[8px] mt-[2px] text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @Riri
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[102px] ml-[40px] text-[12px] text-center text-indigo_401 w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillGray103"
                          >
                            Product design
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <Text
                            className="font-bold text-bluegray_800 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            ✈
                          </Text>
                          <Text
                            className="font-medium ml-[8px] mt-[2px] text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @Juki
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[102px] ml-[34px] text-[12px] text-center text-indigo_401 w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillGray103"
                          >
                            Product design
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <Text
                            className="font-bold text-bluegray_800 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            💣
                          </Text>
                          <Text
                            className="font-medium ml-[8px] mt-[2px] text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @Nobi
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[102px] ml-[29px] text-[12px] text-center text-indigo_401 w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillGray103"
                          >
                            Product design
                          </Button>
                        </div>
                      </List>
                      <Button
                        className="flex items-center justify-center mt-[32px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_plus_24X24.svg"
                            className="mr-[8px] text-center"
                            alt="plus"
                          />
                        }
                        size="sm"
                      >
                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-deep_orange_300 text-left">
                          Add member
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[26px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[75%]">
                    <div className="flex flex-col gap-[30px] items-center justify-start md:w-[100%] w-[99%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex sm:flex-1 flex-row gap-[35px] items-end justify-between sm:w-[100%] w-[38%]">
                          <Text
                            className="mb-[2px] mt-[12px] text-bluegray_900 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            <span className="md:text-[22px] sm:text-[20px] text-bluegray_900 text-[24px] font-inter font-bold">
                              January{" "}
                            </span>
                            <span className="md:text-[22px] sm:text-[20px] text-indigo_401 text-[24px] font-inter font-bold">
                              2022
                            </span>
                          </Text>
                          <div className="flex flex-row gap-[16px] items-center justify-between w-[33%]">
                            <Button
                              className="flex h-[40px] items-center justify-center rounded-[50%] w-[40px]"
                              size="lgIcn"
                              variant="icbFillGray51"
                            >
                              <Img
                                src="images/img_arrowdown_bluegray_900.svg"
                                className="h-[20px]"
                                alt="arrowleft"
                              />
                            </Button>
                            <Button
                              className="flex h-[40px] items-center justify-center rounded-[50%] w-[40px]"
                              size="lgIcn"
                              variant="icbFillGray51"
                            >
                              <Img
                                src="images/img_arrowright_bluegray_900.svg"
                                className="h-[20px]"
                                alt="arrowright"
                              />
                            </Button>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-row gap-[8px] items-center justify-between sm:w-[100%] w-[31%]">
                          <Button
                            className="common-pointer cursor-pointer font-semibold text-[14px] text-bluegray_800 text-center w-[75px]"
                            onClick={() => navigate("/calenderdaynoevent")}
                            shape="CircleBorder20"
                            size="2xl"
                            variant="OutlineIndigo51_1"
                          >
                            Day
                          </Button>
                          <Button
                            className="common-pointer cursor-pointer font-semibold text-[14px] text-bluegray_800 text-center w-[75px]"
                            onClick={() => navigate("/calenderweek")}
                            shape="CircleBorder20"
                            size="2xl"
                            variant="OutlineIndigo51_1"
                          >
                            Week
                          </Button>
                          <Button
                            className="cursor-pointer font-semibold text-[14px] text-center text-white_A700 w-[75px]"
                            shape="CircleBorder20"
                            size="2xl"
                            variant="FillBluegray900"
                          >
                            Month
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start w-[100%]">
                          <Button
                            className="cursor-pointer font-semibold min-w-[114px] text-[16px] text-bluegray_800 text-center w-[auto]"
                            size="3xl"
                            variant="OutlineIndigo51_1"
                          >
                            Sun
                          </Button>
                          <Button
                            className="cursor-pointer font-semibold min-w-[114px] text-[16px] text-bluegray_800 text-center w-[auto]"
                            size="3xl"
                            variant="OutlineIndigo51_1"
                          >
                            Mon
                          </Button>
                          <Button
                            className="cursor-pointer font-semibold min-w-[114px] text-[16px] text-bluegray_800 text-center w-[auto]"
                            size="3xl"
                            variant="OutlineIndigo51_1"
                          >
                            Tue
                          </Button>
                          <Button
                            className="cursor-pointer font-semibold min-w-[114px] text-[16px] text-bluegray_800 text-center w-[auto]"
                            size="3xl"
                            variant="OutlineIndigo51_1"
                          >
                            Wed
                          </Button>
                          <Button
                            className="cursor-pointer font-semibold min-w-[114px] text-[16px] text-bluegray_800 text-center w-[auto]"
                            size="3xl"
                            variant="OutlineIndigo51_1"
                          >
                            Thu
                          </Button>
                          <Button
                            className="cursor-pointer font-semibold min-w-[115px] text-[16px] text-bluegray_800 text-center w-[auto]"
                            size="4xl"
                            variant="OutlineIndigo51_1"
                          >
                            Fri
                          </Button>
                          <Button
                            className="cursor-pointer font-semibold min-w-[115px] text-[16px] text-bluegray_800 text-center w-[auto]"
                            size="3xl"
                            variant="OutlineIndigo51_1"
                          >
                            Sa
                          </Button>
                        </div>
                        <List
                          className="flex-col gap-[0] md:gap-[20px] grid items-center w-[100%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start my-[0] w-[100%]">
                            <Text
                              className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[17px] pt-[16px] text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              26
                            </Text>
                            <Text
                              className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              27
                            </Text>
                            <Text
                              className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              28
                            </Text>
                            <Text
                              className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              29
                            </Text>
                            <Text
                              className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              30
                            </Text>
                            <Text
                              className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[17px] pt-[16px] text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              31
                            </Text>
                            <Text
                              className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[17px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              1
                            </Text>
                          </div>
                          <div className="flex flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start my-[0] w-[100%]">
                            <Text
                              className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              2
                            </Text>
                            <Text
                              className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              3
                            </Text>
                            <Text
                              className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              4
                            </Text>
                            <Text
                              className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              5
                            </Text>
                            <Text
                              className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              6
                            </Text>
                            <Text
                              className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              7
                            </Text>
                            <Text
                              className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              8
                            </Text>
                          </div>
                          <div className="flex flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-start my-[0] w-[100%]">
                            <Text
                              className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[17px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              9
                            </Text>
                            <Text
                              className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              10
                            </Text>
                            <Text
                              className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[17px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              11
                            </Text>
                            <div className="border-[1px] border-indigo_51 border-solid flex md:flex-1 flex-col gap-[20px] justify-start p-[4px] md:w-[100%] w-[15%]">
                              <Text
                                className="font-normal h-[18px] md:ml-[0] ml-[76px] mt-[12px] not-italic text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                12
                              </Text>
                              <div className="bg-indigo_401 flex items-end justify-start mb-[12px] pl-[4px] py-[4px] rounded-[4px] w-[100%]">
                                <div className="flex flex-row gap-[9px] items-start justify-end ml-[auto] pb-[6px] pr-[6px] md:w-[100%] w-[89%]">
                                  <Radio
                                    value="810am"
                                    className="font-medium text-[14px] text-left text-white_A700"
                                    inputClassName="h-[8px] mr-[5px] w-[8px]"
                                    checked={false}
                                    name="ProfileViewsOne"
                                    label="810 am"
                                    variant="FillWhiteA700"
                                  ></Radio>
                                  <Text
                                    className="font-semibold text-left text-white_A700 w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Mêt
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Text
                              className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              13
                            </Text>
                            <Text
                              className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              14
                            </Text>
                            <Text
                              className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              15
                            </Text>
                          </div>
                        </List>
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                          <Text
                            className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            16
                          </Text>
                          <Text
                            className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            17
                          </Text>
                          <Text
                            className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            18
                          </Text>
                          <Text
                            className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            19
                          </Text>
                          <List
                            className="md:flex-1 sm:flex-col flex-row grid grid-cols-2 md:w-[100%] w-[29%]"
                            orientation="horizontal"
                          >
                            <div className="border-[1px] border-indigo_51 border-solid flex flex-col gap-[20px] justify-start p-[4px] w-[100%]">
                              <Text
                                className="font-normal md:ml-[0] ml-[74px] mt-[12px] not-italic text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                20
                              </Text>
                              <div className="bg-deep_orange_300 flex items-end justify-start mb-[12px] pl-[4px] py-[4px] rounded-[4px] w-[100%]">
                                <div className="flex flex-row gap-[9px] items-start justify-end ml-[auto] pb-[6px] pr-[6px] md:w-[100%] w-[89%]">
                                  <Radio
                                    value="810am"
                                    className="font-medium text-[14px] text-left text-white_A700"
                                    inputClassName="h-[8px] mr-[5px] w-[8px]"
                                    checked={false}
                                    name="ProfileViewsOneOne"
                                    label="810 am"
                                    variant="FillWhiteA700"
                                  ></Radio>
                                  <Text
                                    className="font-semibold text-left text-white_A700 w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Mêt
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="border-[1px] border-indigo_51 border-solid flex flex-col gap-[20px] justify-start p-[4px] w-[100%]">
                              <Text
                                className="font-normal md:ml-[0] ml-[78px] mt-[12px] not-italic text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                21
                              </Text>
                              <div className="bg-red_600 flex items-end justify-start mb-[12px] pl-[4px] py-[4px] rounded-[4px] w-[100%]">
                                <div className="flex flex-row gap-[9px] items-start justify-end ml-[auto] pb-[6px] pr-[6px] md:w-[100%] w-[89%]">
                                  <Radio
                                    value="810am"
                                    className="font-medium text-[14px] text-left text-white_A700"
                                    inputClassName="h-[8px] mr-[5px] w-[8px]"
                                    checked={false}
                                    name="ProfileViewsOneTwo"
                                    label="810 am"
                                    variant="FillWhiteA700"
                                  ></Radio>
                                  <Text
                                    className="font-semibold text-left text-white_A700 w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Mêt
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </List>
                          <Text
                            className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            22
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                          <Text
                            className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[17px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            23
                          </Text>
                          <Text
                            className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            24
                          </Text>
                          <div className="border-[1px] border-indigo_51 border-solid flex md:flex-1 flex-col gap-[20px] justify-start p-[4px] md:w-[100%] w-[15%]">
                            <Text
                              className="font-normal md:ml-[0] ml-[74px] mt-[12px] not-italic text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              25
                            </Text>
                            <div className="bg-amber_300 flex items-end justify-start mb-[12px] pl-[4px] py-[4px] rounded-[4px] w-[100%]">
                              <div className="flex flex-row gap-[9px] items-start justify-end ml-[auto] pb-[6px] pr-[6px] md:w-[100%] w-[89%]">
                                <Radio
                                  value="810am"
                                  className="font-medium text-[14px] text-left text-white_A700"
                                  inputClassName="h-[8px] mr-[5px] w-[8px]"
                                  checked={false}
                                  name="ProfileViewsFifteen"
                                  label="810 am"
                                  variant="FillWhiteA700"
                                ></Radio>
                                <Text
                                  className="font-semibold text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Mêt
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            26
                          </Text>
                          <Text
                            className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            27
                          </Text>
                          <Text
                            className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            28
                          </Text>
                          <Text
                            className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            29
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start w-[100%]">
                          <Text
                            className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            30
                          </Text>
                          <Text
                            className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[17px] pt-[16px] text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            1
                          </Text>
                          <Text
                            className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            2
                          </Text>
                          <Text
                            className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            3
                          </Text>
                          <Text
                            className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            4
                          </Text>
                          <Text
                            className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            5
                          </Text>
                          <Text
                            className="border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] sm:pl-[20px] pl-[35px] pr-[16px] pt-[16px] text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            6
                          </Text>
                        </div>
                      </div>
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
};

export default CalenderMonthPage;

import React from "react";

import { Img, Text, Line, Button, List } from "components";
import Header from "components/Header";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

const DashboardTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[240px]">
            <div className="flex flex-col gap-[36px] items-center justify-start mb-[675px] ml-[31px] mr-[54px] mt-[36px] w-[65%]">
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
                    src="images/img_grid.svg"
                    className="h-[20px] w-[20px]"
                    alt="grid"
                  />
                  <Text
                    className="font-medium text-bluegray_800 text-left w-[auto]"
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
                <div
                  className="common-pointer flex flex-row gap-[16px] items-start justify-start mt-[33px] md:w-[100%] w-[63%]"
                  onClick={() => navigate("/calendermonth")}
                >
                  <Img
                    src="images/img_calendar.svg"
                    className="h-[20px] w-[20px]"
                    alt="calendar"
                  />
                  <Text
                    className="font-medium mt-[3px] text-bluegray_400 text-left w-[auto]"
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
          <Line className="bg-indigo_51 h-[1542px] md:h-[1px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_51 flex font-poppins items-center justify-start sm:pl-[20px] pl-[23px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[24px] items-center justify-start md:w-[100%] w-[74%]">
                  <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Overview
                    </Text>
                    <div className="flex flex-row font-inter gap-[12px] items-center justify-between w-[25%]">
                      <Button
                        className="flex h-[48px] items-center justify-center w-[48px]"
                        shape="icbRoundedBorder4"
                        size="xlIcn"
                        variant="icbFillWhiteA700"
                      >
                        <Img
                          src="images/img_download.svg"
                          className="h-[20px]"
                          alt="download"
                        />
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center"
                        rightIcon={
                          <Img
                            src="images/img_plus.svg"
                            className="ml-[35px] text-center"
                            alt="plus"
                          />
                        }
                        shape="RoundedBorder4"
                        size="5xl"
                        variant="FillDeeporange300"
                      >
                        <div className="bg-transparent cursor-pointer font-medium text-[14px] text-left text-white_A700">
                          Add task
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col font-inter gap-[20px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                      <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[44%]">
                        <div className="gap-[20px] grid grid-cols-2 justify-center min-h-[auto] w-[100%]">
                          <div className="bg-white_A700 flex flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                            <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] w-[98%]">
                              <Button
                                className="flex h-[48px] items-center justify-center w-[48px]"
                                shape="icbRoundedBorder4"
                                size="xlIcn"
                                variant="icbFillGray101"
                              >
                                <Img
                                  src="images/img_file_48X48.svg"
                                  className="h-[20px]"
                                  alt="file One"
                                />
                              </Button>
                              <div className="flex flex-col gap-[12px] items-center justify-end pr-[4px] py-[4px] w-[100%]">
                                <Text
                                  className="font-bold text-bluegray_800 text-left w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  50+
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Available Tasks
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                            <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] w-[98%]">
                              <Button
                                className="flex h-[48px] items-center justify-center w-[48px]"
                                shape="icbRoundedBorder4"
                                size="xlIcn"
                                variant="icbFillYellow50"
                              >
                                <Img
                                  src="images/img_mail_48X48.svg"
                                  className="h-[20px]"
                                  alt="mail One"
                                />
                              </Button>
                              <div className="flex flex-col gap-[12px] items-center justify-end pr-[4px] py-[4px] w-[100%]">
                                <Text
                                  className="font-bold text-bluegray_800 text-left w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  20
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Obsolete Tasks
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                            <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] w-[98%]">
                              <Button
                                className="flex h-[48px] items-center justify-center w-[48px]"
                                shape="icbRoundedBorder4"
                                size="xlIcn"
                                variant="icbFillGray102"
                              >
                                <Img
                                  src="images/img_folder_48X48.svg"
                                  className="h-[20px]"
                                  alt="folder One"
                                />
                              </Button>
                              <div className="flex flex-col gap-[13px] justify-end pr-[5px] pt-[5px] w-[100%]">
                                <Text
                                  className="font-bold md:ml-[0] ml-[36px] mr-[42px] text-bluegray_800 text-left w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  23
                                </Text>
                                <Text
                                  className="font-normal mr-[27px] not-italic text-bluegray_800 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  In Progress
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                            <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] w-[98%]">
                              <Button
                                className="flex h-[48px] items-center justify-center w-[48px]"
                                shape="icbRoundedBorder4"
                                size="xlIcn"
                                variant="icbFillGray52"
                              >
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="h-[20px]"
                                  alt="checkmark"
                                />
                              </Button>
                              <div className="flex flex-col gap-[12px] justify-end pr-[4px] py-[4px] w-[100%]">
                                <Text
                                  className="font-bold md:ml-[0] ml-[36px] mr-[43px] text-bluegray_800 text-left w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  35
                                </Text>
                                <Text
                                  className="font-normal mr-[27px] not-italic text-bluegray_800 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Done Tasks
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[24px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[55%]">
                        <div className="flex flex-col items-center justify-start mb-[8px] md:w-[100%] w-[97%]">
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <Text
                              className="font-bold text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Statistics
                            </Text>
                            <Button
                              className="flex items-center justify-center text-center"
                              leftIcon={
                                <Img
                                  src="images/img_calendar_20X20.svg"
                                  className="mr-[10px] text-center"
                                  alt="calendar"
                                />
                              }
                              shape="RoundedBorder4"
                              size="xl"
                              variant="OutlineBluegray200"
                            >
                              <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-bluegray_800 text-left">
                                13 Aug - 20 Aug
                              </div>
                            </Button>
                          </div>
                          <div className="flex items-center justify-start mt-[28px] w-[100%]">
                            <div className="flex flex-col gap-[20px] items-end justify-start w-[100%]">
                              <div className="flex flex-row gap-[31px] items-center justify-between mr-[3px] w-[100%]">
                                <div className="flex flex-col gap-[27px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    800
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    600
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    400
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    200
                                  </Text>
                                  <Text
                                    className="font-normal md:ml-[0] ml-[15px] not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    0
                                  </Text>
                                </div>
                                <Img
                                  src="images/img_frame_176X344.svg"
                                  className="h-[176px] w-[auto]"
                                  alt="Frame"
                                />
                              </div>
                              <div className="flex flex-row gap-[34px] items-start justify-start ml-[auto] pb-[2px] px-[2px] md:w-[100%] w-[90%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Mon
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Tue
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Wed
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Thu
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Fri
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Sat
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Sun
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[24px] items-start justify-center mt-[32px] md:w-[100%] w-[38%]">
                            <div className="flex flex-row gap-[8px] items-start justify-start w-[38%]">
                              <div className="bg-amber_300 h-[6px] mb-[2px] mt-[5px] rounded-[50%] w-[6px]"></div>
                              <Text
                                className="font-medium text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                Income
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[47%]">
                              <div className="bg-indigo_401 h-[6px] my-[5px] rounded-[50%] w-[6px]"></div>
                              <Text
                                className="font-medium text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                Expenses
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                      <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[44%]">
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="flex flex-row items-end justify-between w-[100%]">
                            <Text
                              className="font-bold my-[5px] text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Projects
                            </Text>
                            <Img
                              src="images/img_user_32X32.svg"
                              className="h-[32px] w-[32px]"
                              alt="user One"
                            />
                          </div>
                          <div className="h-[190px] md:h-[218px] mt-[28px] relative w-[190px]">
                            <div className="h-[190px] m-[auto] rounded-[32px] w-[190px]">
                              <CircularProgressbar
                                className="border-solid h-[190px] m-[auto] overflow-visible w-[190px]"
                                value={17}
                                strokeWidth={1}
                                styles={{
                                  trail: { strokeWidth: 1, stroke: "" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(-23deg)",
                                  },
                                }}
                              ></CircularProgressbar>
                              <CircularProgressbar
                                className="absolute border-solid h-[190px] inset-[0] justify-center m-[auto] overflow-visible w-[190px]"
                                value={24}
                                strokeWidth={1}
                                styles={{
                                  trail: { strokeWidth: 1, stroke: "" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(51deg)",
                                  },
                                }}
                              ></CircularProgressbar>
                            </div>
                            <div className="absolute bottom-[34%] flex flex-col gap-[9px] items-center justify-start right-[31%] w-[auto]">
                              <Text
                                className="text-bluegray_800 text-left w-[auto]"
                                as="h2"
                                variant="h2"
                              >
                                230+
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Projects
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[32px] items-center justify-center mt-[24px] md:w-[100%] w-[72%]">
                            <div className="flex flex-row gap-[12px] items-center justify-between w-[22%]">
                              <div className="bg-green_700 h-[6px] my-[17px] rounded-[50%] w-[6px]"></div>
                              <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-semibold text-bluegray_900 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  100
                                </Text>
                                <Text
                                  className="font-medium text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  High
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[12px] items-center justify-center pb-[2px] w-[20%]">
                              <div className="bg-indigo_401 h-[6px] mb-[14px] mt-[17px] rounded-[50%] w-[6px]"></div>
                              <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-semibold text-bluegray_900 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  30
                                </Text>
                                <Text
                                  className="font-medium text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Low
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[12px] items-center justify-between w-[30%]">
                              <div className="bg-amber_300 h-[6px] my-[17px] rounded-[50%] w-[6px]"></div>
                              <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-semibold text-bluegray_900 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  100
                                </Text>
                                <Text
                                  className="font-medium text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Medium
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[26px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[55%]">
                        <div className="flex flex-col gap-[32px] items-center justify-start mb-[6px] md:w-[100%] w-[98%]">
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <Text
                              className="font-bold text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Active tasks
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-between w-[60%]">
                              <Button
                                className="cursor-pointer font-semibold min-w-[75px] text-[14px] text-center text-white_A700 w-[auto]"
                                shape="RoundedBorder4"
                                size="2xl"
                                variant="FillBluegray900"
                              >
                                Day
                              </Button>
                              <Button
                                className="cursor-pointer font-semibold min-w-[75px] text-[14px] text-bluegray_800 text-center w-[auto]"
                                shape="RoundedBorder4"
                                size="2xl"
                                variant="OutlineIndigo51_1"
                              >
                                Week
                              </Button>
                              <Button
                                className="cursor-pointer font-semibold min-w-[75px] text-[14px] text-bluegray_800 text-center w-[auto]"
                                shape="RoundedBorder4"
                                size="2xl"
                                variant="OutlineIndigo51_1"
                              >
                                Month
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center justify-start w-[100%]">
                            <List
                              className="flex-col gap-[20px] grid items-center w-[100%]"
                              orientation="vertical"
                            >
                              <div className="flex flex-1 flex-row gap-[20px] items-center justify-start my-[0] sm:pr-[20px] pr-[260px] md:pr-[40px] w-[100%]">
                                <Img
                                  src="images/img_computer.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="computer"
                                />
                                <div className="flex flex-col gap-[8px] items-center justify-start w-[70%]">
                                  <Text
                                    className="font-medium text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    ACKERMAN_LHN
                                  </Text>
                                  <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                                    <Line className="bg-red_600 h-[16px] my-[4px] w-[4px]" />
                                    <Text
                                      className="font-medium text-bluegray_900 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      <span className="text-bluegray_900 text-[16px] font-inter">
                                        Changelog Revamp{" "}
                                      </span>
                                      <span className="text-red_600 text-[16px] font-inter">
                                        #ver 1.0
                                      </span>
                                      <span className="text-bluegray_900 text-[16px] font-inter">
                                        {" "}
                                        Homescreen{" "}
                                      </span>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                              <div className="flex flex-1 flex-row gap-[20px] items-center justify-start my-[0] sm:pr-[20px] pr-[299px] md:pr-[40px] w-[100%]">
                                <Img
                                  src="images/img_checkmark_24X24.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="checkmark One"
                                />
                                <div className="flex flex-col gap-[11px] items-center justify-start w-[58%]">
                                  <Text
                                    className="font-medium text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    JOHNSON
                                  </Text>
                                  <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                                    <Line className="bg-deep_orange_300 h-[16px] my-[4px] w-[4px]" />
                                    <Text
                                      className="font-medium text-bluegray_900 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Create user flow for Data Projects
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                              <div className="flex flex-1 sm:flex-col flex-row gap-[20px] items-center justify-between my-[0] w-[100%]">
                                <Img
                                  src="images/img_computer.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="computer One"
                                />
                                <div className="flex sm:flex-1 flex-col gap-[11px] items-start justify-start sm:w-[100%] w-[auto]">
                                  <Text
                                    className="font-medium text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    UTILLIA
                                  </Text>
                                  <div className="flex flex-row gap-[8px] items-center justify-start md:w-[100%] w-[97%]">
                                    <Line className="bg-indigo_401 h-[16px] my-[16px] w-[4px]" />
                                    <Text
                                      className="font-medium leading-[24.00px] text-bluegray_900 text-left sm:w-[100%] w-[97%]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Gather to discuss about new project
                                      deriving from Avocado
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </List>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex items-center justify-start p-[30px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row sm:gap-[40px] items-end justify-between w-[100%]">
                          <Text
                            className="font-bold mb-[4px] mt-[7px] text-bluegray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Posting Tasks
                          </Text>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="h-[32px] w-[32px]"
                            alt="user Two"
                          />
                        </div>
                        <Text
                          className="font-normal mt-[9px] not-italic text-bluegray_900 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          <a
                            href="javascript:"
                            className="text-bluegray_900 text-[14px] font-inter underline"
                          >
                            Crucial tasks
                          </a>
                          <span className="text-bluegray_900 text-[14px] font-inter">
                            /{" "}
                          </span>
                          <a
                            href="javascript:"
                            className="text-bluegray_900 text-[14px] font-inter underline"
                          >
                            Urgent tasks
                          </a>
                          <span className="text-bluegray_900 text-[14px] font-inter">
                            /{" "}
                          </span>
                          <a
                            href="javascript:"
                            className="text-bluegray_900 text-[14px] font-inter underline"
                          >
                            Normal tasks
                          </a>
                        </Text>
                        <div className="sm:h-[330px] h-[401px] md:h-[485px] mt-[29px] relative w-[100%]">
                          <div className="absolute bg-gray_51 flex md:flex-col flex-row md:gap-[20px] inset-x-[0] items-center justify-evenly mx-[auto] top-[0] w-[100%]">
                            <div className="flex h-[48px] justify-end relative md:w-[100%] w-[13%]">
                              <Text
                                className="font-semibold mb-[14px] ml-[auto] mr-[24px] mt-[auto] text-bluegray_900 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Time
                              </Text>
                              <div className="absolute bg-deep_orange_300 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[16px] w-[100%]">
                                <Text
                                  className="font-semibold text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Time
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-evenly md:w-[100%] w-[88%]">
                              <div className="flex items-center justify-start p-[16px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-medium text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Mon 10
                                </Text>
                              </div>
                              <div className="flex items-center justify-start p-[16px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-medium text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Tue 11
                                </Text>
                              </div>
                              <div className="flex items-center justify-start p-[16px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-medium text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Wed 12
                                </Text>
                              </div>
                              <div className="flex items-center justify-start p-[16px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-medium text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Thu 13
                                </Text>
                              </div>
                              <div className="flex items-center justify-start p-[16px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-medium text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Fri 14
                                </Text>
                              </div>
                              <div className="flex items-center justify-start p-[16px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-medium text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Sat 15
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-[7%] flex flex-col items-start justify-start left-[2%] w-[auto]">
                            <Text
                              className="font-normal md:ml-[0] ml-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              09 am
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[2px] mt-[34px] not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              10 am
                            </Text>
                            <Text
                              className="font-normal mt-[34px] not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              11 am
                            </Text>
                            <Text
                              className="font-normal mt-[34px] not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              12 pm
                            </Text>
                            <Text
                              className="font-normal mt-[32px] not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              01 pm
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[3px] mt-[32px] not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              02 pm
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[2px] mt-[32px] not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              03 pm
                            </Text>
                          </div>
                          <List
                            className="absolute bg-cover bg-no-repeat flex-col gap-[10px] grid h-[401px] inset-y-[0] my-[auto] p-[11px] right-[0] w-[89%]"
                            style={{
                              backgroundImage:
                                "url('images/img_group16043.svg')",
                            }}
                            orientation="vertical"
                          >
                            <div className="bg-white_A700 flex items-start justify-start ml-[40px] mr-[478px] my-[0] rounded-[4px] shadow-bs md:w-[100%] w-[25%]">
                              <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[72%]">
                                <Line className="bg-green_700 h-[171px] w-[4px]" />
                                <div className="flex flex-col items-start justify-start w-[84%]">
                                  <Button
                                    className="cursor-pointer font-poppins font-semibold min-w-[93px] text-[10px] text-center text-white_A700 w-[auto]"
                                    shape="RoundedBorder4"
                                    size="md"
                                    variant="FillDeeporange300"
                                  >
                                    #Data projects
                                  </Button>
                                  <Text
                                    className="font-inter font-semibold mt-[13px] text-bluegray_800 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Revamp UI, UX
                                  </Text>
                                  <div className="h-[24px] md:h-[85px] mt-[61px] relative rounded-[12px] w-[36%]">
                                    <Img
                                      src="images/img_robototoyfacefi.png"
                                      className="absolute h-[24px] inset-y-[0] left-[0] my-[auto] rounded-[50%] w-[24px]"
                                      alt="RobotoToyFaceFi"
                                    />
                                    <Img
                                      src="images/img_fidenza978toy.png"
                                      className="absolute h-[24px] inset-y-[0] my-[auto] right-[0] rounded-[50%] w-[24px]"
                                      alt="Fidenza978Toy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex items-start justify-start ml-[297px] mr-[289px] my-[0] rounded-[4px] shadow-bs md:w-[100%] w-[15%]">
                              <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[77%]">
                                <Line className="bg-indigo_401 h-[137px] rounded-[4px] w-[4px]" />
                                <div className="flex flex-col items-start justify-start w-[74%]">
                                  <Button
                                    className="cursor-pointer font-poppins font-semibold min-w-[49px] text-[10px] text-center text-white_A700 w-[auto]"
                                    shape="RoundedBorder4"
                                    size="md"
                                    variant="FillIndigo401"
                                  >
                                    #2011
                                  </Button>
                                  <Text
                                    className="font-inter font-semibold mt-[13px] text-bluegray_800 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Meeting
                                  </Text>
                                  <div className="h-[24px] md:h-[51px] mt-[27px] relative rounded-[12px] w-[65%]">
                                    <Img
                                      src="images/img_robototoyfacefi.png"
                                      className="absolute h-[24px] inset-y-[0] left-[0] my-[auto] rounded-[50%] w-[24px]"
                                      alt="RobotoToyFaceFi One"
                                    />
                                    <Img
                                      src="images/img_fidenza978toy.png"
                                      className="absolute h-[24px] inset-y-[0] my-[auto] right-[0] rounded-[50%] w-[24px]"
                                      alt="Fidenza978Toy One"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[16px] rounded-[4px] shadow-bs md:w-[100%] w-[26%]">
                  <div className="flex flex-col items-center justify-start mb-[27px] md:w-[100%] w-[89%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Calendar
                      </Text>
                      <Img
                        src="images/img_user_32X32.svg"
                        className="h-[32px] w-[32px]"
                        alt="user Three"
                      />
                    </div>
                    <div className="mt-[15px] w-[100%]"></div>
                    <div className="flex flex-row items-center justify-between mt-[53px] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Recent activities
                      </Text>
                      <Img
                        src="images/img_user_32X32.svg"
                        className="h-[32px] w-[32px]"
                        alt="user Four"
                      />
                    </div>
                    <List
                      className="flex-col font-inter gap-[18.54px] grid items-center mt-[37px] w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Feb 24, 2022
                        </Text>
                        <List
                          className="flex-col grid items-center pr-[126px] sm:pr-[20px] md:pr-[40px] w-[100%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-col gap-[11px] items-center justify-start w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <Line className="bg-red_600 h-[47px] w-[4px]" />
                              <Text
                                className="sm:flex-1 font-medium leading-[24.00px] text-bluegray_900 text-left sm:w-[100%] w-[89%]"
                                as="h5"
                                variant="h5"
                              >
                                Changelog Revamp Homescreen{" "}
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex flex-1 flex-col gap-[11px] items-center justify-start w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <Line className="bg-indigo_401 h-[47px] w-[4px]" />
                              <Text
                                className="sm:flex-1 font-medium leading-[24.00px] text-bluegray_900 text-left sm:w-[100%] w-[89%]"
                                as="h5"
                                variant="h5"
                              >
                                Create user flow for Data Projects
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex flex-1 flex-col gap-[11px] items-center justify-start w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <Line className="bg-green_700 h-[47px] w-[4px]" />
                              <Text
                                className="sm:flex-1 font-medium leading-[24.00px] text-bluegray_900 text-left sm:w-[100%] w-[89%]"
                                as="h5"
                                variant="h5"
                              >
                                Gather to discuss about new project deriving
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex flex-1 flex-col gap-[11px] items-center justify-start w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <Line className="bg-indigo_401 h-[47px] w-[4px]" />
                              <Text
                                className="sm:flex-1 font-medium leading-[24.00px] text-bluegray_900 text-left sm:w-[100%] w-[89%]"
                                as="h5"
                                variant="h5"
                              >
                                Urgent meeting with CEO
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                      <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                      <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Feb 24, 2022
                        </Text>
                        <List
                          className="flex-col grid items-center pr-[126px] sm:pr-[20px] md:pr-[40px] w-[100%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-col gap-[11px] items-center justify-start w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <Line className="bg-red_600 h-[24px] w-[4px]" />
                              <Text
                                className="font-medium text-bluegray_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Daily meeting with tem
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex flex-1 flex-col gap-[11px] items-center justify-start w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <Line className="bg-indigo_401 h-[47px] w-[4px]" />
                              <Text
                                className="sm:flex-1 font-medium leading-[24.00px] text-bluegray_900 text-left sm:w-[100%] w-[89%]"
                                as="h5"
                                variant="h5"
                              >
                                Revision design system
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex flex-1 flex-col gap-[11px] items-center justify-start w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <Line className="bg-green_700 h-[47px] w-[4px]" />
                              <Text
                                className="sm:flex-1 font-medium leading-[24.00px] text-bluegray_900 text-left sm:w-[100%] w-[89%]"
                                as="h5"
                                variant="h5"
                              >
                                Changelog authentication
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex flex-1 flex-col gap-[11px] items-center justify-start w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <Line className="bg-indigo_401 h-[22px] w-[4px]" />
                              <Text
                                className="font-medium text-bluegray_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Pitching with client
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex flex-1 flex-col gap-[11px] items-center justify-start w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <Line className="bg-red_600 h-[47px] w-[4px]" />
                              <Text
                                className="sm:flex-1 font-medium leading-[24.00px] text-bluegray_900 text-left sm:w-[100%] w-[89%]"
                                as="h5"
                                variant="h5"
                              >
                                Year end party and plan for 2022
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                    </List>
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

export default DashboardTwoPage;

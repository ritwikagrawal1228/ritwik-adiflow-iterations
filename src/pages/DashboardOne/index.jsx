import React from "react";

import { Img, Text, Line, Button, SelectBox, List } from "components";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";

const DashboardOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[241px]">
            <div className="bg-white_A700 flex flex-col gap-[36px] items-center justify-start p-[32px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_logo.svg"
                className="h-[28px] mt-[4px] w-[50%]"
                alt="Logo"
              />
              <div className="flex flex-col items-start justify-start mb-[643px] md:w-[100%] w-[88%]">
                <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[71%]">
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
          <Line className="bg-indigo_51 h-[1175px] md:h-[1px] hidden md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_51 flex font-poppins items-center justify-start p-[11px] w-[100%]">
              <div className="flex flex-col gap-[20px] items-center justify-start my-[13px] md:w-[100%] w-[99%]">
                <div className="flex flex-col items-center justify-start md:w-[100%] w-[99%]">
                  <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Overview
                    </Text>
                    <div className="flex flex-row font-inter gap-[12px] items-center justify-between w-[17%]">
                      <Button
                        className="flex items-center justify-center w-[auto]"
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
                      <SelectBox
                        className="font-medium text-[14px] text-bluegray_800 text-left w-[auto]"
                        placeholderClassName="text-bluegray_800"
                        name="dropdown"
                        placeholder="Last week"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_bluegray_900.svg"
                            className="h-[20px] mr-[16px] w-[20px]"
                            alt="arrow_down"
                          />
                        }
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillWhiteA700"
                      ></SelectBox>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row font-inter gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[24px] w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="bg-white_A700 flex flex-1 items-center justify-start p-[24px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                      <div className="flex flex-row items-center justify-between pb-[4px] md:w-[100%] w-[87%]">
                        <Img
                          src="images/img_group.svg"
                          className="h-[26px] w-[auto]"
                          alt="Group One"
                        />
                        <div className="flex items-center justify-start w-[auto]">
                          <div className="flex flex-col items-start justify-start w-[100%]">
                            <div className="flex relative w-[100%]">
                              <Text
                                className="my-[auto] text-bluegray_800 text-left w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                $10.000
                              </Text>
                              <div className="bg-green_700_63 flex flex-row items-start justify-center ml-[-1px] mt-[7px] pr-[3px] rounded-[4px] w-[32%] z-[1]">
                                <Img
                                  src="images/img_arrowup.svg"
                                  className="h-[16px] mt-[3px] w-[16px]"
                                  alt="arrowup"
                                />
                                <Text
                                  className="font-semibold text-green_700 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  0.2%
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[6px] items-center justify-start mt-[3px] md:w-[100%] w-[59%]">
                              <div className="bg-indigo_400 h-[6px] my-[3px] rounded-[50%] w-[6px]"></div>
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Total income
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 items-center justify-start p-[24px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                      <div className="flex flex-row items-center justify-between md:w-[100%] w-[87%]">
                        <Img
                          src="images/img_group_26X70.svg"
                          className="h-[26px] w-[auto]"
                          alt="Group Two"
                        />
                        <div className="flex flex-row items-start justify-start w-[auto]">
                          <div className="flex items-center justify-start w-[70%]">
                            <div className="flex flex-col gap-[5px] items-start justify-start w-[100%]">
                              <Text
                                className="text-bluegray_800 text-left w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                $10.000
                              </Text>
                              <div className="flex flex-row items-start justify-evenly md:w-[100%] w-[96%]">
                                <div className="bg-indigo_400 h-[6px] mb-[8px] mt-[2px] rounded-[50%] w-[6px]"></div>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Total Expenses
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-red_600_63 flex flex-row items-start justify-center mb-[34px] mt-[7px] pr-[3px] rounded-[4px] w-[32%]">
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-[16px] mt-[3px] w-[16px]"
                              alt="arrowdown"
                            />
                            <Text
                              className="font-semibold text-left text-red_600 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              0.2%
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 items-center justify-start p-[24px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                      <div className="flex flex-row items-center justify-between pb-[4px] md:w-[100%] w-[87%]">
                        <Img
                          src="images/img_group.svg"
                          className="h-[26px] w-[auto]"
                          alt="Group Three"
                        />
                        <div className="flex items-center justify-start w-[auto]">
                          <div className="flex flex-col items-start justify-start w-[100%]">
                            <div className="flex relative w-[100%]">
                              <Text
                                className="my-[auto] text-bluegray_800 text-left w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                $10.000
                              </Text>
                              <div className="bg-green_700_63 flex flex-row items-start justify-center ml-[-1px] mt-[7px] pr-[3px] rounded-[4px] w-[32%] z-[1]">
                                <Img
                                  src="images/img_arrowup.svg"
                                  className="h-[16px] mt-[3px] w-[16px]"
                                  alt="arrowup One"
                                />
                                <Text
                                  className="font-semibold text-green_700 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  0.2%
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[6px] items-center justify-start mt-[4px] md:w-[100%] w-[64%]">
                              <div className="bg-indigo_400 h-[6px] my-[4px] rounded-[50%] w-[6px]"></div>
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Total Revenue
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="flex md:flex-col flex-row font-inter gap-[19px] items-center justify-between mt-[20px] w-[100%]">
                    <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[67%]">
                      <div className="bg-white_A700 flex flex-col gap-[31px] items-center justify-start p-[26px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                        <div className="flex flex-row sm:gap-[40px] items-center justify-between md:w-[100%] w-[99%]">
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
                        <div className="flex md:flex-col flex-row md:gap-[44px] items-start justify-between mb-[14px] md:w-[100%] w-[99%]">
                          <div className="flex flex-col gap-[19px] items-start justify-start md:w-[100%] w-[11%]">
                            <div className="flex flex-row gap-[8px] items-start justify-start md:w-[100%] w-[82%]">
                              <div className="bg-indigo_401 h-[6px] mb-[2px] mt-[5px] rounded-[50%] w-[6px]"></div>
                              <Text
                                className="font-medium text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                Income
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <div className="bg-amber_300 h-[6px] my-[5px] rounded-[50%] w-[6px]"></div>
                              <Text
                                className="font-medium text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                Expenses
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-center justify-start md:w-[100%] w-[84%]">
                            <div className="flex flex-col gap-[15px] items-end justify-start w-[100%]">
                              <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-between w-[100%]">
                                <div className="flex sm:flex-1 flex-col items-end justify-start sm:w-[100%] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    1,400
                                  </Text>
                                  <Text
                                    className="font-normal mt-[16px] not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    1,200
                                  </Text>
                                  <Text
                                    className="font-normal mt-[16px] not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    1,000
                                  </Text>
                                  <Text
                                    className="font-normal mt-[16px] not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    800
                                  </Text>
                                  <Text
                                    className="font-normal mt-[18px] not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    600
                                  </Text>
                                  <Text
                                    className="font-normal mt-[18px] not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    400
                                  </Text>
                                  <Text
                                    className="font-normal mt-[18px] not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    200
                                  </Text>
                                  <Text
                                    className="font-normal mt-[18px] not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    0
                                  </Text>
                                </div>
                                <div
                                  className="bg-cover bg-no-repeat font-poppins md:h-[206px] h-[227px] pt-[17px] px-[17px] relative sm:w-[100%] w-[91%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group16084.svg')",
                                  }}
                                >
                                  <Img
                                    src="images/img_frame.svg"
                                    className="absolute bottom-[0] h-[206px] inset-x-[0] mx-[auto] w-[86%]"
                                    alt="Frame"
                                  />
                                  <div
                                    className="absolute bg-cover bg-no-repeat md:h-[41px] h-[84px] left-[7%] p-[13px] shadow-bs2 top-[19%] w-[30%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group_white_A700.svg')",
                                    }}
                                  >
                                    <div className="absolute flex flex-row gap-[8px] items-start justify-center left-[15%] top-[21%] w-[32%]">
                                      <div className="bg-indigo_401 h-[6px] mb-[5px] mt-[2px] rounded-[50%] w-[6px]"></div>
                                      <Text
                                        className="font-semibold text-bluegray_900 text-left w-[auto]"
                                        variant="body1"
                                      >
                                        200.0
                                      </Text>
                                    </div>
                                    <div className="absolute flex items-center justify-start left-[15%] top-[23%] w-[75%]">
                                      <div className="flex flex-col gap-[17px] justify-start w-[100%]">
                                        <div className="flex flex-row gap-[8px] items-start justify-end ml-[auto] md:w-[100%] w-[43%]">
                                          <div className="bg-amber_300 h-[6px] mb-[4px] rounded-[50%] w-[6px]"></div>
                                          <Text
                                            className="font-semibold text-bluegray_900 text-left w-[auto]"
                                            variant="body1"
                                          >
                                            2,000
                                          </Text>
                                        </div>
                                        <Text
                                          className="mr-[19px] text-bluegray_400 text-left w-[auto]"
                                          variant="body2"
                                        >
                                          21 September, 2021
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-end ml-[auto] pb-[2px] px-[2px] md:w-[100%] w-[91%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Mon
                                </Text>
                                <Text
                                  className="font-normal sm:ml-[0] ml-[46px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Tue
                                </Text>
                                <Text
                                  className="font-normal sm:ml-[0] ml-[52px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Wed
                                </Text>
                                <Text
                                  className="font-normal sm:ml-[0] ml-[46px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Thu
                                </Text>
                                <Text
                                  className="font-normal sm:ml-[0] ml-[55px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Fri
                                </Text>
                                <Text
                                  className="font-normal sm:ml-[0] ml-[55px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Sat
                                </Text>
                                <Text
                                  className="font-normal sm:ml-[0] ml-[51px] mr-[33px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Sun
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:h-[200px] h-[410px] relative md:w-[100%] w-[33%]">
                      <div className="absolute md:h-[100px] h-[116px] inset-x-[0] mx-[auto] top-[23%] w-[100%]">
                        <Img
                          src="images/img_ellipse.svg"
                          className="absolute h-[46px] right-[0] top-[0] w-[7%]"
                          alt="Ellipse One"
                        />
                        <Img
                          src="images/img_vector.svg"
                          className="absolute bottom-[0] h-[100px] inset-x-[0] mx-[auto] w-[100%]"
                          alt="Vector One"
                        />
                      </div>
                      <div className="absolute bg-deep_orange_300 md:h-[200px] h-[211px] inset-x-[0] mx-[auto] p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] shadow-bs top-[0] w-[100%]">
                        <Img
                          src="images/img_messagenotific.png"
                          className="absolute h-[200px] inset-[0] justify-center m-[auto] object-cover w-[200px]"
                          alt="messagenotific"
                        />
                      </div>
                      <div className="absolute bg-white_A700 bottom-[0] flex inset-x-[0] items-start justify-end mx-[auto] p-[24px] sm:px-[20px] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[0] shadow-bs w-[100%]">
                        <div className="flex flex-col gap-[20px] items-start justify-start md:ml-[0] ml-[7px] mt-[5px] md:w-[100%] w-[76%]">
                          <div className="flex flex-col gap-[11px] items-start justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold text-bluegray_800 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Subcrible us
                            </Text>
                            <Text
                              className="font-normal leading-[24.00px] not-italic text-bluegray_400 text-left w-[100%]"
                              as="h5"
                              variant="h5"
                            >
                              To make friend with others in our community
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                            <Button
                              className="common-pointer cursor-pointer font-semibold min-w-[149px] text-[14px] text-center text-white_A700 w-[auto]"
                              onClick={() => navigate("/dashboardsubcrible")}
                              shape="CircleBorder24"
                              size="4xl"
                              variant="FillDeeporange300"
                            >
                              Subcrible now
                            </Button>
                            <Button
                              className="cursor-pointer font-semibold min-w-[78px] text-[14px] text-bluegray_800 text-center w-[auto]"
                              shape="CircleBorder24"
                              size="4xl"
                              variant="FillGray51"
                            >
                              skip
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row font-inter md:gap-[51px] items-center justify-between w-[100%]">
                  <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[64%]">
                    <div className="flex flex-col gap-[16px] justify-start w-[100%]">
                      <div className="flex flex-col gap-[28px] items-start justify-start md:ml-[0] ml-[44px] md:w-[100%] w-[95%]">
                        <div className="flex flex-row sm:gap-[40px] items-end justify-between w-[100%]">
                          <Text
                            className="font-bold mb-[4px] mt-[7px] text-bluegray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            My card
                          </Text>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="h-[32px] w-[32px]"
                            alt="user One"
                          />
                        </div>
                        <SelectBox
                          className="font-medium text-[14px] text-bluegray_800 text-left sm:w-[100%] w-[44%]"
                          placeholderClassName="text-bluegray_800"
                          name="language"
                          placeholder="1234 **** 4567 8901 "
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_bluegray_900.svg"
                              className="h-[20px] mr-[16px] w-[20px]"
                              alt="arrow_down"
                            />
                          }
                          shape="RoundedBorder4"
                          size="sm"
                          variant="OutlineIndigo51"
                        ></SelectBox>
                      </div>
                      <div className="flex mr-[12px] relative md:w-[100%] w-[99%]">
                        <div className="md:h-[161px] sm:h-[183px] h-[248px] my-[auto] sm:w-[100%] w-[60%]">
                          <Button
                            className="absolute bottom-[0] cursor-pointer font-semibold left-[10%] min-w-[301px] text-[14px] text-center text-deep_orange_300 w-[auto]"
                            shape="RoundedBorder4"
                            size="4xl"
                            variant="FillWhiteA700"
                          >
                            Add new card
                          </Button>
                          <div className="absolute md:h-[161px] sm:h-[183px] h-[240px] inset-[0] justify-center m-[auto] w-[100%]">
                            <div className="absolute bg-indigo_401 flex flex-col gap-[108px] md:gap-[40px] justify-start left-[10%] p-[20px] rounded-[4px] top-[0] w-[70%]">
                              <Img
                                src="images/img_group_12X40.svg"
                                className="h-[12px] md:ml-[0] ml-[221px] w-[16%]"
                                alt="Group Four"
                              />
                              <Text
                                className="font-medium mb-[7px] md:ml-[0] ml-[2px] mr-[97px] text-left text-white_A700 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                1234 **** 4567 8901{" "}
                              </Text>
                            </div>
                            <Img
                              src="images/img_group_140X140.png"
                              className="absolute bottom-[0] h-[140px] left-[0] object-cover w-[140px]"
                              alt="Group Five"
                            />
                            <Img
                              src="images/img_group_161X165.png"
                              className="absolute h-[161px] object-cover right-[0] top-[3%] w-[39%]"
                              alt="Group Six"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[16px] items-center justify-start ml-[-39.35px] w-[47%] z-[1]">
                          <div className="flex flex-row gap-[91px] items-center justify-start pt-[2px] px-[2px] w-[100%]">
                            <Text
                              className="font-normal mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Card Type
                            </Text>
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Visa
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[79px] items-center justify-start p-[3px] w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Card holder
                            </Text>
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Utillia
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between p-[2px] w-[100%]">
                            <Text
                              className="font-normal ml-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Card number
                            </Text>
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              1234 **** 4567 8901{" "}
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[114px] items-start justify-start w-[100%]">
                            <Text
                              className="font-normal mt-[4px] not-italic text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Expired
                            </Text>
                            <Text
                              className="font-medium mt-[3px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              21/09
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <Text
                              className="font-normal my-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              CVV
                            </Text>
                            <Text
                              className="font-medium mb-[4px] mr-[134px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              ***
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[66px] items-center justify-start pt-[4px] px-[4px] w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Total balance
                            </Text>
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              $0.0
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 items-end justify-end pt-[16px] px-[16px] rounded-[4px] shadow-bs md:w-[100%] w-[32%]">
                    <div className="flex flex-col gap-[37px] items-start justify-start mt-[21px] md:w-[100%] w-[96%]">
                      <Text
                        className="font-bold text-bluegray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Transactions
                      </Text>
                      <div className="flex flex-row gap-[32px] items-start justify-between w-[100%]">
                        <List
                          className="flex-col grid w-[89%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                            <div className="flex flex-row gap-[16px] items-center justify-between py-[2px] w-[61%]">
                              <Img
                                src="images/img_robototoyfacefi.png"
                                className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                alt="RobotoToyFaceFi"
                              />
                              <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-semibold text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Ackerman
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="font-medium text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              -$12.0
                            </Text>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                            <div className="flex flex-row gap-[16px] items-center justify-between py-[2px] w-[61%]">
                              <Img
                                src="images/img_punktoyface1.png"
                                className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                alt="PunkToyFaceOne"
                              />
                              <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-semibold text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Blanker{" "}
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="font-medium text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              +$100.0
                            </Text>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                            <div className="flex flex-row gap-[16px] items-center justify-between py-[2px] w-[61%]">
                              <Img
                                src="images/img_vangoghbyamrit.png"
                                className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                alt="VanGoghByAmrit"
                              />
                              <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-semibold text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Lee Ri
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="font-medium text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              -$12.0
                            </Text>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                            <div className="flex flex-row gap-[16px] items-center justify-between py-[2px] w-[61%]">
                              <Img
                                src="images/img_rarepepenakam.png"
                                className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                alt="RarePepeNakam"
                              />
                              <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-semibold text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Jackson
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="font-medium text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              -$10.0
                            </Text>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex items-center justify-start mr-[114px] my-[0] md:w-[100%] w-[61%]">
                            <div className="flex flex-row gap-[16px] items-start justify-between pt-[2px] w-[100%]">
                              <Img
                                src="images/img_tintin22.png"
                                className="h-[13px] md:h-[auto] object-cover rounded-[23px] w-[auto]"
                                alt="TinTinTwentyTwo"
                              />
                              <div className="flex flex-col gap-[13px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-semibold text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Yomaha
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </div>
                            </div>
                          </div>
                        </List>
                        <div className="bg-gray_51 flex items-center justify-start mb-[32px] pb-[177px] rounded-[2px] w-[2%]">
                          <Line className="bg-deep_orange_300 h-[134px] w-[4px]" />
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

export default DashboardOnePage;

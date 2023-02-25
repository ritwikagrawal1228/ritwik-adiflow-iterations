import React from "react";

import { Img, Text, Line, Button, List } from "components";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[241px]">
            <div className="bg-white_A700 flex flex-col gap-[36px] items-center justify-start p-[32px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_logo.svg"
                className="h-[28px] mt-[4px] w-[50%]"
                alt="Logo"
              />
              <div className="flex flex-col items-start justify-start mb-[506px] md:w-[100%] w-[88%]">
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
          <Line className="bg-indigo_51 h-[1038px] md:h-[1px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_51 flex font-poppins items-center justify-end p-[10px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[21px] items-end justify-between mt-[27px] md:w-[100%] w-[98%]">
                <div className="flex flex-col items-start justify-start md:w-[100%] w-[33%]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Profile
                  </Text>
                  <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mt-[37px] pb-[36px] rounded-[4px] shadow-bs w-[100%]">
                    <div className="flex flex-col relative w-[100%]">
                      <Img
                        src="images/img_imglibimg1.png"
                        className="h-[136px] mx-[auto] object-cover w-[100%]"
                        alt="ImgLibIMGOne"
                      />
                      <Img
                        src="images/img_sherlocktoyfa.png"
                        className="h-[120px] mt-[-60px] mx-[auto] object-cover rounded-[24px] w-[120px] z-[1]"
                        alt="SherlockToyFa One"
                      />
                    </div>
                    <div className="flex flex-col gap-[24px] items-center justify-start mt-[24px] md:w-[100%] w-[72%]">
                      <div className="flex flex-col gap-[13px] items-center justify-start pt-[4px] px-[4px] w-[100%]">
                        <Text
                          className="text-bluegray_900 text-left w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Sam Brown
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          sambrown@gmail.com
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-center md:w-[100%] w-[50%]">
                        <Img
                          src="images/img_globe.svg"
                          className="h-[20px] w-[20px]"
                          alt="globe"
                        />
                        <Text
                          className="font-medium ml-[5px] mr-[2px] text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          sambrown.com
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-bold min-w-[147px] mt-[40px] text-[14px] text-center text-white_A700 w-[auto]"
                      shape="CircleBorder24"
                      size="4xl"
                      variant="FillRed600"
                    >
                      Logout
                    </Button>
                    <Img
                      src="images/img_socialicons.svg"
                      className="h-[20px] mt-[24px] w-[30%]"
                      alt="socialicons"
                    />
                    <Line className="bg-indigo_51 h-[1px] mt-[32px] w-[83%]" />
                    <Text
                      className="font-normal mt-[34px] not-italic text-bluegray_400 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Member since 2021
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex font-inter items-center justify-end mt-[21px] p-[24px] sm:px-[20px] rounded-[4px] shadow-bs4 w-[100%]">
                    <div className="flex flex-col gap-[28px] items-center justify-start mt-[8px] md:w-[100%] w-[96%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-bold text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Personal info.
                        </Text>
                        <Img
                          src="images/img_user_32X32.svg"
                          className="h-[32px] w-[32px]"
                          alt="user One"
                        />
                      </div>
                      <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between pl-[3px] py-[3px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Full name
                          </Text>
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Utillia
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-normal my-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Mobile
                          </Text>
                          <Text
                            className="font-medium my-[2px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            701-565-0439
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[63px] items-center justify-start pl-[2px] pt-[2px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            E-mail
                          </Text>
                          <Text
                            className="font-medium mt-[3px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            ackermanlhn@gmail.com
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Location
                          </Text>
                          <Text
                            className="font-medium mt-[4px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Hanoi, Vietnam
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-inter gap-[21px] items-center justify-start md:mt-[0] mt-[57px] md:w-[100%] w-[67%]">
                  <List
                    className="sm:flex-col flex-row gap-[18px] grid md:grid-cols-1 grid-cols-2 justify-center w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="bg-white_A700 flex flex-1 items-center justify-start sm:ml-[0] p-[32px] sm:px-[20px] rounded-[4px] shadow-bs4 w-[100%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[20px] items-center justify-between w-[62%]">
                          <Button
                            className="flex h-[48px] items-center justify-center my-[5px] w-[48px]"
                            shape="icbRoundedBorder4"
                            size="xlIcn"
                            variant="icbFillGray51"
                          >
                            <Img
                              src="images/img_file_2.svg"
                              className="h-[20px]"
                              alt="file One"
                            />
                          </Button>
                          <div className="flex flex-col gap-[14px] items-start justify-end pr-[4px] py-[4px] w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Completed tasks
                            </Text>
                            <Text
                              className="font-bold text-bluegray_800 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              125
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_user_32X32.svg"
                          className="h-[32px] w-[32px]"
                          alt="user Two"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 items-center justify-start sm:ml-[0] p-[32px] sm:px-[20px] rounded-[4px] shadow-bs4 w-[100%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[20px] items-center justify-between w-[62%]">
                          <Button
                            className="flex h-[48px] items-center justify-center my-[5px] w-[48px]"
                            shape="icbRoundedBorder4"
                            size="xlIcn"
                            variant="icbFillGray51"
                          >
                            <Img
                              src="images/img_file_2.svg"
                              className="h-[20px]"
                              alt="file Two"
                            />
                          </Button>
                          <div className="flex flex-col gap-[18px] items-start justify-start pr-[4px] pt-[4px] w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Total revenue
                            </Text>
                            <Text
                              className="font-bold text-bluegray_800 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              $10,000
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_user_32X32.svg"
                          className="h-[32px] w-[32px]"
                          alt="user Three"
                        />
                      </div>
                    </div>
                  </List>
                  <div className="bg-white_A700 flex items-center justify-end p-[29px] sm:px-[20px] rounded-[4px] shadow-bs4 w-[100%]">
                    <div className="flex flex-col gap-[31px] items-center justify-start mt-[3px] w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[20px] items-end justify-start w-[100%]">
                        <Text
                          className="font-bold md:mt-[0] my-[5px] text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          My projects
                        </Text>
                        <Img
                          src="images/img_search_bluegray_400.svg"
                          className="h-[32px] md:ml-[0] ml-[505px] w-[32px]"
                          alt="search"
                        />
                        <Img
                          src="images/img_user_32X32.svg"
                          className="h-[32px] md:ml-[0] ml-[24px] w-[32px]"
                          alt="user Four"
                        />
                      </div>
                      <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start pt-[4px] px-[4px] w-[100%]">
                          <Text
                            className="font-normal sm:ml-[0] ml-[15px] not-italic text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            No.
                          </Text>
                          <Text
                            className="font-normal sm:ml-[0] ml-[69px] not-italic text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Projects
                          </Text>
                          <Text
                            className="font-normal sm:ml-[0] ml-[131px] not-italic text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Start
                          </Text>
                          <Text
                            className="font-normal sm:ml-[0] ml-[98px] not-italic text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Deadline
                          </Text>
                          <Text
                            className="font-normal sm:ml-[0] ml-[76px] not-italic text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Budget
                          </Text>
                        </div>
                        <List
                          className="flex-col gap-[0] md:gap-[20px] grid items-center w-[100%]"
                          orientation="vertical"
                        >
                          <div className="bg-gray_51 flex flex-1 items-center justify-start p-[20px] w-[100%]">
                            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start pr-[4px] pt-[4px] w-[100%]">
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                1
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[88px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Branding guideline
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[50px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[43px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                10 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[42px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $1,000
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 items-center justify-start p-[20px] w-[100%]">
                            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start pr-[4px] pt-[4px] w-[100%]">
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[85px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Mobile design
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[86px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[43px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                10 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[42px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $1,200
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray_51 flex flex-1 items-center justify-start p-[20px] w-[100%]">
                            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start pr-[4px] pt-[4px] w-[100%]">
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                3
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[84px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Landing pages
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[80px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[43px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                10 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[42px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $1,800
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 items-center justify-start p-[20px] w-[100%]">
                            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start pr-[4px] pt-[4px] w-[100%]">
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[85px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Mobile design
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[86px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[43px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                10 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[42px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $1,200
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray_51 flex flex-1 items-center justify-start p-[20px] w-[100%]">
                            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start pr-[4px] pt-[4px] w-[100%]">
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                3
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[84px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Landing pages
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[80px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[43px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                10 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[42px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $1,800
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 items-center justify-start p-[20px] w-[100%]">
                            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start pr-[4px] pt-[4px] w-[100%]">
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[85px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Mobile design
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[86px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[43px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                10 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[42px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $1,200
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray_51 flex flex-1 items-center justify-start p-[20px] w-[100%]">
                            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start pr-[4px] pt-[4px] w-[100%]">
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                3
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[84px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Landing pages
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[80px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[43px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                10 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[42px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $1,800
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 items-center justify-start p-[20px] w-[100%]">
                            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start pr-[4px] pt-[4px] w-[100%]">
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[85px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Mobile design
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[86px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[43px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                10 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[0] ml-[42px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $1,200
                              </Text>
                            </div>
                          </div>
                        </List>
                        <div className="h-[24px] relative w-[24px]">
                          <Img
                            src="images/img_minimize.svg"
                            className="absolute h-[24px] inset-[0] justify-center m-[auto] w-[24px]"
                            alt="minimize"
                          />
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

export default ProfilePage;

import React from "react";

import { Img, Text, Line, List, Button } from "components";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";

const EKYCIntroductionStepOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[241px]">
            <div className="bg-white_A700 flex flex-col gap-[36px] items-center justify-start p-[32px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_logo.svg"
                className="h-[28px] mt-[4px] w-[50%]"
                alt="Logo"
              />
              <div className="flex flex-col items-start justify-start mb-[492px] md:w-[100%] w-[88%]">
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
                    <div className="bg-deep_orange_300 h-[20px] rounded-[50%] w-[20px]"></div>
                  </div>
                  <Text
                    className="font-medium mb-[2px] mt-[7px] text-bluegray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Settings
                  </Text>
                </div>
              </div>
            </div>
          </aside>
          <Line className="bg-indigo_51 md:h-[1px] h-[750px] mb-[274px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_51 flex items-center justify-start p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col gap-[35px] items-center justify-start mb-[75px] mt-[15px] w-[100%]">
                <div className="flex flex-row md:gap-[40px] items-start justify-between w-[100%]">
                  <Text
                    className="font-poppins mb-[2px] text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    eKYC
                  </Text>
                  <Text
                    className="font-inter font-normal mt-[4px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-bluegray_400 text-[16px]">
                      Setting/
                    </span>
                    <span className="text-bluegray_800 text-[16px]"> eKYC</span>
                  </Text>
                </div>
                <div className="bg-white_A700 flex flex-col gap-[58px] items-center justify-start p-[80px] sm:px-[20px] md:px-[40px] rounded-[4px] shadow-bs w-[100%]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Introduction
                  </Text>
                  <div className="flex items-center justify-start mb-[60px] md:w-[100%] w-[46%]">
                    <List
                      className="flex-col gap-[20px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div
                        className="common-pointer bg-white_A700 hover:border-[1px] hover:border-indigo_51 hover:border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between hover:my-[0] my-[0] p-[25px] sm:px-[20px] rounded-[4px] hover:shadow-bs5 shadow-bs5 w-[100%]"
                        onClick={() => navigate("/ekycscanidcard")}
                      >
                        <div className="flex flex-row gap-[20px] items-center justify-center ml-[7px] rounded-[4px] w-[auto]">
                          <Img
                            src="images/img_ticket.svg"
                            className="h-[28px] w-[28px]"
                            alt="ticket"
                          />
                          <div className="flex flex-col gap-[12px] items-start justify-start pr-[3px] py-[3px] w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Bước 1:
                            </Text>
                            <Text
                              className="font-bold text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Scan ID Card
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_arrowright_bluegray_900_24X24.svg"
                          className="h-[24px] mr-[7px] w-[24px]"
                          alt="arrowright"
                        />
                      </div>
                      <div className="bg-white_A700 hover:border-[1px] border-[1px] hover:border-indigo_51 border-indigo_51 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between hover:my-[0] my-[0] p-[25px] sm:px-[20px] rounded-[4px] hover:shadow-bs5 shadow-bs5 w-[100%]">
                        <div className="flex flex-row gap-[20px] items-center justify-center ml-[7px] rounded-[4px] w-[auto]">
                          <Img
                            src="images/img_settings.svg"
                            className="h-[28px] w-[28px]"
                            alt="settings One"
                          />
                          <div className="flex flex-col gap-[12px] items-start justify-start pr-[3px] py-[3px] w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Bước 2:
                            </Text>
                            <Text
                              className="font-bold text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Scan Face
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_lock_24X24.svg"
                          className="h-[24px] mr-[7px] w-[24px]"
                          alt="lock"
                        />
                      </div>
                      <div className="bg-white_A700 hover:border-[1px] border-[1px] hover:border-indigo_51 border-indigo_51 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between hover:my-[0] my-[0] p-[25px] sm:px-[20px] rounded-[4px] hover:shadow-bs5 shadow-bs5 w-[100%]">
                        <div className="flex flex-row gap-[20px] items-center justify-start ml-[7px] rounded-[4px] w-[auto]">
                          <div className="md:h-[28px] h-[30px] relative w-[13%]">
                            <Img
                              src="images/img_menu_28X24.svg"
                              className="absolute h-[28px] left-[0] top-[0] w-[86%]"
                              alt="menu"
                            />
                            <div className="absolute bottom-[0] flex h-[16px] items-center justify-start right-[0] w-[16px]">
                              <Button
                                className="flex h-[13px] items-center justify-center w-[13px]"
                                shape="icbRoundedBorder6"
                                size="smIcn"
                                variant="icbOutlineBluegray400"
                              >
                                <Img
                                  src="images/img_checkmark_13X13.svg"
                                  className="h-[9px]"
                                  alt="checkmark"
                                />
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[12px] items-start justify-start pr-[3px] py-[3px] w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Bước 3:
                            </Text>
                            <Text
                              className="font-bold text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Confirm Information
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_lock_24X24.svg"
                          className="h-[24px] mr-[7px] w-[24px]"
                          alt="lock One"
                        />
                      </div>
                      <div className="bg-white_A700 hover:border-[1px] border-[1px] hover:border-indigo_51 border-indigo_51 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between hover:my-[0] my-[0] p-[25px] sm:px-[20px] rounded-[4px] hover:shadow-bs5 shadow-bs5 w-[100%]">
                        <div className="flex flex-row gap-[20px] items-center justify-center ml-[7px] w-[auto]">
                          <Img
                            src="images/img_reply.svg"
                            className="h-[28px] w-[28px]"
                            alt="reply"
                          />
                          <div className="flex flex-col gap-[13px] items-start justify-start pr-[3px] pt-[3px] w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Bước 4:
                            </Text>
                            <Text
                              className="font-bold text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Signature
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_lock_24X24.svg"
                          className="h-[24px] mr-[7px] w-[24px]"
                          alt="lock Two"
                        />
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

export default EKYCIntroductionStepOnePage;
